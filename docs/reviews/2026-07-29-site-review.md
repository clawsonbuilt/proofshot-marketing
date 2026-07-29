# ProofShot Pro — Comprehensive Site Review

**Date:** 2026-07-29
**Scope:** full-repo code audit, UI/UX exploration, SEO + AEO analysis, app-store badge
compliance, before/after asset plan
**Status:** ✅ **Implemented.** Everything P0 and P1 below shipped the same day. This
document is kept as the record of what was wrong and why, not as a to-do list.

Every claim below was verified in-session. Commands and their output are quoted so you
can re-run them.

---

## Resolution

| Area | Outcome |
|---|---|
| **All P0** | Fixed. Contact form sends through Resend (delivery confirmed, not just HTTP 200); lint clean; local build unbroken; Organization logo resolves; every page has an `og:image`. |
| **All P1** | Fixed. Scroll-listener churn, mobile-menu focus trap, dropdown ARIA + Escape, FAQ focus rings, FAQ copy bugs, CSP hardening, image `sizes`, hub pages, CTA labels, copyright year, stale browser data. |
| **P2 dead code** | 575 lines removed, including the components promising "thousands of contractors". |
| **UI/UX** | Heroes rebuilt around figure-and-ground; home + 10 of 11 industries lead with real photography. See CLAUDE.md Critical Rule 6. |
| **SEO/AEO** | `llms.txt`, two hub pages, BreadcrumbList + FAQPage schema, 44 trade FAQs (industry pages ~345 → ~700 words), duplicate blog posts consolidated with a 308. |

**Still open** — none of it code:

- Owner-operator before/after pair (custom page; reads fine without one)
- Apple pre-order badge — swap in official artwork once pre-orders are live
- Google Search Console submission — every blocker cleared; checklist in §3 below
- Google's badge rules remain unverified (see §4)

**Superseded since publication:** §2 recommends re-enabling `BeforeAfterGallery`. That
component was instead replaced by `ProofPrint` in the hero, because one pair per industry
made a three-up grid the wrong shape. §5's asset plan is complete apart from
owner-operator.

---

## 0. The three things that matter most

1. **Your contact form throws away every message it receives** and tells the sender it
   worked. This has been true for as long as the page has been live.
2. **The site sells before/after documentation and does not contain a single
   before/after photo.** Not one, on any of 30 pages.
3. **No page has an `og:image`,** so every link shared to iMessage, Facebook, LinkedIn,
   or Slack renders as a bare grey box — for a product whose entire value proposition
   is visual.

Everything else is downstream of those.

---

## 1. Code review — full repo

Audited all 7,197 lines across `app/`, `components/`, `lib/`, and config.

### P0 — fix before the app launch drives traffic here

#### P0-1. The contact form is a no-op that fakes success

`app/contact/page.tsx:22-27`

```tsx
// Simulate form submission - replace with actual form handler (Formspree, API route, etc.)
try {
  // In production, replace this with actual form submission
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setFormState("success");
```

The form waits one second, clears itself, and renders **"Message Sent! Thanks for
reaching out. We'll get back to you as soon as possible."** No network request is made.

Verified there is no backend at all:

```
$ find app -type d -name api        →  (no output — no API routes exist)
$ grep -rn "RESEND" app components lib  →  (no output — key referenced nowhere in code)
```

`.env.example` documents `RESEND_API_KEY` with a note that the `proofshotpro.com`
sending domain is already DKIM/SPF-verified in Resend — so the intent existed and the
infrastructure is ready, but no code was ever written against it.

**Impact:** every sales inquiry, support request, and partnership email submitted
through `/contact` since launch is gone, and each sender believes they contacted you.

**Fix:** a `POST /api/contact` route handler calling Resend server-side, with real error
surfacing. The `formState === "error"` branch already exists and is currently
unreachable.

#### P0-2. Lint fails — 1 error, 1 warning

```
$ npm run lint

components/Navigation.tsx
  91:5  error  Calling setState synchronously within an effect can trigger
               cascading renders  react-hooks/set-state-in-effect

components/sections/IndustryPage.tsx
  5:10  warning  'BeforeAfterGallery' is defined but never used
                 @typescript-eslint/no-unused-vars

✖ 2 problems (1 error, 1 warning)
```

The unused import is the dormant gallery (see §2). The error is a real React 19
anti-pattern — `Navigation.tsx:90-93` sets state directly in an effect body on every
route change.

#### P0-3. `npm run build` was broken locally — fixed this session

```
Error: Cannot find module '../lightningcss.darwin-arm64.node'
```

This is the npm optional-dependency resolution bug; the arm64 native binary for
`lightningcss` (a Tailwind 4 dependency) was never installed. Production was unaffected
because Vercel builds on Linux — but **no one could run a production build locally**,
which means no local verification before pushing.

I fixed it with `npm install lightningcss-darwin-arm64 --no-save`. The build now passes:

```
✓ Compiled successfully in 1829.3ms
✓ Generating static pages using 9 workers (30/30) in 252.0ms
```

This is the one change I made to your environment. It touches `node_modules` only — no
tracked file was modified. It should be made permanent by adding the platform package to
`optionalDependencies`, or by a clean `rm -rf node_modules package-lock.json && npm i`.

#### P0-4. Organization schema logo URL is a 404

`app/layout.tsx:126`

```tsx
logo: "https://proofshotpro.com/logos/logo-orange-horizontal.svg",
```

```
$ curl -o /dev/null -w "%{http_code}" https://proofshotpro.com/logos/logo-orange-horizontal.svg
404

$ curl -o /dev/null -w "%{http_code}" \
    "https://proofshotpro.com/logos/proofshot%20pro%20logo%20orange%20-%20Horizontal.svg"
200
```

The real file is `proofshot pro logo orange - Horizontal.svg`. Google cannot resolve your
Organization logo, which is what feeds knowledge-panel and rich-result branding.

Note this filename convention is also the reason `Navigation.tsx:112` and `Footer.tsx:38`
carry spaces in image paths. **`CLAUDE.md` itself documents the wrong path** in its
"CORRECT" example (`/logos/logo-orange-horizontal.svg`), so this error is likely to
recur. Renaming the four logo files to hyphenated slugs fixes the root cause; patching
only `layout.tsx` fixes the symptom.

#### P0-5. No `og:image` on any page

```
$ curl -s https://proofshotpro.com | grep -o 'property="og:image[^>]*'
(no output)

$ ls -d public/og
ls: public/og: No such file or directory
```

`CLAUDE.md` documents a `public/og/` directory in the file structure. It does not exist.
`app/layout.tsx:45-61` sets `openGraph` and `twitter` metadata with
`card: "summary_large_image"` — but supplies no image, so the large-image card degrades
to nothing.

**Impact:** this is the single highest-leverage fix on the list relative to effort. Every
share of your visual product currently looks broken.

### P1 — real defects, not launch-blocking

| # | File | Finding |
|---|------|---------|
| P1-1 | `Navigation.tsx:40-63` | Scroll listener re-registers on **every scroll frame**. `useEffect(…, [lastScrollY])` combined with `setLastScrollY(currentScrollY)` inside the handler causes a React re-render plus `removeEventListener`/`addEventListener` per frame. Fix: hold `lastScrollY` in a `useRef`. |
| P1-2 | `Navigation.tsx:209-215` | Mobile menu is always in the DOM, hidden with `translate-x-full`. `aria-hidden` is set, but links stay **keyboard-focusable** — tabbing walks into an offscreen menu. Needs `inert` or conditional render. |
| P1-3 | `Navigation.tsx:138-152` | Industries dropdown button has no `aria-expanded`, no `aria-haspopup`, and no Escape-to-close. The mobile menu button gets this right; the desktop dropdown does not. |
| P1-4 | `sections/FAQ.tsx:77`, `pricing/pricing-faq.tsx:70` | `focus:outline-none` **removes the keyboard focus ring.** Verified in production CSS: `.focus\:outline-none:focus{outline-style:none}` (specificity 0,2,0) overrides the global `:focus-visible{outline:3px solid var(--orange)}` (0,1,0). WCAG 2.4.7 failure on both FAQ accordions. |
| P1-5 | `sections/FAQ.tsx:35` | **"Lifetime includes 30 users."** There is no Lifetime plan — pricing is Free / Pro Monthly / Pro Annual. This answer is inside `FAQPage` structured data, so Google may surface a nonexistent plan as a rich result. |
| P1-6 | `sections/FAQ.tsx:20` | Self-contradicting answer: *"5 projects per month, 10 stored projects max… **The only limitation is** ProofShot branding."* The sentence contradicts its own first clause. Also in structured data. |
| P1-7 | `sections/SocialProofBar.tsx:22` | **"Trusted by contractors in every trade"** — live on the homepage. The app hasn't launched. This is the exact claim `CLAUDE.md` Critical Rule #1 prohibits. |
| P1-8 | `next.config.ts:21` | CSP `script-src` includes `'unsafe-eval'` **and** `'unsafe-inline'`. For a fully static marketing site `unsafe-eval` should not be needed. CSP also lacks `frame-ancestors`, `base-uri`, `form-action`, and `object-src`. |
| P1-9 | `sections/IndustryPage.tsx` | **No `sizes` attribute on any image** — 8 images × 11 pages. `CLAUDE.md` Phase 6 claims `sizes` was added to AppShowcase and ValueProps; IndustryPage was missed. |
| P1-10 | `Footer.tsx:8,16` | Product → "Industries" links to `/industries/pressure-washing`; "More Industries →" links to `/industries/painting`. **There is no `/industries` index page**, and no `/compare` index either. |
| P1-11 | `Navigation.tsx:325`, `Footer.tsx:53` | CTA reads "Get Started Free", but `CLAUDE.md` Rule #4 mandates **"Claim My Free Account" across the entire site**. Two violations. |
| P1-12 | `Footer.tsx:138` | `new Date().getFullYear()` in a statically prerendered Server Component freezes the copyright year at **build time**, not view time. |
| P1-13 | build output | `caniuse-lite` is 7 months stale, so the `browserslist` targeting in `package.json` is working from outdated support data. |

### P2 — dead code, and what's hiding in it

Six top-level components have **zero importers** — 575 lines total:

```
components/CTA.tsx           components/Features.tsx      components/Pricing.tsx
components/Testimonials.tsx  components/FAQ.tsx           components/ValueProps.tsx
```

These are pre-rebuild leftovers superseded by `components/sections/*`. Deleting them is
housekeeping, except that two of them are live grenades:

- `components/Testimonials.tsx:40,43` — *"Loved by contractors everywhere" / "Join
  **thousands** of professionals who use ProofShot Pro"*
- `components/CTA.tsx:10` — *"Join **thousands** of contractors who use ProofShot Pro"*

Both are flat violations of Critical Rule #1, sitting one import away from production.
Delete them rather than leave them for a future session to wire up by accident.

---

## 2. UI/UX exploration

### The central finding

**The site has no before/after imagery.** A product whose name, headline, and entire
value proposition are before/after documentation shows zero before/after photos across
all 30 pages.

The infrastructure to fix this already exists and is switched off:

- `components/sections/BeforeAfterGallery.tsx` — a complete, working 74-line component
- `lib/industries.ts` — **33 before/after pairs** already defined with alt text and labels
- `components/sections/IndustryPage.tsx:211-218` — the gallery, commented out:
  `{/* Before & After Gallery — hidden for now, will re-enable later */}`

It's disabled because the images were never produced:

```
$ find public/industries -type f      →  (empty — all 11 directories are empty)
$ curl -o /dev/null -w "%{http_code}" \
    https://proofshotpro.com/industries/pressure-washing/before-1.webp
404
```

So this is not a build. It's a switch-on plus an asset pipeline.

### Hero inventory

| Page group | Hero treatment | Imagery |
|---|---|---|
| Home | Phone mockup + 2 floating text badges | 1 app screenshot |
| Features, Pricing, About, Contact, Compare ×2 | `pt-32` text block on flat/gradient background | **none** |
| Industries ×11 | `pt-32 lg:pt-40` centered text on `orange-light` gradient | **none** |
| Blog hub + posts | Text block | none in hero |

Twelve of thirteen page types open with no image at all.

### Industry pages are template clones

Measured live:

```
PAGE                              WORDS  H1  H2  H3  IMG
/industries/roofing                 332   1   5  11    8
/industries/hvac                    334   1   5  11    8
/industries/cleaning                346   1   5  11    8
/industries/pressure-washing        379   1   5  11    8
/industries/owner-operator          645   1   6  15    8
```

Identical heading counts and identical image counts, because `IndustryPage.tsx:165-170`
recycles the same four screenshots on every page:

```tsx
const screenshots = [
  "/screenshots/template-selection.png",
  "/screenshots/pdf-preview.png",
  "/screenshots/share-screen.png",
  "/screenshots/project-overview.png",
];
```

A roofer and a pool tech see the same four pictures. Only `owner-operator` is a custom
page and it is the only one meaningfully differentiated.

### Recommended hero — "chaos → proof" (your selection)

Replace the homepage right-hand phone mockup with a two-panel narrative:

```
┌──────────────────────────────────────────────────────────┐
│  SHARE THE PROOF.                                        │
│  Before & after documentation for contractors            │
│  who mean business.                                      │
│                                                          │
│  [ Claim My Free Account ]   [ See How It Works ]        │
│                                                          │
│   ┌────────────┐                    ┌────────────┐       │
│   │ camera     │       ──▶          │  BEFORE    │       │
│   │ roll       │                    │ ────────── │       │
│   │ (4,000     │                    │  AFTER     │       │
│   │  photos)   │                    │ ▸ branded  │       │
│   └────────────┘                    └────────────┘       │
│   "somewhere in there"               "30 seconds"        │
└──────────────────────────────────────────────────────────┘
```

Left panel uses your real camera-roll screenshot — the pain is instantly legible to any
contractor. Right panel uses the real branded J Calvin composite. Both are static images,
so the LCP element stays a plain `next/image` with `priority` and no client JS, which
protects the ~2.0s LCP noted in `CLAUDE.md` Phase 6.

**Where before/afters go beyond the homepage:**

1. **Industry heroes** — one real pair per page, matched to trade (see §5 for coverage)
2. **Re-enable `BeforeAfterGallery`** — uncomment `IndustryPage.tsx:211-218`, which also
   clears the P0-2 lint warning
3. **Compare pages** — a real pair beats a feature table for "why switch"
4. **`og:image`** — auto-generate per-page OG cards containing a before/after (fixes P0-5)

### Other UX notes

- No `/industries` or `/compare` hub page. Both clusters are reachable only through the
  nav dropdown and arbitrary footer deep-links.
- `SocialProofBar` renders 11 industry pills under "Trusted by contractors in every
  trade." The pills are useful navigation; the heading is an unsupportable claim (P1-7).
  Suggested replacement: **"Built for every trade"**.
- Homepage runs three consecutive `AppShowcase` sections (`app/page.tsx:23-25`) with no
  rhythm change between them.

---

## 3. SEO + AEO analysis

### What's already right

Genuinely solid foundations — worth stating before the gaps:

- Canonicals correct on all 9 pages spot-checked (each page overrides the root default)
- `sitemap.xml` returns 25 URLs, matching the 30 built routes minus non-indexable ones
- `robots.txt` valid, sitemap declared
- HSTS present (`max-age=63072000`), plus `nosniff`, `X-Frame-Options: DENY`, COOP
- All 30 pages statically prerendered
- `SoftwareApplication` + `Organization` schema site-wide; `BlogPosting` +
  `BreadcrumbList` on blog posts

### Technical + Core Web Vitals

| Finding | Detail |
|---|---|
| No `og:image` | P0-5. Zero social share CTR. |
| Organization logo 404 | P0-4. Breaks the one image Google reads for brand identity. |
| No `sizes` on industry images | P1-9. Oversized srcset selections on 11 pages. |
| `caniuse-lite` stale | P1-13. |

### Content depth — the core ranking problem

```
/                              626 words
/features                      460
/pricing                       405
/compare/jobber                378
/compare/companycam            353
/industries/*              332–379   (owner-operator 645)
/blog                          238
```

Industry pages average ~345 words of near-identical templated copy. For competitive
commercial queries this is thin, and eleven structurally identical pages differing only
in noun substitution is the pattern Google's guidance describes as doorway pages. They
are currently your least likely pages to rank despite being your highest-intent pages.

**Recommendation:** 900–1,200 words each, with genuinely trade-specific substance — real
before/after imagery, trade-specific objections, an industry-specific FAQ block, and
locally relevant language. Ship depth for 3–4 industries first and measure before
scaling to all 11.

### Duplicate blog posts cannibalizing each other

Both live, both HTTP 200:

| Slug | Title |
|---|---|
| `top-5-ways-to-get-customers-from-before-after-images` | Top 5 Ways to Get Customers from Before & After Images |
| `5-ways-before-after-photos-get-more-customers` | 5 Ways to Use Before/After Photos to Get More Customers |

Same topic, same intent, same H1 pattern, both opening with a social-media section. These
compete with each other for the same query. Consolidate into one and 301 the other.

Separately, `lib/blog.ts:30` states:

> "Before and after images perform **300% better** on social media than regular posts."

No source. Either cite it or remove it — an unsourced hard statistic is the same category
of risk as the fake social proof `CLAUDE.md` already prohibits.

### AEO — answer-engine optimization

This is where you have the most unclaimed ground.

**`llms.txt` is missing** (`https://proofshotpro.com/llms.txt` → 404). This is the
emerging convention for describing a site to AI crawlers. Cheap to add, and you are early
enough that it's a differentiator.

**Headings aren't question-shaped.** Industry page H2s read:

```
The [Industry] Challenge
ProofShot Pro for [Industry]
Everything You Need for [Industry]
Ready to Document Your [Industry] Work?
Also Popular With
```

Answer engines extract passages where a question-shaped heading sits directly above a
concise factual answer. None of these qualify.

**`FAQPage` schema coverage is thin** — present on `/` and `/pricing` only:

```
/                        3 blocks: SoftwareApplication, Organization, FAQPage
/pricing                 3 blocks: SoftwareApplication, Organization, FAQPage
/features                2 blocks: SoftwareApplication, Organization
/industries/roofing      2 blocks: SoftwareApplication, Organization
/compare/companycam      2 blocks: SoftwareApplication, Organization
/blog/how-to-take-…      4 blocks: + BlogPosting, BreadcrumbList
```

The 11 industry pages and both compare pages — precisely the pages answering
"what's the best photo app for roofers?" and "what's a cheaper CompanyCam?" — carry no
FAQ schema and no FAQ content.

**Missing schema types:** `BreadcrumbList` outside blog posts; `HowTo` for the 30-second
workflow; no `image` property on `SoftwareApplication`.

**Also feeding the wrong answer:** the two FAQ copy bugs (P1-5, P1-6) are inside
`FAQPage` structured data, so an answer engine asked about ProofShot pricing can
currently be told about a nonexistent Lifetime plan.

### Competitor displacement

`/compare/companycam` and `/compare/jobber` are the right idea at ~360 words each. To
compete they need: a real before/after pair, a genuine feature-by-feature table with
current competitor pricing, `FAQPage` schema, and honest framing of what the competitor
does better — comparison pages that only flatter themselves convert worse and age badly.

Worth adding: `/compare/servicetitan`, and a `/compare` hub.

### Google Search Console submission checklist

Since GSC is already verified, run in this order — fixing before submitting avoids
burning crawl budget on known-broken pages:

1. Fix P0-4 (logo 404) and P0-5 (og:image) — both affect how Google renders your brand
2. Fix P1-5 and P1-6 — bad answers currently in structured data
3. Resolve the duplicate blog posts and add the 301
4. Deploy, then validate:
   - Rich Results Test on `/`, `/pricing`, one industry page, one blog post
   - Confirm `https://proofshotpro.com/sitemap.xml` returns 25 URLs
5. In GSC: submit the sitemap, then **URL Inspection → Request Indexing** for the
   homepage, `/pricing`, `/features`, and the two compare pages
6. Leave the 11 industry pages until after the content-depth work — indexing them thin
   sets a low initial quality assessment
7. Add `llms.txt` at deploy time

---

## 4. App Store / Google Play badges

You asked for official badges with "Coming Soon". **Apple does not permit this**, and I
verified it rather than assuming.

### Apple — verified

From Apple's App Store Marketing Guidelines:

> "Use the pre-order badge to indicate that your app is available for pre-order on the
> App Store. Once the app is released for download, be sure to replace the pre-order
> badge with the download badge in all of your marketing materials."

There is **no "Coming Soon" badge**. Creating custom "Coming Soon" text with Apple badge
artwork is prohibited. What exists is an official **pre-order badge** — but using it
requires actually enabling pre-orders in App Store Connect.

Binding specs when you do use a badge:

- Minimum on-screen height: **40 px** (10 mm in print)
- Clear space: **one-quarter of badge height** on all sides
- "App Store" is a service mark and **always appears in English**
- Promotional copy may sit beside artwork, never on top of it

### Google — not verified

I could not retrieve the authoritative source. `play.google.com/intl/en_us/badges/` 302s
to the Partner Marketing Hub, which returned 404 to automated fetch (it's a JS
application). The Android developer brand page explicitly defers to it and directs
non-standard uses to a brand-approval request form. **Treat Google's pre-launch rules as
unverified** until someone opens that hub in a browser. Google does operate a
pre-registration program, but I am not going to assert badge terms I did not read.

### Recommendation

Since you're submitting to Apple within the week, the strongest compliant play is a
**two-stage rollout**:

**Stage 1 — now, before approval.** Custom badge-shaped buttons in your own design
system: "iOS app coming soon" / "Android coming soon" with generic platform glyphs, not
Apple or Google artwork. Zero guideline risk, communicates the roadmap, and the component
is built to official badge dimensions so Stage 2 is a pure asset swap.

**Stage 2 — the day pre-orders or release go live.** Drop in the official artwork. If you
enable App Store Connect pre-orders, the official pre-order badge becomes legitimate
immediately and looks fully official.

**Placements:** homepage hero (under the CTAs), footer (new "Get the app" column),
`/features`, `/pricing`, and the mobile nav drawer.

### The FAQ conflict this forces

`components/sections/FAQ.tsx:10` currently says:

> "ProofShot is a Progressive Web App that works on any modern smartphone or tablet.
> Install it directly from your browser — **no app store needed**."

Badges anywhere on the site make the site contradict itself. This answer must be
rewritten in the same change — and it's an upgrade, not a concession: *"Use it right now
in your browser — no download, no app store. Native iOS and Android apps are on the way."*
That reads as momentum instead of a workaround.

---

## 5. Before/after asset plan

### What you have

`~/Downloads/Proof Shot Pro industry before and after` — all 2400×1792 (4:3) PNGs,
5.5–9.1 MB each, ~130 MB total:

| Pair | Maps to industry |
|---|---|
| `ac install before/after` | hvac |
| `bathroom remodel before/after` | home-remodeling |
| `deck build before/after` | handyman |
| `kitchen cleaning before/after` | cleaning |
| `landscaping before/after` | landscaping |
| `roof before/after` | roofing |
| `wasp before/after` | pest-control |

Plus two orphans with no matching after: `painting before`, `pool before`.

The six screenshots you attached are real J Calvin proof and already web-sized:

| File | Dimensions | Size | Use |
|---|---|---|---|
| `proofshot-camera-roll.jpg` | 1179×2556 | 481 K | **Hero left panel** — the pain |
| `proofshot-composite.jpg` | 1600×1600 | 239 K | **Hero right panel** — the payoff |
| `proofshot-report.png` | 829×1082 | 192 K | Branded PDF proof |
| `proofshot-capture.png` | 899×1950 | 187 K | In-app capture flow |
| `proofshot-review.jpg` | 1376×1098 | 222 K | Real Google review (pressure-washing pair) |
| `proofshot-mason-thread.png` | 654×1370 | 581 K | Real review-request workflow |

### Coverage

| Industry | Source | Status |
|---|---|---|
| hvac, home-remodeling, handyman, cleaning, landscaping, roofing, pest-control | Downloads pairs | ✅ 1 pair each |
| pressure-washing | J Calvin review/composite photos | ✅ real customer work |
| painting | before only | ⚠️ needs an after |
| pool-service | before only | ⚠️ needs an after |
| owner-operator | — | ⚠️ can borrow from any trade |

**8 of 11 industries covered.** `lib/industries.ts` defines 3 pairs per industry (33
total); realistically ship **1 real pair per page** and reduce the data to match rather
than pad with stock.

### Pipeline

1. Copy sources into `public/industries/<slug>/`
2. Convert to WebP at 1200×900 (4:3 preserved), quality ~82 — expect **~120 KB from
   ~7 MB**, roughly a 98% reduction. Next.js then serves AVIF/WebP per
   `next.config.ts:5`.
3. Name to the existing contract: `before-1.webp` / `after-1.webp`
4. Trim `lib/industries.ts` galleries from 3 pairs to 1 where only 1 exists
5. Uncomment `IndustryPage.tsx:211-218` — this also clears the P0-2 lint warning
6. Copy the six J Calvin screenshots into `public/proof/`

**Do not ship the 2400×1792 PNGs as-is.** Eleven pages × 7 MB would erase every
performance gain in Phase 6.

### Attribution for the real proof

Per your decision, the Mason Davidson review and the customer text thread are usable. The
honest framing — which is also the more defensible one — is that these are **J Calvin
Pressure Washing's customers, documented with ProofShot Pro**, not ProofShot testimonials.

- ✅ "Real work, documented with ProofShot Pro"
- ✅ "Made with ProofShot Pro — J Calvin Pressure Washing"
- ❌ "What our customers say about ProofShot Pro"

That keeps Critical Rule #1 intact while giving you genuine proof. One flag worth your
own judgment: Mason Davidson is a real named third party who reviewed *J Calvin*, not
ProofShot. Publishing his name and photos on a SaaS marketing site is a different context
than a Google review. A quick text asking him is cheap insurance.

---

## 6. Recommended sequence

**Phase A — correctness (nothing new, just true).**
Contact form backend · lint error · logo 404 · og:image · FAQ copy bugs (Lifetime, "only
limitation") · "Trusted by" → "Built for" · delete 575 lines of dead code · CTA label
consistency

**Phase B — the visual rebuild.**
Asset pipeline · chaos→proof hero · re-enable BeforeAfterGallery · industry hero imagery ·
custom app-store badges + FAQ rewrite

**Phase C — SEO/AEO.**
`llms.txt` · FAQPage + BreadcrumbList on industry and compare pages · question-shaped
headings · consolidate duplicate blog posts · `/industries` and `/compare` hubs · then the
GSC submission checklist

**Phase D — content depth.**
Expand 3–4 industry pages to 900–1,200 words, measure, then scale

Phase A is small, entirely defect-fixing, and independently valuable. Phase B is the work
you actually asked for and depends on the asset pipeline. Phase C should land after A and
B so the pages Google recrawls are the improved ones.

---

## Boundaries — what this review did not cover

- **Google Play badge rules are unverified.** Authoritative source unreachable by
  automated fetch. Everything stated about Apple was read directly from Apple's
  guidelines; nothing about Google's pre-launch policy is asserted.
- **No visual/browser testing.** All UI/UX findings come from source and rendered HTML,
  not from a browser at real viewport sizes. Rendered-appearance bugs would not have
  been caught.
- **No Lighthouse or field CWV data.** Performance findings are structural (missing
  `sizes`, image weights), not measured. Your Vercel Analytics has the real numbers.
- **`app/privacy` (309 lines) and `app/terms` (368 lines) were not read line-by-line.**
  They are boilerplate legal copy; they should be reviewed by a human for accuracy, not
  by me for code quality.
- **The app repo was not examined** — this covers `proofshot-marketing` only.
- **No accessibility testing with an actual screen reader.** The a11y findings are
  static-analysis grade: missing ARIA, focus management, and a verified CSS specificity
  conflict.
- **One environment change was made:** `npm install lightningcss-darwin-arm64 --no-save`
  to unbreak the local build. No tracked file was modified.
