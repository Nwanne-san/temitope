import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking | Temitope Ruth Jacob",
  description:
    "Book Temitope Ruth Jacob to speak on personal branding, African brand identity, and the shift from execution to influence.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/speaking" },
  openGraph: {
    title: "Speaking | Temitope Ruth Jacob",
    description:
      "Book Temitope Ruth Jacob to speak on personal branding, African brand identity, and the shift from execution to influence.",
    url: "https://www.temitoperuthjacob.com/speaking",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Temitope Ruth Jacob — Speaking",
      },
    ],
  },
};

export default function SpeakingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
