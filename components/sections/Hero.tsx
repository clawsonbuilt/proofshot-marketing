import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AppBadges } from "../AppBadges";
import { Button } from "../ui";

/**
 * Hero: the problem on the left of the arrow, the product's output on the right.
 *
 * Both images are static and marked priority — the LCP element stays a plain
 * <Image> with no client JS, which is what got LCP down to ~2s in Phase 6.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-light/30 via-white to-white" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        {/*
          Explicit row/column placement so the visual sits between the headline and
          the CTAs on mobile — it is the pitch, and it was landing below the fold —
          while staying a single right-hand column on desktop.
        */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Headline block */}
          <div className="order-1 text-center lg:text-left lg:col-start-1 lg:row-start-1">
            <div className="inline-flex items-center gap-2 bg-orange-light text-orange-dark px-4 py-2 rounded-full text-sm font-medium mb-6 lg:mb-8">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              NEW — AI-powered captions
            </div>

            <h1 className="font-display font-black text-[2.75rem] md:text-6xl lg:text-[5rem] leading-[0.92] tracking-[-0.04em] text-black uppercase mb-5">
              Share
              <br />
              The
              <br />
              Proof.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Before &amp; after documentation for contractors who mean business.
              Combine, brand, share — in 30 seconds.
            </p>
          </div>

          {/* Conversion block — order-3 puts the visual above it on mobile */}
          <div className="order-3 text-center lg:text-left lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="https://app.proofshotpro.com/signup" showArrow>
                Claim My Free Account
              </Button>
              <Button href="#features" variant="secondary">
                See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green rounded-full" />
                AI-powered captions
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green rounded-full" />
                Free to start
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green rounded-full" />
                30-second workflow
              </span>
            </div>

            <AppBadges className="mt-8" />
          </div>

          {/* chaos → proof */}
          <div className="order-2 max-w-[520px] w-full mx-auto lg:mx-0 lg:ml-auto lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
            {/* Image band. The arrow centres on this row, not on the captions. */}
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/10 bg-black">
                <Image
                  src="/proof/camera-roll-hero.jpg"
                  alt="A phone camera roll filled with dozens of near-identical driveway job photos"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 240px, 240px"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
                <Image
                  src="/proof/composite.jpg"
                  alt="A finished before and after post carrying the contractor's own company branding, made with ProofShot Pro"
                  fill
                  priority
                  sizes="(max-width: 640px) 42vw, (max-width: 1024px) 240px, 240px"
                  className="object-cover"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white shadow-lg ring-4 ring-white">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </div>

            {/* Captions */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4 text-center">
              <p className="text-sm text-gray-500 leading-snug">
                <span className="block font-display font-bold text-gray-900">
                  4,000 photos
                </span>
                Which one was the before?
              </p>
              <p className="text-sm text-gray-500 leading-snug">
                <span className="block font-display font-bold text-gray-900">
                  30 seconds later
                </span>
                Branded, and ready to send.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
