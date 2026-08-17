# REDESIGN.md

Branch B plan. This is what we will build after all Branch A hygiene PRs merge. Every decision here is reflected in one of the 13 GitHub issues #19–#31.

---

## Scope in one paragraph

Turn the site from a one-page portfolio with a homepage-scrolling "resources" strip into a proper 8-page authority site for a speaker + author + consultant. Ground the brand palette (cream + dusty rose, hot pink kept as small equity only), collapse to two font families, kill the intrusive book modal, add real proof (media logos, named clients, quantified impact), and give event planners a dedicated `/speaking` page with a booking form and downloadable one-sheet.

---

## Information architecture

Current (5 pages, one of which is orphaned):

```
/            /about        /branding        /model            /privacy
                                            (unrelated,       (added in
                                             deleted in       Branch A)
                                             hygiene)
```

Target (8 pages, all in the main nav or footer):

```
/                          Home
/about                     About — long-form (~1,700 words)
/speaking                  Speaking — topics + reel + one-sheet + booking form
/work                      Work — case studies index → /work/[slug]
/books                     Books — index → /books/your-authentic-signature
/programs                  Programs — Brand Xperience programs (SPROUT, BrandUp, etc.)
/resources                 Resources — filterable library + lead magnet
/press                     Press — media features + downloadable kit
/contact                   Contact — routed form (Speak / Consult / Media / Other)
/privacy                   (kept)
```

Main nav shrinks to: **About · Speaking · Books · Programs · Resources · Contact**.
Work and Press live in the footer and are linked from About and Home.

Redirects: `/branding` → 301 `/programs`.

---

## Brand palette migration

Keep hot pink as **equity**, not as dominant colour.

```
--bg-cream:      #FAF6F1   (page background)
--ink:           #1A1614   (body text)
--rose:          #D4756B   (accent — buttons, monograms, date markers)
--blush:         #F4DDD5   (surface tints)
--aubergine:     #3D1F2E   (footer, section dividers)
--brand-pink:    #F06      (kept — logo, monogram, one hero highlight only)
```

Section mapping:

| Current                                | Target                              |
| -------------------------------------- | ----------------------------------- |
| Hero `bg-gray-200`                     | `bg-cream`                          |
| Testimonials `bg-primary` (#f06)       | `bg-blush` + rose accent            |
| Education `bg-primary`                 | `bg-cream` + rose divider           |
| Speaking CTA `bg-[#FFD1F7]`            | `bg-blush`                          |
| Footer `bg-zinc-800`                   | `bg-aubergine`                      |
| `/branding` gradient `#9a33cc→#ff0066` | Removed on refactor to `/programs`  |

All text/background combinations must pass WCAG AA. White on `#FFD1F7` (the current speaking CTA) fails — retire it.

---

## Typography

From 3 families down to 2:

- **Display serif:** Fraunces (variable, warm, character-rich) or Cormorant Garamond.
- **Body sans:** Inter, or keep Avenir if the local font license is confirmed.

Drop: Averia, SK Modernist.

Type scale defined in `tailwind.config.ts` fontSize extension. Use `font-serif` for display + eyebrow labels only; `font-sans` for everything else.

---

## Page-by-page specs

### `/` Home (issues #21, #22, #23)

Sections in order:

1. **Hero.** Headshot left. Right side: kicker `BRAND STRATEGIST · SPEAKER · AUTHOR`, H1 *"I shape how African brands show up, grow and succeed."* (already shipped in Branch A), supporting sentence, two distinct CTAs — `Book Temitope to speak` → `/speaking` and `Read the handbook` → `/books/your-authentic-signature`. Drop the WhatsApp button from the nav — replace with `Contact`.
2. **Media & partners bar.** "Featured in / Worked with": TechEconomy, The Upper Ent, NECCI PR Roundtable, PerformX, Yantic, American Spaces, TEDxSamaru, Masterpiece Impact.
3. **Signature framework.** Three-column card: *Define your values · Communicate with clarity · Consistently deliver on promises.* (from TEDxSamaru).
4. **Impact strip.** Four stats, each with a source link:
   - `2,000+` trained across `22 states, 6 weeks` — American Spaces
   - `~700` university students mentored — Babcock, Ibadan, OAU
   - `20,000+` Brand Xperience community
   - `10+` countries reached
5. **Featured work.** 3 case-study cards → `/work/[slug]`.
6. **Book pitch.** Cover + one-line promise + free-chapter opt-in + "Read more" → `/books/your-authentic-signature`.
7. **Testimonials.** 3 rotating, each with photo + name + org logo. Drop the AI-flavoured one; keep the authentic four.
8. **Pull quote from press.** *"A brand without story is an empty shell."* (The Upper Ent, Sept 2025).
9. **Newsletter.** Working capture (already shipped in Branch A hygiene) — surface subscriber count once >1k.
10. **Footer.** Real links, working Privacy Policy (shipped), full sitemap.

Killed: the auto-triggered `BookModal` on the home page. Session-gate is fine as a transitional layer but the real replacement is the dedicated book pitch section + `/books/…` page.

### `/about` (issue #24)

Rewrite to ~1,700 words, 7 sections:

1. Positioning statement (1 sentence).
2. Origin story — Zaria → BSc Human Anatomy at ABU → pivot to marketing → MSc at Rome Business School → London certifications → founding Elegance Inspired (2021).
3. Ventures — Elegance Inspired, Brand Xperience, Dream Center Trybe, O2 Academy.
4. Signature framework (expanded).
5. Sectors and clients — tech, fashion, real estate, healthcare, consumer goods.
6. Recognition and press — TechEconomy, Upper Ent, Tribune, The Nation (with links).
7. Nigerian identity paragraph — quote from her IG post: *"For African creators, the goal is not to echo the West, but to stand out and shape culture on our own terms."*

Delete the 90–96% skill bars. Replace with a short "How I work" block (3–4 bullets).
Add a downloadable press kit link + "Book Temitope to Speak" CTA at the bottom.

### `/speaking` (issue #26)

Model: Luvvie Ajayi Jones's `/speaking`.

- Hero with on-stage photo + booking CTA.
- 3 signature topics (draft):
  1. Personal Branding in Your 40s: From Execution to Influence.
  2. African Brands, Global Stages: Building on Our Own Terms.
  3. The Authentic Signature Framework.
- 60–90 s video reel (placeholder OK at launch).
- Named past events grid: TEDxSamaru, NECCI PR Roundtable, PerformX Summit, Upgrade Marketing Conference, MYFICON.
- 3 speaker testimonials.
- Booking form with qualifying fields: name, org, event, date, audience size, budget range, format (keynote / workshop / panel), notes. Submits to `/api/contact` (new endpoint or Resend).
- Downloadable one-sheet PDF + high-res headshots pack link.

### `/books` and `/books/your-authentic-signature` (issue #27)

- `/books/page.tsx` — grid of books (one for now).
- `/books/your-authentic-signature/page.tsx` — cover, one-line promise, buy/download button (Selar), 150-word synopsis, TOC, sample-chapter email gate, endorsements (placeholder), author block, related resources (framework + podcast).
- After this ships, remove the `BookModal` from `/` entirely.

### `/programs` (issue #28)

Fold `/branding` into `/programs`. Keep the "Key Components", "Who Is This For", "Benefits" and "Meet the Convener" content. Add cards for the five named programs from `brandxperience.org`:

- **SPROUT** — personal branding conversation.
- **BrandUp** — personal branding course.
- **Resonance Blueprint** — strategy masterclass.
- **Own Your Name** — university tour program.
- **The Influence Code** — conference with guest speakers.

Each card: what it is · who it's for · format · outcome · CTA.

Set `/branding` → 301 redirect to `/programs` in `next.config.mjs`.

### `/resources` (issue #25)

Model: Mel Robbins's `/downloads`.

- Hero: "Free tools to build your personal brand".
- Featured lead magnet: *Your Authentic Signature* free first chapter, email-gated → `/api/subscribe`.
- Filter tabs: All · Free downloads · Articles · Podcast · Videos · Book chapters · Speaking clips · Community.
- Card grid — initial content:
  - Article — "Personal Branding in Your 40s" (TechEconomy).
  - Article — "The Future of African Branding" (Upper Ent).
  - Video — TEDxSamaru clip.
  - Community — WhatsApp, Instagram, LinkedIn.
  - Paid — Personal Branding Consultation (Selar), full handbook (Selar).

Update the `Resources` nav link to `/resources` (currently scrolls to a homepage anchor).

### `/work` and `/work/[slug]` (issue #29)

- `/work/page.tsx` — grid of case studies.
- `/work/[slug]/page.tsx` template with sections: Client · Challenge · Approach · Outcome · Testimonial (if any).
- 3 initial case studies: `necci-pr-roundtable-2024`, `performx-summit-2025`, `american-spaces-2023`. All facts must come from her About page or press.

### `/press` (issue #30)

- Press features grid: TechEconomy, Upper Ent, Tribune, The Nation. Each is a clickable quote card.
- Downloadable press kit (bio + high-res headshots + logos pack) — placeholder link OK at launch.

### `/contact` (issue #30)

- Routed form with intent radio: **Speak / Consult / Media / Other**.
- Fields: name, org, email, message. Submits to `/api/contact`.
- Contact details block (email `hi@temitoperuthjacob.com`, phone, Abuja, socials).

---

## Global changes (issues #18, #19, #20)

- **Palette** — introduce the new tokens above; migrate section fills.
- **Typography** — drop to 2 families; add type scale.
- **Nav** — 6-item main nav; `Contact` replaces the WhatsApp button.
- **Footer** — reflect the new IA; keep the working newsletter and Privacy Policy.

---

## Sequencing

Roughly 4–5 PRs, each carrying 2–4 of the redesign issues:

1. **PR B1 — Foundations.** Palette + fonts + nav refactor + updated footer (#18, #19, #20).
2. **PR B2 — Home rebuild.** Media bar, impact strip, framework, featured work, book pitch, killed modal (#21, #22, #23).
3. **PR B3 — About + Programs.** Long-form About rewrite + `/programs` refactor (#24, #28).
4. **PR B4 — Speaking + Books + Resources.** Three new content pages (#25, #26, #27).
5. **PR B5 — Work + Press + Contact.** Case studies template + press page + routed contact form (#29, #30).

Each PR must run `npx tsc --noEmit` clean, must ship with unique metadata for every new route (see `RULES.md`), and must be added to `src/app/sitemap.ts`.

---

## Reference sites and templates

For visual and structural reference during Branch B. Do not copy pixel-for-pixel; use these to check hierarchy and section presence.

Personal brand sites:

- Luvvie Ajayi Jones — <https://luvvie.org/> (the closest structural analogue)
- Michelle B. Griffin — <https://michellebgriffin.com/> (three-pillar frame)
- Bola Sokunbi — <https://www.bolasokunbi.com/> (Nigerian speaker, minimalist)
- Mel Robbins — <https://www.melrobbins.com/downloads/> (resources page reference)
- Cassandra Worthy — <https://cassandraworthy.com/> (IP-first positioning)
- Rachel Rodgers / Hello Seven — <https://helloseven.co/about/> (long-form About)
- Bozoma Saint John — <https://bozomasaintjohn.com/> (editorial hero)
- Jay Shetty — <https://jayshetty.me/> (newsletter with subscriber count)

Speaker one-sheets:

- Neen James — <https://neenjames.com/wp-content/uploads/2022/01/NeenJames-Two-Pager-2022.pdf>
- Chandler Bolt — <https://elitespeakersagency.com/wp-content/uploads/2019/06/Chandler-Bolt-Speaker-Kit.pdf>

Author book pages:

- Emily Henry — <https://emilyhenrybooks.com/>
- Taylor Jenkins Reid — <https://taylorjenkinsreid.com/books/>
- Logan Ury — <https://loganury.com/>

Templates to consult if we ever consider a rebuild rather than in-place:

- Framer **Presence** (Medium Rare) — <https://mediumrare.shop/templates/presence-webflow-personal-public-speaker-resume-template> — closest structural match, ~$49.
- Squarespace **Perfectionist** (Applet Studio) — <https://www.applet.studio/shop/p/squarespace-template-perfectionist> — ~$189, has a Resources page baked in.

---

## Things we are explicitly not doing in Branch B

- Not commissioning new photography inside Branch B — placeholder assets are fine; the photo drop-in is a later pass.
- Not adding a full CMS. Case studies, resources, programs are hand-authored object literals or MDX. A CMS is out of scope until content volume justifies it.
- Not changing the deploy target. Vercel stays.
- Not touching Elegance Inspired or Brand Xperience sub-sites. This repo is only `temitoperuthjacob.com`.

---

## Definition of done for Branch B

- All 13 redesign issues (#19–#31) closed.
- Home, About, Speaking, Books, Programs, Resources, Work, Press, Contact all live and reachable from the main nav or footer.
- No page uses the old `#F06`-as-fill pattern; hot pink appears in logo + one hero highlight only.
- No hard-loaded font other than the two selected families.
- Every route in the sitemap.
- Newsletter (already working after Branch A) still works.
- `npx tsc --noEmit` clean, `npm run build` clean, no console warnings on the deployed preview.
