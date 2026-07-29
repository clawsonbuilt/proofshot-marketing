import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { Check, X, DollarSign, Zap, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProofShot Pro vs CompanyCam (2026 Comparison)",
  description:
    "Compare ProofShot Pro and CompanyCam. See pricing, features, and which is best for your business.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "ProofShot Pro vs CompanyCam (2026 Comparison)",
    description:
      "Compare ProofShot Pro and CompanyCam. See pricing, features, and which is best for your business.",
    url: "https://proofshotpro.com/compare/companycam",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/compare/companycam",
  },
};

const comparisonData = [
  { feature: "Starting Price", proofshot: "Free", companycam: "$79/mo" },
  { feature: "Pricing Model", proofshot: "Flat rate (3 users included)", companycam: "$79+ base, +$29/user" },
  { feature: "5-user team cost", proofshot: "$49.97/mo", companycam: "$137/mo" },
  { feature: "Before/After Focus", proofshot: true, companycam: "Add-on feature" },
  { feature: "Branded Comparisons", proofshot: true, companycam: "Limited" },
  { feature: "AI Captions", proofshot: true, companycam: false },
  { feature: "PDF Reports", proofshot: true, companycam: true },
  { feature: "Project Management", proofshot: "Basic", companycam: "Full-featured" },
  { feature: "Best For", proofshot: "Quick documentation, marketing", companycam: "Full project management" },
];

const keyDifferences = [
  {
    icon: DollarSign,
    title: "Flat-rate team pricing",
    description:
      "CompanyCam starts at $79/month and charges $29/user beyond the first 3. ProofShot Pro includes 3 users for $29.99 total.",
    points: [
      "Solo operator on CompanyCam: $79/month minimum",
      "Solo operator on ProofShot: $0-29.99/month",
      "5-person team on CompanyCam: $137/month",
      "5-person team on ProofShot: $49.97/month",
    ],
  },
  {
    icon: Target,
    title: "Built for before/afters",
    description:
      "CompanyCam is a general photo documentation tool. ProofShot is laser-focused on before/after comparisons with automatic branded compositions, templates, and AI-generated marketing content.",
    points: [],
  },
  {
    icon: Zap,
    title: "Simpler workflow",
    description:
      "ProofShot: Open app → tap before → do job → tap after → share. Done in 30 seconds. No project setup, no folder organization, no complexity.",
    points: [],
  },
];

export default function CompanyCamComparisonPage() {
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "ProofShot Pro vs CompanyCam",
                  item: "https://proofshotpro.com/compare/companycam",
                },
              ],
            }),
          }}
        />
        {/* Hero Section */}
        <section className="pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
              ProofShot Pro vs CompanyCam
            </h1>
            <p className="text-xl text-gray-600">
              See how we compare.
            </p>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <div className="bg-orange-light border border-orange/20 rounded-2xl p-6 lg:p-8">
              <h2 className="font-display font-bold text-lg text-gray-900 mb-3">
                Quick Verdict
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ProofShot Pro is built specifically for before/after documentation with flat-rate
                team pricing. CompanyCam is a broader project management tool with per-seat pricing.
                For quick job documentation and marketing content, ProofShot is faster and more affordable.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-8 text-center">
              Feature Comparison
            </h2>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="p-4 lg:p-6">
                  <span className="font-display font-bold text-gray-500 text-sm uppercase">
                    Feature
                  </span>
                </div>
                <div className="p-4 lg:p-6 text-center bg-orange/5">
                  <span className="font-display font-bold text-orange">ProofShot Pro</span>
                </div>
                <div className="p-4 lg:p-6 text-center">
                  <span className="font-display font-bold text-gray-700">CompanyCam</span>
                </div>
              </div>

              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 ${
                    index !== comparisonData.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="p-4 lg:p-6 flex items-center">
                    <span className="text-gray-700 text-sm lg:text-base">{row.feature}</span>
                  </div>
                  <div className="p-4 lg:p-6 flex items-center justify-center bg-orange/5">
                    {typeof row.proofshot === "boolean" ? (
                      row.proofshot ? (
                        <Check className="w-5 h-5 text-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-gray-900 font-medium text-sm lg:text-base text-center">
                        {row.proofshot}
                      </span>
                    )}
                  </div>
                  <div className="p-4 lg:p-6 flex items-center justify-center">
                    {typeof row.companycam === "boolean" ? (
                      row.companycam ? (
                        <Check className="w-5 h-5 text-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-gray-600 text-sm lg:text-base text-center">
                        {row.companycam}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Differences */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-10 text-center">
              Key Differences
            </h2>

            <div className="space-y-8">
              {keyDifferences.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                          {diff.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{diff.description}</p>
                        {diff.points.length > 0 && (
                          <ul className="space-y-2">
                            {diff.points.map((point, i) => (
                              <li key={i} className="flex items-center gap-2 text-gray-700">
                                <Check className="w-4 h-4 text-green flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who Should Use What */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-10 text-center">
              Which One Is Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* ProofShot Pro */}
              <div className="bg-white border-2 border-orange rounded-2xl p-6 lg:p-8">
                <h3 className="font-display font-bold text-xl text-orange mb-4">
                  Choose ProofShot Pro if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    You primarily need before/after documentation
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    You want marketing-ready content automatically
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    You have a small team and want flat-rate pricing
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    You value simplicity over features
                  </li>
                </ul>
              </div>

              {/* CompanyCam */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
                <h3 className="font-display font-bold text-xl text-gray-700 mb-4">
                  Choose CompanyCam if:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    You need full project management features
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    You have complex documentation workflows
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    You need integrations with other business software
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    Before/afters are secondary to general photo organization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              See for Yourself
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Try ProofShot Pro free and decide which works best for your business.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
            <p className="text-sm text-gray-500 mt-4">No credit card required</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
