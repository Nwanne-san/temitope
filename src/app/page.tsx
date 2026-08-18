"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BookModal, BookPromo } from "@/components/book-modal";

import LogoCarousel from "@/components/logo-carousel";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Achievements from "@/components/achievements";
import Resources from "@/components/resources";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

const MODAL_SEEN_KEY = "bookModalSeenAt";
const MODAL_MIN_SCROLL = 400;
const MODAL_DELAY_MS = 4000;

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(MODAL_SEEN_KEY)) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const tryOpen = () => {
      if (window.scrollY < MODAL_MIN_SCROLL) return;
      window.removeEventListener("scroll", tryOpen);
      if (timer) clearTimeout(timer);
      setShowModal(true);
      sessionStorage.setItem(MODAL_SEEN_KEY, String(Date.now()));
    };

    timer = setTimeout(() => {
      window.removeEventListener("scroll", tryOpen);
      if (sessionStorage.getItem(MODAL_SEEN_KEY)) return;
      setShowModal(true);
      sessionStorage.setItem(MODAL_SEEN_KEY, String(Date.now()));
    }, MODAL_DELAY_MS);

    window.addEventListener("scroll", tryOpen, { passive: true });

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", tryOpen);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setShowPromo(true);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setShowPromo(false);
  };

  return (
    <div className="relative">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <BookModal onClose={handleCloseModal} />
        </div>
      )}
      {showPromo && <BookPromo onOpen={handleOpenModal} />}

      <motion.div
        className="relative font-sans"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <main className="overflow-hidden">
          <motion.section
            className="bg-cream"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
          </motion.section>

          <motion.section
            className="mx-auto container px-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LogoCarousel />
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Achievements />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Testimonials />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Resources id="resources" />
          </motion.div>

          <Footer />
        </main>
      </motion.div>
    </div>
  );
}
