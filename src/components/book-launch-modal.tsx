"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, CalendarDays } from "lucide-react";
import { evolve } from "@/data/evolve";

// Show the launch modal at most once per 10 hours per device.
const STORAGE_KEY = "evolveModalLastSeen";
const THROTTLE_MS = 10 * 60 * 60 * 1000;
// Small delay so the modal does not pop before the hero has rendered.
const OPEN_DELAY_MS = 3500;

export default function BookLaunchModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastSeen = 0;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      lastSeen = raw ? Number.parseInt(raw, 10) || 0 : 0;
    } catch {
      // localStorage may be blocked (private mode, etc.) — treat as never seen.
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
          key="evolve-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="evolve-modal-title"
        >
          <motion.div
            key="evolve-modal-panel"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg sm:max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col sm:grid sm:grid-cols-5 sm:items-stretch"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-secondary hover:text-primary flex items-center justify-center shadow-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image column ─── mobile: banner; desktop: full panel height. */}
            <div className="relative w-full h-48 sm:h-full sm:min-h-[28rem] sm:col-span-2 bg-[#E56B3A] shrink-0">
              {evolve.coverImage && (
                <Image
                  src={evolve.coverImage}
                  alt="Evolve — book cover"
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              )}
            </div>

            {/* Content column */}
            <div className="sm:col-span-3 p-6 sm:p-8 lg:p-10 overflow-y-auto">
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-primary font-sans inline-flex items-center gap-2">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Launching {evolve.launchDateLabel}</span>
              </p>

              <h2
                id="evolve-modal-title"
                className="mt-3 font-serif text-3xl sm:text-4xl leading-tight text-secondary"
              >
                {evolve.title}
                <span className="text-primary">.</span>
              </h2>

              <p className="mt-2 font-serif text-base sm:text-lg text-secondary/80 leading-snug">
                {evolve.subtitle}
              </p>

              <p className="mt-4 text-sm sm:text-[15px] text-secondary/75 font-sans leading-relaxed">
                {evolve.modalPitch}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/books#waitlist"
                  onClick={close}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs bg-primary text-white font-sans font-medium px-5 py-3 rounded-tl-3xl hover:bg-primary/90 transition-colors text-center"
                >
                  Join the waitlist
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/books#about"
                  onClick={close}
                  className="w-full sm:w-auto inline-flex items-center justify-center uppercase tracking-widest text-xs bg-lightGray text-secondary font-sans font-medium px-5 py-3 rounded-br-3xl hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Read a glimpse
                </Link>
              </div>

              <p className="mt-4 text-[11px] text-secondary/50 font-sans">
                Already read it?{" "}
                <Link
                  href="/books#review"
                  onClick={close}
                  className="underline underline-offset-2 hover:text-primary"
                >
                  Leave a review
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
