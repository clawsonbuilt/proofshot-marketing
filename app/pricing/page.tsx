import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { AppBadges } from "@/components/AppBadges";
import { Check, Shield } from "lucide-react";
import type { Metadata } from "next";
import { PricingFAQ } from "./pricing-faq";

export const metadata: Metadata = {
  title: "Pricing — ProofShot Pro",
  description:
    "Start free, upgrade when ready. $29.99/mo for unlimited projects, 3 team members, AI captions. No hidden fees.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Pricing — ProofShot Pro",
    description:
      "Start free, upgrade when ready. $29.99/mo for unlimited projects, 3 team members, AI captions. No hidden fees.",
    url: "https://proofshotpro.com/pricing",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/pricing",
  },
};

// Pricing plans data
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for light users",
    features: [
      "5 projects per month",
      "10 stored projects",
      "1 user",
      "All templates",
      "PDF reports",
      "AI-powered captions",
      "ProofShot branding",
    ],
  },
  {
    name: "Pro Monthly",
    price: "$29.99",
    period: "/month",
    description: "For professionals who need more",
    features: [
      "Unlimited projects",
      "100 stored projects",
      "3 team members included",
      "Remove ProofShot branding",
      "Priority support",
    ],
  },
  {
    name: "Pro Annual",
    price: "$20.83",
    period: "/month",
    billedAs: "$249.99/year",
    description: "Same as Pro, save 30%",
    features: [
      "Everything in Pro",
      "30% savings vs monthly",
      "Rate locked for life",
      "Billed annually",
    ],
  },
];

// Add-ons data
const addons = [
  {
    name: "Additional team members",
    price: "$9.99",
    period: "user/month",
    description: "Add more users to your Pro plan",
  },
  {
    name: "Additional storage",
    price: "$1.99",
    period: "month",
    description: "Per 100 additional projects",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="pt-32 lg:pt-36 pb-16 lg:pb-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Start free. Upgrade when you need more.
              <br />
              No hidden fees. Cancel anytime.
            </p>
          </div>
        </section>

        {/* First-Month Promo Banner */}
        <section className="pb-8">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="bg-orange-light border border-orange/20 rounded-2xl p-6 text-center">
              <p className="text-lg font-display font-bold text-gray-900">
                <span className="text-2xl mr-2">🎉</span>
                NEW USER SPECIAL — First month of Pro just{" "}
                <span className="text-orange-dark">$9.99</span>{" "}
                <span className="text-gray-500 line-through">$29.99</span>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative bg-white rounded-2xl p-6 lg:p-8 flex flex-col border border-gray-200"
                >
                  {/* Plan Name */}
                  <h2 className="font-display font-bold text-xl text-gray-900 mb-2">
                    {plan.name}
                  </h2>

                  {/* Price */}
                  <div className="mb-1">
                    <span className="font-display font-black text-4xl lg:text-5xl text-black">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 text-lg">{plan.period}</span>
                    )}
                  </div>

                  {/* Billed As (for Annual) */}
                  {plan.billedAs && (
                    <p className="text-sm text-green-dark font-medium mb-2">
                      {plan.billedAs}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <Check className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Single CTA */}
            <div className="text-center mt-10">
              <Button href="https://app.proofshotpro.com/signup" showArrow>
                Claim My Free Account
              </Button>
              <p className="text-sm text-gray-500 mt-3">No credit card required</p>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-8 text-center">
              Need More?
            </h2>
            <div className="space-y-4">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="font-display font-bold text-gray-900">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-gray-600">{addon.description}</p>
                  </div>
                  <div className="text-right sm:text-left whitespace-nowrap">
                    <span className="font-display font-bold text-xl text-black">
                      {addon.price}
                    </span>
                    <span className="text-gray-500 text-sm">/{addon.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <PricingFAQ />

        {/* Money-Back Guarantee */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[600px] mx-auto px-6 lg:px-8">
            <div className="bg-green/5 border border-green/20 rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-green mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-gray-600">
                Not happy? Get a full refund within 30 days. No questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Start free. No credit card required.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
            <AppBadges align="center" className="mt-8" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
