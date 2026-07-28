# CLAUDE.md

> Project context for Claude CLI. Read this first.

## Project Overview

**ProofShot Pro** marketing website — a multi-page Next.js site for a contractor-focused SaaS product that creates before/after photo documentation.

**Live Site:** https://proofshotpro.com  
**App:** https://app.proofshotpro.com (separate repo)

## Build Status

Multi-page rebuild is **complete**. All phases implemented:

- **Phase 1 (Core):** Home, Pricing, Privacy, Terms
- **Phase 2 (SEO):** Features, 11 Industry pages, About, Contact, Sitemap
- **Phase 3 (Expansion):** Comparison pages (CompanyCam, Jobber), Blog infrastructure

**Remaining work:**
- Real app screenshots (placeholders in place)
- Real testimonials (when available)

---

## Primary Documentation

### PRD_WEBSITE_V3.md — READ THIS FIRST

The single source of truth for this project. Contains:

- Brand identity & logo rules (Section 2)
- Complete design system — colors, typography, spacing, components (Section 3)
- Full site architecture — 20+ pages (Section 4)
- Page-by-page specifications with exact content (Section 5)
- Content requirements — screenshots, images needed (Section 6)
- SEO strategy — keywords, meta tags, structured data (Section 7)
- Technical requirements — file structure, breakpoints (Section 8)
- Accessibility requirements — WCAG 2.2 (Section 9)
- Performance targets — Core Web Vitals (Section 10)
- Implementation checklist — phased tasks (Section 11)

**Always reference PRD_WEBSITE_V3.md before building anything.**

### Supporting Documents (Project Knowledge)

| Document | Use For |
|----------|---------|
| `DESIGN_PRD_v8.md` | App screen designs for screenshots |
| `PRODUCT_SPEC.md` | Detailed pricing, features, business model |
| `APP_SCREENS_AND_FLOW.md` | App user flow reference |

---

## Tech Stack

```
Framework:    Next.js 14+ (App Router)
Language:     TypeScript
Styling:      Tailwind CSS 4
Icons:        Lucide React
Fonts:        Inter, Inter Tight (via next/font)
Analytics:    PostHog, Vercel Analytics
Hosting:      Vercel
Browsers:     Chrome 87+, Firefox 78+, Safari 14+, Edge 88+ (browserslist in package.json)
```

---

## Critical Rules

### 1. No Fake Social Proof

**DO NOT add:**
- ❌ "10,000+ Contractors"
- ❌ "500K+ Photos Taken"
- ❌ "4.9★ Rating"
- ❌ Fake testimonial quotes

The app hasn't launched. Use honest alternatives like "Built for contractors" or remove stats entirely. See PRD Section 5.2 for options.

### 2. Logo Files — Never Modify

Logo SVGs include TM mark and PRO badge that must always be present.

```tsx
// ✓ CORRECT
<img src="/logos/logo-orange-horizontal.svg" alt="ProofShot Pro" />

// ✗ WRONG — never recreate inline
<svg><path d="..." /></svg>
```

### 3. Design System Compliance

Always use the defined tokens:

```css
/* Primary */
--orange: #E97A35
--orange-hover: #D4682A
--orange-light: #FEF3EB
--orange-dark: #AE5415       /* WCAG AA text on white/light backgrounds */

/* Semantic */
--green: #10B981
--green-dark: #059669        /* WCAG AA text on white backgrounds */

/* Text */
--black: #0A0A0A
--gray-600: #4B5563
--gray-900: #111827

/* Fonts */
--font-display: 'Inter Tight'  /* Headlines */
--font-body: 'Inter'           /* Body text */
```

**Contrast rules:**
- Use `text-orange-dark` (not `text-orange`) for small text on white/light backgrounds
- Use `text-green-dark` (not `text-green`) for small text on white backgrounds
- `text-orange` is fine for icons, large/bold headings (18px+ or 14px bold+), and hover states
- Footer text on `bg-gray-900` uses `text-gray-400` minimum (not `text-gray-500`)

Full design system in PRD Section 3.

### 4. Free Tier Focus

The site is optimized to drive free account signups. Pro upsell happens in the app.

- **Single CTA:** "Claim My Free Account" across entire site
- **No free trials:** Full-access free tier (not time-limited)
- **Free tier includes:** AI-powered captions, all templates, PDF reports
- **Equal plan presentation:** No badges or featured styling on pricing cards
- **Single button:** One CTA below all pricing cards, not on each card

### 5. Navigation Pattern

The nav bar is transparent at the top and gains `bg-white shadow-md` after 50px of scroll. To support this:

- **Do NOT use `pt-16` on `<main>`** — hero sections must extend behind the nav
- First section on each page needs extra top padding to clear the nav (e.g., `pt-32 lg:pt-36` instead of `py-16 lg:py-20`)
- This ensures background colors (gradients, `bg-gray-50`, etc.) show through the transparent nav

### 6. Pricing Reference

| Plan | Price | Key Features |
|------|-------|--------------|
| Free | $0/mo | 5 projects/mo, 10 stored, 1 user, AI captions, all templates |
| Pro Monthly | $29.99/mo | Unlimited projects, 100 stored, 3 users, remove branding |
| Pro Annual | $20.83/mo ($249.99/yr) | Same as Pro, 30% savings |

**Add-ons:**
- Additional team members: $9.99/user/month
- Additional storage: $1.99/month per 100 projects

**First-Month Promo:** $9.99 for new Pro users (banner on pricing page)

---

## Site Architecture

```
/                       Home
/features               Features deep-dive
/pricing                Pricing with all tiers
/about                  Origin story
/contact                Contact form

/industries/
  owner-operator        Featured: Solo/small operator focus
  cleaning              Industry landing pages (11 total, alphabetized)
  handyman
  home-remodeling
  hvac
  landscaping
  painting
  pest-control
  pool-service
  pressure-washing
  roofing

/compare/
  companycam            Comparison pages
  jobber

/blog/                  Blog hub
/blog/[slug]            Blog posts

/privacy                Privacy policy
/terms                  Terms of service
```

---

## File Structure

```
app/
├── layout.tsx
├── page.tsx                    # Home
├── globals.css
├── features/page.tsx
├── pricing/page.tsx
├── about/page.tsx
├── contact/
│   ├── layout.tsx              # Metadata (page is client component)
│   └── page.tsx
├── industries/
│   ├── owner-operator/page.tsx # Custom page (not template)
│   ├── pressure-washing/page.tsx
│   └── ...                     # 10 more industry pages
├── compare/
│   ├── companycam/page.tsx
│   └── jobber/page.tsx
├── blog/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── sitemap.ts
└── robots.ts

components/
├── ui/                         # Button, Card, Badge
│   └── index.ts
├── sections/                   # Hero, Pricing, FAQ, CTA
│   └── index.ts
├── Navigation.tsx              # Multi-page nav with Industries dropdown
├── Footer.tsx
├── PostHogProvider.tsx          # Analytics provider (PostHog, cookieless)
├── PostHogPageView.tsx          # SPA pageview tracker
└── IndustryPageTemplate.tsx    # Shared template for industry pages

lib/
├── industries.ts               # Industry page content (11 industries)
├── blog.ts                     # Blog post data
└── utils.ts

public/
├── logos/
├── screenshots/
└── og/

.env.local                      # PostHog keys (not committed)
.env.example                    # Template for env vars
```

---

## Build Status (All Phases Complete)

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

---

## Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Deploy
vercel --prod
```

---

## Vercel Auth — NEVER run `vercel login`

This project authenticates to Vercel with a **scoped token**, not the global CLI session.
Other Claude sessions work against a different Vercel account on this machine, and
`vercel login` mutates global CLI state — running it would break those sessions.

**How it works:**
- The token lives in `.claude/settings.local.json` under `env.VERCEL_TOKEN` (gitignored)
- Claude Code injects it into every command automatically — just run `vercel ...` normally
- The Vercel CLI reads `VERCEL_TOKEN` from the environment with no extra flags

**Always pass `--scope j-calvin`.** The token belongs to `trey-7988`
(trey@jcalvintx.com), which has no personal Vercel team — only the `j-calvin`
Pro team. Without an explicit scope the CLI cannot resolve a default and fails
with a misleading `Error: Not authorized`, even though the token is valid.

```bash
vercel whoami --scope j-calvin     # -> trey-7988
vercel project ls --scope j-calvin
```

**Rules:**
- ❌ Never run `vercel login` or `vercel logout`
- ❌ Never pass `--token` on the command line — Vercel's docs warn it is "visible in process
  lists and logs". The env var exists precisely to avoid that.
- ❌ Never commit the token, echo it, or paste it into a file that isn't gitignored
- ✓ If a command returns `Not authorized`, the token is missing or expired — ask for a new
  one, don't fall back to `vercel login`

---

## GitHub Auth — NEVER run `gh auth logout` or `gh auth switch`

This repo lives at **`clawsonbuilt/proofshot-marketing`** (transferred from
`treyclawson22` on 2026-07-28). The machine's stored `gh` keyring login belongs to
`treyclawson22` and is used by other projects — switching or logging out would break them.

**How it works:**
- A fine-grained PAT for `clawsonbuilt` lives in `.claude/settings.local.json` under
  `env.GH_TOKEN` (gitignored)
- Per `gh help environment`, `GH_TOKEN` *"takes precedence over previously stored
  credentials"* — it overrides the keyring **without modifying it**
- Both identities coexist: `gh api user` returns `clawsonbuilt`; unset `GH_TOKEN` and the
  same command returns `treyclawson22`

**Two accounts, two capability levels:**

| | `treyclawson22` (keyring) | `clawsonbuilt` (GH_TOKEN) |
|---|---|---|
| git fetch / pull / push | ✓ (retained as collaborator) | ✓ |
| repo admin — settings, secrets, visibility, delete, transfer | ✗ | ✓ |

**Rules:**
- ❌ Never run `gh auth logout`, `gh auth switch`, or `gh auth login`
- ❌ Never commit the token or echo it into a non-gitignored file
- ✓ `git push` works as-is; `treyclawson22` kept push rights as a collaborator
- ✓ For anything needing admin, `GH_TOKEN` is already in the environment — just run `gh`

---

## Analytics

**Stack:** PostHog (behavior + conversions) + Vercel Analytics (Web Vitals) + Google Search Console (SEO)

**PostHog** (cookieless mode — no cookie banner):
- Auto-captures clicks, form submissions, page views
- Custom event: `signup_cta_clicked` fires on all signup CTA clicks
- Session recordings and heatmaps enabled via PostHog dashboard
- Feature flags disabled (`advanced_disable_feature_flags: true`)
- Config: `components/PostHogProvider.tsx`

**Vercel Analytics:**
- Automatically tracks Web Vitals (LCP, FID, CLS)
- Enabled via `<Analytics />` in root layout
- Dashboard: Vercel project → Analytics tab

**Environment Variables** (required for PostHog):
- `NEXT_PUBLIC_POSTHOG_KEY` — PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST` — PostHog ingest URL (`https://us.i.posthog.com`)
- Set in `.env.local` (local) and Vercel Dashboard → Settings → Environment Variables (production)

---

## Security Headers

Configured in `next.config.ts` `headers()`, applied to all routes:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer info |
| `Cross-Origin-Opener-Policy` | `same-origin` | Isolates browsing context |
| `Content-Security-Policy` | Enforcing | Restricts script/style/font/img/connect sources |

**CSP allowed sources:** `'self'`, Cloudflare Insights, PostHog (`us.i.posthog.com`, `us-assets.i.posthog.com`). If adding new external scripts/services, update the CSP in `next.config.ts` or they will be blocked.

---

## When In Doubt

1. Check PRD_WEBSITE_V3.md first
2. Match existing component patterns
3. Follow the design system tokens exactly
4. Ask before adding any social proof or testimonials
