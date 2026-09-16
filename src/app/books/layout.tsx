import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evolve - Written by Temitope Ruth Jacob",
  description:
    "A book about growth, self-discovery, and becoming the person you are meant to be.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/books" },
  openGraph: {
    title: "Evolve - Written by Temitope Ruth Jacob",
    description: "A book about growth, self-discovery, and becoming the person you are meant to be.",
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
    description: "A book about growth, self-discovery, and becoming the person you are meant to be.",
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
