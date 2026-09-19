import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ReviewForm from "@/components/books/review-form";
import PurchaseSection from "@/components/books/purchase-section";
import { BuyButton } from "@/components/books/buy-buttons";
import AboutBook from "@/components/books/about-book";
import { evolve } from "@/data/evolve";

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero — full-bleed video under transparent nav ───────────────── */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover origin-center max-sm:scale-[0.88] sm:scale-100"
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
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70"
          aria-hidden
        />

        <Navbar variant="overMedia" />

        <div className="relative z-10 flex flex-1 flex-col justify-end container mx-auto px-4 sm:px-10 pb-16 pt-28 sm:pb-20 xl:pb-24">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              A new book · {evolve.launchDateLabel}
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-white font-semibold leading-tight break-words">
              {evolve.title}
              <span className="text-primary">.</span>
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-white/90 leading-snug max-w-xl break-words">
              {evolve.subtitle}
            </p>
            <p className="text-base sm:text-lg text-white/75 font-sans max-w-xl leading-relaxed">
              {evolve.launchContext}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <BuyButton url={evolve.purchase.paperback.url} variant="primary">
                Pre-order paperback · {evolve.purchase.paperback.price}
              </BuyButton>
              <BuyButton url={evolve.purchase.ebook.url} variant="onDark">
                Get the e-book · {evolve.purchase.ebook.price}
              </BuyButton>
            </div>

            <p className="text-sm text-white/60 font-sans pt-2">
              Paperback ships from launch week · E-book emailed after payment ·{" "}
              <Link
                href="#purchase"
                className="text-white underline underline-offset-4 hover:text-primary"
              >
                See all pre-order options
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* About the book ──────────────────────────────────────────────── */}
      <AboutBook preview={evolve.aboutPreview} rest={evolve.aboutRest} />

      {/* What you'll take away — hidden until the outcomes list is finalised.
      <section className="bg-lightGray">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-4">
              What you will leave with
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight mb-10 break-words">
              By the last page, you will be able to:
            </h2>
          </div>
          <ol className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {evolve.outcomes.map((outcome, index) => (
              <li key={index} className="flex gap-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg">
                  {index + 1}
                </span>
                <p className="pt-1 font-sans text-secondary text-base sm:text-lg leading-relaxed">
                  {outcome}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      */}

      {/* Table of contents — hidden until real chapter titles are provided.
      <section className="relative bg-white border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              Inside the book
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight break-words">
              Table of contents.
            </h2>
            <p className="font-serif text-lg text-secondary/70 leading-snug max-w-xs">
              Eight chapters, three movements.
            </p>
          </div>
          <div className="lg:col-span-3 space-y-10">
            {evolve.tableOfContents.map((part) => (
              <div key={part.part}>
                <p className="font-serif text-lg text-primary mb-4">{part.part}</p>
                <ul className="divide-y divide-secondary/10">
                  {part.chapters.map((chapter, i) => (
                    <li
                      key={chapter}
                      className="flex items-baseline gap-4 py-3 text-secondary font-sans"
                    >
                      <span className="text-secondary/40 font-serif text-sm w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base sm:text-lg">{chapter}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Review submission ───────────────────────────────────────────── */}
      <section id="review" className="border-b border-secondary/10 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              Leave a review
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight break-words">
              Read the book?
            </h2>
            <p className="text-secondary/70 font-sans max-w-md leading-relaxed pt-2">
              Share your thoughts on Evolve. Selected reviews may be featured
              on this page after moderation.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* Endorsements ────────────────────────────────────────────────── */}
      <section className="border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-4">
            Praise
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight mb-12 max-w-3xl break-words">
            What early readers said.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {evolve.endorsements.map((endorsement, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-primary pl-5 flex flex-col justify-between h-full"
              >
                <p className="font-serif text-lg text-secondary leading-snug mb-6">
                  &ldquo;{endorsement.quote}&rdquo;
                </p>
                <footer className="font-sans">
                  <p className="text-sm font-medium text-secondary">
                    {endorsement.name}
                  </p>
                  <p className="text-xs text-secondary/60">{endorsement.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase ────────────────────────────────────────────────────── */}
      <section id="purchase" className="bg-lightGray scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <PurchaseSection
            paperback={evolve.purchase.paperback}
            ebook={evolve.purchase.ebook}
            waitlistFormUrl={evolve.waitlistFormUrl}
            image={evolve.waitlistImage}
            launchDateLabel={evolve.launchDateLabel}
          />
        </div>
      </section>

      {/* Also by Temitope ─────────────────────────────────────────────── */}
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

      {/* Work with Temitope CTA ─────────────────────────────────────── */}
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
