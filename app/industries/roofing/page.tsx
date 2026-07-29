import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("roofing");

export const metadata: Metadata = {
  title: "Roof Repair & Replacement Documentation — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Roof Repair & Replacement Documentation — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/roofing",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/roofing",
  },
};

export default function RoofingPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
