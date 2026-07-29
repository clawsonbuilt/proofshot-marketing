import { IndustryPageTemplate } from "@/components/sections";
import { getIndustry } from "@/lib/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const industry = getIndustry("pool-service");

export const metadata: Metadata = {
  title: "Pool Cleaning Before & After — ProofShot Pro",
  description: industry?.metaDescription,
  openGraph: {
    images: ["/opengraph-image"],
    title: "Pool Cleaning Before & After — ProofShot Pro",
    description: industry?.metaDescription,
    url: "https://proofshotpro.com/industries/pool-service",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/industries/pool-service",
  },
};

export default function PoolServicePage() {
  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
