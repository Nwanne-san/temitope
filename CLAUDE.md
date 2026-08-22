# CLAUDE.md

Project context for future Claude Code / AI-assisted sessions on this repository. Read this first.

---

## What this repo is

Personal website for **Temitope Ruth Jacob** — a Nigerian brand strategist, speaker and author based in Abuja. She is the founder and CEO of **Elegance Inspired Limited** and the convener of **Brand Xperience**, its learning arm.

Live at: <https://www.temitoperuthjacob.com>
Deploy target: Vercel (see `vercel.json`).

The site serves five jobs, in priority order:

1. Authority-building portfolio for a speaker + consultant.
2. Book marketing landing page (*Your Authentic Signature*).
3. Free + paid resource hub.
4. About/bio and social-proof hub.
5. Speaking + consulting inquiry funnel.

---

## Tech stack

- **Framework:** Next.js 14 (App Router). Do not add Pages Router routes — the previous `src/api/subscribe.ts` was a broken Pages-style file and was migrated to `src/app/api/subscribe/route.ts`.
- **Language:** TypeScript 5.
- **Styling:** Tailwind CSS + a small shadcn/ui footprint (`src/components/ui/`).
- **Motion:** Framer Motion.
- **Icons:** `lucide-react` + `react-icons/fa6`.
- **Analytics:** `@vercel/analytics/next`.
- **Newsletter:** Mailchimp via the `/api/subscribe` route.
- **Package manager:** npm (a `package-lock.json` is checked in).

Local dev:

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm run start
npx tsc --noEmit  # type-check without emitting
```

---

## Directory map

```
src/
  app/
    layout.tsx                # Root metadata + fonts + Analytics
    page.tsx                  # Home (hero, logo carousel, achievements, testimonials, resources)
    about/
      layout.tsx              # About page metadata (added because the page is a client component)
      page.tsx                # Long-form bio (currently 3 paragraphs — see RULES.md)
    branding/
      layout.tsx              # /branding metadata
      page.tsx                # Brand Experience Initiative (will be renamed → /programs in Branch B)
    privacy/
      page.tsx                # Privacy policy
    api/
      subscribe/route.ts      # Mailchimp POST endpoint (App Router)
    sitemap.ts                # Dynamic sitemap
    robots.ts                 # Robots policy
    not-found.tsx             # Custom 404
    globals.css               # CSS vars + custom hover states
  components/
    navbar.tsx                # Only navbar; a second /branding navbar was deleted
    hero.tsx                  # Home hero (kicker + H1 + CTAs)
    logo-carousel.tsx         # "Organisations Impacted" strip
    achievements.tsx          # Home "Featured Work" (2 items)
    testimonials.tsx          # Rotating testimonial pairs, 6s interval
    resources.tsx             # Horizontal resource carousel — will become /resources in Branch B
    book-modal.tsx            # Session-gated modal + BookPromo sticky
    footer.tsx                # Dark footer with working newsletter form
    about/                    # Sub-components for /about
    ui/                       # Small shadcn primitives
  lib/utils.ts                # cn() helper
public/
  fonts/                      # Local font files (Avenir, Averia, SK Modernist)
  *.png/*.jpg                 # Images (all orphans cleaned in hygiene PR #33)
tailwind.config.ts            # Tokens + fontFamily
vercel.json
```

Key files to open first when working on the site: `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/hero.tsx`, `src/components/footer.tsx`, `tailwind.config.ts`.

---

## Brand tokens (current — pre-Branch B)

Palette (from `tailwind.config.ts` + `globals.css`):

| Token          | Value       | Used for                                    |
| -------------- | ----------- | ------------------------------------------- |
| `primary`      | `#f06`      | CTAs, section fills, accent highlights      |
| `secondary`    | `#4c4c4c`   | Body text, headings                         |
| `secondary-2`  | `#797979`   | Muted text                                  |
| `lightGray`    | `#FFD1F7`   | Soft pink surface (misnamed; not gray)      |
| `--primary`    | `102,37,103`| Deep purple (used only for `text-primary-dark`) |

Fonts (loaded in `layout.tsx`):

| Family              | Kind        | Where used                        |
| ------------------- | ----------- | --------------------------------- |
| Avenir              | Local sans  | Default `font-sans` — most body   |
| Averia Serif Libre  | Local serif | `font-serif` — display headlines  |
| SK Modernist        | Local sans  | `font-sk-modernist` — /branding page only |

Poppins and Bai Jamjuree were removed in PR #33. Do not re-add fonts without justification.

Redesign palette (Branch B — see `REDESIGN.md`):

```
--bg-cream:      #FAF6F1
--ink:           #1A1614
--rose:          #D4756B
--blush:         #F4DDD5
--aubergine:     #3D1F2E
--brand-pink:    #F06   (kept as equity; logo/monogram only)
```

---

## Environment variables

Required in production for the newsletter to succeed:

- `MAILCHIMP_API_KEY`
- `MAILCHIMP_AUDIENCE_ID`
- `MAILCHIMP_SERVER_PREFIX` (e.g. `us21`)

If any are missing, `/api/subscribe` returns `{"error":"Newsletter is not configured"}` with status 500, and the footer form shows an inline error.

---

## Third-party links currently used on the site

- Book / consultation sales: `selar.com/412292`, `selar.com/1v4g42`.
- WhatsApp: `wa.link/dtys70`, plus community `chat.whatsapp.com/…`.
- Content: YouTube `@thebranding_queen`, Instagram `@brandingqueen2`, Medium `temitoperuthjacob.medium.com`.
- Adjacent properties: `eleganceinspired.org`, `brandxperience.org`.

Prefer routing new CTAs through the site's own pages (`/speaking`, `/books/…`, `/contact`) once Branch B lands, rather than pushing users off to external platforms as the first step.

---

## Branch strategy

- `main` — production. Every merge is a squash-merge with the PR title as the commit message.
- `hygiene/*` — three PRs, all merged: #32 copy fixes, #33 rewrites + cleanup, #34 broken UX + SEO.
- `redesign/*` — will land after Branch A. See `REDESIGN.md` for the plan and the 13 filed GitHub issues (#19–#31).
- `docs/*` — non-code docs like this file.

---

## Roadmap at a glance

1. ✅ **Branch A — Hygiene** (merged): fix broken things, remove AI-flavoured copy, delete dead code, wire the newsletter, add SEO plumbing.
2. ⏭ **Branch B — Redesign** (next): new IA with 6+ new pages (`/speaking`, `/books/…`, `/resources`, `/programs`, `/work`, `/press`, `/contact`), cream + rose palette, two-font system, session-only book modal, richer social proof. See `REDESIGN.md`.
3. **Later** — editorial photography drop-in, real testimonials with photos, podcast surfacing.

---

## When you are working on this repo

- Read `RULES.md` before writing new copy or adding components. It captures decisions we made specifically because of previous mistakes on this site (AI-flavoured copy, orphan assets, broken forms, dated design patterns).
- Read `AUDIT.md` if you need the "why" behind a decision or want to check whether an issue has already been noted.
- Read `REDESIGN.md` before making any visual / IA change — Branch B has an approved plan; don't freelance a redesign.
- All facts about Temitope on the site come from public sources (her site, LinkedIn, IG bio, TechEconomy Sept 2025 interview, The Upper Ent Sept 2025 interview). Do not invent titles, awards, dates, or clients.

---

## Contact for questions

- Site domain: `temitoperuthjacob.com`.
- Repo owner: `Nwanne-san`.
- Design credit in footer: Nwanne Nnamani (`nwanne-san.vercel.app`).
