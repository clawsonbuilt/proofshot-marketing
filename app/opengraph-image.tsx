import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Default social share card, inherited by every route that doesn't define its own.
 *
 * Next generates both `og:image` and `twitter:image` from this file, and prerenders
 * it at build time since the route is static. Photos are inlined as data URIs because
 * Satori cannot resolve relative paths.
 */

export const alt =
  "ProofShot Pro — before and after roof washing, documented and branded in 30 seconds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function photo(name: string): string {
  const data = readFileSync(join(process.cwd(), "public", "og", name));
  return `data:image/jpeg;base64,${data.toString("base64")}`;
}

export default function Image() {
  const before = photo("roof-before.jpg");
  const after = photo("roof-after.jpg");

  const label: React.CSSProperties = {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "white",
    fontSize: 26,
    fontWeight: 700,
    letterSpacing: 1,
    padding: "8px 20px",
    borderRadius: 8,
  };

  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
        {/* Before / after split */}
        <div style={{ display: "flex", width: 1200, height: 500 }}>
          <div style={{ display: "flex", position: "relative", width: 600, height: 500 }}>
            <img src={before} width={600} height={500} alt="" />
            <div style={{ ...label, background: "rgba(10,10,10,0.78)" }}>BEFORE</div>
          </div>
          <div style={{ display: "flex", position: "relative", width: 600, height: 500 }}>
            <img src={after} width={600} height={500} alt="" />
            <div style={{ ...label, background: "#E97A35" }}>AFTER</div>
          </div>
        </div>

        {/* Brand bar */}
        <div
          style={{
            display: "flex",
            width: 1200,
            height: 130,
            background: "#0A0A0A",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "white", fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
              Share the proof.
            </div>
            <div style={{ color: "#9CA3AF", fontSize: 22, marginTop: 4 }}>
              Before &amp; after documentation for contractors
            </div>
          </div>
          <div style={{ color: "#E97A35", fontSize: 26, fontWeight: 700 }}>
            proofshotpro.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
