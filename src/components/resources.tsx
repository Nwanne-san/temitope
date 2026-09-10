"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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
import { resources, resourceTypeLabels, type ResourceCard } from "@/data/resources";

interface ResourcesProps {
  id?: string;
}

const typeBadges: Record<ResourceCard["type"], string> = {
  course: "bg-primary text-white",
  video: "bg-lightGray text-secondary",
  article: "bg-white text-secondary border border-secondary/15",
  talk: "bg-secondary text-white",
  podcast: "bg-secondary text-white",
  download: "bg-primary text-white",
};

export default function Resources({ id = "resources" }: ResourcesProps) {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <>
      <section
        id={id}
        className="py-16 sm:py-24 px-4 sm:px-10 bg-gray-100 border-t border-secondary/10 relative overflow-hidden scroll-mt-16"
      >
        <div className="container mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary font-sans">
                  Learning &amp; Free Guides
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-secondary font-semibold tracking-tight break-words">
                  Resource Hub
                </h2>
                <p className="text-secondary-2 font-sans text-sm sm:text-base leading-relaxed">
                  Practical handbooks, accelerator courses, keynote recordings,
                  and strategic essays to help you define and scale your personal
                  brand.
                </p>
              </div>

              <div className="flex items-center gap-4 self-start sm:self-end">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-primary hover:text-secondary transition-colors"
                >
                  <span>Explore full library</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="hidden sm:flex items-center gap-2">
                  <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-10 w-10 border border-secondary/20 bg-white text-secondary hover:bg-primary hover:text-white shadow-sm" />
                  <CarouselNext className="relative static translate-x-0 translate-y-0 h-10 w-10 border border-secondary/20 bg-white text-secondary hover:bg-primary hover:text-white shadow-sm" />
                </div>
              </div>
            </div>

            {/* Resources Carousel Track */}
            <CarouselContent className="-ml-6">
              {resources.map((item) => {
                const isExternal = Boolean(item.url && item.external);
                const hasUrl = Boolean(item.url && !item.comingSoon);

                const cardContent = (
                  <div className="group w-full h-full bg-white rounded-xl border border-secondary/10 overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Image container with subtle zoom */}
                      {item.image && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-lightGray">
                          <Image
                            src={item.image}
                            alt={item.imageAlt ?? item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                              item.comingSoon ? "opacity-60" : ""
                            }`}
                          />
                          {item.comingSoon && (
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary/40">
                              <span className="text-[0.65rem] font-sans font-medium tracking-[0.25em] uppercase text-white px-3 py-1 border border-white/60 rounded">
                                Coming Soon
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Text details */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-[0.65rem] font-sans font-medium uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full ${
                              typeBadges[item.type]
                            }`}
                          >
                            {resourceTypeLabels[item.type]}
                          </span>
                          {item.meta && (
                            <span className="text-[0.65rem] tracking-wider uppercase text-secondary/50 font-sans">
                              {item.meta}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-xl text-secondary font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2 break-words">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-secondary-2 font-sans leading-relaxed line-clamp-3 break-words">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* CTA footer */}
                    <div className="px-6 pb-6 pt-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                        <span>{item.ctaLabel}</span>
                        {!item.comingSoon && (
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        )}
                      </span>
                    </div>
                  </div>
                );

                return (
                  <CarouselItem
                    key={item.id}
                    className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 flex"
                  >
                    {hasUrl ? (
                      isExternal ? (
                        <a
                          href={item.url!}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex flex-col"
                        >
                          {cardContent}
                        </a>
                      ) : (
                        <Link href={item.url!} className="w-full flex flex-col">
                          {cardContent}
                        </Link>
                      )
                    ) : (
                      <div className="w-full flex flex-col">{cardContent}</div>
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between sm:justify-center mt-10">
              <div className="flex sm:hidden items-center gap-2">
                <CarouselPrevious className="relative static translate-x-0 translate-y-0 h-9 w-9 border border-secondary/20 bg-white text-secondary hover:bg-primary hover:text-white" />
                <CarouselNext className="relative static translate-x-0 translate-y-0 h-9 w-9 border border-secondary/20 bg-white text-secondary hover:bg-primary hover:text-white" />
              </div>

              <CarouselDots
                className="py-2"
                dotClassName="bg-secondary/20 hover:bg-primary/50"
                activeDotClassName="bg-primary w-7"
              />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Speaking & Mentoring CTA banner */}
      <section className="bg-white text-secondary py-14 sm:py-20 px-4 sm:px-10 border-t border-secondary/10 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary font-sans">
              Connect &amp; Collaborate
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-black font-semibold leading-tight">
              For Speaking, Mentoring &amp; Other Relevant Opportunities
            </h2>
            <p className="text-secondary-2 font-sans text-sm sm:text-base leading-relaxed">
              Available for keynotes, executive workshops, and strategic
              consultations across Africa and globally.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-secondary text-white rounded-br-2xl font-sans px-6 py-3 text-xs sm:text-sm uppercase tracking-widest font-medium transition-colors shadow-sm">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
