# AUDIT.md

Full audit of the site as it existed before the hygiene PRs merged (August 2026). Preserved as the reference for the redesign work in `REDESIGN.md` and for any future "why did we do that?" questions.

Every finding here has been either shipped in Branch A (see `## Hygiene status`) or scheduled for Branch B (see `REDESIGN.md`).

---

## Table of contents

1. What existed
2. Software-engineer lens — bugs, dead code, tech debt
3. UI/UX-engineer lens — flow, hierarchy, accessibility
4. Copywriter lens — voice, AI-flavour, real errors
5. CMO lens — proof, funnel, conversion
6. What was missing
7. What was overdone
8. Corrections to public facts
9. Hygiene status (Branch A)
10. Sources

---

## 1. What existed

**Routes**

| Route       | Purpose                                                               |
| ----------- | --------------------------------------------------------------------- |
| `/`         | Home: hero, logo carousel, achievements, testimonials, resources     |
| `/about`    | Bio hero (5 paragraphs), education, projects (6), skill bars, speaking |
| `/branding` | "Brand Experience Initiative" landing page                            |
| `/model`    | GridIQ electricity dashboard prototype — **unrelated to the site**   |

**Home sections in order:** Navbar → Hero → LogoCarousel ("Organisations Impacted") → Achievements (only 2 items) → Testimonials (5) → Resources (6 cards) → Footer, plus a `BookModal` that auto-opened after 3 s on every visit.

**About sections:** Hero bio (5 paragraphs) → Education + 3 certs → Recent Projects (6) → Skills bars (all 90–96%) + Speaking CTA → Footer. An `Impact` component existed but was commented out.

**Brand tokens:** primary `#f06`, `lightGray #FFD1F7`, secondary `#4c4c4c`; hero background `bg-gray-200`; footer `bg-zinc-800`. Fonts: Avenir (default sans), Averia Serif Libre (display), Poppins, Bai Jamjuree, SK Modernist — **five families loaded**.

**Integrations:** Vercel Analytics wired. Mailchimp `/api/subscribe.ts` existed in Pages-Router format (dead code — the site is App Router). Footer newsletter form used `mailto:` as its submit.

---

## 2. Software-engineer lens

### Critical bugs

1. `/branding` hero **"Get Started"** button had no `href` and no `onClick` — clicks did nothing.
2. Footer **newsletter** was broken: the input was collected but never sent; "Subscribe" was a `mailto:` link.
3. Footer **Privacy Policy** link had `href=""` — reloaded the current page.
4. `/model` route was a **GridIQ dashboard prototype** unrelated to Temitope. It shipped in the bundle and was indexable.
5. Two navbars (`components/navbar.tsx` and `components/branding/navbar.tsx`); the branding one had its desktop menu **commented out**.
6. `<Impact />` component existed but was commented out on `/about`.
7. `layout.tsx` imported `Navbar` but did not render it.

### Housekeeping

- Logo `alt` read `"Tols Logo"` everywhere.
- ~12 unused images in `/public` (`Consultation.jpg`, `INSTA.jpg`, `MAIME.png`, `YAS BOOK .jpg`, `out now*.jpg`, `market.png`, `pfp-about.jpg`, `profile.png`, `tik-tok.png`, `tiktok.png`, plus a filename with a stray space, plus `handbook.jpg`+`handbook.jpeg` duplicates), and a stray root `grid ig 3.html`.
- 5 font families loaded → CLS + bytes. Two sans + one serif is enough.
- Book modal fired at 3 s on every visit for every visitor with no dismissal memory — interrupted even people who came for the book.
- No `sitemap.xml`, no `robots.txt`, no OG for `/about` or `/branding`.
- No 404 page, no loading states.
- `keywords` meta was only four words — weak.

---

## 3. UI/UX-engineer lens

- **Hero was background-heavy, message-light.** `bg-gray-200` fought the hot pink brand. The tagline `Branding | Marketing | Communication | Advertising | Strategy` was a keyword string, not a positioning line.
- **Two CTAs both went to Selar** ("MEET TEMITOPE" → `selar.com/412292`). The label "MEET TEMITOPE" was misleading — it opened a paid consult page, not an About page.
- **"Some Of My Projects"** on the home page showed only 2 items and linked "VIEW ALL" to `/about` — but on `/about` the same section was titled "Some Of My projects" (capitalization drift) with 6 items.
- **Skills as 90–96% bars** is a dated pattern and immediately reads as inflated. Every skill within a 6-point band trained the eye to disbelieve them.
- **Testimonials carousel** autorotated every 6 s — too fast to finish reading long quotes, no pause indicator, accessibility issue.
- **Resource cards** all had the same CTA copy ("Connect With Me") on WhatsApp, YouTube and Instagram cards — visually identical, no differentiation.
- **Book modal at 3 s on every load + `BookPromo` sticky forever** = interruption pattern, hurts trust.
- **Contrast**: white text on `#FFD1F7` (used in speaking CTA) failed WCAG.
- No focus rings on custom buttons; `motion.div` transitions on multiple sections caused layout shift on slower devices.
- Mobile nav was fine, but the WhatsApp CTA in the nav sent users off-site before they'd read anything.
- The `/branding` page used a purple→hot-pink gradient (`#9a33cc → #ff0066`) that was off-brand from every other page.
- Navbar "BRANDX" link went to `brandxperience.org` — visitors left the site with no way back.

---

## 4. Copywriter lens

### AI-flavoured / clichéd copy that was on the live site

- "unleashing the true potential of brands"
- "clear vision and unwavering commitment"
- "incorporate multiple touchpoints, including digital media, social media, and experiential marketing"
- "a clear, compelling, and emotionally resonant brand" (tricolon)
- "align with their customers' values, aspirations, and lifestyles" (tricolon)
- "deep understanding of consumer behavior and market trends"
- "carving a path towards becoming an industry leader"
- "In today's highly competitive market…" (textbook AI opener)
- "move beyond simple features and functions"
- "cutting edge solutions" / "rise above the noise"
- Testimonial 2 (Vivian Efajemue): "strategic genius…amplified our reach exponentially…data-driven campaigns that deliver measurable growth" — the only testimonial that read AI-generated; every other was authentic (uneven grammar, honest voice, personal detail).

### Real typos in live copy

- `CONFERNCE` (should be `Conference`) on the Yantic project.
- `mastro` (should be `maestro`) and `portraits` used as a verb (should be `portrays`) in two testimonials.
- Lowercase sentence starts in About: "she has worked…", "she believes in…", "she has a passion".
- Book modal title said "Authentic Self Handbook" but the public book is "Your Authentic Signature".

### Positioning problems

- Home tagline and About tagline were literally the same line — the site said the same thing twice.
- **No ownable phrase.** Peer sites (Cassandra Worthy's "Change Enthusiasm®", Michelle Griffin's "Be Seen and Sought After", Lisa Nichols' "Inspire. Lead. Transform.") each own a phrase. Temitope's site did not.
- Public interviews (TechEconomy Sept 2025, The Upper Ent Sept 2025) contained much stronger quotable lines she has actually said — none of them appear on the site:
  - "A brand without story is an empty shell."
  - "The biggest mistake is treating personal branding like a CV — a list of past achievements rather than a living narrative."
  - "For African creators, the goal is not to echo the West, but to stand out and shape culture on our own terms."

---

## 5. CMO lens

- **Zero named clients above the fold.** Real engagements exist (NECCI, PerformX, Yantic, American Spaces, TEDxSamaru, MYFICON, Masterpiece Impact) — none appeared as a "featured in / worked with" logo bar under the hero.
- **No media bar.** She was covered by TechEconomy and The Upper Ent in September 2025 — no "As seen in" strip.
- **Quantifiable results were hidden.** "Trained 2,000 people across 22 states in 6 weeks" was buried inside project #6 on the About page. That is a headline statistic. Same with "Mentored ~700 university students across Babcock, Ibadan, OAU".
- **No dedicated Speaking page** with topics, one-sheet PDF, reel, or booking form with qualifying fields.
- **No dedicated Book page.** The book existed only as a 3-second modal. Modals break sharing, SEO and retargeting.
- **No dedicated Resources page.** The "Resources" nav link scrolled to a home section. Peers (Mel Robbins, Rachel Rodgers, Cy Wakeman) all have `/resources` as its own hub.
- **Funnel routed everything to WhatsApp or Selar.** No email capture, no CRM, no nurture sequence.
- **Brand Xperience metrics** (1,000+ trained, 20,000+ community, 95% recommendation, 500+ WhatsApp members, 50+ cohorts, 10+ countries) were not surfaced on the personal site.
- **No press kit / bio download / high-res headshots** — event planners need these on a single click.

---

## 6. What was missing entirely

Sections / pages that should exist and don't:

1. `/speaking` (topics, reel, one-sheet, booking form)
2. `/books/your-authentic-signature` (dedicated book page + free-chapter opt-in)
3. `/resources` (real page, filterable library, gated lead magnet)
4. `/press` (features grid, downloadable press kit)
5. `/work` / case studies (NECCI, PerformX, American Spaces, Yantic told as narratives with outcomes)
6. `/contact` (proper form with intent routing — Speak / Consult / Media / Other — not just a WhatsApp link)
7. `/programs` (folds the current `/branding` into a broader hub with SPROUT, BrandUp, Resonance Blueprint, Own Your Name, The Influence Code)

Content missing:

- **Signature framework** — she teaches "Define values → Communicate with clarity → Consistently deliver" (from TEDxSamaru). This is her IP; the site never states it.
- **Nigerian heritage & POV** — Luvvie Ajayi Jones's playbook. Currently absent.
- **Newsletter with subscriber count** as social proof.
- **Podcast episodes** (Brand Xperience podcast is referenced but not surfaced).
- **Featured pull quotes** from the two September 2025 press interviews.
- **Editorial photography** — one professional shoot with dramatic lighting; the current headshot is fine but used everywhere.

---

## 7. What was overdone

- Five font families.
- Animation-on-every-section that added cost and delayed LCP.
- 3-second auto-modal + persistent `BookPromo` + WhatsApp nav button + inline resource CTAs = **four competing hooks** on the same fold.
- Skill bars, "Some Of My Projects" title appearing twice under different capitalizations, and the same tagline on Home and About.

---

## 8. Corrections to public facts

Verified from public sources and locked into `RULES.md`:

1. Her ventures are **Elegance Inspired Limited** (agency, founded 2021) and **Brand Xperience** (learning arm, `brandxperience.org`) — plus mentoring/instructor roles at Dream Center Trybe and O2 Academy. She is **not** associated with BrandDrive (a separate Nigerian fintech led by Ndu Ekwomadu).
2. The book is **"Your Authentic Signature"** (subtitle *A Personal Branding Handbook*). No ISBN found; appears to be a self-published digital handbook available on Selar.
3. Two strong recent press pieces: **TechEconomy 22 Sept 2025** and **The Upper Ent 16 Sept 2025**. Both are quotable.
4. **No "40 Under 40"** or major-award recognition was findable in public sources — do not fabricate one.
5. Education (verified): BSc Human Anatomy (Ahmadu Bello University, Zaria) → MSc Marketing and Sales (Rome Business School, Rome) → Brand Management + Digital Marketing certifications (London School of Business Administration) → Agile/Scrum certification (Agillant Group, North Carolina).
6. Recurring positioning line: **"I shape how African brands show up, grow and succeed."** (from her IG bio and homepage).
7. Signature framework (from TEDxSamaru): **Define your values → Communicate with clarity → Consistently deliver on your promises.**
8. Brand Xperience self-reported metrics we may quote: 1,000+ trained professionals, 20,000+ community members, 500+ WhatsApp community, 50+ cohorts run, 10+ countries reached, 95% recommendation rate, 98% satisfaction rate.
9. Real named events: TEDxSamaru (~Sept 2025), NECCI PR Roundtable 24th ed. (2024, "Women In Technology: Breaking Barriers"), PerformX Summit / Akin Akinpelu Conference (2025), Upgrade Marketing Conference 2025 ("Marketing is not a Department"), American Spaces Nigeria training tour (2023 — 2,000+ trained across 22 states in 6 weeks), MYFICON (Abuja International Conference Centre), Masterpiece Impact Africa launch (2025).
10. Birthdate, birthplace and personal-life details are **unknown from public sources**. Do not infer them.

---

## 9. Hygiene status (Branch A — merged August 2026)

17 GitHub issues shipped across three PRs, all squash-merged into `main`:

**PR #32 — Copy fixes** (5 issues: #5, #7, #8, #9, #12)

- Logo alt text corrected across navbar, mobile navbar, footer.
- Testimonial typos fixed (`portraits` → `portrays`, `mastro` → `maestro`) with light grammar cleanup.
- Yantic project role: `UPGRADE MARKETING CONFERNCE` → `Upgrade Marketing Conference`.
- Book modal + promo renamed to "Your Authentic Signature".
- Home Achievements section renamed to "Featured Work"; button "SEE ALL PROJECTS" now targets `/about#projects`.
- About section title casing fixed.
- Hero pipe-string tagline replaced with kicker + H1 + supporting line.

**PR #33 — Content rewrites + cleanup** (6 issues: #6, #10, #11, #14, #15, #16)

- About bio rewritten from 5 AI-flavoured paragraphs to 3 evidence-first paragraphs.
- `/branding` intro rewritten (opener dropped, tricolons removed).
- `Impact` component deleted; import removed from `/about`.
- 13 orphan public assets + `grid ig 3.html` + duplicate `handbook.jpeg` deleted.
- Poppins + Bai Jamjuree font imports removed; `Button` base moved to `font-sans`.
- Duplicate `branding/navbar.tsx` deleted; `/branding` now uses the main navbar.
- Net: 958 lines removed, 37 added.

**PR #34 — Broken UX + SEO infra** (6 issues: #2, #3, #4, #13, #17, #18)

- Newsletter migrated from Pages-Router `src/api/subscribe.ts` to App-Router `src/app/api/subscribe/route.ts`; footer form now submits via `fetch` with proper success / error states.
- `/privacy` page created with a plain-language policy; footer link fixed.
- `/branding` "Get Started" button now smooth-scrolls to a new `#what-we-offer` anchor.
- `/model` route deleted.
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx` added.
- Root metadata expanded (broader keywords, `metadataBase`); unique metadata for `/about` and `/branding` via sibling `layout.tsx` server components.
- `BookModal` session-gated: opens once per browser session, only after scroll > 400 px or 4 s elapsed.

---

## 10. Sources

Public sources used to author copy and verify facts. Cite one of these in commit messages when introducing new claims.

- <https://www.temitoperuthjacob.com/> and <https://www.temitoperuthjacob.com/about/>
- <https://www.instagram.com/brandingqueen2/>
- <https://ng.linkedin.com/in/temitoperuthjacob>
- <https://ng.linkedin.com/company/elegance-branding>
- <https://www.eleganceinspired.org/>
- <https://www.brandxperience.org/>
- <https://techeconomy.ng/personal-branding-in-your-40s-moving-from-execution-to-influence-a-sequel-with-temitope-ruth-jacob/>
- <https://theupperent.com/2025/09/16/the-brand-queen-speaks-temitope-ruth-jacob-on-authenticity-identity-and-the-future-of-african-branding/>
- <https://tribuneonlineng.com/necci-pr-roundtable-2024-issues-as-women-set-to-discuss-technology/>
- <https://thenationonlineng.net/expert-launches-initiative-to-empower-professionals/>
- <https://www.facebook.com/KreativeInnovators/posts/122151358868624061/>
- <https://guardian.ng/business-services/akinpelu-launches-performx-nexus-to-bridge-strategy-execution-gap/>

Reference sites used for the Branch B redesign brief are listed in `REDESIGN.md`.
