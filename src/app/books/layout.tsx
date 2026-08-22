import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Temitope Ruth Jacob",
  description:
    "Books and handbooks by Temitope Ruth Jacob, including Your Authentic Signature — A Personal Branding Handbook.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/books" },
  openGraph: {
    title: "Books | Temitope Ruth Jacob",
    description:
      "Books and handbooks by Temitope Ruth Jacob, including Your Authentic Signature.",
    url: "https://www.temitoperuthjacob.com/books",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/handbook.jpg",
        width: 1200,
        height: 630,
        alt: "Your Authentic Signature — Personal Branding Handbook",
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
