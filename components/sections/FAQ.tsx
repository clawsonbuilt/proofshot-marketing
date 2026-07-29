"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What devices does ProofShot work on?",
    answer:
      "ProofShot is a Progressive Web App that works on any modern smartphone or tablet. Install it directly from your browser — no app store needed. Works on iPhone, Android, iPad, and desktop.",
  },
  {
    question: "Can I use my own logo?",
    answer:
      "Absolutely. Upload your logo once in settings, and it appears on PDF reports and select templates. Your company name and details are included on every output automatically.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "5 projects per month, 10 stored projects at a time, and 1 user — plus all core features, including AI-powered captions, every template, and PDF reports. Your outputs carry ProofShot branding, which Pro removes.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no commitments. Cancel your Pro subscription anytime from your account settings.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use industry-standard encryption and secure cloud storage. Your photos and customer data are never shared or sold.",
  },
  {
    question: "Do you offer team accounts?",
    answer:
      "Yes. Pro plans include 3 team members. Add more for $9.99 per user per month.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <div className="max-w-[700px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-tight mb-4">
            Questions? Answers.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-0">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="font-display font-semibold text-gray-900 pr-8 group-hover:text-orange transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
