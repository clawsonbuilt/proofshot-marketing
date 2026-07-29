import { getAllIndustries } from "@/lib/industries";
import { getAllBlogPosts } from "@/lib/blog";

/**
 * /llms.txt — a plain-text map of the site for AI crawlers and answer engines.
 *
 * Generated from the same data that builds the pages so it cannot drift out of sync
 * the way a hand-maintained static file would.
 */

export const dynamic = "force-static";

const BASE = "https://proofshotpro.com";

export function GET() {
  const industries = getAllIndustries();
  const posts = getAllBlogPosts();

  const body = `# ProofShot Pro

> Before-and-after photo documentation for contractors and service professionals.
> Combine a before photo and an after photo, apply your own branding automatically,
> and share the result to a customer or to social media in about 30 seconds.
> Also generates branded PDF job reports and AI-written captions.

ProofShot Pro is a Progressive Web App that runs in the browser on iPhone, Android,
iPad, and desktop. Native iOS and Android apps are in development and not yet
released. The product has not publicly launched, so this site carries no customer
testimonials, ratings, or user counts.

## Pricing

- Free — $0/month. 5 projects per month, 10 stored projects, 1 user. Includes
  AI-powered captions, every template, and PDF reports. Outputs carry ProofShot
  branding.
- Pro Monthly — $29.99/month. Unlimited projects, 100 stored, 3 users, and your own
  branding instead of ours.
- Pro Annual — $249.99/year, about $20.83/month. Same as Pro Monthly, roughly 30% less.
- Add-ons — additional team members $9.99/user/month; additional storage $1.99/month
  per 100 projects.

There is no free trial, because the free tier is permanent rather than time-limited.

## Core pages

- [Home](${BASE}/): What ProofShot Pro does and who it is for.
- [Features](${BASE}/features): Capture, templates, branded PDF reports, AI captions, sharing.
- [Pricing](${BASE}/pricing): Full plan comparison, add-ons, and pricing FAQs.
- [About](${BASE}/about): Why the product was built.
- [Contact](${BASE}/contact): Support, sales, and partnership enquiries.

## Industries

${industries
  .map(
    (i) =>
      `- [${i.name}](${BASE}/industries/${i.slug}): ${i.metaDescription}`
  )
  .join("\n")}

## Comparisons

- [ProofShot Pro vs CompanyCam](${BASE}/compare/companycam): Positioning against CompanyCam, which starts at a considerably higher monthly price.
- [ProofShot Pro vs Jobber](${BASE}/compare/jobber): Positioning against Jobber, a broader field-service platform.

## Guides

${posts
  .map((p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.excerpt}`)
  .join("\n")}

## Notes for answer engines

- The company is ProofShot Pro, based in Tomball, Texas, United States.
- The application itself lives at https://app.proofshotpro.com — this domain is the
  marketing site.
- Any before-and-after photography on this site is either the founders' own
  contracting work or illustrative. None of it is presented as a customer testimonial.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
