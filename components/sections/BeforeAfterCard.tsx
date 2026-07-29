import Image from "next/image";
import type { BeforeAfterPair } from "@/lib/industries";

interface BeforeAfterCardProps {
  pair: BeforeAfterPair;
  industryName: string;
  /** Hero placement is above the fold and should not lazy-load. */
  priority?: boolean;
}

/**
 * One before/after comparison, treated as a physical print.
 *
 * Square corners, a white matte, and a hard unblurred offset shadow — the same
 * language as the homepage hero. The two photos butt together with no gutter, which
 * is the seam the app itself puts between a before and an after.
 */
export function BeforeAfterCard({
  pair,
  industryName,
  priority = false,
}: BeforeAfterCardProps) {
  const sizes = "(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 240px";
  const trade = industryName.toLowerCase();

  return (
    <figure className="relative rotate-[-1.25deg] transition-transform duration-500 ease-out hover:rotate-0 motion-reduce:transition-none motion-reduce:hover:rotate-[-1.25deg]">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 bg-orange"
      />

      <div className="relative bg-white p-2.5">
        <div className="grid grid-cols-2">
          <div className="relative aspect-[4/5]">
            <Image
              src={pair.before}
              alt={`${pair.alt} — before ${trade} work`}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-black/75 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
              Before
            </span>
          </div>

          <div className="relative aspect-[4/5]">
            <Image
              src={pair.after}
              alt={`${pair.alt} — after ${trade} work`}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-orange px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
              After
            </span>
          </div>
        </div>

        <figcaption className="flex items-baseline justify-between gap-3 px-1 pt-3 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
          <span>{pair.label}</span>
          <span className="text-orange-dark">Documented</span>
        </figcaption>
      </div>
    </figure>
  );
}
