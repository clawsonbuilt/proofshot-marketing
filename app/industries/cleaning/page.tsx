import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("cleaning");

export const metadata: Metadata = {
  title: "Professional Photos for Cleaning Services — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Professional Photos for Cleaning Services — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/cleaning",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/cleaning",
  },
};

export default function CleaningPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
