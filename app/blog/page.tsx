import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { getAllBlogPosts, getFeaturedPost } from "@/lib/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — ProofShot Pro",
  description:
    "Tips, guides, and insights for service professionals. Learn how to document your work, grow your business, and win more customers.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Blog — ProofShot Pro",
    description:
      "Tips, guides, and insights for service professionals. Learn how to document your work, grow your business, and win more customers.",
    url: "https://proofshotpro.com/blog",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = getFeaturedPost();
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Tips, guides, and insights for service professionals.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="pb-12 lg:pb-16">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="block bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="grid md:grid-cols-2">
                  {/* Featured Image */}
                  <div className="bg-gray-800 aspect-video md:aspect-auto overflow-hidden">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">Featured Image</span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange text-white text-xs font-bold uppercase rounded">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.category}</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-3 group-hover:text-orange transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-2">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Post Grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-8">Latest Posts</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all group"
                >
                  {/* Post Image */}
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Post Image</span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <span className="text-orange-dark text-sm font-medium">{post.category}</span>
                    <h3 className="font-display font-bold text-lg text-gray-900 mt-2 mb-2 group-hover:text-orange transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.readTime}</span>
                      <span className="flex items-center gap-1 text-orange group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[600px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">
              Ready to Document Smarter?
            </h2>
            <p className="text-gray-600 mb-6">
              Put these tips into practice with ProofShot Pro.
            </p>
            <Button href="https://app.proofshotpro.com/signup" size="small" showArrow>
              Claim My Free Account
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
