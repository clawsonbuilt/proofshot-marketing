import Image from "next/image";

interface ProofTemplateProps {
  before: string;
  after: string;
  /** Describes the job for screen readers, e.g. "a driveway pressure washing job". */
  alt: string;
  serviceTitle: string;
  websiteUrl: string;
  /** Company logo. The Bold template has a real logo slot, unlike Modern. */
  logoSrc?: string;
  priority?: boolean;
}

/**
 * A faithful reproduction of the app's Bold template.
 *
 * Ported from proofshot-pro/components/html-template-preview/templates/bold-template.tsx,
 * which renders at a native 960×960 with absolute pixel coordinates and diagonal
 * clip paths. Every value here is that coordinate over 960 — percentages for position
 * and size, cqw for type — so the layout is identical at any scale.
 *
 * The original clips with SVG clipPath at userSpaceOnUse, which is fixed to those pixel
 * coordinates. CSS polygon percentages give the same shape and scale with the box.
 *
 * Container-query note: cqw resolves against the nearest ANCESTOR container, so
 * @container sits on the wrapper and everything sized in cqw is a descendant.
 */

const N = 960;
const pct = (px: number) => `${(px / N) * 100}%`;
const cqw = (px: number) => `${(px / N) * 100}cqw`;

const INK = "#2F2F2F";

// Native coordinates from the source template.
const PHOTO_TOP = 162.18;
const PHOTO_H = 696;
const LABEL_TOP = 784.09;
const LABEL_H = 74.09;
const LABEL_CENTER_Y = 40.64;

// Diagonal seam. The before wedge runs 574.39 → 375.61; the after wedge 590.56 → 391.76.
const BEFORE_CLIP = `polygon(0% 0%, ${(574.39 / N) * 100}% 0%, ${
  (375.61 / N) * 100
}% 100%, 0% 100%)`;
const AFTER_CLIP = `polygon(${(590.56 / N) * 100}% 0%, 100% 0%, 100% 100%, ${
  (391.76 / N) * 100
}% 100%)`;

export function ProofTemplate({
  before,
  after,
  alt,
  serviceTitle,
  websiteUrl,
  logoSrc = "/logos/logo-orange-horizontal.svg",
  priority = false,
}: ProofTemplateProps) {
  const photoSizes = "(max-width: 1024px) 40vw, 220px";

  return (
    <div className="@container aspect-square overflow-hidden bg-white">
      <div className="relative h-full w-full font-sans" style={{ color: INK }}>
        {/* Company logo — 228×76 at (35, 41) */}
        <div
          style={{
            position: "absolute",
            top: pct(41),
            left: pct(35),
            width: pct(228),
            height: pct(76),
          }}
        >
          <Image
            src={logoSrc}
            alt="ProofShot Pro"
            fill
            sizes="240px"
            className="object-contain object-left"
          />
        </div>

        {/* Service title — 34px Black Italic, top right */}
        <div
          style={{
            position: "absolute",
            top: pct(58),
            right: pct(35),
            textAlign: "right",
            fontSize: cqw(34),
            fontWeight: 900,
            fontStyle: "italic",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}
        >
          {serviceTitle}
        </div>

        {/* Before photo — diagonal wedge */}
        <div
          style={{
            position: "absolute",
            top: pct(PHOTO_TOP),
            left: 0,
            width: "100%",
            height: pct(PHOTO_H),
            clipPath: BEFORE_CLIP,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: pct(574.39),
              height: "100%",
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
        </div>

        {/* After photo — diagonal wedge */}
        <div
          style={{
            position: "absolute",
            top: pct(PHOTO_TOP),
            left: 0,
            width: "100%",
            height: pct(PHOTO_H),
            clipPath: AFTER_CLIP,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: pct(391.76),
              width: pct(568.24),
              height: "100%",
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
        </div>

        {/* BEFORE label — diagonal black strip */}
        <div
          style={{
            position: "absolute",
            top: pct(LABEL_TOP),
            left: 0,
            width: pct(396.77),
            height: pct(LABEL_H),
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            clipPath: `polygon(0 0, 100% 0, ${
              (375.61 / 396.77) * 100
            }% 100%, 0 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: pct(LABEL_TOP + LABEL_CENTER_Y),
            left: 0,
            width: pct(349.76),
            transform: "translateY(-50%)",
            textAlign: "right",
            fontSize: cqw(34),
            fontWeight: 900,
            fontStyle: "italic",
            color: "white",
            lineHeight: 1,
          }}
        >
          BEFORE
        </div>

        {/* AFTER label — diagonal black strip */}
        <div
          style={{
            position: "absolute",
            top: pct(LABEL_TOP),
            left: pct(391.76),
            width: pct(N - 391.76),
            height: pct(LABEL_H),
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            clipPath: `polygon(${
              ((412.93 - 391.76) / (N - 391.76)) * 100
            }% 0, 100% 0, 100% 100%, 0 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: pct(LABEL_TOP + LABEL_CENTER_Y),
            left: pct(438.77),
            transform: "translateY(-50%)",
            fontSize: cqw(34),
            fontWeight: 900,
            fontStyle: "italic",
            color: "white",
            lineHeight: 1,
          }}
        >
          AFTER
        </div>

        {/* Footer — centred, "see more at" over the URL */}
        <div
          style={{
            position: "absolute",
            top: pct(890),
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: cqw(14),
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1,
            }}
          >
            see more at
          </span>
          <span
            style={{
              fontSize: cqw(24),
              fontWeight: 900,
              fontStyle: "italic",
              lineHeight: 1,
              marginTop: cqw(2),
            }}
          >
            {websiteUrl}
          </span>
        </div>
      </div>
    </div>
  );
}
