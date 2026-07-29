import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { Lightbulb, Camera, DollarSign, Smartphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ProofShot Pro",
  description:
    "ProofShot Pro was founded by contractors Trey and Daniel in Tomball, TX to help service professionals document their work with branded before & after photos.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "About — ProofShot Pro",
    description:
      "ProofShot Pro was founded by contractors Trey and Daniel in Tomball, TX to help service professionals document their work with branded before & after photos.",
    url: "https://proofshotpro.com/about",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/about",
  },
};

const values = [
  {
    icon: Lightbulb,
    title: "Simple over complicated",
    description: "Your time is valuable. Every feature earns its place.",
  },
  {
    icon: Camera,
    title: "Photo-first",
    description: "The work comes first. Documentation should be instant.",
  },
  {
    icon: DollarSign,
    title: "Fair pricing",
    description:
      "Flat-rate teams. No per-seat gouging.",
  },
  {
    icon: Smartphone,
    title: "Built for the field",
    description: "Big buttons. One-handed operation. Works on any phone.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8 text-center">
            <p className="text-orange font-display font-bold uppercase tracking-wide mb-4">
              About ProofShot Pro
            </p>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
              Built for Contractors.
              <br />
              By a Contractor.
            </h1>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-8">
              The Story
            </h2>

            {/* Founders Photos */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/founders.jpg"
                  alt="Trey and Daniel, founders of ProofShot Pro"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/founders-truck.jpg"
                  alt="Trey and Daniel in the J Calvin Pressure Washing truck"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <Image
                  src="/founders-team.jpg"
                  alt="Trey and Daniel celebrating together"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Story */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                We&apos;re Trey and Daniel — founders of J Calvin Pressure Washing
                out of Tomball, TX. Since 2022 we&apos;ve been running crews, quoting
                jobs, and growing our business from the ground up.
              </p>
              <p>
                We lived the problem every day. Our crews would finish amazing work,
                but we had nothing to show for it. No photos. No proof. No content
                for social media. And when a customer questioned whether we actually
                did the work? Nothing but our word.
              </p>
              <p>
                Existing apps were either too complicated — designed for enterprise
                project management, not quick job documentation — or too basic, just
                a camera app with no branding or sharing.
              </p>
              <p>
                So we built what we needed: a simple app where our guys could take a
                before photo, do the job, take an after, and instantly turn those
                photos into a branded, professional image ready to share in 30 seconds.
              </p>
              <p className="font-medium text-gray-900">That&apos;s ProofShot Pro.</p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="font-display font-bold text-gray-900">— Trey &amp; Daniel</p>
              <p className="text-gray-500">Co-Founders</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-6">
              Our Mission
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 font-display font-medium leading-relaxed">
              Help every service professional document their work and get the
              credit they deserve.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-black uppercase tracking-tight mb-10 text-center">
              What We Believe
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[600px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Questions? Ideas? Just want to say hi?
            </p>
            <Button href="/contact" showArrow>
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
