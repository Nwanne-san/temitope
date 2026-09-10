// Content data for the /resources hub.
// Where a specific item could not be verified from public sources (search-only
// research; WebFetch was denied), it is marked NEEDS CONFIRMATION so a human
// can replace the placeholder with the real link before launch.

export type ResourceType =
  | "course"
  | "video"
  | "article"
  | "talk"
  | "podcast"
  | "download";

export interface ResourceCard {
  id: string;
  type: ResourceType;
  title: string;
  description: string;
  source?: string;
  ctaLabel: string;
  url: string | null;
  external?: boolean;
  meta?: string;
  featured?: boolean;
  comingSoon?: boolean;
  image?: string;
  imageAlt?: string;
}

export const resourceTypeLabels: Record<ResourceType, string> = {
  course: "Course",
  video: "Videos",
  article: "Articles",
  talk: "Talks",
  podcast: "Podcast",
  download: "Free handbook",
};

export const resources: ResourceCard[] = [
  // ── Featured "Start here" ────────────────────────────────────────────
  {
    id: "your-authentic-signature",
    type: "download",
    title: "Your Authentic Signature",
    description:
      "The personal branding handbook. Practical guidance on naming your brand and communicating it clearly. Free to download.",
    source: "Handbook · Selar",
    ctaLabel: "Download",
    url: "https://selar.com/1v4g42",
    external: true,
    meta: "PDF · Free",
    featured: true,
    image: "/yas-handbook.jpg",
    imageAlt: "Your Authentic Signature handbook cover",
  },
  {
    id: "brandup-accelerator",
    type: "course",
    title: "BrandUp Accelerator",
    // NEEDS CONFIRMATION — course specifics (format, price, duration, curriculum)
    // are not published on brandxperience.org's public pages. Copy is deliberately
    // generic until Temitope confirms the enrollment page and course details.
    description:
      "A cohort-based personal branding programme from Brand Xperience. Small groups, direct feedback, and the framework Temitope uses with her private clients.",
    source: "Brand Xperience",
    ctaLabel: "Enroll",
    url: "https://www.brandxperience.org/",
    external: true,
    meta: "Cohort · Paid",
    featured: true,
    image: "/brand-consultation.jpg",
    imageAlt: "Brand consultation session",
  },

  // ── Videos (YouTube) ─────────────────────────────────────────────────
  {
    id: "youtube-channel",
    type: "video",
    title: "The Branding Queen on YouTube",
    // NEEDS CONFIRMATION — individual video titles/URLs were not surfaced in
    // public search. Card links to the channel; add individual video cards
    // below once flagship videos are chosen.
    description:
      "Short videos on personal branding, client work, and building a career in African markets.",
    source: "YouTube · @thebranding_queen",
    ctaLabel: "Watch",
    url: "https://www.youtube.com/@thebranding_queen",
    external: true,
    meta: "Channel",
    image: "/YOUTUBE.jpg",
    imageAlt: "The Branding Queen YouTube channel",
  },

  // ── Articles ─────────────────────────────────────────────────────────
  {
    id: "techeconomy-personal-branding-40s",
    type: "article",
    title: "Personal Branding in Your 40s: Moving from Execution to Influence",
    description:
      "An interview on why most professionals stall at 40, and what it takes to move from doing the work to leading the room.",
    source: "TechEconomy · September 2025",
    ctaLabel: "Read",
    url: "https://techeconomy.ng/personal-branding-in-your-40s-moving-from-execution-to-influence-a-sequel-with-temitope-ruth-jacob/",
    external: true,
    meta: "Interview",
    featured: true,
    image: "/articles-2.jpg",
    imageAlt: "TechEconomy interview feature",
  },
  {
    id: "upper-ent-brand-queen",
    type: "article",
    title: "The Brand Queen Speaks: Authenticity, Identity and the Future of African Branding",
    description:
      "Temitope on identity, authenticity, and why African creators should stop looking to the West for validation.",
    source: "The Upper Ent · September 2025",
    ctaLabel: "Read",
    url: "https://theupperent.com/2025/09/16/the-brand-queen-speaks-temitope-ruth-jacob-on-authenticity-identity-and-the-future-of-african-branding/",
    external: true,
    meta: "Interview",
    image: "/pfp.jpg",
    imageAlt: "Temitope Ruth Jacob portrait",
  },
  {
    id: "medium-profile",
    type: "article",
    title: "Essays on Medium",
    // NEEDS CONFIRMATION — individual Medium article URLs were not surfaced in
    // public search. Card links to the profile until specific pieces are chosen.
    description:
      "Longer essays from Temitope on branding and building a career in African markets.",
    source: "Medium · @temitoperuthjacob",
    ctaLabel: "Read",
    url: "https://temitoperuthjacob.medium.com",
    external: true,
    meta: "Profile",
    image: "/articles-2.jpg",
    imageAlt: "Essays and articles",
  },

  // ── Talks ────────────────────────────────────────────────────────────
  {
    id: "tedx-samaru",
    type: "talk",
    title: "TEDxSamaru",
    description:
      "Temitope's TEDx talk at Ahmadu Bello University on personal branding and the room you walk into.",
    source: "TEDxSamaru · 2025",
    ctaLabel: "Watch",
    // NEEDS CONFIRMATION — no public video URL surfaced; LinkedIn recap linked
    // below until the talk is uploaded.
    url: "https://www.linkedin.com/posts/temitoperuthjacob_had-a-great-time-at-tedxsamaru-where-i-led-activity-7369652530462617600--et3",
    external: true,
    meta: "Talk",
    featured: true,
    image: "/GOTNI.png",
    imageAlt: "TEDxSamaru stage",
  },
  {
    id: "myficon",
    type: "talk",
    title: "MYFICON",
    description:
      "Featured speaker at MYFICON 2023 on where Nigerian branding is heading next.",
    source: "MYFICON · December 2023",
    ctaLabel: "See recap",
    url: "https://www.instagram.com/p/C0fGz9voako/",
    external: true,
    meta: "Talk",
    image: "/performx.png",
    imageAlt: "MYFICON speaking engagement",
  },
  {
    id: "american-spaces",
    type: "talk",
    title: "American Spaces Training Tour",
    // NEEDS CONFIRMATION — the "2,000+ across 22 states in 6 weeks (2023)" figure
    // comes from the repo's About/RULES docs but no independent press citation
    // was found in this session. Keep the description conservative until sourced.
    description:
      "A training tour delivered across 22 Nigerian states in partnership with the American Spaces network.",
    source: "American Spaces · 2023",
    ctaLabel: "Learn more",
    url: null,
    meta: "Training tour",
    image: "/americann.png",
    imageAlt: "American Spaces training tour",
  },

  // ── Podcast (coming soon) ────────────────────────────────────────────
  {
    id: "podcast-coming-soon",
    type: "podcast",
    title: "The Brand Xperience Podcast",
    // NEEDS CONFIRMATION — working title inferred from the parent brand.
    description:
      "Long-form conversations on branding and business with Nigerian founders and creators. Launching soon.",
    source: "Coming 2026",
    ctaLabel: "Notify me",
    url: null,
    meta: "Coming soon",
    comingSoon: true,
    image: "/pfp.jpg",
    imageAlt: "Podcast coming soon",
  },
];
