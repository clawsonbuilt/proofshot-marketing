import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("pressure-washing");

export const metadata: Metadata = {
  title: "Before & After Photos for Pressure Washing — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Before & After Photos for Pressure Washing — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/pressure-washing",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/pressure-washing",
  },
};

export default function PressureWashingPage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
