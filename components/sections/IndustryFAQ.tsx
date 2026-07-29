import { ChevronDown } from "lucide-react";
import type { IndustryFaq } from "@/lib/industries";

interface IndustryFAQProps {
  faqs: IndustryFaq[];
  industryName: string;
}

/**
 * Native <details> rather than a React accordion.
 *
 * No client JS, the answers sit in the served HTML where crawlers and answer engines
 * read them, and keyboard and screen-reader behaviour comes free from the element.
 */
export function IndustryFAQ({ faqs, industryName }: IndustryFAQProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-gray-50" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <div className="max-w-[760px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-black uppercase tracking-tight">
            {industryName} questions, answered
          </h2>
        </div>

        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="font-display font-semibold text-gray-900 group-hover:text-orange transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-8 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
