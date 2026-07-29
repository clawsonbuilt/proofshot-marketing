import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("painting");

export const metadata: Metadata = {
  title: "Paint Job Documentation Made Easy — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Paint Job Documentation Made Easy — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/painting",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/painting",
  },
};

export default function PaintingPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
