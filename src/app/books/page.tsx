import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CoverMockup from "@/components/books/cover-mockup";
import ReviewForm from "@/components/books/review-form";
import WaitlistSection from "@/components/books/waitlist-section";
import { evolve } from "@/data/evolve";

export default function BooksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gray-200 border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              The new book. Waitlist open.
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl text-secondary font-semibold leading-none">
              {evolve.title}
              <span className="text-primary">.</span>
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-secondary/80 leading-snug max-w-xl">
              {evolve.subtitle}
            </p>
            <p className="text-base sm:text-lg text-secondary/70 font-sans max-w-xl leading-relaxed">
              {evolve.launchContext}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center uppercase tracking-widest text-xs sm:text-sm bg-primary text-white font-sans font-medium px-6 py-3 rounded-tl-3xl hover:bg-primary/90 transition-colors"
              >
                Join the waitlist
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center uppercase tracking-widest text-xs sm:text-sm bg-lightGray text-secondary font-sans font-medium px-6 py-3 rounded-br-3xl hover:bg-primary hover:text-white transition-colors"
              >
                Read the details
              </a>
            </div>

            <p className="text-sm text-secondary/50 font-sans pt-2">
              Paperback ·{" "}
              <span className="text-secondary/70">{evolve.price.paperback}</span>
              &nbsp;·&nbsp;
              <span>{evolve.price.note}</span>
            </p>
          </div>

          <div className="lg:col-span-2">
            <CoverMockup src={evolve.coverImage} title={evolve.title} />
          </div>
        </div>
      </section>

      {/* About the book ──────────────────────────────────────────────── */}
      <section id="about" className="border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              About the book
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary leading-tight">
              Who this book is for.
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-6 text-base sm:text-lg text-secondary/75 font-sans leading-relaxed">
            {evolve.synopsis.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll take away ───────────────────────────────────────── */}
      <section className="bg-lightGray">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-4">
              What you will leave with
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary leading-tight mb-10">
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

      {/* Table of contents ───────────────────────────────────────────── */}
      <section className="border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              Inside the book
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary leading-tight">
              Table of contents.
            </h2>
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

      {/* Endorsements ────────────────────────────────────────────────── */}
      <section className="border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans mb-4">
            Praise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary leading-tight mb-12 max-w-3xl">
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

      {/* Review submission ───────────────────────────────────────────── */}
      <section id="review" className="border-b border-secondary/10">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
              Leave a review
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary leading-tight">
              Read the book?
            </h2>
            <p className="text-secondary/70 font-sans max-w-md leading-relaxed pt-2">
              If Temitope&rsquo;s writing has helped you, tell us how. Selected
              reviews may appear on this page after moderation.
            </p>
          </div>
          <div className="lg:col-span-3">
            <ReviewForm />
          </div>
        </div>
      </section>

      {/* Waitlist ────────────────────────────────────────────────────── */}
      <section id="waitlist" className="bg-lightGray">
        <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24">
          <WaitlistSection
            formUrl={evolve.waitlistFormUrl}
            price={evolve.price.paperback}
            discountNote={evolve.price.note}
          />
        </div>
      </section>

      {/* Also by Temitope ─────────────────────────────────────────────── */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-10 py-14 xl:py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-32 sm:w-40 aspect-[3/4] flex-shrink-0">
            <Image
              src="/handbook.jpg"
              alt="Your Authentic Signature book cover"
              fill
              sizes="160px"
              className="object-cover rounded-sm shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-3 text-center lg:text-left">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-lightGray font-sans">
              Also by Temitope
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
              Your Authentic Signature: the personal branding handbook.
            </h3>
            <p className="text-white/80 font-sans max-w-xl">
              A practical guide to naming your personal brand and communicating
              it clearly. Free to download.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://selar.com/1v4g42"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-xs sm:text-sm bg-white text-primary font-sans font-medium px-6 py-3 rounded-tl-3xl hover:bg-lightGray transition-colors shadow-sm"
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
            <h3 className="font-serif text-2xl sm:text-3xl text-secondary">
              Connect with Temitope.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 uppercase tracking-widest text-xs sm:text-sm bg-primary text-white font-sans font-medium px-6 py-3 rounded-br-3xl hover:bg-primary/90 transition-colors"
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
