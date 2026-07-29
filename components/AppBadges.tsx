import { Smartphone } from "lucide-react";

/**
 * Pre-launch app store badges.
 *
 * Deliberately NOT Apple's or Google's badge artwork. Apple's marketing guidelines
 * scope the "Download on the App Store" badge to apps already available, offer a
 * separate pre-order badge that requires pre-orders to be live in App Store Connect,
 * and prohibit adding custom text such as "Coming Soon" to their artwork. Referring
 * to "the App Store" and "Google Play" in plain text is permitted.
 *
 * These match the official badges' proportions — 52px tall against a 40px minimum,
 * small top line over a large platform name — so replacing them with real artwork
 * once the apps ship is an asset swap, not a layout change.
 */

interface AppBadgesProps {
  /**
   * "light" inverts for dark backgrounds such as the footer. "outline" is the quiet
   * treatment — solid black blocks anchored too much weight in the homepage hero.
   */
  variant?: "dark" | "light" | "outline";
  className?: string;
  align?: "start" | "center";
}

const PLATFORMS = [
  { name: "App Store", article: "the ", aria: "Apple App Store" },
  { name: "Google Play", article: "", aria: "Google Play Store" },
];

export function AppBadges({
  variant = "dark",
  className = "",
  align = "start",
}: AppBadgesProps) {
  const shell =
    variant === "dark"
      ? "bg-black text-white ring-1 ring-black/10"
      : variant === "outline"
      ? "bg-white text-black ring-1 ring-black/20"
      : "bg-white/10 text-white ring-1 ring-white/25";

  const topLine =
    variant === "dark"
      ? "text-white/70"
      : variant === "outline"
      ? "text-gray-500"
      : "text-white/60";

  return (
    <div
      className={`flex flex-wrap gap-3 ${
        align === "center" ? "justify-center" : "justify-center sm:justify-start"
      } ${className}`}
    >
      {PLATFORMS.map((p) => (
        <div
          key={p.name}
          // Not a link: there is nothing to link to yet, and a dead link is worse
          // than an honest label.
          className={`inline-flex items-center gap-3 rounded-xl px-4 h-[52px] ${shell}`}
        >
          <Smartphone className="w-6 h-6 shrink-0" aria-hidden="true" />
          <span className="flex flex-col leading-none text-left">
            <span
              className={`text-[10px] uppercase tracking-[0.12em] ${topLine} mb-1`}
            >
              Coming soon to {p.article}
            </span>
            <span className="font-display font-bold text-base">{p.name}</span>
          </span>
          <span className="sr-only">
            — the ProofShot Pro app for {p.aria} has not launched yet
          </span>
        </div>
      ))}
    </div>
  );
}
