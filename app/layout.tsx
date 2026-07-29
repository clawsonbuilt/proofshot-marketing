import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";
import { CONTACT_EMAIL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://proofshotpro.com"),
  title: "ProofShot Pro — Before & After Photo Documentation for Contractors",
  description:
    "Turn your before & after photos into professional branded images, generate PDF reports, and create marketing content in seconds. Free for contractors.",
  keywords: [
    "before after photos",
    "contractor documentation",
    "PDF reports",
    "job site photos",
    "pressure washing",
    "pest control",
    "landscaping",
    "HVAC",
    "contractor app",
    "proof of work",
  ],
  authors: [{ name: "ProofShot Pro" }],
  creator: "ProofShot Pro",
  publisher: "ProofShot Pro",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    images: ["/opengraph-image"],
    type: "website",
    locale: "en_US",
    url: "https://proofshotpro.com",
    siteName: "ProofShot Pro",
    title: "ProofShot Pro — Document Your Work. Get Paid Faster.",
    description:
      "Before & after photos, branded PDF reports, and marketing content — all from your phone in 30 seconds.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@proofshotpro",
    creator: "@proofshotpro",
    title: "ProofShot Pro — Document Your Work. Get Paid Faster.",
    description:
      "Before & after photos, branded PDF reports, and marketing content — all from your phone in 30 seconds.",
  },
  alternates: {
    canonical: "https://proofshotpro.com",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <link rel="preconnect" href="https://us.i.posthog.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "ProofShot Pro",
              description:
                "Before & after photo documentation app for contractors",
              applicationCategory: "BusinessApplication",
              operatingSystem: "iOS, Android, Web",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  name: "Free",
                  description: "5 projects per month",
                },
                {
                  "@type": "Offer",
                  price: "29.99",
                  priceCurrency: "USD",
                  name: "Pro Monthly",
                  description: "Unlimited projects, team features",
                },
                {
                  "@type": "Offer",
                  price: "249.99",
                  priceCurrency: "USD",
                  name: "Pro Annual",
                  description:
                    "Unlimited projects, team features, billed annually",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ProofShot Pro",
              url: "https://proofshotpro.com",
              logo: "https://proofshotpro.com/logos/logo-orange-horizontal.svg",
              description:
                "Before & after photo documentation app for contractors",
              email: CONTACT_EMAIL,
              founder: [
                { "@type": "Person", name: "Trey" },
                { "@type": "Person", name: "Daniel" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tomball",
                addressRegion: "TX",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <PostHogProvider>
          <PostHogPageView />
          {children}
        </PostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}
