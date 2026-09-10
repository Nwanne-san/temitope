"use client";

import * as React from "react";
import Link from "next/link";
import { Quote, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  initials: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    id: "uby-jasper",
    quote:
      "Temitope Ruth Jacob is a branding and marketing strategist who crafts compelling brand identities and results-driven campaigns. Her innovative approach and strategic execution help businesses stand out and achieve growth.",
    author: "Ubongobong Akpan",
    title: "CEO",
    organization: "Uby Jasper MediaLabs",
    initials: "UA",
  },
  {
    id: "vnk-resources",
    quote:
      "Temitope Ruth Jacob is a visionary in branding and marketing. Her strategic genius transformed our brand identity and amplified our reach exponentially. She crafts data-driven campaigns that deliver measurable growth, coupled with an intuitive understanding of audience engagement. Professional, innovative, and results-focused—Temitope is simply exceptional.",
    author: "Vivian Efajemue",
    title: "CEO",
    organization: "VNK Resources",
    initials: "VE",
  },
  {
    id: "jpa-enterprise",
    quote:
      "Temitope truly portrays a deep understanding of branding strategy, management intelligence and cutting-edge solutions to the challenges and endless possibilities that abound. Her ability to decipher and distill complex ideas into a creative strategy and coherent narrative translates across all spectrums.",
    author: "James Ameh",
    title: "CEO",
    organization: "JPA Enterprise LLC",
    initials: "JA",
  },
  {
    id: "beacon-media",
    quote:
      "Ruth Temitope has proven she is a maestro when it comes to the branding game. Her eye for detail, speed of precision and doggedness have really enabled her to carve a niche for herself in the creative space. As one who has spent over a decade in this line of business, I highly recommend her for any job that is creative related, and I enjoy working with her.",
    author: "Enyinnaya Iroadumba",
    title: "Brand Connoisseur",
    organization: "Beacon Media Limited",
    initials: "EI",
  },
  {
    id: "alphagravida",
    quote:
      "Temitope's unique skills and cognate expertise in Branding and marketing is very exceptional and clearly shine through all our works. She is very detailed in understanding customer's requirements and very creative in the execution towards achieving set goals. Really collaborative person to work with.",
    author: "Olu Kosovo",
    title: "CEO",
    organization: "Alphagravida",
    initials: "OK",
  },
];

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({
      delay: 5500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-10 bg-primary relative overflow-hidden text-white">
      {/* Background texture watermark */}
      <div
        className="absolute inset-0 bg-cover z-0 bg-no-repeat bg-center pointer-events-none opacity-10"
        style={{
          backgroundImage: "url(/trj-pattern.png)",
        }}
      />

      <div className="container mx-auto relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          {/* Header row with title & navigation buttons */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80 font-sans">
                Social Proof &amp; Endorsements
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight">
                Trusted by Founders &amp; Leaders
              </h2>
              <p className="text-white/85 font-sans text-sm sm:text-base max-w-xl">
                What clients and executive partners say about collaborating with
                Temitope on brand architecture and market positioning.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-end">
              <Link href="/contact">
                <Button className="bg-white hover:bg-white/90 text-primary rounded-br-2xl text-xs sm:text-sm font-sans font-medium px-5 py-2.5 transition-colors shadow-sm">
                  Work with Temitope
                </Button>
              </Link>
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-10 w-10 border border-white/40 bg-white/20 text-white hover:bg-white hover:text-primary shadow-sm" />
                <CarouselNext className="relative static translate-x-0 translate-y-0 h-10 w-10 border border-white/40 bg-white/20 text-white hover:bg-white hover:text-primary shadow-sm" />
              </div>
            </div>
          </div>

          {/* Testimonials Carousel Track */}
          <CarouselContent className="-ml-6">
            {testimonials.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-6 md:basis-1/2 flex"
              >
                <div className="w-full bg-white text-secondary rounded-2xl p-7 sm:p-9 shadow-lg flex flex-col justify-between border border-white/20">
                  <div>
                    {/* Stars and Quote Glyph */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1 text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current text-primary"
                          />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-primary/20" />
                    </div>

                    {/* Quote text */}
                    <blockquote className="font-sans text-secondary text-base sm:text-lg leading-relaxed mb-8">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author information */}
                  <div className="flex items-center gap-4 pt-6 border-t border-secondary/10">
                    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-sm sm:text-base shrink-0 border border-primary/20">
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-secondary leading-snug">
                        {item.author}
                      </h3>
                      <p className="text-xs uppercase tracking-wider font-sans font-semibold text-primary">
                        {item.title} &middot; {item.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Bottom Controls: Dots and Mobile Arrows */}
          <div className="flex items-center justify-between sm:justify-center mt-10">
            <div className="flex sm:hidden items-center gap-2">
              <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-9 w-9 border border-white/40 bg-white/20 text-white hover:bg-white hover:text-primary" />
              <CarouselNext className="relative static translate-x-0 translate-y-0 h-9 w-9 border border-white/40 bg-white/20 text-white hover:bg-white hover:text-primary" />
            </div>

            <CarouselDots
              className="py-2"
              dotClassName="bg-white/40 hover:bg-white/70"
              activeDotClassName="bg-white w-7"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
