import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Temitope Ruth Jacob",
  description:
    "Free tools, articles, videos and downloads to help you build your personal brand.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/resources" },
  openGraph: {
    title: "Resources | Temitope Ruth Jacob",
    description:
      "Free tools, articles, videos and downloads to help you build your personal brand.",
    url: "https://www.temitoperuthjacob.com/resources",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Resources from Temitope Ruth Jacob",
      },
    ],
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
