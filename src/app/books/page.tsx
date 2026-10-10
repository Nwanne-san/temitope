import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReviewForm from "@/components/books/review-form";
import PurchaseSection from "@/components/books/purchase-section";
import { BuyButton } from "@/components/books/buy-buttons";
import AboutBook from "@/components/books/about-book";
import EvolveFlyerModal from "@/components/books/evolve-flyer-modal";
import { evolve } from "@/data/evolve";

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Desktop Modal with Evolve Flyer (replica for books page only) */}
      <EvolveFlyerModal />

      {/* Hero — video on desktop, clean flyer on mobile under transparent nav ── */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#180A1A] sm:bg-white">
        <video
          className="hidden sm:block absolute inset-0 h-full w-full object-cover origin-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/evolve-standing.jpg"
          aria-hidden
        >
          <source src="/evolve-hero.mp4" type="video/mp4" />
        </video>
        <div
          className="hidden sm:block absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75"
          aria-hidden
        />

        <Navbar variant="overMedia" />

        <div className="relative z-10 flex flex-1 flex-col justify-end container mx-auto px-4 sm:px-10 pb-16 pt-24 sm:pt-28 sm:pb-20 xl:pb-24">
          <div className="max-w-2xl space-y-6">
            {/* Evolve Flyer — Mobile only, prominent hero showcase */}
            <div className="sm:hidden w-full max-w-[420px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 mx-auto mb-6 bg-[#250D27]">
              <Image
                src="/evolve-flyer.png"
                alt="Evolve — Official Book Launch Flyer"
                fill
                sizes="(max-width: 640px) 95vw, 420px"
                className="object-contain object-center"
                priority
              />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-white font-semibold leading-tight break-words">
              {evolve.title}
              <span className="text-primary">.</span>
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-white/90 leading-snug max-w-xl break-words">
              {evolve.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <BuyButton url={evolve.purchase.paperback.url} variant="primary">
                Get the paperback · {evolve.purchase.paperback.price}
              </BuyButton>
              <BuyButton url={evolve.purchase.ebook.url} variant="onDark">
                Get the e-book · {evolve.purchase.ebook.price}
              </BuyButton>
            </div>
          </div>
        </div>
      </section>

      {/* 1. About the book ───────────────────────────────────────────── */}
      <AboutBook preview={evolve.aboutPreview} rest={evolve.aboutRest} />

      {/* 2. Purchase ─────────────────────────────────────── */}
      <section id="purchase" className="bg-lightGray scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <PurchaseSection
            paperback={evolve.purchase.paperback}
            ebook={evolve.purchase.ebook}
            image={evolve.waitlistImage}
            launchDateLabel={evolve.launchDateLabel}
          />
        </div>
      </section>

      {/* 3. Animation Video Trailer ──────────────────────────────────── */}
      <section className="bg-white border-b border-secondary/10 py-16 xl:py-24">
        <div className="container mx-auto px-4 sm:px-10">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary font-semibold leading-tight break-words">
              A glimpse into <span className="text-primary">Evolve</span>.
            </h2>
            <p className="text-base sm:text-lg text-secondary/75 font-sans leading-relaxed max-w-xl mx-auto">
              Releasing on Sprout Day — 10th October 2026.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-secondary/10 aspect-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                poster="/evolve-standing.jpg"
                className="w-full h-full object-contain bg-black"
              >
                <source src="/evolve-animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* CTA directly under the video */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <BuyButton url={evolve.purchase.paperback.url} variant="primary">
                Get the paperback · {evolve.purchase.paperback.price}
              </BuyButton>
              <BuyButton url={evolve.purchase.ebook.url} variant="secondary">
                Get the e-book · {evolve.purchase.ebook.price}
              </BuyButton>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Endorsement submission ───────────────────────────────────── */}
      <section id="review" className="border-b border-secondary/10 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              Endorsement
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight break-words">
              Leave an endorsement
            </h2>
            <p className="text-secondary/70 font-sans max-w-md leading-relaxed pt-2">
              Have you read an early draft of EVOLVE? Share your reflections
              below. Selected endorsements will be featured on this page and in
              the preliminary pages of the upcoming print edition.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* 5. Praise / Credible Reviews ────────────────────────────────── */}
      <section id="praise" className="border-b border-secondary/10 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start space-y-4">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              Praise
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight break-words">
              What leaders and early readers say.
            </h2>
            <p className="text-secondary/70 font-sans text-base sm:text-lg leading-relaxed max-w-sm">
              Reflections from executives, founders, and public leaders on how
              EVOLVE reframes personal branding into character and intentional
              leadership.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div
              tabIndex={0}
              aria-label="Early endorsements for EVOLVE"
              className="space-y-5 lg:max-h-[600px] lg:overflow-y-auto lg:pr-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary/40 rounded-sm [scrollbar-width:thin] [scrollbar-color:theme(colors.primary/35)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-primary/25 hover:[&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-secondary/5"
            >
              {evolve.endorsements.map((endorsement, i) => (
                <blockquote
                  key={i}
                  className="border-l-2 border-primary bg-secondary/[0.02] hover:bg-secondary/[0.04] p-6 sm:p-7 rounded-r-lg transition-colors flex flex-col justify-between"
                >
                  <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed mb-5">
                    &ldquo;{endorsement.quote}&rdquo;
                  </p>
                  <footer className="font-sans pt-3 border-t border-secondary/10">
                    <p className="text-sm font-semibold text-secondary">
                      {endorsement.name}
                    </p>
                    <p className="text-xs text-secondary/65 mt-0.5 leading-snug">
                      {endorsement.role}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Also by Temitope ─────────────────────────────────────────── */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-10 py-14 xl:py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-36 sm:w-44 aspect-[1808/2560] flex-shrink-0 drop-shadow-2xl">
            <Image
              src="/yas-handbook.jpg"
              alt="Your Authentic Signature book cover"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover rounded-sm shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-3 text-center lg:text-left">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-lightGray font-sans">
              Also by Temitope
            </p>
            <h3 className="font-serif text-xl sm:text-3xl text-white leading-tight break-words">
              Your Authentic Signature: the personal branding handbook.
            </h3>
            <p className="text-white/80 font-sans max-w-xl">
              A practical guide to naming your personal brand and communicating
              it clearly. Free to download.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto text-center">
            <a
              href="https://selar.com/1v4g42"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm bg-white text-primary font-sans font-medium px-6 py-3 rounded-tl-3xl hover:bg-lightGray transition-colors shadow-sm text-center"
            >
              Download free
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 7. Work with Temitope CTA ──────────────────────────────────── */}
      <section className="bg-gray-100 border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-14 xl:py-20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-2">
              Have questions or want to collaborate?
            </p>
            <h3 className="font-serif text-xl sm:text-3xl text-secondary break-words">
              Connect with Temitope.
            </h3>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm bg-primary text-white font-sans font-medium px-6 py-3 rounded-br-3xl hover:bg-primary/90 transition-colors text-center"
          >
            Contact Temitope
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
