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
  title: "Temitope Ruth",
  description: "A comprehensive BI tool for data visualization and analysis",
  generator: "v0.dev",
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
