import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | Temitope Ruth Jacob",
  description:
    "Personal branding programs from Brand Xperience: SPROUT, BrandUp, Resonance Blueprint, Own Your Name, and The Influence Code.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/programs" },
  openGraph: {
    title: "Programs | Temitope Ruth Jacob",
    description:
      "Personal branding programs from Brand Xperience for professionals and organisations.",
    url: "https://www.temitoperuthjacob.com/programs",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Xperience programs",
      },
    ],
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
