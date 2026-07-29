import Image from "next/image";

interface ProofTemplateProps {
  before: string;
  after: string;
  /** Describes the job for screen readers, e.g. "a roof washing job". */
  alt: string;
  companyName: string;
  serviceTitle: string;
  websiteUrl: string;
  priority?: boolean;
}

/**
 * A faithful reproduction of the app's Modern template.
 *
 * Ported from proofshot-pro/components/html-template-preview/templates/modern-template.tsx,
 * which renders at a native 960×960 with absolute pixel coordinates. Every value here is
 * that same coordinate divided by 960, so the layout is identical at any size:
 * percentages for position and size, cqw for type and radii.
 *
 * Container-query note: cqw resolves against the nearest ANCESTOR container, so the
 * @container class sits on the wrapper and everything sized in cqw is a descendant.
 * Putting both on one element silently measures the viewport instead.
 */

/** Native template coordinate space. */
const N = 960;
const pct = (px: number) => `${(px / N) * 100}%`;
const cqw = (px: number) => `${(px / N) * 100}cqw`;

const INK = "#2F2F2F";
const POPPINS = "Poppins, Inter, system-ui, sans-serif";

export function ProofTemplate({
  before,
  after,
  alt,
  companyName,
  serviceTitle,
  websiteUrl,
  priority = false,
}: ProofTemplateProps) {
  const photoSizes = "(max-width: 1024px) 40vw, 200px";

  return (
    <div className="@container aspect-square overflow-hidden bg-[#F3F2EF]">
      <div
        className="relative h-full w-full"
        style={{ fontFamily: POPPINS, color: INK }}
      >
        {/* Company name — 29px Black, right-aligned at y=97 */}
        <div
          style={{
            position: "absolute",
            top: pct(97),
            right: pct(86),
            textAlign: "right",
            fontSize: cqw(29),
            fontWeight: 900,
            letterSpacing: cqw(-0.86),
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          {companyName}
        </div>

        {/* Service title — 24px Light at y=128 */}
        <div
          style={{
            position: "absolute",
            top: pct(128),
            right: pct(86),
            textAlign: "right",
            fontSize: cqw(24),
            fontWeight: 300,
            letterSpacing: cqw(-0.72),
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          {serviceTitle}
        </div>

        {/* Before photo — 366×366 at (97, 191) */}
        <div
          style={{
            position: "absolute",
            top: pct(191),
            left: pct(97),
            width: pct(366),
            height: pct(366),
            borderRadius: cqw(17),
            overflow: "hidden",
          }}
        >
          <Image
            src={before}
            alt={`Before ${alt}`}
            fill
            priority={priority}
            sizes={photoSizes}
            className="object-cover"
          />
        </div>

        {/* "before" — 109px SemiBold at (91, 569) */}
        <div
          style={{
            position: "absolute",
            top: pct(569),
            left: pct(91),
            fontSize: cqw(109),
            fontWeight: 600,
            letterSpacing: cqw(-7.64),
            lineHeight: 1,
          }}
        >
          before
        </div>

        {/* After photo — 366×366 at (504, 432) */}
        <div
          style={{
            position: "absolute",
            top: pct(432),
            left: pct(504),
            width: pct(366),
            height: pct(366),
            borderRadius: cqw(17),
            overflow: "hidden",
          }}
        >
          <Image
            src={after}
            alt={`After ${alt}`}
            fill
            priority={priority}
            sizes={photoSizes}
            className="object-cover"
          />
        </div>

        {/* "after" — 145px Bold at (546, 287) */}
        <div
          style={{
            position: "absolute",
            top: pct(287),
            left: pct(546),
            fontSize: cqw(145),
            fontWeight: 700,
            letterSpacing: cqw(-10.16),
            lineHeight: 1,
          }}
        >
          after
        </div>

        {/* "SEE MORE AT <url>" — 24px, Light then Black, at (97, 835) */}
        <div
          style={{
            position: "absolute",
            top: pct(835),
            left: pct(97),
            display: "flex",
            alignItems: "baseline",
            gap: cqw(7),
            fontSize: cqw(24),
            letterSpacing: cqw(-0.72),
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          <span style={{ fontWeight: 300 }}>See more at</span>
          <span style={{ fontWeight: 900 }}>{websiteUrl}</span>
        </div>
      </div>
    </div>
  );
}
