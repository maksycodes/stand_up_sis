# Stand Up Sis

The Stand Up Sis CIC website — a community, programme and partnerships platform for women building
businesses, careers and networks in the UK.

Built with Next.js (App Router), Tailwind CSS v4, and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` to configure analytics, form email notifications and submission
storage. The site works with none of these set — see the comments in `.env.example` for what each one
unlocks.

## Project structure

```
src/
  app/                 Routes (App Router). Each folder under app/ is a page; app/api/forms/* are the
                        form submission endpoints.
  components/
    brand/             Logo and the "Circle of Sisters" monogram
    ui/                Design-system primitives (Button, Card, Section, PageHero, EmptyState, …)
    layout/            Header (with mobile nav) and Footer
    forms/             Form components + shared submit/validation helpers
  content/             Typed content arrays for programmes, events and insights — currently empty by
                        design (see "Adding content" below); the site renders tasteful empty states
                        until real entries are added.
  lib/
    site-config.ts     Site-wide name, description, nav links — edit this first for copy changes
    forms/              Validation, spam (honeypot + optional Turnstile), email notify, storage
```

## Adding content

Programmes, events and insight articles live in `src/content/*.ts` as plain typed arrays — no CMS
required for launch. To add one, add an object matching the exported type (e.g. `Programme`,
`SusEvent`, `Insight`) to the array. Detail pages and listings pick them up automatically, including
`generateStaticParams` for their `/[slug]` routes.

When non-technical editing is needed, these files are a natural migration point to a headless CMS
(Sanity is a good fit) — swap the array exports for fetched data without touching the pages that
consume them.

## Forms

Each form (Join the Community, Become a Mentor, Partnership Enquiry, Event Registration, Contact,
Newsletter) posts JSON to its own route under `src/app/api/forms/*`. Every route:

1. Rejects bot submissions via a honeypot field (and Turnstile, if configured).
2. Validates required fields server-side.
3. Calls `saveSubmission()` — logs to the console by default, or inserts into Supabase if
   `SUPABASE_URL`/`SUPABASE_SERVICE_ROLE_KEY` are set (see `.env.example`).
4. Calls `sendNotification()` — a no-op (logged) until `RESEND_API_KEY`/`FORM_NOTIFY_EMAIL` are set.

Both are intentionally swappable: change the body of `saveSubmission`/`sendNotification` in
`src/lib/forms/` and every form's route picks up the change — no per-form edits needed.

## Deploying, and connecting your GoDaddy domain

The site is built for [Vercel](https://vercel.com) — free to start, deploys on every push, and connects
to an externally-registered domain (like one bought through GoDaddy) in a few steps:

1. **Push this repo to GitHub** (if not already), then [import it on Vercel](https://vercel.com/new).
   Vercel auto-detects Next.js — no build configuration needed.
2. **Add environment variables** from `.env.example` under Project Settings → Environment Variables
   (at minimum, set `NEXT_PUBLIC_SITE_URL` to your real domain once you know it).
3. **Add your domain**: Project Settings → Domains → add `standupsis.org` (and `www.standupsis.org`).
   Vercel will show you the DNS records it needs.
4. **In GoDaddy**, go to your domain's DNS management and add the records Vercel showed you — typically:
   - An `A` record for the root domain (`@`) pointing to Vercel's IP, **or** GoDaddy's "forwarding" if
     you're using `www` as primary.
   - A `CNAME` record for `www` pointing to `cname.vercel-dns.com`.
   DNS changes can take up to 24-48 hours to propagate, though it's usually much faster.
5. Once DNS resolves, Vercel automatically issues an SSL certificate — no extra step needed.

## SEO & social

- Per-page metadata, Open Graph and Twitter cards are set via `src/lib/page-metadata.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically,
  including any programmes/events/insights you add to the content arrays.
- `src/app/opengraph-image.tsx` generates the social preview image on the fly from the brand mark —
  edit it there rather than replacing a static image.
- Organization structured data (JSON-LD) is injected site-wide in `src/app/layout.tsx`.

## Design system

Brand tokens (colours, fonts) live in `src/app/globals.css` under `:root`, sourced from the Stand Up
Sis "Circle of Sisters" brand mark. Colour combinations used for text have been checked against WCAG
AA contrast requirements — if you change a token, re-check contrast for anything using it as text.
