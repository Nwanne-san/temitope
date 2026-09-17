import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  CalendarDays,
  Mail,
} from "lucide-react";

interface PurchaseOption {
  url: string;
  price: string;
  format: string;
  fulfilment: string;
}

interface PurchaseSectionProps {
  paperback: PurchaseOption;
  ebook: PurchaseOption;
  waitlistFormUrl: string;
  image: string;
  launchDateLabel: string;
}

export default function PurchaseSection({
  paperback,
  ebook,
  waitlistFormUrl,
  image,
  launchDateLabel,
}: PurchaseSectionProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 border border-secondary/10 shadow-sm p-6 sm:p-10 xl:p-14 overflow-hidden">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-60 h-60 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="relative space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
            Pre-order · Launching {launchDateLabel}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-secondary font-semibold leading-tight break-words">
            Get your copy of <span className="text-primary">Evolve</span>.
          </h2>
          <p className="text-base sm:text-lg text-secondary/75 font-sans leading-relaxed">
            Reserve the paperback or the e-book now. Paperback ships from launch
            week; the e-book is emailed after payment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white border border-secondary/10 shadow-sm">
              <Image
                src={image}
                alt="Evolve — two paperbacks stacked"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <PurchaseCard
              icon={<BookOpen className="w-5 h-5 text-primary" />}
              format={paperback.format}
              price={paperback.price}
              detailIcon={<CalendarDays className="w-4 h-4 text-primary shrink-0" />}
              detail={paperback.fulfilment}
              url={paperback.url}
              ctaLabel="Pre-order paperback"
              highlight
            />
            <PurchaseCard
              icon={<Download className="w-5 h-5 text-primary" />}
              format={ebook.format}
              price={ebook.price}
              detailIcon={<Mail className="w-4 h-4 text-primary shrink-0" />}
              detail={ebook.fulfilment}
              url={ebook.url}
              ctaLabel="Pre-order e-book"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-secondary/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm font-sans text-secondary/70">
          <span>Not ready to pre-order yet?</span>
          <a
            href={waitlistFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-colors"
          >
            Join the waitlist instead
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface PurchaseCardProps {
  icon: React.ReactNode;
  format: string;
  price: string;
  detailIcon: React.ReactNode;
  detail: string;
  url: string;
  ctaLabel: string;
  highlight?: boolean;
}

function PurchaseCard({
  icon,
  format,
  price,
  detailIcon,
  detail,
  url,
  ctaLabel,
  highlight,
}: PurchaseCardProps) {
  return (
    <div
      className={`rounded-xl border p-6 shadow-sm bg-white flex flex-col gap-4 ${
        highlight ? "border-primary/40 ring-1 ring-primary/10" : "border-secondary/15"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-sans text-xs font-medium tracking-[0.2em] uppercase text-secondary/70">
          {icon}
          {format}
        </div>
        {highlight && (
          <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full px-2 py-1">
            Signed copies
          </span>
        )}
      </div>

      <p className="font-serif text-3xl sm:text-4xl text-secondary font-semibold leading-none">
        {price}
      </p>

      <div className="flex items-center gap-2 font-sans text-xs sm:text-sm text-secondary/70">
        {detailIcon}
        <span>{detail}</span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-2 w-full inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-sans font-medium px-5 py-3 rounded-tl-2xl transition-colors ${
          highlight
            ? "bg-primary text-white hover:bg-primary/90"
            : "bg-secondary text-white hover:bg-secondary/90"
        }`}
      >
        {ctaLabel}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  );
}
