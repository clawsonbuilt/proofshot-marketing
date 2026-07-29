import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { AppBadges } from "@/components/AppBadges";
import { getAllIndustries } from "@/lib/industries";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries — Before & After Documentation by Trade | ProofShot Pro",
  description:
    "See how ProofShot Pro works for roofing, pressure washing, HVAC, landscaping, cleaning, pest control and more. One tap before, one tap after, branded proof in 30 seconds.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Industries — Before & After Documentation by Trade | ProofShot Pro",
    description:
      "See how ProofShot Pro works for roofing, pressure washing, HVAC, landscaping, cleaning, pest control and more.",
    url: "https://proofshotpro.com/industries",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: { canonical: "https://proofshotpro.com/industries" },
};

export default function IndustriesHubPage() {
  const industries = getAllIndustries();

  return (
    <>
      <Navigation />
      <main id="main">
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
                  name: "Industries",
                  item: "https://proofshotpro.com/industries",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Industries served by ProofShot Pro",
              url: "https://proofshotpro.com/industries",
              hasPart: industries.map((i) => ({
                "@type": "WebPage",
                name: `ProofShot Pro for ${i.name}`,
                url: `https://proofshotpro.com/industries/${i.slug}`,
                description: i.metaDescription,
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="pt-32 lg:pt-36 pb-12 lg:pb-16 bg-gradient-to-b from-orange-light/50 to-white">
          <div className="max-w-[840px] mx-auto px-6 lg:px-8 text-center">
            <p className="text-orange-dark font-display font-bold uppercase tracking-wide mb-4">
              Every trade that leaves a difference behind
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
              Built for the work you do
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              The job is the same everywhere: prove what you did, get paid, and turn it
              into the next lead. Pick your trade to see how it works.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-16 lg:pb-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => {
                const pair = industry.gallery?.[0];
                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {pair ? (
                      <div className="grid grid-cols-2">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={pair.before}
                            alt={`${pair.alt} — before ${industry.name.toLowerCase()} work`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 190px"
                            className="object-cover"
                          />
                        </div>
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={pair.after}
                            alt={`${pair.alt} — after ${industry.name.toLowerCase()} work`}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 190px"
                            className="object-cover"
                          />
                          <span className="absolute bottom-2 left-2 bg-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            AFTER
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[8/3] bg-gradient-to-br from-orange-light to-white" />
                    )}

                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="font-display font-bold text-lg text-gray-900 group-hover:text-orange transition-colors">
                        {industry.name}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
                        {industry.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-dark group-hover:gap-2 transition-all">
                        See how it works
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Don&apos;t see your trade?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If your work looks different when you leave than when you arrived,
              ProofShot Pro fits. Start free and find out.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
            <p className="text-sm text-gray-500 mt-4">No credit card required</p>
            <AppBadges align="center" className="mt-8" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
