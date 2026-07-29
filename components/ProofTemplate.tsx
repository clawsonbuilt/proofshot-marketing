import Image from "next/image";

interface ProofTemplateProps {
  before: string;
  after: string;
  /** Alt copy describing the job, e.g. "roof washing in Spring, Texas". */
  alt: string;
  /** Service line under the logo. */
  service: string;
  priority?: boolean;
}

/**
 * A live recreation of the app's Modern template, branded as ProofShot Pro.
 *
 * Built in markup rather than exported as a flat image so the logo stays the real SVG,
 * the type renders sharp at any density, and it scales with its container. Sizing is
 * in container-query units, so one component works at hero size and at thumbnail size
 * without a second set of values.
 *
 * Background is #F3F2EE, sampled from the app's actual template output.
 */
export function ProofTemplate({
  before,
  after,
  alt,
  service,
  priority = false,
}: ProofTemplateProps) {
  const sizes = "(max-width: 1024px) 40vw, 200px";

  return (
    // @container must sit on a wrapper. cqw on the container element itself resolves
    // against the nearest ANCESTOR container — the viewport here — not against itself.
    <div className="@container aspect-square bg-[#F3F2EE]">
      <div className="flex h-full flex-col px-[6cqw] py-[5.5cqw]">
      <header className="flex justify-end">
        <div className="text-right">
          <Image
            src="/logos/logo-orange-horizontal.svg"
            alt="ProofShot Pro"
            width={434}
            height={82}
            className="ml-auto h-auto w-[32cqw]"
          />
          <p className="mt-[1.6cqw] font-mono text-[2.2cqw] uppercase tracking-[0.14em] text-gray-500">
            {service}
          </p>
        </div>
      </header>

      {/*
        Photos on one diagonal, the words on the other — the template's own
        arrangement. The photos flex to absorb whatever height is left, so the layout
        stays tight without the paddings and type sizes having to add up exactly.
      */}
      <div className="mt-[3.5cqw] grid flex-1 grid-cols-2 items-stretch gap-[3.5cqw]">
        <div className="flex h-full flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2cqw]">
            <Image
              src={before}
              alt={`Before ${alt}`}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          </div>
          <span className="mt-[2.5cqw] font-display text-[15cqw] font-black lowercase leading-[0.78] tracking-[-0.05em] text-black">
            before
          </span>
        </div>

        <div className="flex h-full flex-col">
          <span className="font-display text-[15cqw] font-black lowercase leading-[0.78] tracking-[-0.05em] text-black">
            after
          </span>
          <div className="relative mt-[2.5cqw] min-h-0 flex-1 overflow-hidden rounded-[2cqw]">
            <Image
              src={after}
              alt={`After ${alt}`}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
          </div>
        </div>
      </div>

        <footer className="mt-[3cqw] font-mono text-[2.1cqw] uppercase tracking-[0.12em] text-gray-600">
          See more at proofshotpro.com
        </footer>
      </div>
    </div>
  );
}
