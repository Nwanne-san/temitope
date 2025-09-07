import type React from "react";
import { Poppins, Bai_Jamjuree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
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

const skModernist = localFont({
  src: [
    {
      path: "../../public/fonts/sk/Sk-Modernist-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sk/Sk-Modernist-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sk-modernist",
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Temitope Ruth Jacob | Branding & Marketing Expert",
  description:
    "Temitope Ruth Jacob is a branding & marketing strategist helping businesses build strong brand identities and maximize visibility.",
  keywords: ["Temitope Ruth Jacob", "Temitope", "Branding", "Marketing"],
  icons: {
    icon: "/trj icon.png",
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
    site: "@temitoperuthjacob",
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
        className={`${poppins.variable} ${baiJamjuree.variable} ${avenir.variable} ${averia.variable} ${skModernist.variable}  font-sans`}
      >
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
