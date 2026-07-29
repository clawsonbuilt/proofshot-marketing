import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function formatBlogContent(content: string): string {
  let html = content
    // Remove leading h1 (shown in header)
    .replace(/^# .+$/m, "")
    .trim();

  // Process sections - split by h2
  const sections = html.split(/(?=## )/);

  html = sections.map((section, index) => {
    if (index === 0 && !section.startsWith("## ")) {
      // Intro paragraph
      return `<div class="blog-intro">${processInlineMarkdown(section)}</div>`;
    }

    // Extract heading
    const headingMatch = section.match(/^## (.+?)(?:\n|$)/);
    if (!headingMatch) return processInlineMarkdown(section);

    const heading = headingMatch[1];
    const body = section.replace(/^## .+?\n/, "").trim();

    // Check if heading has a number prefix (e.g., "1. Same Angle")
    const numberMatch = heading.match(/^(\d+)\.\s*(.+)$/);

    let headingHtml: string;
    if (numberMatch) {
      headingHtml = `
        <div class="blog-heading">
          <span class="blog-heading-number">${numberMatch[1]}</span>
          <h2>${numberMatch[2]}</h2>
        </div>
      `;
    } else {
      headingHtml = `<h2 class="blog-heading-plain">${heading}</h2>`;
    }

    return `
      <div class="blog-section">
        ${headingHtml}
        <div class="blog-section-content">
          ${processBody(body)}
        </div>
      </div>
    `;
  }).join("");

  return html;
}

function processBody(body: string): string {
  // Split into blocks
  const blocks = body.split(/\n\n+/);

  return blocks.map(block => {
    block = block.trim();
    if (!block) return "";

    // Check for h3
    if (block.startsWith("### ")) {
      const heading = block.replace("### ", "");
      return `<h3 class="blog-h3">${heading}</h3>`;
    }

    // Check for pro tip / callout
    if (block.match(/^\*\*Pro tip:?\*\*/i)) {
      const tipContent = block.replace(/^\*\*Pro tip:?\*\*\s*/i, "");
      return `
        <div class="blog-callout">
          <div class="blog-callout-icon">💡</div>
          <div class="blog-callout-content">
            <span class="blog-callout-label">Pro Tip</span>
            <p>${processInlineMarkdown(tipContent)}</p>
          </div>
        </div>
      `;
    }

    // Check for bold label intro (e.g., **Platforms that work best:**)
    if (block.match(/^\*\*[^*]+:\*\*/)) {
      const labelMatch = block.match(/^\*\*([^*]+):\*\*\s*([\s\S]*)/);
      if (labelMatch) {
        return `
          <div class="blog-labeled-section">
            <span class="blog-label">${labelMatch[1]}:</span>
            <span>${processInlineMarkdown(labelMatch[2])}</span>
          </div>
        `;
      }
    }

    // Check for list
    if (block.match(/^- /m)) {
      const items = block.split(/\n/).filter(line => line.startsWith("- "));
      const listItems = items.map(item => {
        const content = item.replace(/^- /, "");
        return `<li>${processInlineMarkdown(content)}</li>`;
      }).join("");
      return `<ul class="blog-list">${listItems}</ul>`;
    }

    // Check for numbered list
    if (block.match(/^\d+\.\s/m)) {
      const items = block.split(/\n/).filter(line => line.match(/^\d+\.\s/));
      const listItems = items.map(item => {
        const content = item.replace(/^\d+\.\s/, "");
        return `<li>${processInlineMarkdown(content)}</li>`;
      }).join("");
      return `<ol class="blog-list-numbered">${listItems}</ol>`;
    }

    // Regular paragraph
    return `<p>${processInlineMarkdown(block)}</p>`;
  }).join("");
}

function processInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="blog-link">$1</a>')
    .replace(/\n/g, " ");
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found — ProofShot Pro",
    };
  }

  return {
    title: `${post.title} — ProofShot Pro Blog`,
    description: post.excerpt,
    openGraph: {
      images: ["/opengraph-image"],
      title: `${post.title} — ProofShot Pro Blog`,
      description: post.excerpt,
      url: `https://proofshotpro.com/blog/${post.slug}`,
      siteName: "ProofShot Pro",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    alternates: {
      canonical: `https://proofshotpro.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Navigation />
      <main id="main">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.publishedAt,
              dateModified: post.publishedAt,
              author: {
                "@type": "Person",
                name: post.author.name,
              },
              publisher: {
                "@type": "Organization",
                name: "ProofShot Pro",
                url: "https://proofshotpro.com",
              },
              ...(post.image
                ? { image: `https://proofshotpro.com${post.image}` }
                : {}),
              mainEntityOfPage: `https://proofshotpro.com/blog/${post.slug}`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://proofshotpro.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://proofshotpro.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `https://proofshotpro.com/blog/${post.slug}`,
                },
              ],
            }),
          }}
        />
        {/* Breadcrumb */}
        <section className="pt-22 pb-6 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/blog" className="hover:text-orange transition-colors flex items-center gap-1">
                <ChevronLeft className="w-4 h-4" />
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-700">{post.category}</span>
            </nav>
          </div>
        </section>

        {/* Post Header */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <span className="text-orange-dark font-medium">{post.category}</span>
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-black tracking-tight mt-2 mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-light flex items-center justify-center">
                  <span className="text-orange-dark font-bold text-sm">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <span>
                  <span className="text-gray-900 font-medium">{post.author.name}</span>
                  <span className="text-gray-400"> · {post.author.role}</span>
                </span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-12">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="bg-gray-100 rounded-2xl aspect-video overflow-hidden">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={900}
                  height={506}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Featured Image</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="pb-16">
          <div className="max-w-[700px] mx-auto px-6 lg:px-8">
            <article className="blog-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: formatBlogContent(post.content),
                }}
              />
            </article>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-[700px] mx-auto px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-orange-light flex items-center justify-center flex-shrink-0">
                <span className="text-orange font-bold text-2xl">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-gray-900">{post.author.name}</p>
                <p className="text-gray-500 text-sm mb-2">{post.author.role}</p>
                <p className="text-gray-600">
                  Building ProofShot Pro to help contractors document their work and get the credit they deserve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 lg:py-20">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
              <h2 className="font-display font-bold text-xl text-gray-900 mb-8">Related Posts</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all group"
                  >
                    <div className="bg-gray-100 aspect-video overflow-hidden">
                      {relatedPost.image ? (
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-gray-400 text-sm">Image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-orange-dark text-sm font-medium">{relatedPost.category}</span>
                      <h3 className="font-display font-bold text-gray-900 mt-1 group-hover:text-orange transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[600px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Ready to Try ProofShot Pro?
            </h2>
            <p className="text-gray-600 mb-6">
              Start documenting your work professionally today.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
