import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("hvac");

export const metadata: Metadata = {
  title: "HVAC Service Documentation — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "HVAC Service Documentation — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/hvac",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/hvac",
  },
};

export default function HVACPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
