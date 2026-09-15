import Image from "next/image";
import { ArrowUpRight, CheckCircle2, CalendarDays, ShieldCheck } from "lucide-react";

interface WaitlistSectionProps {
  formUrl: string;
  price: string;
  discountNote: string;
  image: string;
  launchDateLabel: string;
}

export default function WaitlistSection({
  formUrl,
  price,
  discountNote,
  image,
  launchDateLabel,
}: WaitlistSectionProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 border border-secondary/10 shadow-sm p-6 sm:p-10 xl:p-14 overflow-hidden">
      {/* Decorative accent blur */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
        {/* Left Column: Context & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary font-semibold leading-tight break-words">
            Be the first to get <span className="text-primary">Evolve</span> when copies drop.
          </h2>

          <p className="text-base sm:text-lg text-secondary/75 font-sans leading-relaxed break-words">
            The paperback is{" "}
            <span className="text-secondary font-semibold">{price}</span>.{" "}
            {discountNote} Waitlist members receive early access and a
            launch-week discount before the general release.
          </p>

          {/* Stacked-book photo — sits inside the copy column on desktop,
              stacks under the heading on mobile. */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-secondary/10 shadow-sm">
            <Image
              src={image}
              alt="Evolve — two paperbacks stacked"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>

          <div className="pt-2 border-t border-secondary/10 space-y-3 font-sans text-sm sm:text-base text-secondary/80">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>First access:</strong> Reserve your copy before the wider release.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Launch-week discount:</strong> Exclusive promotional pricing off the paperback.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
                <strong>Direct updates:</strong> Chapter previews and notes directly from Temitope.
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: CTA Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-xl border border-secondary/15 bg-white p-6 sm:p-8 shadow-md space-y-5 text-center sm:text-left relative">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary font-sans block">
                Launching {launchDateLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold leading-snug">
                Reserve your copy of Evolve.
              </h3>
              <p className="text-xs sm:text-sm text-secondary/70 font-sans leading-relaxed">
                Add your name and we will email you the moment copies are ready
                to ship, along with your launch-week discount.
              </p>
            </div>

            <div className="space-y-2 pt-1 text-xs font-sans text-secondary/65">
              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                <span>Ships from launch week · {launchDateLabel}</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>No payment required now · Zero spam</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm bg-primary text-white font-sans font-medium px-6 py-4 rounded-tl-3xl hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-sm text-center group"
              >
                <span>Join the waitlist</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-[11px] text-center text-secondary/50 font-sans mt-2.5">
                Takes less than a minute · Opens in a new tab
              </p>
            </div>

            <div className="border-t border-secondary/10 pt-3 flex items-center justify-between text-xs font-sans text-secondary/70">
              <span>Paperback Edition</span>
              <span className="font-semibold text-secondary">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
