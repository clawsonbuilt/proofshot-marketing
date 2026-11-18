# Build status and phase logs (moved verbatim from CLAUDE.md, 2026-11-18)

## Build Status

Multi-page rebuild is **complete**. All phases implemented:

- **Phase 1 (Core):** Home, Pricing, Privacy, Terms
- **Phase 2 (SEO):** Features, 11 Industry pages, About, Contact, Sitemap
- **Phase 3 (Expansion):** Comparison pages (CompanyCam, Jobber), Blog infrastructure

**Remaining work:** see the Phase 8 checklist below — it supersedes the per-phase lists,
which are kept as a historical record.

---

## Primary Documentation

## Build Status (All Phases Complete)

> Phases 1–7 below are a historical record. **Phase 8 is the current state** — its
> checklist is the one to trust; earlier unchecked items may already be resolved.

### Phase 1: Core
- [x] Shared components (Nav, Footer, Button, Card)
- [x] Home page
- [x] Pricing page (3 tiers, promo banner, add-ons, FAQ)
- [x] Privacy & Terms

### Phase 2: SEO Foundation
- [x] Features page (8 feature sections, comparison table)
- [x] Industry pages (11 total, including owner-operator)
- [x] About & Contact pages
- [x] Sitemap & robots.ts

### Phase 3: Expansion
- [x] Comparison pages (CompanyCam, Jobber with accurate pricing)
- [x] Blog infrastructure (hub + post template)

### Phase 4: Polish
- [x] Performance optimization (Next.js Image, static generation)
- [x] Accessibility audit (focus states, skip link, ARIA, form labels)
- [x] Screenshot card refinements (11.5% top crop, inline icon with title)
- [ ] Real app screenshots (placeholders in place)
- [ ] Real testimonials (when available)

### Phase 5: SEO & Analytics
- [x] Structured data (Organization, SoftwareApplication, FAQPage, BlogPosting, BreadcrumbList)
- [x] Canonical URLs on all pages
- [x] Contact page metadata (via layout.tsx)
- [x] External link security (rel="noopener noreferrer")
- [x] Improved meta descriptions (About page)
- [x] PostHog analytics (cookieless, autocapture, signup CTA tracking)
- [x] Vercel Analytics (Web Vitals)

### Phase 6: Performance & Security
- [x] Hero image `priority` + `sizes` (LCP fix: 5.3s → ~2.0s)
- [x] Hero.tsx converted to Server Component (removed `"use client"`)
- [x] Inter Tight migrated to `next/font` (eliminated 3 render-blocking Google Fonts requests)
- [x] PostHog preconnect hint added
- [x] Image `sizes` on AppShowcase + ValueProps components
- [x] Blog images compressed (15.9MB → 1.1MB, PNGs converted to JPGs)
- [x] Browserslist targeting modern browsers (drops legacy polyfills)
- [x] WCAG AA contrast fixes (`--orange-dark`, `--green-dark` tokens, footer text)
- [x] Image cache TTL (1 year for static screenshots)
- [x] Security headers (CSP enforcing, X-Frame-Options, COOP, nosniff, Referrer-Policy)
- [x] PostHog feature flags disabled (`advanced_disable_feature_flags`)
- [ ] Real app screenshots (placeholders in place)
- [ ] Real testimonials (when available)

### Phase 7: Account Migration (2026-07-28)

Moved this site onto company-owned accounts. Both hosting and source control
changed owner; nothing about the application code or the live site changed.

| | Before | After |
|---|---|---|
| Vercel team | Trick Design Co | **J Calvin** (Pro) |
| GitHub repo | `treyclawson22/proofshot-marketing` | **`clawsonbuilt/proofshot-marketing`** |
| Commit identity | treyclawson22@gmail.com | **trey@clawsonbuilt.com** (repo-local) |

- [x] Vercel project transferred to the J Calvin team — project ID unchanged
      (`prj_OA9n1jgGTgFYAfAiupnh9LxgOK7A`); domains, aliases, and all env vars
      carried over
- [x] GitHub repo transferred to `clawsonbuilt`; old URLs auto-redirect
- [x] Local `.vercel/project.json` relinked to the new `orgId`; `origin` remote
      re-pointed
- [x] Vercel↔GitHub connection rebuilt and **push-to-deploy verified with real
      pushes** (not just config inspection — see the gotcha below)
- [x] Scoped `VERCEL_TOKEN` and `GH_TOKEN` wired into `.claude/settings.local.json`
- [x] `.gitignore` hardened with a repo-level rule for `.claude/settings.local.json`,
      which holds both tokens (this repo is public)

**Gotcha worth remembering.** After the repo transfer, the Vercel project's
`org` and `repoOwnerId` were corrected but its `gitCredentialId` still pointed at
a credential bound to the previous owner's GitHub App installation. Every field
in the dashboard looked right and **pushes silently produced no deployment** —
GitHub accepted the push, and nothing built.

The fix is to **disconnect the Git integration and then reconnect it**. A plain
reconnect reuses the stale credential; only a disconnect forces reissuance.

Because that failure is silent, verify with an actual push and confirm a
deployment appears — never conclude the pipeline is healthy from link metadata
alone.

### Phase 8: Review, Rebuild & SEO (2026-07-29)

Full-repo review (`docs/reviews/2026-07-29-site-review.md`), then four phases of fixes.

**Correctness.** The contact form awaited a `setTimeout` and rendered "Message Sent!"
without sending anything — every inquiry since launch was discarded. Now a real Resend
route. Also: `og:image` on all pages (there were none), Organization logo 404, an FAQ
advertising a nonexistent "Lifetime" plan, "Trusted by contractors" pre-launch, and 575
lines of dead components promising "thousands of contractors".

**Visual.** Site sold before/after documentation and contained zero before/after photos.
Now the home hero and 10 of 11 industry pages lead with real photography. See Critical
Rule 6.

**SEO/AEO.** `/llms.txt`, `/industries` and `/compare` hubs, BreadcrumbList + FAQPage
schema, 44 trade-specific FAQs (industry pages went ~345 → ~700 words), duplicate blog
posts consolidated with a 308.

**Accessibility & security.** Scroll listener re-registering every frame, closed mobile
menu holding tab focus, dropdown ARIA + Escape, `focus:outline-none` killing focus rings,
CSP hardening.

- [x] Real before/after photography (10 of 11 industries)
- [ ] Owner-operator pair (custom page; reads fine without)
- [ ] Real testimonials (when available)
- [ ] Apple pre-order badge — swap in official artwork once pre-orders are live
- [ ] Submit to Google Search Console (all blockers cleared)

---
