import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — ProofShot Pro",
  description:
    "Get in touch with the ProofShot Pro team about support, sales, or partnerships. We read every message and reply within one business day.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Contact Us — ProofShot Pro",
    description:
      "Get in touch with the ProofShot Pro team about support, sales, or partnerships. We read every message and reply within one business day.",
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
