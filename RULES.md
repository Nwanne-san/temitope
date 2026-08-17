# RULES.md

Working rules for this repo. Each rule exists because we already had the opposite in production and it caused a problem. Break these only with a written reason.

---

## Copy rules

### Do not use AI-flavoured phrasing

Every one of these was on the site in some form before the hygiene PRs. Do not reintroduce them or their close relatives:

- "unleashing the true potential"
- "clear vision and unwavering commitment"
- "incorporate multiple touchpoints"
- "clear, compelling, and emotionally resonant" (or any tricolon of adjectives)
- "align with values, aspirations, and lifestyles" (or any tricolon of nouns)
- "deep understanding of consumer behavior"
- "carving a path towards becoming an industry leader"
- "In today's highly competitive market"
- "move beyond simple features and functions"
- "cutting edge solutions"
- "rise above the noise"
- "seamless / seamlessly"
- "unlock / unleash"
- "amplified our reach exponentially"
- "data-driven campaigns that deliver measurable growth" (without any actual numbers)

Prefer: short declarative sentences, concrete numbers, named clients, named events, verbatim quotes from her interviews.

### Do not stack keywords as a tagline

`Branding | Marketing | Communication | Advertising | Strategy` is not a positioning line — it is a keyword list. Every headline must be a real sentence.

The footer subtitle still contains a similar pipe string (`Personal Branding | Marketing | ...`); it will be rewritten in Branch B. Do not clone the pattern elsewhere in the meantime.

### Do not duplicate the same tagline twice on the page

Home and About previously both used "shaping how African brands grow, show up & succeed" verbatim, in adjacent positions. Vary the wording; don't repeat.

### Do not invent facts about Temitope

Every claim on the site must be verifiable from a public source. The canonical sources today are:

- Her homepage and `/about` page.
- Her Instagram bio (`@brandingqueen2`) and LinkedIn (`ng.linkedin.com/in/temitoperuthjacob`).
- TechEconomy interview (22 September 2025): "Personal Branding in Your 40s: Moving from Execution to Influence".
- The Upper Ent interview (16 September 2025): "The 'Brand Queen' Speaks".
- The `brandxperience.org` and `eleganceinspired.org` sites.

Specifically:

- Her ventures are **Elegance Inspired Limited** (agency) and **Brand Xperience** (learning arm). She is **not** associated with BrandDrive; do not conflate.
- The book title is **"Your Authentic Signature"**. Do not use "Authentic Self Handbook" or any variant.
- No verified "40 Under 40" or major-award recognition exists in public sources — do not fabricate one.
- Birthdate, birthplace and personal-life details are not public — do not invent them. Mark any unconfirmed detail `[NEEDS CONFIRMATION]` inline.

### Fix typos when you see them

Real typos still on the site before the hygiene PRs and now fixed:

- `CONFERNCE` → `Conference`
- `mastro` → `maestro`
- `portraits` (as verb) → `portrays`
- Lowercase "she" at sentence starts in the About bio.

If you see similar issues, fix them; don't leave them for later.

### Sentence-case headings; no ALL-CAPS bodies

Section titles are Title Case ("Featured Work"), not screaming caps ("FEATURED WORK"). Small kickers, button labels and eyebrow labels can be uppercase — reserve caps for typographic emphasis, not paragraphs.

---

## Fact-check rules

- If you need a stat, cite where it came from in the commit message or PR body.
- Real numbers we currently have permission to use: **2,000+** trained across 22 states in 6 weeks (American Spaces, 2023); **~700** university students mentored (Babcock, Ibadan, Obafemi Awolowo University); Brand Xperience self-reported: 1,000+ trained professionals, 20,000+ community members, 500+ WhatsApp community, 50+ cohorts, 10+ countries, 95% recommendation rate, 98% satisfaction rate.
- Do not add fabricated percentages or client counts. The old 90–96% "skill bars" in the About page will be deleted in Branch B for exactly this reason.

---

## Image rules

- Every `<Image>` needs a descriptive `alt` attribute. Use `alt=""` only for purely decorative images and always with intent.
- The logo alt is `"Temitope Ruth Jacob"`. Do not use `"Tols Logo"`, which was a placeholder.
- Do not add images to `/public` that are not referenced in `src/`. The hygiene PR removed 13 orphan assets; do not reintroduce that pattern. Delete on rename.
- Prefer WebP or AVIF over JPG for new photos. Reuse `next/image` optimisation.

---

## Component rules

- **One navbar.** `src/components/navbar.tsx` is the only navbar file. If a page needs a variant, add a prop — do not fork the file. The former `src/components/branding/navbar.tsx` (which had its whole menu commented out) has been deleted.
- **No auto-modals without a session gate.** The `BookModal` opens at most once per browser session and only after the visitor scrolls past 400px or spends 4s+. Any new modal must follow the same rule.
- **Metadata belongs on server components.** If a route needs unique metadata but the page is `"use client"`, add a sibling `layout.tsx` server component that exports `metadata` (see `src/app/about/layout.tsx` and `src/app/branding/layout.tsx`).
- **Avoid Pages Router.** All new API routes go in `src/app/api/<name>/route.ts`, not `src/pages/api/`.
- **Font families cap.** We are down to 3 (Avenir, Averia, SK Modernist). Branch B will drop to 2. Do not add a fourth family without a strong reason.

---

## Brand token rules

- `#F06` (hot pink) is brand equity. After Branch B, it is reserved for the logo, monogram and one hero highlight only — not section fills.
- The Branch B palette is cream `#FAF6F1` background, ink `#1A1614` text, rose `#D4756B` accent, blush `#F4DDD5` surface, aubergine `#3D1F2E` for footer/dividers.
- Do not use the `/branding` page's purple→pink gradient (`#9a33cc → #ff0066`) anywhere else. It is off-brand and will be removed when `/branding` is refactored into `/programs`.
- Contrast: verify WCAG AA on every text/background combination. White text on `#FFD1F7` (the misnamed `lightGray`) failed contrast in the pre-hygiene site.

---

## SEO rules

- Every route must have a unique `<title>` and `<meta name="description">`. Home + `/about` + `/branding` + `/privacy` are covered; new routes must add either a `metadata` export or a `layout.tsx` that exports one.
- Every route must be listed in `src/app/sitemap.ts` unless intentionally excluded.
- Every route must be reachable from the main nav or the footer.
- `alt` text on images is not just accessibility — it's SEO too.

---

## Naming rules

- Home page section: **Featured Work**. About page section: **Some Of My Projects**. Do not rename either to match the other; they intentionally show different content (home = 2 highlights, about = full 6).
- The book is **Your Authentic Signature** (title) with subtitle **A Personal Branding Handbook**.
- The program is **Brand Experience** (Elegance Inspired's initiative), delivered via **Brand Xperience** (the learning platform). Both spellings are correct; do not "fix" the missing E in Xperience.

---

## Process rules

- Break work into ~5 issues per PR. Three merged PRs shipped Branch A cleanly at that grain.
- Each PR must run `npx tsc --noEmit` clean before merge.
- Each PR body must list `Closes #<n>` for every issue it resolves, so GitHub auto-closes them.
- Squash-merge PRs into `main` (default in this repo).
- If a PR conflicts because another PR merged first, rebase on `origin/main`, resolve, and force-push with `--force-with-lease`. Do not merge `main` back into a feature branch.

---

## When something on this list feels wrong

Update this file in the same PR as the change. Rules that live only in someone's head become the next audit finding.
