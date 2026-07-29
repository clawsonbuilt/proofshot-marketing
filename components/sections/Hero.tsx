import Image from "next/image";
import Link from "next/link";
import { AppBadges } from "../AppBadges";
import { ProofPrint } from "../ProofPrint";
import { Button } from "../ui";

/**
 * Hero: figure and ground.
 *
 * The camera roll is not a card sitting next to the product — it is the ground the
 * product came out of. A dark field of near-identical job photos bleeds off the right
 * edge, and one finished, branded proof rests on it as a physical print: slightly
 * rotated, with a hard unblurred shadow rather than the soft blur every SaaS card uses.
 *
 * The seam between white and field is hard on purpose. It is the same seam the app
 * puts between a before and an after.
 *
 * Desktop runs the field as a full-bleed right column. Mobile stacks it beneath the
 * copy instead — as an overlay it swallowed the spec strip and the app badges.
 */

/**
 * The field: a real, unedited camera roll of pressure washing jobs.
 *
 * Previously a small crop tiled to fill, which repeated visibly. This is the whole
 * screenshot, so nothing repeats — and rendered through next/image rather than as a
 * CSS background, it ships as optimised AVIF instead of the 1MB source.
 */
function Field({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <Image
        src="/proof/camera-roll-field.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={55}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/66" />
    </div>
  );
}

function FieldMeta({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-white/60 ${className}`}
    >
      <span className="text-white">4,312 photos</span>
      <br />
      none of them labelled
    </p>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Desktop field. Starts below the nav so its transparent dark links stay legible. */}
      <Field className="pointer-events-none absolute right-0 top-20 bottom-0 hidden w-1/2 lg:block" />

      <FieldMeta className="pointer-events-none absolute bottom-12 right-10 z-10 hidden text-right lg:block" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid items-center gap-y-0 pt-28 lg:min-h-screen lg:grid-cols-2 lg:gap-x-10 lg:pt-24 lg:pb-24">
          {/* The claim. Centred on mobile, ranged left once the field appears beside it. */}
          <div className="pb-14 text-center lg:pb-0 lg:pr-10 lg:text-left">
            <h1 className="font-display font-black uppercase text-black text-[3.25rem] leading-[0.86] tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
              Share
              <br />
              the
              <br />
              <span className="text-orange">Proof.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-gray-600 lg:mx-0 lg:text-xl">
              Before and after documentation for contractors. Two photos in, one
              branded proof out, in about thirty seconds.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-7 lg:justify-start">
              {/* Full width on phones — a pill sized to its label reads as a stray
                  fragment on a narrow screen rather than as the primary action. */}
              <Button
                href="https://app.proofshotpro.com/signup"
                className="w-full sm:w-auto"
                showArrow
              >
                Claim My Free Account
              </Button>
              <Link
                href="#features"
                className="font-display font-bold text-gray-900 underline decoration-orange decoration-2 underline-offset-[6px] transition-colors hover:text-orange"
              >
                See how it works
              </Link>
            </div>

            {/* Spec strip. Monospace because this product's subject is documentation. */}
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500 lg:justify-start">
              {["AI captions", "Free to start", "30-second workflow"].map((spec, i) => (
                <li key={spec} className="flex items-center gap-5">
                  {/* Hidden until the row fits on one line — when it wraps, a leading
                      rule strands itself at the start of the next line. */}
                  {i > 0 && (
                    <span
                      className="hidden h-3 w-px bg-gray-300 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex items-center gap-2">
                    <span
                      className="h-1 w-1 rounded-full bg-green"
                      aria-hidden="true"
                    />
                    {spec}
                  </span>
                </li>
              ))}
            </ul>

            <AppBadges variant="outline" className="mt-8" />
          </div>

          {/* The one that made it out */}
          <div className="relative -mx-6 px-6 py-14 lg:mx-0 lg:px-0 lg:py-0">
            {/* Mobile field: a band the card sits on, rather than an overlay. */}
            <Field className="absolute inset-0 lg:hidden" />

            <ProofPrint
              before="/proof/job-before.jpg"
              after="/proof/job-after.jpg"
              alt="a driveway pressure washing job"
              serviceTitle="Pressure washing"
              fileName="Proof_driveway.jpg"
              priority
              className="mx-auto w-full max-w-[360px] lg:mx-0 lg:ml-auto lg:mr-0"
            />

            <FieldMeta className="relative mx-auto mt-10 max-w-[330px] lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
