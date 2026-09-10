import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolve — the new book by Temitope Ruth Jacob",
  description:
    "Evolve is a field guide for the next version of your brand. Join the waitlist for launch access and a launch-window discount.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/books" },
  openGraph: {
    title: "Evolve — the new book by Temitope Ruth Jacob",
    description:
      "A field guide for the next version of your brand. Join the waitlist for launch access.",
    url: "https://www.temitoperuthjacob.com/books",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/handbook.jpg",
        width: 1200,
        height: 630,
        alt: "Evolve — a personal branding book by Temitope Ruth Jacob",
      },
    ],
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
