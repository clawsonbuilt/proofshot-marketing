import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ProofShot Pro",
  description:
    "Read the terms and conditions for using ProofShot Pro services.",
  openGraph: {
    images: ["/opengraph-image"],
    title: "Terms of Service — ProofShot Pro",
    description:
      "Read the terms and conditions for using ProofShot Pro services.",
    url: "https://proofshotpro.com/terms",
    siteName: "ProofShot Pro",
    type: "website",
  },
  alternates: {
    canonical: "https://proofshotpro.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="pt-28 lg:pt-32 pb-12 lg:pb-16 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: January 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-[800px] mx-auto px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              {/* Introduction */}
              <p className="text-lg text-gray-600 mb-8">
                Welcome to ProofShot Pro. These Terms of Service (&quot;Terms&quot;) govern your use of our
                application and website (collectively, the &quot;Service&quot;). By accessing or using the Service,
                you agree to be bound by these Terms.
              </p>

              {/* Section 1 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-6">
                By creating an account or using ProofShot Pro, you agree to these Terms of Service and our
                Privacy Policy. If you do not agree to these Terms, do not use the Service. We may modify
                these Terms at any time, and your continued use of the Service constitutes acceptance of
                any changes.
              </p>

              {/* Section 2 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-600 mb-6">
                ProofShot Pro is a photo documentation application designed for service industry professionals.
                The Service allows users to combine before and after photos into branded comparisons,
                generate PDF reports, and share content with customers and on social media.
              </p>

              {/* Section 3 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                3. Account Registration
              </h2>
              <p className="text-gray-600 mb-4">To use the Service, you must:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Be at least 16 years of age</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your information if it changes</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-gray-600 mb-6">
                You are responsible for maintaining the confidentiality of your password and for any activities
                that occur under your account. Notify us immediately of any unauthorized use.
              </p>

              {/* Section 4 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                4. Subscription Plans and Payment
              </h2>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Free Plan
              </h3>
              <p className="text-gray-600 mb-4">
                The free plan includes limited features as described on our pricing page. ProofShot branding
                will appear on outputs created under the free plan.
              </p>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Paid Plans
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Pro Monthly:</strong> $29.99 per month, billed monthly.
                </li>
                <li>
                  <strong>Pro Annual:</strong> $249.99 per year, billed annually (30% savings).
                </li>
              </ul>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>All prices are in US dollars unless otherwise stated</li>
                <li>Payments are processed securely through Stripe</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                <li>You authorize us to charge your payment method for recurring fees</li>
                <li>Prices may change with 30 days notice (existing subscriptions honored at current rate)</li>
              </ul>

              {/* Section 5 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                5. Cancellation and Refunds
              </h2>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Cancellation
              </h3>
              <p className="text-gray-600 mb-4">
                You may cancel your subscription at any time through your account settings. Upon cancellation:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Your subscription remains active until the end of the current billing period</li>
                <li>No partial refunds are provided for unused time</li>
                <li>Your account reverts to the free plan after the billing period ends</li>
                <li>Your data is retained according to our data retention policy</li>
              </ul>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Refund Policy
              </h3>
              <p className="text-gray-600 mb-6">
                We offer a <strong>30-day money-back guarantee</strong> on all paid plans. If you are not
                satisfied with the Service within 30 days of your initial purchase, contact us for a full
                refund. Refunds after 30 days are provided at our discretion.
              </p>

              {/* Section 6 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                6. Acceptable Use
              </h2>
              <p className="text-gray-600 mb-4">You agree NOT to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Upload illegal, harmful, or offensive content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Distribute malware or other harmful code</li>
                <li>Attempt to gain unauthorized access to the Service or other systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Misrepresent your identity or affiliation</li>
                <li>Use the Service for spam or unsolicited communications</li>
                <li>Scrape, harvest, or collect data without authorization</li>
                <li>Resell or redistribute the Service without permission</li>
              </ul>
              <p className="text-gray-600 mb-6">
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>

              {/* Section 7 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                7. Your Content
              </h2>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Ownership
              </h3>
              <p className="text-gray-600 mb-6">
                You retain ownership of all photos, images, and content you upload to the Service
                (&quot;Your Content&quot;). We do not claim ownership of Your Content.
              </p>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                License to Us
              </h3>
              <p className="text-gray-600 mb-6">
                By uploading content, you grant us a limited license to store, process, and display Your Content
                as necessary to provide the Service. This license terminates when you delete Your Content or
                close your account.
              </p>

              <h3 className="font-display font-semibold text-lg text-gray-900 mt-6 mb-3">
                Your Responsibilities
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>You are responsible for obtaining necessary permissions to photograph properties and people</li>
                <li>You must have rights to any logos or branding you upload</li>
                <li>You are responsible for complying with privacy laws regarding customer information</li>
              </ul>

              {/* Section 8 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-gray-600 mb-6">
                The Service, including its design, features, code, and documentation, is owned by ProofShot Pro
                and protected by copyright, trademark, and other intellectual property laws. You may not copy,
                modify, distribute, or reverse engineer any part of the Service without our written permission.
              </p>
              <p className="text-gray-600 mb-6">
                &quot;ProofShot Pro&quot; and our logo are trademarks. You may not use our trademarks without permission,
                except as necessary to describe your use of the Service.
              </p>

              {/* Section 9 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                9. Third-Party Services
              </h2>
              <p className="text-gray-600 mb-6">
                The Service may integrate with or link to third-party services (e.g., social media platforms,
                payment processors). Your use of these services is subject to their own terms and privacy
                policies. We are not responsible for third-party services.
              </p>

              {/* Section 10 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                10. Disclaimer of Warranties
              </h2>
              <p className="text-gray-600 mb-6">
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>

              {/* Section 11 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROOFSHOT PRO SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
                WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
                LOSSES RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>Your use or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers or your data</li>
                <li>Any interruption or cessation of the Service</li>
                <li>Any bugs, viruses, or other harmful code transmitted through the Service</li>
                <li>Any content or conduct of third parties on the Service</li>
              </ul>
              <p className="text-gray-600 mb-6">
                IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS
                PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.
              </p>

              {/* Section 12 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                12. Indemnification
              </h2>
              <p className="text-gray-600 mb-6">
                You agree to indemnify and hold harmless ProofShot Pro and its officers, directors, employees,
                and agents from any claims, damages, losses, liabilities, and expenses (including legal fees)
                arising from your use of the Service, your violation of these Terms, or your violation of any
                rights of another party.
              </p>

              {/* Section 13 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                13. Dispute Resolution
              </h2>
              <p className="text-gray-600 mb-6">
                Any disputes arising from these Terms or your use of the Service shall be resolved through
                binding arbitration in accordance with the rules of the American Arbitration Association.
                The arbitration shall take place in the United States, and the decision shall be final and
                binding. You waive any right to participate in a class action lawsuit.
              </p>
              <p className="text-gray-600 mb-6">
                Notwithstanding the above, either party may seek injunctive relief in any court of competent
                jurisdiction to protect intellectual property rights.
              </p>

              {/* Section 14 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                14. Governing Law
              </h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the State of
                Texas, United States, without regard to its conflict of law provisions.
              </p>

              {/* Section 15 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                15. Changes to Terms
              </h2>
              <p className="text-gray-600 mb-6">
                We may update these Terms from time to time. We will notify you of material changes by posting
                the updated Terms on our website and updating the &quot;Last updated&quot; date. For significant changes,
                we may provide additional notice. Your continued use of the Service after changes take effect
                constitutes acceptance of the revised Terms.
              </p>

              {/* Section 16 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                16. Termination
              </h2>
              <p className="text-gray-600 mb-6">
                We may suspend or terminate your access to the Service at any time, with or without cause,
                with or without notice. Upon termination, your right to use the Service ceases immediately.
                Provisions that by their nature should survive termination shall survive (including ownership,
                disclaimers, indemnification, and limitations of liability).
              </p>

              {/* Section 17 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                17. General Provisions
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                <li>
                  <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you
                  and ProofShot Pro regarding the Service.
                </li>
                <li>
                  <strong>Severability:</strong> If any provision is found unenforceable, the remaining
                  provisions remain in effect.
                </li>
                <li>
                  <strong>Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right.
                </li>
                <li>
                  <strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign
                  our rights and obligations without restriction.
                </li>
              </ul>

              {/* Section 18 */}
              <h2 className="font-display font-bold text-xl text-gray-900 mt-10 mb-4">
                18. Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-gray-900 font-medium mb-2">ProofShot Pro</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a href="mailto:legal@proofshotpro.com" className="text-orange hover:text-orange-hover">
                    legal@proofshotpro.com
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
