# Bizex4U — Corporate Website

An independent Indian media network. Editorial, near-monochrome, built on a
"ledger" system: hairlines instead of boxes, index numbers in the left margin,
asymmetric grids.

Next.js 16 (App Router) · TypeScript · Tailwind v4 · self-hosted fonts.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

No environment variables are needed.

---

## The design system

Everything lives in `src/app/globals.css` under `@theme`. Change a token there
and it propagates site-wide.

| Token | Value | Used for |
| --- | --- | --- |
| `--color-paper` | `#FAFAF7` | Page canvas |
| `--color-ink` | `#101010` | Text, inverted section backgrounds |
| `--color-ink-60` | `#6B6B6B` | Secondary text |
| `--color-rule` | `#E2E1DC` | Every hairline |
| `--color-accent` | `#6F4BFF` | Bizex violet |

**Accent discipline.** Violet appears only as an active nav underline, a link
hover underline, a hovered row's index number, and the vertical rule in the
barter equation. It is never a large fill and never a gradient. Breaking this
rule is the fastest way to make the site look generic.

**Type.** Archivo (display), Inter (body), IBM Plex Mono (eyebrows, index
numbers, metadata). Self-hosted from `src/fonts/` — no Google Fonts request, so
no third-party call and no consent question.

**Motion.** One animation only: a 12px fade-up on scroll entry, 500ms, defined
in `globals.css` and driven by `src/components/Reveal.tsx`. No parallax, no
carousels, no counters. `prefers-reduced-motion` is respected.

---

## Structure

```
src/
├─ app/
│  ├─ page.tsx                 Homepage — nine sections
│  ├─ barter/                  The commercial model (the key page)
│  ├─ cities/
│  │  ├─ page.tsx              City index
│  │  └─ [slug]/page.tsx       City template — generated from data
│  ├─ contact/
│  ├─ what-we-do/              Capability index + five sub-pages
│  ├─ work/  atlas/  about/  perspectives/  careers/
│  ├─ sitemap.ts  robots.ts  not-found.tsx
├─ components/
│  ├─ Ledger.tsx               Section, LedgerRow, PageHero, Faq, ContactLedger
│  ├─ Nav.tsx                  Sticky nav + mega panel + mobile panel
│  ├─ Footer.tsx  Reveal.tsx  ContactForm.tsx  Stub.tsx
└─ lib/
   ├─ site.ts                  Company details, capabilities, nav, placeholders
   └─ cities.ts                City content — one object per city
```

---

## Adding a city

Append an object to `cities` in `src/lib/cities.ts`. The route, the index
listing, the sitemap entry and the Service / Breadcrumb / FAQ schema all
generate from it. Nothing else needs touching.

Two rules that matter more than the code:

1. **Never list inventory** — no site counts, locations, rates or availability,
   on city pages or anywhere else. Describe the market, not the stock.
2. **Write genuinely different copy for every city.** The same paragraph with
   the city name swapped is worse than no page at all, for readers and for
   search.

Remove the city's name from `additionalMarkets` in the same file once its page
is written, and it moves from plain text to a link automatically.

---

## Before launch

- [ ] `src/lib/site.ts` — replace the registered office address
- [ ] `src/lib/site.ts` — replace `selectedWork` placeholders with real cases,
      **only** where you have written client permission to publish the name
      and the result
- [ ] `src/app/page.tsx` — replace the `clients` placeholder grid with real
      client marks, same permission rule
- [ ] Verify the claims in the hero stat row: 17 years, 40+ cities
- [ ] `src/lib/site.ts` — set `url` to the live domain (drives canonicals,
      Open Graph and the sitemap)
- [ ] `src/components/ContactForm.tsx` — wire `handleSubmit` to a real
      endpoint; it currently composes a mailto rather than pretending to submit
- [ ] Replace the `Stub` pages: `/work`, `/atlas`, `/about`, `/perspectives`,
      `/careers`, and the five capability pages
- [ ] Add a real favicon and an Open Graph image

## Deploying

Push to GitHub, import at [vercel.com/new](https://vercel.com/new), accept the
defaults. Every page except the city routes is statically prerendered; the city
routes are prerendered from `generateStaticParams`.
