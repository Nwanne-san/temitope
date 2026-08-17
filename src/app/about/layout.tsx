import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Temitope Ruth Jacob | Brand Strategist, Speaker, Author",
  description:
    "Meet Temitope Ruth Jacob — founder and CEO of Elegance Inspired Limited, convener of Brand Xperience, and community director at Dream Center Trybe. MSc in Marketing and Sales from Rome Business School.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/about" },
  openGraph: {
    title: "About Temitope Ruth Jacob",
    description:
      "Brand strategist, speaker and author. Founder of Elegance Inspired Limited, convener of Brand Xperience, community director at Dream Center Trybe.",
    url: "https://www.temitoperuthjacob.com/about",
    type: "profile",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Temitope Ruth Jacob",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@temitoperuthjacob",
    creator: "@temitoperuthjacob",
    title: "About Temitope Ruth Jacob",
    description:
      "Brand strategist, speaker and author based in Abuja, Nigeria.",
    images: ["https://www.temitoperuthjacob.com/pfp.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
