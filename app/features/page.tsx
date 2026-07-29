import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui";
import { AppBadges } from "@/components/AppBadges";
import {
  Camera,
  Layout,
  Palette,
  FileText,
  Sparkles,
  Users,
  Share2,
  Check,
  X,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — ProofShot Pro",
  description:
    "Before/after photos, branded PDF reports, AI captions, team access. See everything ProofShot Pro offers for contractors.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Features — ProofShot Pro",
    description:
      "Before/after photos, branded PDF reports, AI captions, team access. See everything ProofShot Pro offers for contractors.",
    url: "https://proofshotpro.com/features",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/features",
  },
};

// Feature data
const features = [
  {
    icon: Camera,
    title: "Before & After Photos",
    headline: "DOCUMENT THE TRANSFORMATION",
    description:
      "Turn your photos into professional before and after comparisons. Add your images, choose a template, and you're done. Never lose track of your work again.",
    points: [
      "Tap to add before & after photos",
      "Portrait or landscape orientation",
      "Swap photos with one tap",
      "Auto-organize by project",
    ],
    screenshot: "/screenshots/capture-screen.png",
  },
  {
    icon: Layout,
    title: "Professional Templates",
    headline: "STUNNING LAYOUTS",
    description:
      "Choose from four professionally designed templates that make your work look incredible. Each template automatically adds before/after labels so customers know exactly what they're looking at.",
    points: [
      "A growing library of professional styles",
      "Automatic before/after labels",
      "Consistent professional look",
      "One-tap template switching",
    ],
    screenshot: "/screenshots/template-selection.png",
  },
  {
    icon: Palette,
    title: "Your Branding, Built In",
    headline: "YOUR BRAND ON EVERY PROJECT",
    description:
      "Your company name and details appear on every template and report. Upload your logo to feature it on PDF reports and select templates. Professional branding, zero effort.",
    points: [
      "Company name on every output",
      "Logo on PDF reports and select templates",
      "Business details on all reports",
      "Consistent, professional look",
    ],
    screenshot: "/screenshots/project-overview.png",
  },
  {
    icon: FileText,
    title: "PDF Reports",
    headline: "REPORTS THAT WIN CUSTOMERS",
    description:
      "Generate professional PDF reports with one tap. Your branding, job details, customer information, and even a QR code to your review page. Send via email or text instantly.",
    points: [
      "One-tap PDF generation",
      "Your logo and branding",
      "Customer and job details",
      "QR code to your reviews",
    ],
    screenshot: "/screenshots/pdf-preview.png",
  },
  {
    icon: Sparkles,
    title: "AI Captions",
    headline: "AI WRITES YOUR MARKETING",
    description:
      "Let AI write engaging social media captions for your work. Automatically generates descriptions and industry-specific hashtags optimized for each platform.",
    points: [
      "Auto-generated descriptions",
      "Industry-specific hashtags",
      "Platform-optimized content",
      "Edit and customize as needed",
    ],
    screenshot: "/screenshots/social-share.png",
  },
  {
    icon: Users,
    title: "Team Access",
    headline: "BRING YOUR WHOLE CREW",
    badge: "Pro",
    description:
      "Pro plans include 3 team members with flat-rate pricing. Add more at just $9.99/user/month. No per-seat gouging like other apps.",
    points: [
      "3 users included in Pro",
      "Flat-rate team pricing",
      "Add more at $9.99/user/month",
    ],
    screenshot: null,
  },
  {
    icon: Share2,
    title: "Sharing Options",
    headline: "SHARE ANYWHERE, INSTANTLY",
    description:
      "Email PDF reports, text images to customers, post to social media, or generate shareable links. Every sharing option you need, all in one place.",
    points: [
      "Email with PDF attachment",
      "Text message sharing",
      "Direct social media posting",
      "Shareable project links",
    ],
    screenshot: "/screenshots/share-screen.png",
  },
];

// Comparison data
const comparisonFeatures = [
  { name: "Projects per month", free: "5", pro: "Unlimited" },
  { name: "Stored projects", free: "10", pro: "100" },
  { name: "Team members", free: "1", pro: "3 included" },
  { name: "Before/after photos", free: true, pro: true },
  { name: "All templates", free: true, pro: true },
  { name: "PDF reports", free: true, pro: true },
  { name: "AI captions", free: true, pro: true },
  { name: "Remove branding", free: false, pro: true },
  { name: "Priority support", free: false, pro: true },
];

export default function FeaturesPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        <PageHero
          eyebrow="What it does"
          title="Everything you need to document a job"
          subtitle="Built for contractors, not adapted from something built for someone else."
          note="Free to start · No credit card required"
        />

        {/* Feature Deep-Dives */}
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isReversed = index % 2 === 1;

          return (
            <section
              key={feature.title}
              className={`py-16 lg:py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div className={isReversed ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-light flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange" />
                      </div>
                      {feature.badge && (
                        <span className="px-2 py-1 bg-orange text-white text-xs font-bold uppercase rounded">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                      {feature.headline}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-green flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Screenshot/Illustration */}
                  <div className={`${isReversed ? "lg:col-start-1" : ""} flex justify-center ${isReversed ? "lg:justify-start" : "lg:justify-end"}`}>
                    {feature.screenshot ? (
                      <div className={`phone-mockup ${isReversed ? "phone-mockup-flipped" : ""}`}>
                        <div className="phone-screen">
                          <div className="phone-notch" />
                          <div className="flex-1 bg-gray-900 overflow-hidden">
                            <Image
                              src={feature.screenshot}
                              alt={`${feature.title} screenshot`}
                              width={280}
                              height={607}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-orange-light to-orange/10 rounded-3xl p-12 flex items-center justify-center aspect-square max-w-[400px] mx-auto">
                        <Icon className="w-32 h-32 text-orange/30" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Comparison Table */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-black uppercase tracking-tight mb-4 text-center">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              See what&apos;s included in each plan.
            </p>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                <div className="p-4 lg:p-6">
                  <span className="font-display font-bold text-gray-500 text-sm uppercase">
                    Feature
                  </span>
                </div>
                <div className="p-4 lg:p-6 text-center">
                  <span className="font-display font-bold text-gray-900">Free</span>
                  <p className="text-sm text-gray-500">$0/month</p>
                </div>
                <div className="p-4 lg:p-6 text-center bg-orange/5">
                  <span className="font-display font-bold text-orange">Pro</span>
                  <p className="text-sm text-gray-500">$29.99/month</p>
                </div>
              </div>

              {/* Table Body */}
              {comparisonFeatures.map((row, index) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-3 ${
                    index !== comparisonFeatures.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="p-4 lg:p-6 flex items-center">
                    <span className="text-gray-700">{row.name}</span>
                  </div>
                  <div className="p-4 lg:p-6 flex items-center justify-center">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <Check className="w-5 h-5 text-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-gray-700 font-medium">{row.free}</span>
                    )}
                  </div>
                  <div className="p-4 lg:p-6 flex items-center justify-center bg-orange/5">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <Check className="w-5 h-5 text-green" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300" />
                      )
                    ) : (
                      <span className="text-gray-900 font-medium">{row.pro}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-10">
              <Button href="https://app.proofshotpro.com/signup" showArrow>
                Claim My Free Account
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Ready to Document Smarter?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join contractors who combine, brand, and share in 30 seconds.
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
