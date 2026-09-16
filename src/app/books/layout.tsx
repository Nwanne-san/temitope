import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolve - Written by Temitope Ruth Jacob",
  description:
    "The person you become is the brand you build. A field guide to closing the gap between the person you perform and the person you actually are.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/books" },
  openGraph: {
    title: "Evolve - Written by Temitope Ruth Jacob",
    description: "The person you become is the brand you build. A field guide to closing the gap between the person you perform and the person you actually are.",
    url: "https://www.temitoperuthjacob.com/books",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/evolve-og.jpg",
        width: 1200,
        height: 630,
        alt: "Evolve — a personal branding book by Temitope Ruth Jacob",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolve - Written by Temitope Ruth Jacob",
    description: "The person you become is the brand you build. A field guide to closing the gap between the person you perform and the person you actually are.",
    images: ["https://www.temitoperuthjacob.com/evolve-og.jpg"],
    creator: "@temitoperuthjacob",
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
