import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { ValueProps } from "@/components/sections";
import { IndustryFAQ } from "@/components/sections/IndustryFAQ";
import { getIndustryFaqs } from "@/lib/industries";
import {
  DollarSign,
  TrendingUp,
  Clock,
  Smartphone,
  Star,
  Users,
  Zap,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Photo App for Owner Operators & Solo Contractors — ProofShot Pro",
  description:
    "Finally, a contractor photo app priced for owner operators. Free to start, just $29.99/mo for Pro. No per-seat pricing. Professional documentation without breaking the bank.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Best Photo App for Owner Operators & Solo Contractors — ProofShot Pro",
    description:
      "Finally, a contractor photo app priced for owner operators. Free to start, just $29.99/mo for Pro. No per-seat pricing.",
    url: "https://proofshotpro.com/industries/owner-operator",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/owner-operator",
  },
};

const painPoints = [
  {
    icon: DollarSign,
    title: "Other Apps Are Priced for Big Companies",
    description:
      "You've looked at CompanyCam, Jobber, ServiceTitan. CompanyCam starts at $79/month. Jobber with their Marketing Suite is $118/month. That's a truck payment, not a photo app.",
  },
  {
    icon: Clock,
    title: "You're Too Busy to Mess with Complicated Software",
    description:
      "You're quoting jobs, doing the work, handling billing, AND trying to grow your business. You don't have time to learn complex project management software just to take some photos.",
  },
  {
    icon: TrendingUp,
    title: "You Know You Should Be Documenting, But...",
    description:
      "You've seen other contractors killing it on social media with before/after content. You know documentation protects you from disputes. But who has time when you're doing everything yourself?",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Priced for Real Small Businesses",
    description:
      "Start free. Pro is just $29.99/month — less than the cost of one service call. No per-user pricing that punishes you for being small.",
    highlight: "$29.99/mo",
  },
  {
    icon: Zap,
    title: "30 Seconds, Not 30 Minutes",
    description:
      "Open app. Tap before. Do your job. Tap after. Done. Professional branded images ready to share. No project setup, no folders, no complexity.",
    highlight: "30 seconds",
  },
  {
    icon: Smartphone,
    title: "Works on the Phone You Already Have",
    description:
      "No special equipment needed. ProofShot Pro is a web app that works on any smartphone. Install it from your browser in seconds.",
    highlight: "Any phone",
  },
  {
    icon: TrendingUp,
    title: "Turn Your Work Into Growth",
    description:
      "Every job becomes marketing content. AI writes your social captions. Build a portfolio that wins more jobs. Grow without spending on ads.",
    highlight: "Free marketing",
  },
];

const roi = [
  {
    scenario: "One dispute avoided",
    value: "$500+",
    description: "Timestamped photos protect you when customers question your work",
  },
  {
    scenario: "One new customer from social",
    value: "$350+",
    description: "Before/after posts attract new customers without ad spend",
  },
  {
    scenario: "Faster invoice payment",
    value: "Priceless",
    description: "Customers pay faster when they see the transformation documented",
  },
];

const comparisonData = [
  { app: "ProofShot Pro", price: "Free / $29.99", forOne: "$0-30", note: "Flat rate, 3 users included in Pro" },
  { app: "CompanyCam", price: "$79-99/mo", forOne: "$79+", note: "Base price includes 3 users minimum" },
  { app: "Jobber + Marketing", price: "$39 + $79/mo", forOne: "$118", note: "Core plan + Marketing Suite add-on" },
  { app: "ServiceTitan + Marketing", price: "$250-500/user", forOne: "$250+", note: "Plus $5K-50K setup, 12-mo contract" },
];

const industries = [
  { name: "Pressure Washing", href: "/industries/pressure-washing" },
  { name: "Pest Control", href: "/industries/pest-control" },
  { name: "Landscaping", href: "/industries/landscaping" },
  { name: "Cleaning", href: "/industries/cleaning" },
  { name: "Painting", href: "/industries/painting" },
  { name: "HVAC", href: "/industries/hvac" },
];

export default function OwnerOperatorPage() {
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
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Owner Operators",
                  item: "https://proofshotpro.com/industries/owner-operator",
                },
              ],
            }),
          }}
        />
        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24">
          {/* Background gradient - extends behind nav */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-light/50 to-white" />
          <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-orange text-white px-4 py-2 rounded-full text-sm font-bold uppercase mb-6">
                  <Users className="w-4 h-4" />
                  For Solo & Small Operators
                </div>
                <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
                  Professional Documentation
                  <br />
                  <span className="text-orange">Without the Enterprise Price</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-4">
                  Finally, a photo documentation app that&apos;s actually priced for owner operators and small crews.
                </p>
                <p className="text-lg text-gray-500 mb-8">
                  Free to start. Pro for just <span className="text-orange font-bold">$29.99/month</span>. No per-seat nonsense.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="https://app.proofshotpro.com/signup" showArrow>
                    Claim My Free Account
                  </Button>
                  <Button href="/pricing" variant="outline">
                    See Pricing
                  </Button>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="phone-notch" />
                    <div className="flex-1 bg-gray-900 overflow-hidden">
                      <Image
                        src="/screenshots/project-overview.png"
                        alt="ProofShot Pro app showing a completed project"
                        width={280}
                        height={607}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                We Get It. You&apos;re Not a Big Company.
              </h2>
              <p className="text-lg text-gray-600">
                And you shouldn&apos;t have to pay like one.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {painPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution / Benefits */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                Built Different. Priced Different.
              </h2>
              <p className="text-lg text-gray-600">
                ProofShot Pro was built by an owner operator, for owner operators.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-orange/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-display font-bold text-lg text-gray-900">
                            {benefit.title}
                          </h3>
                          <span className="px-2 py-0.5 bg-green/10 text-green-dark text-xs font-bold rounded">
                            {benefit.highlight}
                          </span>
                        </div>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                Compare the Cost
              </h2>
              <p className="text-lg text-gray-600">
                See how ProofShot Pro stacks up for solo operators.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200 text-sm">
                <div className="p-4 font-display font-bold text-gray-500 uppercase">App</div>
                <div className="p-4 font-display font-bold text-gray-500 uppercase">Price</div>
                <div className="p-4 font-display font-bold text-gray-500 uppercase">For 1 User</div>
                <div className="p-4 font-display font-bold text-gray-500 uppercase hidden sm:block">Notes</div>
              </div>

              {/* Table Body */}
              {comparisonData.map((row, index) => (
                <div
                  key={row.app}
                  className={`grid grid-cols-4 text-sm ${
                    index === 0 ? "bg-orange/5" : ""
                  } ${index !== comparisonData.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="p-4 font-medium text-gray-900 flex items-center gap-2">
                    {index === 0 && <Star className="w-4 h-4 text-orange fill-orange" />}
                    {row.app}
                  </div>
                  <div className="p-4 text-gray-700">{row.price}</div>
                  <div className={`p-4 font-bold ${index === 0 ? "text-orange" : "text-gray-700"}`}>
                    {row.forOne}
                  </div>
                  <div className="p-4 text-gray-500 hidden sm:block">{row.note}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              * Prices as of January 2026. Check each provider for current pricing.
            </p>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 lg:py-20 bg-gray-900 text-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-orange mb-4">
                <Calculator className="w-5 h-5" />
                <span className="font-display font-bold uppercase tracking-wide">The Math</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight mb-4">
                $29.99/Month Pays for Itself
              </h2>
              <p className="text-lg text-gray-300">
                Here&apos;s how documentation creates real value for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {roi.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <p className="font-display font-black text-4xl text-orange mb-2">
                    {item.value}
                  </p>
                  <p className="font-display font-bold text-white mb-2">{item.scenario}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-300 mb-6">
                One avoided dispute or one new customer pays for a <em>year</em> of ProofShot Pro.
              </p>
              <Button href="https://app.proofshotpro.com/signup" showArrow>
                Claim My Free Account
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Placeholder — hidden until real testimonials are available
        <section className="py-16 lg:py-20">
          <div className="max-w-[700px] mx-auto px-6 lg:px-8 text-center">
            <div className="bg-orange-light/50 rounded-2xl p-8 lg:p-12">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
                &quot;I was spending $19/month on CompanyCam just for myself. ProofShot does exactly what I need for before/afters at a fraction of the cost. The AI captions are a game-changer for my social media.&quot;
              </p>
              <p className="text-gray-500 text-sm">
                — Coming soon: Real testimonials from owner operators
              </p>
            </div>
          </div>
        </section>
        */}

        {/* Everything You Need */}
        <ValueProps />

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              You Don&apos;t Need Enterprise Software
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              You need something simple that works. And doesn&apos;t cost a fortune.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Start free. Upgrade when you&apos;re ready. No credit card required.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
          </div>
        </section>

        {/* Related Industries */}
        <section className="py-12 lg:py-16 bg-gray-900">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <p className="text-center text-gray-400 mb-6">
              ProofShot Pro works great for owner operators in:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-colors"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <IndustryFAQ
          faqs={getIndustryFaqs("owner-operator")}
          industryName="Owner Operator"
        />
      </main>
      <Footer />
    </>
  );
}
