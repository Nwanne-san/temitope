"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, BookOpen, Download } from "lucide-react";
import { evolve } from "@/data/evolve";

const STORAGE_KEY = "evolveBooksDesktopModalLastSeen";
const THROTTLE_MS = 8 * 60 * 60 * 1000; // 8 hours
const OPEN_DELAY_MS = 2500;

export default function EvolveFlyerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Desktop only — ignore on mobile/tablet viewports
    if (window.innerWidth < 768) return;

    let lastSeen = 0;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      lastSeen = raw ? Number.parseInt(raw, 10) || 0 : 0;
    } catch {
      // ignore
    }

    if (Date.now() - lastSeen < THROTTLE_MS) return;

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="evolve-flyer-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] hidden md:flex items-center justify-center bg-black/65 backdrop-blur-sm p-4 sm:p-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="evolve-flyer-modal-title"
        >
          <motion.div
            key="evolve-flyer-modal-panel"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] grid grid-cols-5 items-stretch border border-white/20"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-secondary hover:text-primary flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Flyer Column — NOT zoomed in, object-contain within background */}
            <div className="relative col-span-2 bg-[#2D0B2E] p-4 flex items-center justify-center shrink-0 min-h-[30rem]">
              <div className="relative w-full h-full max-h-[30rem] aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/evolve-flyer.png"
                  alt="Evolve — Official Book Launch Flyer"
                  fill
                  sizes="360px"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="col-span-3 p-8 lg:p-10 flex flex-col justify-between overflow-y-auto">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary font-sans">
                  Out Now
                </p>

                <h2
                  id="evolve-flyer-modal-title"
                  className="mt-3 font-serif text-3xl lg:text-4xl leading-tight text-secondary font-semibold"
                >
                  {evolve.title}
                  <span className="text-primary">.</span>
                </h2>

                <p className="mt-2 font-serif text-base lg:text-lg text-secondary/85 leading-snug">
                  {evolve.subtitle}
                </p>

                <p className="mt-4 text-sm text-secondary/75 font-sans leading-relaxed">
                  {evolve.modalPitch}
                </p>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-nowrap items-center gap-3">
                  <Link
                    href="/books#purchase"
                    onClick={close}
                    className="whitespace-nowrap inline-flex items-center justify-center gap-2 uppercase tracking-wider text-xs bg-primary text-white font-sans font-medium px-5 py-3 rounded-tl-2xl hover:bg-primary/90 transition-colors shadow-sm shrink-0"
                  >
                    <BookOpen className="h-4 w-4" />
                    Buy hard copy
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/books#purchase"
                    onClick={close}
                    className="whitespace-nowrap inline-flex items-center justify-center gap-2 uppercase tracking-wider text-xs bg-lightGray text-secondary font-sans font-medium px-5 py-3 rounded-br-2xl hover:bg-primary hover:text-white transition-colors shrink-0"
                  >
                    <Download className="h-4 w-4" />
                    Buy e-book
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
