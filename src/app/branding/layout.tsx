import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Experience Initiative | Temitope Ruth Jacob",
  description:
    "Brand Experience is a program from Brand Xperience for founders and executives who want their brand to be remembered, trusted and defended.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/branding" },
  openGraph: {
    title: "Brand Experience Initiative",
    description:
      "A program for founders and executives who want their brand to be remembered, trusted and defended.",
    url: "https://www.temitoperuthjacob.com/branding",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Experience Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@temitoperuthjacob",
    creator: "@temitoperuthjacob",
    title: "Brand Experience Initiative",
    description:
      "A program for founders and executives who want their brand to be remembered, trusted and defended.",
    images: ["https://www.temitoperuthjacob.com/pfp.jpg"],
  },
};

export default function BrandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
