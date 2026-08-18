import type React from "react";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir/Avenir-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Heavy.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  fallback: ["system-ui", "sans-serif"],
});

const averia = localFont({
  src: [
    {
      path: "../../public/fonts/averia/AveriaSerifLibre-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/averia/AveriaSerifLibre-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-averia",
  fallback: ["serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.temitoperuthjacob.com"),
  title: "Temitope Ruth Jacob | Brand Strategist, Speaker, Author",
  description:
    "Temitope Ruth Jacob is a brand strategist, speaker and author. Founder of Elegance Inspired Limited and convener of Brand Xperience — shaping how African brands show up, grow and succeed.",
  keywords: [
    "Temitope Ruth Jacob",
    "Temitope Ruth-Jacob",
    "brand strategist",
    "personal branding",
    "African brands",
    "brand strategy Nigeria",
    "keynote speaker",
    "Elegance Inspired",
    "Brand Xperience",
    "Your Authentic Signature",
    "TEDx speaker",
    "Rome Business School",
  ],
  icons: {
    icon: "/trj icon.png",
  },

  openGraph: {
    title: "Temitope Ruth Jacob | Brand Strategist, Speaker, Author",
    description:
      "Shaping how African brands show up, grow and succeed. Brand strategy, storytelling and speaking for founders and executives.",
    url: "https://www.temitoperuthjacob.com",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Temitope Ruth Jacob — Brand Strategist, Speaker, Author",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@temitoperuthjacob",
    creator: "@temitoperuthjacob",
    title: "Temitope Ruth Jacob | Brand Strategist, Speaker, Author",
    description:
      "Shaping how African brands show up, grow and succeed.",
    images: ["https://www.temitoperuthjacob.com/pfp.jpg"],
  },

  alternates: {
    canonical: "https://www.temitoperuthjacob.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${avenir.variable} ${averia.variable} font-sans bg-cream text-ink`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
