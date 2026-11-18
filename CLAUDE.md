# CLAUDE.md

**ProofShot Pro marketing site** — multi-page Next.js site for a contractor-focused SaaS that makes before/after photo documentation.
Live: https://proofshotpro.com. The app is a separate repo (app.proofshotpro.com).

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Lucide React, Inter + Inter Tight (next/font), PostHog + Vercel Analytics, Resend (outbound email), Cloudflare Email Routing (inbound), hosted on Vercel. Browserslist: Chrome 87+, Firefox 78+, Safari 14+, Edge 88+.

## Commands

```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # plain eslint (`next lint` is removed in Next 16)
vercel --prod --scope j-calvin   # deploy only on Trey's say-so
```

No test script. Typecheck: `npx tsc --noEmit`. Env vars: `.env.example` (PostHog key/host; Resend key for the contact form).

## Architecture notes

- Source of truth for content, design system, site map, SEO and specs: `docs/PRD_WEBSITE_V3.md`. Read it before building anything.
- Pages in `app/`, shared components in `components/`, site constants (`CONTACT_EMAIL`, `MAIL_FROM`) in `lib/site.ts`.
- Security headers and CSP are in `next.config.ts` `headers()`. New external scripts/services must be added to the CSP. `font-src 'self'`: self-host fonts (no font CDNs). `'unsafe-eval'` is dev-only.
- PostHog runs cookieless (`components/PostHogProvider.tsx`); signup CTA fires `signup_cta_clicked`.
- Email: sending (Resend, `send.proofshotpro.com`) and receiving (Cloudflare) are separate systems with one SPF record each; never merge them. Never claim delivery from an API 200; confirm the delivery event.
- `components/ProofTemplate.tsx` ports the app's Bold template (`proofshot-pro/components/html-template-preview/templates/bold-template.tsx`), which is the source of truth.
- Nav is transparent until 50px scroll: no `pt-16` on `<main>`; first section gets extra top padding.
- Heroes follow one of two patterns (photo with `<ProofPrint>`, or type-led `<PageHero>`); monospace is a real type role; no fourth typeface.
- Next 16 rejects `quality` values not in `images.qualities` (currently `[55, 75]`).
- `npm run build` locally on macOS may need `npm install lightningcss-darwin-arm64 --no-save`.
- Hot reload is unreliable: restart the dev server if a screenshot looks stale. Verify prod with `curl`, not a cached tab.
- Full detail (site map, file structure, design tokens, hero language, analytics, email debugging, headers, gotchas): `docs/reference/full-claude-md-detail.md`.

## Hard rules

1. **No fake social proof.** No made-up user counts, photo counts, ratings or testimonials; the app hasn't launched. Ask before adding any.
2. **Never modify logo files** (`public/logos/*`, they carry the TM mark and PRO badge). Never recreate them inline; check the `viewBox`, not the filename.
3. **Design system tokens only** (PRD Section 3). Contrast: `text-orange-dark` / `text-green-dark` for small text on white; footer text on `bg-gray-900` at least `text-gray-400`.
4. **Free tier focus.** Single CTA "Claim My Free Account"; no free trials; equal plan presentation (no badges/featured cards); one CTA below all pricing cards.
5. **Pricing:** Free $0 (5 projects/mo, 10 stored, 1 user); Pro $29.99/mo; Pro Annual $249.99/yr ($20.83/mo); extra user $9.99/mo; extra storage $1.99/mo per 100 projects; first-month promo $9.99.
6. **ProofShot product rules:** Stripe only (no IAP); free exports always watermarked.
7. **Accounts:** GitHub is `clawsonbuilt` only (never `treyclawson22`; verify with `gh api user --jq .login`). Vercel uses the scoped token via `VERCEL_TOKEN` with `--scope j-calvin`.
   Never run `vercel login/logout` or `gh auth login/logout/switch`. Never pass `--token` on the command line. Never print or commit a token (this repo is public). Commit identity stays `trey@clawsonbuilt.com`.
8. When in doubt: check the PRD, match existing component patterns, follow the tokens exactly.

## Workflow

Short-lived branch -> pull request -> CI -> Vercel preview -> merge. Live production apps go live only on Trey's say-so.

## History

Build status and phase logs: `docs/history/build-status-and-phases.md`.
