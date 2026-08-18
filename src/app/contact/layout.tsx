import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Temitope Ruth Jacob",
  description:
    "Reach out to Temitope Ruth Jacob for speaking, consulting, media or general enquiries.",
  alternates: { canonical: "https://www.temitoperuthjacob.com/contact" },
  openGraph: {
    title: "Contact | Temitope Ruth Jacob",
    description:
      "Reach out for speaking, consulting, media or general enquiries.",
    url: "https://www.temitoperuthjacob.com/contact",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Temitope Ruth Jacob",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
