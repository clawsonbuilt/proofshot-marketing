import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("landscaping");

export const metadata: Metadata = {
  title: "Showcase Your Landscaping Transformations — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Showcase Your Landscaping Transformations — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/landscaping",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/landscaping",
  },
};

export default function LandscapingPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
