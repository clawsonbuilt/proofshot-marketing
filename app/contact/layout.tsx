import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ProofShot Pro",
  description:
    "Contact the ProofShot Pro team. Email hello@proofshotpro.com or use our contact form for support, sales, or partnership inquiries.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Contact Us — ProofShot Pro",
    description:
      "Contact the ProofShot Pro team. Email hello@proofshotpro.com or use our contact form for support, sales, or partnership inquiries.",
    url: "https://proofshotpro.com/contact",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
