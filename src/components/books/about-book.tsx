"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AboutBookProps {
  preview: readonly string[];
  rest: readonly string[];
}

export default function AboutBook({ preview, rest }: AboutBookProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative bg-white border-b border-secondary/10 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-10 py-16 xl:py-24 grid lg:grid-cols-5 gap-12 items-start">
        {/* Sticky heading (desktop) ─────────────────────────────────── */}
        <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start space-y-3">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans">
            About the book
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl xl:text-5xl text-secondary leading-tight break-words">
            You already have a brand.
          </h2>
          <p className="font-serif text-lg text-secondary/70 leading-snug max-w-xs">
            The only real question is whether you are the one building it.
          </p>
        </div>

        {/* Scrolling copy ──────────────────────────────────────────── */}
        <div className="lg:col-span-3 space-y-6 text-base sm:text-lg text-secondary/75 font-sans leading-relaxed">
          {preview.map((paragraph, i) => (
            <p key={`p-${i}`}>{paragraph}</p>
          ))}

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="rest"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-6 pt-6">
                  {rest.map((paragraph, i) => (
                    <p key={`r-${i}`}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-2 inline-flex items-center gap-1.5 uppercase tracking-widest text-xs font-sans font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
