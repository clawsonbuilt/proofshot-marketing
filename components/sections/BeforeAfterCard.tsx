import Image from "next/image";
import type { BeforeAfterPair } from "@/lib/industries";

interface BeforeAfterCardProps {
  pair: BeforeAfterPair;
  industryName: string;
  /** Hero placement is above the fold and should not lazy-load. */
  priority?: boolean;
}

/**
 * A single before/after comparison card.
 *
 * Lives on its own because the industry hero is the only place it appears — one real
 * pair per industry means a multi-card gallery would just repeat the same photos
 * further down the same page.
 */
export function BeforeAfterCard({
  pair,
  industryName,
  priority = false,
}: BeforeAfterCardProps) {
  const sizes = "(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 260px";
  const trade = industryName.toLowerCase();

  return (
    <figure className="bg-white rounded-2xl shadow-lg ring-1 ring-black/10 overflow-hidden">
      <figcaption className="px-4 py-3 border-b border-gray-100">
        <span className="font-display font-bold text-sm uppercase tracking-wide text-black">
          {pair.label}
        </span>
      </figcaption>

      <div className="grid grid-cols-2">
        <div className="relative aspect-[4/3]">
          <Image
            src={pair.before}
            alt={`${pair.alt} — before ${trade} work`}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
            BEFORE
          </span>
        </div>

        <div className="relative aspect-[4/3]">
          <Image
            src={pair.after}
            alt={`${pair.alt} — after ${trade} work`}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-orange text-white text-xs font-bold px-2 py-1 rounded">
            AFTER
          </span>
        </div>
      </div>
    </figure>
  );
}
