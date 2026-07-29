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

**Remaining work:** see the Phase 8 checklist below — it supersedes the per-phase lists,
which are kept as a historical record.

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

The four files, with their real aspect ratios:

| File | Aspect | Used by |
|---|---|---|
| `logo-orange-horizontal.svg` | 5.31 | Nav, Organization schema, Bold template |
| `logo-orange-light-horizontal.svg` | 5.31 | Footer (on dark) |
| `logo-orange-light-vertical.svg` | 1.27 | — |
| `icon-orange.svg` | 1.44 | — |

**Verify the aspect before trusting a filename.** The two "light" files shipped with their
names swapped, so the footer requested horizontal at 92×18 and got the stacked mark,
rendering it oversized. Check the `viewBox` rather than the name.

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

### 6. Hero Design Language

Every hero on the site follows one of two patterns. Match them rather than inventing a third.

- **Leads with a photo** (home, 10 industry pages) — a dark full-bleed field on the
  right, with `<ProofPrint>` on top: the app's Bold template on a white matte, square
  corners, tilted `+1.25deg`, hard **unblurred** orange shadow offset left. No soft
  shadows, no rounded floating cards.
- **Leads with type** (everything else) — `<PageHero>`: monospace eyebrow, Inter Tight
  Black headline, gray subhead, optional monospace note.

Both centre below `lg` and range left above it. Hero CTAs are `w-full sm:w-auto` — a
pill sized to its label reads as a stray fragment on a phone.

**Monospace is a real type role**, not decoration. It carries documentation metadata —
file names, timestamps, spec strips, eyebrows. Use `font-mono` (system stack, no extra
download). Never introduce a fourth typeface.

`components/ProofTemplate.tsx` is a direct port of the app's Bold template
(`proofshot-pro/components/html-template-preview/templates/bold-template.tsx`). **That
file is the source of truth** — read it before changing the template, don't eyeball a
screenshot. Every value is the native 960px coordinate over 960: percentages for
position, `cqw` for type.

### 7. Pricing Reference

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
/contact                Contact form (posts to /api/contact)

/api/contact            POST → Resend. The only dynamic route.
/llms.txt               Generated site map for AI answer engines
/opengraph-image        Generated 1200×630 share card

/industries             Hub — all 11 trades
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

/compare                Hub — all comparisons
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
├── layout.tsx                  # Root metadata, JSON-LD, fonts
├── page.tsx                    # Home
├── globals.css                 # Design tokens + @theme
├── opengraph-image.tsx         # Generated share card (next/og)
├── llms.txt/route.ts           # Generated from lib/ — never hand-edit
├── api/contact/route.ts        # POST → Resend
├── features/page.tsx
├── pricing/page.tsx  + pricing-faq.tsx
├── about/page.tsx
├── contact/
│   ├── layout.tsx              # Metadata (page is client component)
│   └── page.tsx
├── industries/
│   ├── page.tsx                # Hub
│   ├── owner-operator/page.tsx # Custom page (NOT the template — wire
│   │                           #   FAQs/breadcrumbs into it separately)
│   └── ...                     # 10 template-driven industry pages
├── compare/
│   ├── page.tsx                # Hub
│   ├── companycam/page.tsx
│   └── jobber/page.tsx
├── blog/page.tsx + [slug]/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── sitemap.ts
└── robots.ts

components/
├── ui/                         # Button, Card
├── sections/
│   ├── Hero.tsx                # Home hero: field + ProofPrint
│   ├── PageHero.tsx            # Shared type-only hero
│   ├── IndustryPage.tsx        # Template for 10 industry pages
│   ├── IndustryFAQ.tsx         # <details>, FAQPage schema, no JS
│   ├── AppShowcase.tsx  FAQ.tsx  FinalCTA.tsx
│   ├── PricingPreview.tsx  SocialProofBar.tsx  ValueProps.tsx
│   └── index.ts
├── ProofTemplate.tsx           # Port of the app's Bold template
├── ProofPrint.tsx              # ProofTemplate as a physical print
├── AppBadges.tsx               # Pre-launch store badges
├── Navigation.tsx              # Nav with Industries dropdown
├── Footer.tsx
├── PostHogProvider.tsx
└── PostHogPageView.tsx

lib/
├── industries.ts               # 11 industries + 44 FAQs + gallery pairs
├── blog.ts                     # Blog post data
└── site.ts                     # CONTACT_EMAIL, MAIL_FROM

public/
├── logos/                      # 4 SVGs — check viewBox, not filename
├── screenshots/                # App UI screenshots
├── industries/<slug>/          # before-1.jpg / after-1.jpg (10 of 11)
├── proof/                      # Real J Calvin photos + hero field
└── blog/

.env.local                      # PostHog + Resend keys (not committed)
.env.example                    # Template for env vars
```

---

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

## Gotchas

Things that cost real time. Each one failed silently.

- **`cqw` on the element carrying `container-type` measures the ancestor, not itself.**
  Put `@container` on a wrapper and the `cqw` values on a child, or padding written as
  `5.5cqw` resolves against the viewport (79px inside a 347px box).
- **Next 16 rejects any `quality` not listed in `images.qualities`** — returns a 44-byte
  error, not an image. Currently `[55, 75]`.
- **Hot reload is unreliable here.** If a screenshot looks stale, restart the dev server
  before debugging the code. Cost several wrong diagnoses.
- **Vercel serves cached HTML after a deploy.** Verify with `curl` against production, not
  a browser tab. Hard-refresh before believing something didn't ship.
- **macOS screenshot filenames use U+202F** (narrow no-break space) before AM/PM, so exact
  path matches fail. Glob instead: `ls ~/Desktop/Screenshot*1.11.41*.png`.
- **Pasted images live in a temp dir that macOS wipes** once the paste completes. Ask for a
  re-save to Desktop rather than hunting for it.
- **`npm run build` needs `lightningcss-darwin-arm64`** (npm optional-dep bug). If it fails
  with `Cannot find module '../lightningcss.darwin-arm64.node'`, run
  `npm install lightningcss-darwin-arm64 --no-save`. Vercel builds on Linux and is unaffected.
- **`next lint` is removed in Next 16.** Use `npm run lint` (plain `eslint`).
- **Screenshot before claiming a layout works.** Every layout bug this session — colliding
  text, an overlay swallowing content, a template floating in dead space — was invisible
  in the diff and obvious in a screenshot. Playwright is available at
  `/Users/Trey/Claude-Code-Projects/proofshot-pro/node_modules/playwright`.

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
`vercel login` and `vercel logout` mutate global CLI state that this project does not
own, so they are never the right fix here — if a command fails, the token is the thing
to check.

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

## GitHub Auth — use ONLY the `clawsonbuilt` account for this project

### The account

| | |
|---|---|
| **GitHub account** | `clawsonbuilt` (user id `310189102`) |
| **Account email** | `trey@clawsonbuilt.com` |
| **Repo** | `clawsonbuilt/proofshot-marketing` (transferred from `treyclawson22` 2026-07-28) |
| **Commit identity** | set repo-locally to `trey@clawsonbuilt.com` — do not change it |

**THE RULE: this project uses the `clawsonbuilt` GitHub account exclusively.**
Never act as `treyclawson22` here — not for commits, pushes, issues, PRs, releases, or
any `gh` command. That account still appears as a repo *collaborator* and its credentials
are in the machine keyring, so acting as it will silently succeed and attribute your work
to the wrong identity. Always confirm with `gh api user --jq .login` → must be
`clawsonbuilt`.

### How auth works (no token value is stored in this file — by design)

The fine-grained PAT lives in **`.claude/settings.local.json`** under `env.GH_TOKEN`.
That file is gitignored (`.gitignore`); this repo is **public**, so the token value must
never appear in CLAUDE.md, any tracked file, a commit message, or a command line.

Claude Code injects that `env` block into every session in this directory, so `GH_TOKEN`
is already set — just run `gh` normally. Per `gh help environment`, `GH_TOKEN`
*"takes precedence over previously stored credentials"*, meaning it overrides the keyring
**without modifying it**. Both identities coexist: with it, `gh api user` →
`clawsonbuilt`; without it → `treyclawson22`.

If the token is missing or expired, ask for a new one. **Never fall back to
`gh auth login`.**

### Capability split

| | `treyclawson22` (keyring) | `clawsonbuilt` (GH_TOKEN) |
|---|---|---|
| git fetch / pull / push | ✓ (retained as collaborator) | ✓ |
| repo admin — settings, secrets, visibility, delete, transfer | ✗ | ✓ |

### Rules

- ❌ Never run `gh auth logout`, `gh auth switch`, or `gh auth login` — all three mutate
  global CLI state that this project does not own
- ❌ Never write the token into a tracked file, commit message, or CLI argument
- ❌ Never change the repo-local `user.email` away from `trey@clawsonbuilt.com`
- ✓ `GH_TOKEN` is already in the environment — just run `gh`
- ✓ Verify identity with `gh api user --jq .login` before any write operation

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

## Email — sending and receiving are two different systems

| | Provider | Notes |
|---|---|---|
| **Sending** | Resend | `send.proofshotpro.com` subdomain, its own SPF + DKIM |
| **Receiving** | Cloudflare Email Routing | Root MX, forwards to a real inbox |

`lib/site.ts` holds `CONTACT_EMAIL` and `MAIL_FROM`. Change the address there — it feeds
the API route, the contact page, and the Organization schema.

**One SPF record per hostname.** The root and `send.` subdomain each have exactly one;
that separation is what lets Cloudflare own the root without breaking Resend. Never merge
them, and don't add Resend to the root SPF — SPF has a hard 10-lookup limit.

**The failure mode here is silent.** A bounced address gets added to Resend's suppression
list, after which Resend accepts the API call and returns success while sending nothing.
The contact form looks fine and mail vanishes. When mail "works but doesn't arrive":

```bash
KEY=$(grep "^RESEND_API_KEY=" .env.local | cut -d= -f2-)
curl -s -H "Authorization: Bearer $KEY" "https://api.resend.com/emails?limit=5" \
  | python3 -m json.tool | grep -E 'to|last_event'   # delivered | bounced | suppressed
```

`last_event: delivered` is the only proof. HTTP 200 from the API is not.

**Never assert delivery from a 200.** Send a real test and confirm the delivery event
before telling anyone the form works.

## Security Headers

Configured in `next.config.ts` `headers()`, applied to all routes:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | `DENY` | Prevents clickjacking |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controls referrer info |
| `Cross-Origin-Opener-Policy` | `same-origin` | Isolates browsing context |
| `Content-Security-Policy` | Enforcing | Restricts script/style/font/img/connect sources |

Also set: `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`, `object-src 'none'`.

**CSP allowed sources:** `'self'`, Cloudflare Insights, PostHog (`us.i.posthog.com`,
`us-assets.i.posthog.com`). If adding new external scripts/services, update the CSP in
`next.config.ts` or they will be blocked.

`'unsafe-eval'` is **dev-only** (`isDev` in `next.config.ts`) — the dev server's hot
reload needs it, production does not. Don't add it back unconditionally.

`font-src 'self'` means **no font CDNs**. Self-host any typeface (copy the woff2 into
`public/fonts/` and declare `@font-face`), or Google Fonts will be blocked silently.

---

## When In Doubt

1. Check PRD_WEBSITE_V3.md first
2. Match existing component patterns
3. Follow the design system tokens exactly
4. Ask before adding any social proof or testimonials
