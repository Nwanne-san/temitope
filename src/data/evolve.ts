// Content data for the Evolve book page (/books) and the launch modal on /.

export const evolve = {
  title: "Evolve",
  subtitle: "The person you become is the brand you build.",
  // Book launches Friday, 3rd October 2026.
  launchDate: "2026-10-03",
  launchDateLabel: "October 3, 2026",
  price: {
    paperback: "₦25,000",
    note: "Waitlist members get a launch-week discount.",
  },
  // Flutterwave checkout links. Paperback ships from launch week; the e-book
  // is emailed after payment (not an instant download).
  purchase: {
    paperback: {
      url: "https://flutterwave.com/pay/trj",
      price: "₦25,000",
      format: "Paperback",
      fulfilment: "Ships from launch week",
    },
    ebook: {
      url: "https://flutterwave.com/pay/evolvesoft",
      price: "₦15,000",
      format: "E-book",
      fulfilment: "Emailed after payment",
    },
  },
  launchContext:
    "A new book by Temitope Ruth Jacob, arriving October 3, 2026.",
  // Short verbatim excerpt used in the homepage modal (first three sentences of
  // the PDF).
  modalPitch:
    "This book is about the gap between the person you perform and the person you actually are, and about what happens the moment you stop managing that gap and start closing it. It argues that personal branding, done honestly, is not decoration. It is character, made visible over time.",
  // "About the book" copy — verbatim from the author's PDF (Sept 2026), split
  // at the twelfth sentence so the page can show the opening and reveal the
  // rest behind a Read-more toggle.
  aboutPreview: [
    "This book is about the gap between the person you perform and the person you actually are, and about what happens the moment you stop managing that gap and start closing it. It argues that personal branding, done honestly, is not decoration. It is character, made visible over time, and it insists on a harder, earlier question than the one most branding advice starts with. Not how you want to be seen, but who you are when seeing is no longer the point.",
    "This book is also, quietly, an argument against two of the more common mistakes people make while trying to build a name for themselves. The first is treating branding as a set of tactics that can be layered onto a person regardless of who that person actually is, a colour palette, a punchy bio, a consistent posting schedule, none of it wrong exactly, but incomplete without a self underneath it worth building a reputation on. The second is mistaking reinvention for growth, the idea that becoming someone new every season the market shifts is the same thing as evolving. It is not, and the book spends its eight chapters making the case for something quieter and considerably more durable instead.",
    "There is a version of you that exists only in the minds of people who have never met you. It lives in the way your name is said in a room you are not in, in a story someone tells about you months after you have forgotten the moment that created it. That version does not ask permission to exist, and it does not wait for you to catch up with it. You already have a brand.",
  ],
  aboutRest: [
    "The only real question is whether you are the one building it.",
    "For a long time, personal branding was sold as a costume, all front, no foundation, beautiful from the audience’s seat and hollow the moment you step backstage. This book is not interested in the stage set. It is interested in the foundation underneath it, the character that was never designed for an audience and yet is the only thing an audience ends up remembering.",
    "Because here is what nobody puts in the carousel post: branding is not something you apply to yourself like a filter. It is something that leaks out of you, in how you treat people when nothing is being asked of you, in what you post at midnight when you are unfiltered, in what you choose not to post at all. People rarely remember a logo. They remember how you made them feel, and then, quietly and efficiently, they turn that feeling into a story about who you are. That story spreads with or without your consent. That story is your brand.",
    "The book begins where most branding conversations refuse to start, at the mirror, with the uncomfortable, necessary work of self-examination. It moves through the marketplace, where reputation behaves exactly like currency, compounding quietly through kept promises or collapsing suddenly through a single lapse in judgment. It separates being seen from being understood, arguing that visibility without substance is noise with good lighting, a queue that empties as quickly as it filled. It asks an uncomfortable question about authorship, how many of the beliefs you hold about yourself were actually written by you, and how many were handed to you once, carelessly, by someone who has long since forgotten saying them. It makes the case that consistency, unglamorous and rarely applauded, quietly outperforms talent left to its own unpredictable schedule. It reframes presence not as performance but as a form of respect powerful enough to be mistaken for charisma. It examines the moment a name detaches from the business that first introduced it to the world, and the responsibility that arrives along with that kind of portability. And it closes by insisting that none of this is a project with a finish line, that the mirror from the very first page is still waiting, patiently, long after the last page has been read.",
    "This book is written for anyone who has sensed the gap between the person they present and the person they actually are, and has grown tired of managing that gap rather than closing it. It is for the professional who has visibility but cannot say what they are actually known for. It is for the leader trying to build a reputation on a self they have not yet taken the time to properly meet. It is for anyone ready to trade the exhausting work of performance for the steadier, more rewarding work of becoming.",
    "You already have a brand. This book exists to help you finally meet it properly.",
  ],
  // Derived from the author's PDF (Sept 2026) — one line per movement in the book.
  outcomes: [
    "Start at the mirror — the uncomfortable, necessary work of self-examination.",
    "Treat reputation as currency: compounding through kept promises, collapsing through a single lapse.",
    "Separate being seen from being understood, and stop mistaking visibility for substance.",
    "Reclaim authorship of the beliefs you hold about yourself.",
    "Build consistency as the quiet habit that outperforms talent left to its own schedule.",
    "Reframe presence as a form of respect powerful enough to be mistaken for charisma.",
    "Own your name when it finally detaches from the business that first introduced it.",
    "Keep going — the mirror from the first page is still waiting long after the last.",
  ],
  // NEEDS CONFIRMATION — placeholder table of contents pending chapter titles.
  // The author's synopsis confirms eight chapters.
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
  // Endorser names provided by the client. Quotes remain placeholders until
  // the endorsers approve final copy.
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
  // Google Form used behind the scenes for waitlist submissions.
  // The UI does not surface this — the CTA reads "Join the waitlist".
  waitlistFormUrl: "https://forms.gle/WKn2tc2ShMt9tcLa8",
  waitlistFields: ["name", "email", "phone number", "location (optional)"] as const,
  // Hero image — book standing upright on top of a stack.
  coverImage: "/evolve-standing.jpg" as string | null,
  // Secondary image — two paperbacks stacked flat, used in the waitlist card.
  waitlistImage: "/evolve-stack.jpg",
};

export type EvolveContent = typeof evolve;
