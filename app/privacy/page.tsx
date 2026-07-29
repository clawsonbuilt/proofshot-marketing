import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ProofShot Pro",
  description:
    "Learn how ProofShot Pro collects, uses, and protects your personal information and data.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Privacy Policy — ProofShot Pro",
    description:
      "Learn how ProofShot Pro collects, uses, and protects your personal information and data.",
    url: "https://proofshotpro.com/privacy",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="pt-28 lg:pt-32 pb-12 lg:pb-16 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: February 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              {/* Introduction */}
              <p className="text-lg text-gray-600 mb-8">
                ProofShot Pro (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our application and website.
              </p>

              {/* Section 1 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                1. Information We Collect
              </h2>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Account Information:</strong> Name, email address, and password when you create an account.
                </li>
                <li>
                  <strong>Business Information:</strong> Company name, logo, and contact details you add to your profile.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing details processed securely through Stripe. We do not store your full credit card number.
                </li>
                <li>
                  <strong>Photos and Content:</strong> Before and after photos, project notes, and customer information you upload to the app.
                </li>
                <li>
                  <strong>Communications:</strong> Information you provide when contacting our support team.
                </li>
              </ul>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Device Information:</strong> Device type, operating system, and browser type.
                </li>
                <li>
                  <strong>Usage Data:</strong> Features used, pages visited, and actions taken within the app.
                </li>
                <li>
                  <strong>Log Data:</strong> IP address, access times, and referring URLs.
                </li>
                <li>
                  <strong>Location Data:</strong> General location based on IP address (not precise GPS location unless you enable it for photo geotagging).
                </li>
              </ul>

              {/* Section 2 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                <li>Personalize and improve your experience</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>

              {/* Section 3 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                3. How We Share Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share information in the following situations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processing, hosting, analytics).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law or in response to valid legal requests.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you direct us to share information with third parties.
                </li>
              </ul>

              {/* Section 4 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-600 mb-4">We use the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Stripe:</strong> For payment processing. See{" "}
                  <a href="https://stripe.com/privacy" className="text-orange hover:text-orange-hover" target="_blank" rel="noopener noreferrer">
                    Stripe&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Vercel:</strong> For hosting and infrastructure. See{" "}
                  <a href="https://vercel.com/legal/privacy-policy" className="text-orange hover:text-orange-hover" target="_blank" rel="noopener noreferrer">
                    Vercel&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>PostHog:</strong> For product analytics (cookieless, no personal data stored). See{" "}
                  <a href="https://posthog.com/privacy" className="text-orange hover:text-orange-hover" target="_blank" rel="noopener noreferrer">
                    PostHog&apos;s Privacy Policy
                  </a>.
                </li>
                <li>
                  <strong>Anthropic (Claude):</strong> For AI-powered caption generation. Photo descriptions are processed via the Claude API but not stored or used for model training. See{" "}
                  <a href="https://www.anthropic.com/privacy" className="text-orange hover:text-orange-hover" target="_blank" rel="noopener noreferrer">
                    Anthropic&apos;s Privacy Policy
                  </a>.
                </li>
              </ul>

              {/* Section 5 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-600 mb-4">
                We retain your information for as long as your account is active or as needed to provide you services. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Account Data:</strong> Retained until you delete your account.
                </li>
                <li>
                  <strong>Photos and Projects:</strong> Retained according to your plan limits. Deleted projects move to a &quot;Recently Deleted&quot; folder for 30 days where they can be restored. After 30 days they are removed from your account but retained in our database for an additional 60 days for recovery purposes, then permanently deleted.
                </li>
                <li>
                  <strong>Payment Records:</strong> Retained for 7 years for legal and tax compliance.
                </li>
                <li>
                  <strong>Usage Logs:</strong> Retained for 90 days for security and debugging purposes.
                </li>
              </ul>

              {/* Section 6 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Encryption of data in transit (TLS/SSL) and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure cloud infrastructure with industry-standard protections</li>
              </ul>
              <p className="text-gray-600 mb-6">
                However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
              </p>

              {/* Section 7 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements).
                </li>
                <li>
                  <strong>Export:</strong> Request your data in a portable format.
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                To exercise these rights, contact us at{" "}
                <a href="mailto:support@proofshotpro.com" className="text-orange hover:text-orange-hover">
                  support@proofshotpro.com
                </a>.
              </p>

              {/* Section 8 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                8. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-600 mb-6">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by businesses</li>
                <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>

              {/* Section 9 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                9. European Privacy Rights (GDPR)
              </h2>
              <p className="text-gray-600 mb-6">
                If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Right to access, rectify, or erase your personal data</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent at any time</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Our legal basis for processing personal information includes: performance of a contract, legitimate interests, and consent.
              </p>

              {/* Section 10 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 mb-6">
                Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 16, we will delete it promptly.
              </p>

              {/* Section 11 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. For significant changes, we will provide additional notice (such as email notification).
              </p>

              {/* Section 12 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-900 font-medium mb-2">ProofShot Pro</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a href="mailto:support@proofshotpro.com" className="text-orange hover:text-orange-hover">
                    support@proofshotpro.com
                  </a>
                </p>
                <p className="text-gray-600">
                  Website:{" "}
                  <a href="https://proofshotpro.com" className="text-orange hover:text-orange-hover">
                    proofshotpro.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
