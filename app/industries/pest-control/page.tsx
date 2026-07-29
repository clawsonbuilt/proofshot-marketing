import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("pest-control");

export const metadata: Metadata = {
  title: "Pest Control Photo Documentation — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Pest Control Photo Documentation — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/pest-control",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/pest-control",
  },
};

export default function PestControlPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
