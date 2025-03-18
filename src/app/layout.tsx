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
  title: "Temitope Ruth Jacob",
  description: "Branding & Marketing Strategist",
  icons: {
    icon: "/trj icon.png", // Favicon for browser tab
  },
  openGraph: {
    title: "Temitope Ruth Jacob",
    description: "Branding & Marketing Strategist",
    url: "https://www.temitoperuthjacob.com", 
    type: "website",
    images: [
      {
        url: "https://www.temitoperuthjacob.com/pfp.jpg", 
        width: 1200, // Recommended width
        height: 630, // Recommended height
        alt: "Temitope Ruth Jacob - Branding & Marketing Strategist",
      },
    ],
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
