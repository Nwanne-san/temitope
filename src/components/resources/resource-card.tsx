import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ResourceCard as ResourceCardType } from "@/data/resources";
import { resourceTypeLabels } from "@/data/resources";

interface Props {
  resource: ResourceCardType;
}

const typeAccent: Record<ResourceCardType["type"], string> = {
  course: "bg-primary text-white",
  video: "bg-lightGray text-secondary",
  article: "bg-white text-secondary border border-secondary/10",
  talk: "bg-secondary text-white",
  podcast: "bg-secondary text-white",
  download: "bg-primary text-white",
};

export default function ResourceCard({ resource }: Props) {
  const {
    type,
    title,
    description,
    source,
    ctaLabel,
    url,
    external,
    meta,
    comingSoon,
    image,
    imageAlt,
  } = resource;

  const cardBase =
    "group flex flex-col rounded-sm border border-secondary/10 bg-white h-full hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden";

  const inner = (
    <>
      {image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-lightGray">
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
              comingSoon ? "opacity-70" : ""
            }`}
          />
          {comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/40">
              <span className="text-[0.65rem] font-sans font-medium tracking-[0.3em] uppercase text-white px-3 py-1 border border-white/50">
                Coming soon
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col justify-between flex-1 gap-6 p-6 xl:p-7">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className={`inline-block text-[0.65rem] font-sans font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm ${typeAccent[type]}`}
            >
              {resourceTypeLabels[type]}
            </span>
            {meta && (
              <span className="text-[0.65rem] tracking-widest uppercase text-secondary/40 font-sans">
                {meta}
              </span>
            )}
          </div>

          <h3 className="font-serif text-xl xl:text-2xl text-secondary leading-snug">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-secondary/65 font-sans leading-relaxed">
            {description}
          </p>

          {source && (
            <p className="text-xs font-sans text-secondary/50 tracking-wide uppercase">
              {source}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span
            className={`inline-flex items-center gap-2 uppercase tracking-widest text-xs font-sans font-medium transition-colors ${
              comingSoon
                ? "text-secondary/40"
                : "text-primary group-hover:text-secondary"
            }`}
          >
            {ctaLabel}
            {!comingSoon && <ArrowUpRight className="h-3.5 w-3.5" />}
          </span>
        </div>
      </div>
    </>
  );

  if (!url || comingSoon) {
    return <div className={`${cardBase} opacity-95`}>{inner}</div>;
  }

  if (external) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={cardBase}>
        {inner}
      </a>
    );
  }

  return (
    <a href={url} className={cardBase}>
      {inner}
    </a>
  );
}
