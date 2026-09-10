import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Temitope Ruth Jacob",
  description:
    "The BrandUp Accelerator, YouTube library, essays, talks and podcast — free tools and paid programmes to build your personal brand.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/resources" },
  openGraph: {
    title: "Resources | Temitope Ruth Jacob",
    description:
      "Free tools, articles, videos, talks and courses to build your personal brand.",
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
