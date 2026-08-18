import Link from "next/link";
import type { ReactNode } from "react";

interface CtaProps {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "outline";
}

interface ComingSoonProps {
  kicker: string;
  title: string;
  intro: ReactNode;
  ctas?: CtaProps[];
  children?: ReactNode;
}

export default function ComingSoon({
  kicker,
  title,
  intro,
  ctas,
  children,
}: ComingSoonProps) {
  return (
    <main className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 max-w-3xl">
      <p className="text-xs font-medium tracking-[0.2em] uppercase text-rose font-sans mb-4">
        {kicker}
      </p>
      <h1 className="font-serif text-4xl md:text-5xl xl:text-6xl text-ink font-semibold leading-tight mb-6">
        {title}
      </h1>
      <div className="text-base sm:text-lg text-ink/70 font-sans leading-relaxed mb-8 space-y-4">
        {typeof intro === "string" ? <p>{intro}</p> : intro}
      </div>
      {ctas && ctas.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {ctas.map((cta) => {
            const isPrimary = cta.variant !== "outline";
            const className = isPrimary
              ? "inline-flex items-center justify-center uppercase tracking-widest text-xs sm:text-sm bg-rose text-white font-sans font-medium px-5 py-3 rounded-tl-3xl hover:bg-aubergine transition-colors"
              : "inline-flex items-center justify-center uppercase tracking-widest text-xs sm:text-sm bg-blush text-ink font-sans font-medium px-5 py-3 rounded-br-3xl hover:bg-rose hover:text-white transition-colors";
            return cta.external ? (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {cta.label}
              </a>
            ) : (
              <Link key={cta.href} href={cta.href} className={className}>
                {cta.label}
              </Link>
            );
          })}
        </div>
      )}
      {children && <div className="mt-12">{children}</div>}
    </main>
  );
}
