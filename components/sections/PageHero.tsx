import type { ReactNode } from "react";

interface PageHeroProps {
  /** Monospace kicker. Same documentation register as the rest of the site. */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Small monospace note under the content, e.g. "No credit card required". */
  note?: string;
  /** CTAs or anything else that belongs below the subtitle. */
  children?: ReactNode;
  align?: "center" | "left";
}

/**
 * The shared hero for pages without a photograph to lead with.
 *
 * The homepage and the industry pages open with a proof image; everything else opens
 * with type. This keeps that type consistent — monospace eyebrow, Inter Tight Black
 * at a single scale, and one spacing rhythm — so the pages read as one site rather
 * than as a stack of separately built templates.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  note,
  children,
  align = "center",
}: PageHeroProps) {
  const centred = align === "center";

  return (
    <section className="relative bg-white pt-32 pb-14 lg:pt-40 lg:pb-20">
      <div
        className={`mx-auto max-w-[900px] px-6 lg:px-8 ${
          centred ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-orange-dark">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display font-black uppercase tracking-[-0.04em] text-black text-[2.75rem] leading-[0.9] md:text-5xl lg:text-[3.75rem]">
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-6 text-lg text-gray-600 lg:text-xl ${
              centred ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        )}

        {children && <div className="mt-9">{children}</div>}

        {note && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-gray-500">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
