import Image from "next/image";

interface CoverMockupProps {
  src: string | null;
  title: string;
  authorLabel?: string;
}

// Editorial book-cover mockup. Paper-cream field, hot pink (#F06) as the
// only accent. When a real cover image is dropped in, `src` overrides the
// design and the image renders in the same aspect and shadow.
export default function CoverMockup({
  src,
  title,
  authorLabel = "Temitope Ruth Jacob",
}: CoverMockupProps) {
  if (src) {
    return (
      <div className="relative aspect-[3/4] w-full max-w-sm mx-auto drop-shadow-2xl">
        <Image
          src={src}
          alt={`${title} book cover`}
          fill
          sizes="(max-width: 768px) 80vw, 400px"
          className="object-cover rounded-sm"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="relative aspect-[3/4] shadow-2xl overflow-hidden bg-[#F1EAD9]">
        {/* Decorative concentric arcs, anchored bottom-left */}
        <svg
          viewBox="0 0 300 400"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden
        >
          <g transform="translate(0 400)" stroke="#FF0066" fill="none">
            <circle r="80" strokeWidth="0.6" opacity="0.35" />
            <circle r="140" strokeWidth="0.6" opacity="0.28" />
            <circle r="200" strokeWidth="0.6" opacity="0.22" />
            <circle r="260" strokeWidth="0.6" opacity="0.15" />
            <circle r="320" strokeWidth="0.6" opacity="0.1" />
          </g>
          <g transform="translate(300 0)" stroke="#FF0066" fill="none">
            <circle r="60" strokeWidth="0.6" opacity="0.25" />
            <circle r="100" strokeWidth="0.6" opacity="0.18" />
            <circle r="140" strokeWidth="0.6" opacity="0.12" />
          </g>
        </svg>

        {/* Inset frame line, hairline hot pink */}
        <div className="absolute inset-4 border border-primary/25 pointer-events-none" />

        {/* Corner registration marks */}
        <div className="absolute top-3 left-3 w-3 h-px bg-primary" />
        <div className="absolute top-3 left-3 w-px h-3 bg-primary" />
        <div className="absolute top-3 right-3 w-3 h-px bg-primary" />
        <div className="absolute top-3 right-3 w-px h-3 bg-primary" />
        <div className="absolute bottom-3 left-3 w-3 h-px bg-primary" />
        <div className="absolute bottom-3 left-3 w-px h-3 bg-primary" />
        <div className="absolute bottom-3 right-3 w-3 h-px bg-primary" />
        <div className="absolute bottom-3 right-3 w-px h-3 bg-primary" />

        {/* Top row: edition mark + monogram */}
        <div className="absolute top-8 left-8 right-8 flex items-start justify-between">
          <div>
            <p className="font-serif text-[0.65rem] tracking-[0.25em] uppercase text-neutral-900 leading-none">
              N<span className="text-[0.5rem] align-super">o</span>&nbsp;01
            </p>
            <p className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-neutral-900/60 mt-2 leading-none">
              First edition
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center bg-[#F1EAD9]">
            <span className="font-serif text-[0.6rem] text-primary tracking-[0.15em] leading-none">
              TRJ
            </span>
          </div>
        </div>

        {/* Category label above title */}
        <div className="absolute top-[38%] left-8 right-8 text-center">
          <p className="font-sans text-[0.55rem] tracking-[0.4em] uppercase text-neutral-900/60">
            A personal branding book
          </p>
        </div>

        {/* Big title, optically centred */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-4 px-6">
          <h2 className="font-serif text-6xl sm:text-7xl leading-[0.9] text-neutral-900 text-center">
            {title}
            <span className="text-primary">.</span>
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-4 h-px bg-primary" />
            <div className="w-1 h-1 rounded-full bg-primary" />
            <div className="w-4 h-px bg-primary" />
          </div>
        </div>

        {/* Bottom row: author + imprint */}
        <div className="absolute bottom-8 inset-x-8 text-center">
          <p className="font-serif text-[0.75rem] tracking-[0.35em] uppercase text-neutral-900">
            {authorLabel}
          </p>
          <p className="font-sans text-[0.55rem] tracking-[0.3em] uppercase text-neutral-900/50 mt-1.5">
            Brand Xperience
          </p>
        </div>
      </div>
    </div>
  );
}
