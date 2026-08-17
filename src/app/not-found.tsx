import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Page not found | Temitope Ruth Jacob",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-10 py-24 flex flex-col items-center text-center gap-6">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
          404
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-secondary font-semibold max-w-xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="max-w-md text-secondary-2 font-sans">
          The link may be broken or the page may have moved. Try heading home,
          or reach out at hi@temitoperuthjacob.com.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary text-white uppercase tracking-widest text-sm font-sans px-5 py-3 rounded-tl-3xl hover:bg-primary/90 transition"
          >
            Back to home
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center border border-primary text-primary uppercase tracking-widest text-sm font-sans px-5 py-3 rounded-br-3xl hover:bg-primary/10 transition"
          >
            About Temitope
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
