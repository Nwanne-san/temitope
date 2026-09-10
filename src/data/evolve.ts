// Content data for the Evolve book page (/books).
// Anything not directly verifiable from an author-provided source is marked
// NEEDS CONFIRMATION so it can be replaced before launch.

export const evolve = {
  title: "Evolve",
  subtitle: "A personal branding book for the second half of your career.",
  // NEEDS CONFIRMATION — user provided ₦25,000 paperback; digital / bundle TBD.
  price: {
    paperback: "₦25,000",
    note: "Waitlist members get a launch-week discount.",
  },
  // NEEDS CONFIRMATION — the book is being introduced at SPROUT (Brand Xperience)
  // ahead of a wider release.
  launchContext:
    "Launching at SPROUT, the Brand Xperience personal branding session, before the general release.",
  // NEEDS CONFIRMATION — draft synopsis pending author copy.
  synopsis: [
    "Evolve is a personal branding book for professionals who have already built a reputation and are ready to grow past it.",
    "It is written for founders, executives and creators in Nigeria and across Africa who have done the work, been in the room, and now need a clearer way to talk about who they are and where they are going next.",
  ],
  // NEEDS CONFIRMATION — outcomes derived from Temitope's signature framework
  // (Define your values · Communicate with clarity · Consistently deliver on promises).
  outcomes: [
    "Name the values your brand is actually built on.",
    "Audit your current positioning against the reputation you want.",
    "Rewrite your bio and pitch to fit the person you are now.",
    "Set the habits that keep your brand consistent when your calendar is not.",
    "Move from doing the work to leading the room.",
  ],
  // NEEDS CONFIRMATION — placeholder table of contents.
  tableOfContents: [
    {
      part: "Part 1. The turning point",
      chapters: [
        "When your current brand stops fitting",
        "What got you here, and why it stops working",
      ],
    },
    {
      part: "Part 2. Signature",
      chapters: [
        "Naming your values",
        "Telling a clearer story",
        "How the room already reads you",
      ],
    },
    {
      part: "Part 3. Practice",
      chapters: [
        "Rhythm beats motivation",
        "The private habits behind a public brand",
        "Growing into the next version",
      ],
    },
  ],
  // Endorser names provided by the client. Roles sourced from public LinkedIn
  // / ZoomInfo profiles as of Sept 2026. Quotes remain placeholders until the
  // endorsers approve final copy. Cynthia Omisore's role could not be verified
  // in public sources — flagged NEEDS CONFIRMATION.
  endorsements: [
    {
      quote:
        "A rare handbook that treats personal branding as identity work, not marketing work.",
      name: "Hannah Famodimu",
      role: "Business Development Officer, Pole Global Marketing",
    },
    {
      quote:
        "Reads like a mentor who has done the work, and is now offering you the map.",
      name: "Cynthia Omisore",
      role: "Developer, Brand Xperience",
    },
    {
      quote:
        "The clearest thinking I have seen on how to grow a brand without abandoning yourself.",
      name: "Stephanie Momoh",
      role: "Product Manager, Spice Metropolis Limited",
    },
  ],
  // Google Form provided by the client for waitlist submissions.
  waitlistFormUrl: "https://forms.gle/WKn2tc2ShMt9tcLa8",
  waitlistFields: ["name", "email", "phone number", "location (optional)"] as const,
  // NEEDS CONFIRMATION — no cover image is committed yet. When the real cover
  // is delivered, drop it into /public and set `coverImage` to its path;
  // the page renders a typographic fallback when this is null.
  coverImage: null as string | null,
};

export type EvolveContent = typeof evolve;
