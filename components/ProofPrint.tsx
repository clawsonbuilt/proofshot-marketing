import { ProofTemplate } from "./ProofTemplate";

interface ProofPrintProps {
  before: string;
  after: string;
  alt: string;
  serviceTitle: string;
  /** Monospace file name shown under the print. */
  fileName: string;
  websiteUrl?: string;
  priority?: boolean;
  className?: string;
}

/**
 * The app's Bold template presented as a physical print.
 *
 * White matte, square corners, a slight right tilt, and a hard unblurred shadow in
 * brand orange offset to the left, so the implied light stays consistent. Shared by
 * the homepage and the industry heroes — they had drifted into two different
 * treatments of the same idea.
 */
export function ProofPrint({
  before,
  after,
  alt,
  serviceTitle,
  fileName,
  websiteUrl = "proofshotpro.com",
  priority = false,
  className = "",
}: ProofPrintProps) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative rotate-[1.25deg] transition-transform duration-500 ease-out hover:rotate-0 motion-reduce:transition-none motion-reduce:hover:rotate-[1.25deg]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-3 translate-y-3 bg-orange"
        />
        <div className="relative bg-white p-2.5">
          <ProofTemplate
            before={before}
            after={after}
            alt={alt}
            serviceTitle={serviceTitle}
            websiteUrl={websiteUrl}
            priority={priority}
          />
          <figcaption className="flex items-baseline justify-between gap-3 px-1 pt-3 pb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
            <span>{fileName}</span>
            <span className="text-orange-dark">Ready to send</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
