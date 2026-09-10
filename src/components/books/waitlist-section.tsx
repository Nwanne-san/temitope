import { ArrowUpRight, CheckCircle2, Sparkles, Clock, ShieldCheck } from "lucide-react";

interface WaitlistSectionProps {
  formUrl: string;
  price: string;
  discountNote: string;
}

export default function WaitlistSection({
  formUrl,
  price,
  discountNote,
}: WaitlistSectionProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 border border-secondary/10 shadow-sm p-6 sm:p-10 xl:p-14 overflow-hidden">
      {/* Decorative accent blur */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="relative grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
        {/* Left Column: Context & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-sans font-medium uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Waitlist</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary font-semibold leading-tight break-words">
            Be the first to get <span className="text-primary">Evolve</span> when copies drop.
          </h2>

          <p className="text-base sm:text-lg text-secondary/75 font-sans leading-relaxed break-words">
            The paperback is <span className="text-secondary font-semibold">{price}</span>.{" "}
            {discountNote} Everyone on the waitlist receives early access and a launch-week discount before the general release at SPROUT.
          </p>

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

        {/* Right Column: High-converting CTA Card */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-xl border border-secondary/15 bg-white p-6 sm:p-8 shadow-md space-y-5 text-center sm:text-left relative">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary font-sans block">
                Official Waitlist
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold leading-snug">
                Join via Google Form
              </h3>
              <p className="text-xs sm:text-sm text-secondary/70 font-sans leading-relaxed">
                Fill out the quick Google Form to secure your spot. We will notify you the moment the book is ready to ship.
              </p>
            </div>

            <div className="space-y-2 pt-1 text-xs font-sans text-secondary/65">
              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Takes less than 1 minute to complete</span>
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
                <span>Complete the Waitlist Form</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-[11px] text-center text-secondary/50 font-sans mt-2.5">
                Opens in Google Forms in a new tab
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
