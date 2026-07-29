import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("home-remodeling");

export const metadata: Metadata = {
  title: "Before & After Photos for Home Remodeling — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Before & After Photos for Home Remodeling — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/home-remodeling",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/home-remodeling",
  },
};

export default function HomeRemodelingPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
