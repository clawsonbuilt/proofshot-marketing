import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { BeforeAfterCard } from "./BeforeAfterCard";
import { Industry, getRelatedIndustries } from "@/lib/industries";
import {
  AlertTriangle,
  Check,
  Camera,
  FileText,
  Share2,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface IndustryPageProps {
  industry: Industry;
}

export function IndustryPageTemplate({ industry }: IndustryPageProps) {
  const relatedIndustries = getRelatedIndustries(industry.slug);
  // Painting, pool service, and owner-operator have no complete pair yet.
  const heroPair = industry.gallery?.[0];

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
                  name: industry.name,
                  item: `https://proofshotpro.com/industries/${industry.slug}`,
                },
              ],
            }),
          }}
        />

        {/* Hero Section — two columns when there's real photography, centred without */}
        <section className="pt-32 lg:pt-36 pb-16 lg:pb-20 bg-gradient-to-b from-orange-light/50 to-white">
          <div
            className={`mx-auto px-6 lg:px-8 ${
              heroPair ? "max-w-[1200px]" : "max-w-[1000px]"
            }`}
          >
            <div
              className={
                heroPair
                  ? "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                  : ""
              }
            >
              <div className={heroPair ? "text-center lg:text-left" : "text-center"}>
                <p className="text-orange font-display font-bold uppercase tracking-wide mb-4">
                  For {industry.name} Professionals
                </p>
                <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-tight mb-6">
                  {industry.headline}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  {industry.tagline}
                </p>
                <Button href="https://app.proofshotpro.com/signup" showArrow>
                  Claim My Free Account
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  No credit card required
                </p>
              </div>

              {heroPair && (
                <div className="max-w-[520px] w-full mx-auto lg:mx-0 lg:ml-auto">
                  <BeforeAfterCard
                    pair={heroPair}
                    industryName={industry.name}
                    priority
                  />
                  <p className="mt-3 text-center text-sm text-gray-500">
                    The kind of transformation worth documenting.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-4">
                The {industry.name} Challenge
              </h2>
              <p className="text-lg text-gray-600">
                Sound familiar? You&apos;re not alone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {industry.painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-black uppercase tracking-tight mb-6">
                  ProofShot Pro for {industry.name}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Document every job in 30 seconds. Add your before and after photos,
                  apply your branding automatically, and share professional results
                  with customers and on social media.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Create in seconds</strong> — add before photo, add after photo, done
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Your branding</strong> — company info on every template and report
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>Professional templates</strong> — a growing library of layouts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green" />
                    </div>
                    <span className="text-gray-700">
                      <strong>AI-powered captions</strong> — describe your work automatically
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="phone-notch" />
                    <div className="flex-1 bg-gray-900 overflow-hidden">
                      <Image
                        src={`/screenshots/industry-${industry.slug}.png`}
                        alt={`ProofShot Pro app showing a ${industry.name.toLowerCase()} project`}
                        width={280}
                        height={607}
                        sizes="(max-width: 1024px) 270px, 280px"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 11.5%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-4">
                Everything You Need for {industry.name}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built for the way {industry.name.toLowerCase()} professionals actually work. No complicated setup, no learning curve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.useCases.map((useCase, index) => {
                const icons = [Camera, FileText, Share2, Shield];
                const screenshots = [
                  "/screenshots/template-selection.png",
                  "/screenshots/pdf-preview.png",
                  "/screenshots/share-screen.png",
                  "/screenshots/project-overview.png",
                ];
                const Icon = icons[index % icons.length];

                return (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Screenshot */}
                    <div className="h-[220px] bg-gray-900 overflow-hidden">
                      <Image
                        src={screenshots[index % screenshots.length]}
                        alt={`ProofShot Pro app: ${useCase.title.toLowerCase()}`}
                        width={400}
                        height={220}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 280px"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 11.5%" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 pt-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-orange" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-gray-900">
                          {useCase.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-orange-light/30 to-orange-light/50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-6">
              Ready to Document Your {industry.name} Work?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join {industry.name.toLowerCase()} professionals who document smarter, not harder.
            </p>
            <Button href="https://app.proofshotpro.com/signup" showArrow>
              Claim My Free Account
            </Button>
            <p className="text-sm text-gray-500 mt-4">No credit card required</p>
          </div>
        </section>

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-16 lg:py-20 bg-gray-900">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-2">
                  Also Popular With
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {relatedIndustries.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/industries/${related.slug}`}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors"
                  >
                    {related.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
