import type React from "react";
import { Poppins, Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "Temitope Ruth Jacob | Branding & Marketing Expert",
  description:
    "Temitope Ruth Jacob is a branding & marketing strategist helping businesses build strong brand identities and maximize visibility.",

  icons: {
    icon: "/trj-icon.png", // Ensure correct naming for consistency
  },

  openGraph: {
    title: "Temitope Ruth Jacob | Branding & Marketing Expert",
    description:
      "Learn branding strategies and marketing techniques to grow your business. Get expert insights and services from Temitope Ruth Jacob.",
    url: "https://www.temitoperuthjacob.com",
    type: "website",
    siteName: "Temitope Ruth Jacob",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Temitope Ruth Jacob - Branding & Marketing Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@temitoperuthjacob", // Replace with your Twitter username
    creator: "@temitoperuthjacob",
    title: "Temitope Ruth Jacob | Branding & Marketing Expert",
    description:
      "Expert in branding & marketing. Helping businesses grow with strategic insights.",
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
        className={`${poppins.variable} ${baiJamjuree.variable} font-poppins`}
      >
        {children}
      </body>
    </html>
  );
}
