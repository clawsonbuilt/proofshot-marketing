import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { Check, X, DollarSign, Camera, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProofShot Pro vs Jobber (2026 Comparison)",
  description:
    "Compare ProofShot Pro and Jobber. See pricing, features, and which is best for photo documentation.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "ProofShot Pro vs Jobber (2026 Comparison)",
    description:
      "Compare ProofShot Pro and Jobber. See pricing, features, and which is best for photo documentation.",
    url: "https://proofshotpro.com/compare/jobber",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/compare/jobber",
  },
};

const comparisonData = [
  { feature: "Starting Price", proofshot: "Free", jobber: "$39/mo (Core)" },
  { feature: "Primary Purpose", proofshot: "Photo documentation", jobber: "Business management" },
  { feature: "Before/After Photos", proofshot: "Core feature", jobber: "Basic attachment" },
  { feature: "Branded Templates", proofshot: true, jobber: false },
  { feature: "AI Captions", proofshot: true, jobber: false },
  { feature: "PDF Photo Reports", proofshot: true, jobber: "Limited" },
  { feature: "Scheduling", proofshot: false, jobber: true },
  { feature: "Invoicing", proofshot: false, jobber: true },
  { feature: "CRM", proofshot: false, jobber: true },
  { feature: "Best For", proofshot: "Photo documentation + marketing", jobber: "Full business management" },
];

const keyDifferences = [
  {
    icon: Camera,
    title: "Photo-first vs business-first",
    description:
      "Jobber is a comprehensive field service management platform with basic photo attachments. ProofShot Pro is built entirely around creating professional before/after documentation and marketing content.",
    points: [],
  },
  {
    icon: DollarSign,
    title: "Different price points for different needs",
    description:
      "Jobber starts at $39/month for their basic Core plan and goes up to $199/month for Grow. ProofShot Pro is free to start, with Pro at $29.99/month.",
    points: [
      "Jobber Core: $39/month (basic features, 1 user)",
      "Jobber Connect: $119/month (most popular, 1 user)",
      "Jobber Grow: $199/month (advanced features, 1 user)",
      "ProofShot Pro: $29.99/month (unlimited projects, 3 users)",
    ],
  },
  {
    icon: Zap,
    title: "Complement, don't compete",
    description:
      "Many contractors use Jobber for scheduling and invoicing, and ProofShot Pro for photo documentation. They solve different problems and work great together.",
    points: [],
  },
];

export default function JobberComparisonPage() {
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
                  name: "ProofShot Pro vs Jobber",
                  item: "https://proofshotpro.com/compare/jobber",
                },
              ],
            }),
          }}
        />
        {/* Hero Section */}
        <section className="pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
              ProofShot Pro vs Jobber
            </h1>
            <p className="text-xl text-gray-600">
              Different tools for different jobs.
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
                Jobber is a full-featured field service management platform for scheduling, invoicing,
                and running your business. ProofShot Pro is a specialized tool for creating professional
                before/after photo documentation and marketing content. Many contractors use both —
                Jobber for operations, ProofShot for documentation.
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
                  <span className="font-display font-bold text-gray-700">Jobber</span>
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
                    {typeof row.jobber === "boolean" ? (
                      row.jobber ? (
                        <Check className="w-5 h-5 text-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-gray-600 text-sm lg:text-base text-center">
                        {row.jobber}
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
                              <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
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
              Which One Do You Need?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* ProofShot Pro */}
              <div className="bg-white border-2 border-orange rounded-2xl p-6 lg:p-8">
                <h3 className="font-display font-bold text-xl text-orange mb-4">
                  Choose ProofShot Pro for:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    Professional before/after photo documentation
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    Branded images for social media marketing
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    AI-generated captions and hashtags
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    PDF reports to send to customers
                  </li>
                </ul>
              </div>

              {/* Jobber */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
                <h3 className="font-display font-bold text-xl text-gray-700 mb-4">
                  Choose Jobber for:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    Scheduling and dispatching
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    Invoicing and payments
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    Customer relationship management (CRM)
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    Full business operations management
                  </li>
                </ul>
              </div>
            </div>

            {/* Use Both */}
            <div className="mt-8 bg-gray-900 rounded-2xl p-6 lg:p-8 text-center">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Why Not Both?
              </h3>
              <p className="text-gray-300">
                Many contractors use Jobber for scheduling and invoicing, and ProofShot Pro
                for photo documentation. They solve different problems and complement each other perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Try ProofShot Pro Free
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Add professional photo documentation to your workflow.
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
