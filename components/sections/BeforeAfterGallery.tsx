import Image from "next/image";
import type { BeforeAfterPair } from "@/lib/industries";

interface BeforeAfterGalleryProps {
  title: string;
  pairs: BeforeAfterPair[];
  industryName: string;
}

function Pair({
  pair,
  industryName,
  large,
}: {
  pair: BeforeAfterPair;
  industryName: string;
  large: boolean;
}) {
  // A single pair carries the section on its own, so it gets the full container and a
  // larger srcset budget. In a grid each card is roughly a third as wide.
  const sizes = large
    ? "(max-width: 768px) 50vw, 450px"
    : "(max-width: 768px) 50vw, 190px";

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100">
        <span className="font-display font-bold text-sm uppercase tracking-wide text-black">
          {pair.label}
        </span>
      </div>

      <div className="grid grid-cols-2">
        <div className="relative aspect-[4/3]">
          <Image
            src={pair.before}
            alt={`${pair.alt} — before ${industryName.toLowerCase()} work`}
            fill
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
            alt={`${pair.alt} — after ${industryName.toLowerCase()} work`}
            fill
            sizes={sizes}
            className="object-cover"
          />
          <span className="absolute bottom-2 left-2 bg-orange text-white text-xs font-bold px-2 py-1 rounded">
            AFTER
          </span>
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterGallery({
  title,
  pairs,
  industryName,
}: BeforeAfterGalleryProps) {
  if (pairs.length === 0) return null;

  const single = pairs.length === 1;

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            The kind of transformation worth documenting.
          </p>
        </div>

        <div
          className={
            single
              ? "max-w-[820px] mx-auto"
              : "grid md:grid-cols-3 gap-6 lg:gap-8"
          }
        >
          {pairs.map((pair) => (
            <Pair
              key={pair.label}
              pair={pair}
              industryName={industryName}
              large={single}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
