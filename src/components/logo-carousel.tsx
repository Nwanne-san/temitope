"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

interface PartnerLogo {
  src: string;
  alt: string;
  name: string;
}

const logos: PartnerLogo[] = [
  {
    src: "/americann.png",
    alt: "American Spaces Nigeria",
    name: "American Spaces",
  },
  {
    src: "/DREAM.png",
    alt: "Dream Center Trybe",
    name: "Dream Center Trybe",
  },
  {
    src: "/GOTNI.png",
    alt: "GOTNI Leadership Centre",
    name: "GOTNI Leadership",
  },
  {
    src: "/performx.png",
    alt: "PerformX Nexus & Summit",
    name: "PerformX Summit",
  },
  {
    src: "/neccipr.png",
    alt: "NECCI PR Roundtable",
    name: "NECCI PR Roundtable",
  },
];

export default function LogoCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1.2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  // Repeat logos so the continuous ticker track has plenty of items for any viewport width
  const tickerLogos = [...logos, ...logos, ...logos];

  return (
    <section
      aria-label="Organisations Impacted"
      className="bg-aubergine flex flex-col md:flex-row gap-6 sm:gap-10 items-center py-7 sm:py-10 px-4 sm:px-10 -mt-16 sm:-mt-20 sm:z-20 relative rounded-xl shadow-xl border border-rose/15 overflow-hidden"
    >
      {/* Title block */}
      <div className="shrink-0 text-center md:text-left px-2">
        <p className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-rose font-sans mb-1">
          Partner Network
        </p>
        <h2 className="font-serif text-xl sm:text-2xl text-cream font-semibold tracking-tight whitespace-nowrap">
          Organisations Impacted
        </h2>
      </div>

      {/* Ticker scroller with edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & right fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-aubergine to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-aubergine to-transparent z-10" />

        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="flex items-center gap-10 sm:gap-14">
            {tickerLogos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="shrink-0 flex items-center justify-center w-32 sm:w-40 h-14 sm:h-16 relative grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                title={logo.name}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
