import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { AppBadges } from "@/components/AppBadges";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const COMPARISONS = [
  {
    slug: "companycam",
    name: "CompanyCam",
    headline: "ProofShot Pro vs CompanyCam",
    summary:
      "CompanyCam is a well-built, full-team jobsite photo platform priced for companies with crews. If you are one truck and a helper, you are paying for coordination you do not need.",
    bestFor: "Solo operators and small crews who want proof, not project management.",
  },
  {
    slug: "jobber",
    name: "Jobber",
    headline: "ProofShot Pro vs Jobber",
    summary:
      "Jobber is field service management — scheduling, quoting, invoicing — with photos as one feature among many. ProofShot Pro does the photo part and nothing else.",
    bestFor:
      "Anyone who already has scheduling sorted and just wants documentation that looks professional.",
  },
];

export const metadata: Metadata = {
  title: "Compare ProofShot Pro — CompanyCam and Jobber Alternatives",
  description:
    "Honest side-by-side comparisons of ProofShot Pro against CompanyCam and Jobber, including where each competitor is the better choice.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Compare ProofShot Pro — CompanyCam and Jobber Alternatives",
    description:
      "Honest side-by-side comparisons of ProofShot Pro against CompanyCam and Jobber, including where each competitor is the better choice.",
    url: "https://proofshotpro.com/compare",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: { canonical: "https://proofshotpro.com/compare" },
};

export default function CompareHubPage() {
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
                  name: "Compare",
                  item: "https://proofshotpro.com/compare",
                },
              ],
            }),
          }}
        />

        <section className="pt-32 lg:pt-36 pb-12 lg:pb-16 bg-gradient-to-b from-orange-light/50 to-white">
          <div className="max-w-[840px] mx-auto px-6 lg:px-8 text-center">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-dark">
              Straight comparisons
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
              How we stack up
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Every tool below is good at something. These pages say what each one is
              actually best at, including the cases where it is not us.
            </p>
          </div>
        </section>

        <section className="pb-16 lg:pb-24">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            {COMPARISONS.map((c) => (
              <Link
                key={c.slug}
                href={`/compare/${c.slug}`}
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h2 className="font-display font-bold text-xl text-gray-900 group-hover:text-orange transition-colors mb-3">
                  {c.headline}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 flex-1">{c.summary}</p>
                <p className="text-sm text-gray-500 mb-5">
                  <span className="font-semibold text-gray-700">
                    ProofShot Pro is the better fit for:
                  </span>{" "}
                  {c.bestFor}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-dark group-hover:gap-2 transition-all">
                  Read the full comparison
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Try it against whatever you use now
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The free tier is permanent, not a trial. Document a job with it this week
              and compare the result yourself.
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
