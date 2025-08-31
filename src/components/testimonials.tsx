"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Quote } from "lucide-react";
import { motion, useAnimation, type PanInfo } from "framer-motion";

const testimonials = [
  {
    quote:
      "Temitope Ruth Jacob is a branding and marketing strategist who crafts compelling brand identities and results-driven campaigns. Her innovative approach and strategic execution help businesses stand out and achieve growth.",
    author: "Ubongobong Akpan",
    title: "C.E.O. Uby Jasper MediaLabs.",
  },
  {
    quote:
      "Temitope Ruth Jacob is a visionary in branding and marketing. Her strategic genius transformed our brand identity and amplified our reach exponentially. She crafts data-driven campaigns that deliver measurable growth, coupled with an intuitive understanding of audience engagement. Professional, innovative, and results-focused—Temitope is simply exceptional.",
    author: "Vivian Efajemue",
    title: "CEO, VNK Resources",
  },
  {
    quote:
      "Temitope truly portraits a deep understanding of branding strategy, management intelligence and cutting edge solutions to the challenges and endless possibilities that abounds. Her ability to decipher and distill complex ideas into a creative strategy and coherent narrative translates across all spectrum.",
    author: "James Ameh",
    title: "CEO, JPA Enterprise LLC",
  },
  {
    quote:
      "Ruth Temitope has proven she is a mastro when it comes to the branding game. Her eye for details, speed of precision and doggedness has really enabled her to carve a niche for herself in the creative space. As one who has spent over a decade in this line of business, I highly recommend her for any job that is creative related and I enjoy working with her.",
    author: "Enyinnaya Iroadumba",
    title: "Brand Connoisseur, Beacon Media Limited",
  },
  {
    quote:
      "Temitope's unique skills and cognate expertise in Branding and marketing is very exceptional and clearly shine through all our works. She is very detailed in understanding customer's requirements and very creative in the execution towards achieving set goals. Really collaborative person to work with",
    author: "Olu Kosovo",
    title: "CEO, Alphagravida",
  },
];

function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const controls = useAnimation();
  const INTERVAL_DELAY = 6000;

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = async () => {
    await controls.start({
      x: "-100%",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    });
    setCurrentPage((prev) => (prev + 1) % totalPages);
    controls.set({ x: "100%" });
    await controls.start({
      x: "0%",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    });
  };

  const prevPage = async () => {
    await controls.start({
      x: "100%",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    });
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    controls.set({ x: "-100%" });
    await controls.start({
      x: "0%",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    });
  };

  const goToPage = async (page: number) => {
    if (page === currentPage) return;

    const direction = page > currentPage ? -1 : 1;
    await controls.start({
      x: `${direction * 100}%`,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    });
    setCurrentPage(page);
    controls.set({ x: `${-direction * 100}%` });
    await controls.start({
      x: "0%",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    });
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 80;
    if (info.offset.x < -threshold) {
      nextPage();
    } else if (info.offset.x > threshold) {
      prevPage();
    } else {
      controls.start({
        x: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });
    }
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextPage, INTERVAL_DELAY);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, currentPage]);

  const getVisibleTestimonials = () => {
    const startIndex = currentPage * itemsPerPage;
    const visibleItems = [];

    for (let i = 0; i < itemsPerPage; i++) {
      const index = (startIndex + i) % testimonials.length;
      visibleItems.push(testimonials[index]);
    }

    return visibleItems;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-12 md:py-24 px-4 lg:px-10 bg-primary relative">
      {/* Background pattern with opacity */}
      <div
        className="absolute inset-0 bg-cover z-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/trj-pattern.png)",
          opacity: 0.1,
        }}
      />

      <div className="container mx-auto relative !text-black z-10">
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-0 justify-between items-center mb-12">
          <h2 className="font-averia text-3xl md:text-4xl text-white font-semibold">
            Testimonials
          </h2>
          <a href="https://wa.link/dtys70" target="_blank" rel="noreferrer">
            <Button className="bg-white/60 hover:bg-white rounded-br-2xl hover:text-primary text-black px-6 py-2 font-avenir transition-colors">
              MEET TEMITOPE
            </Button>
          </a>
        </div>

        <div
          className="relative overflow-hidden min-h-[400px] md:min-h-[350px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className={`grid ${
              isMobile ? "grid-cols-1" : "md:grid-cols-2"
            } gap-8 h-full`}
            animate={controls}
            initial={{ x: 0 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`testimonial-${currentPage}-${index}`}
                className="relative space-y-4 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <Quote size={60} className="text-primary-dark opacity-20" />
                </div>
                <p className="text-white relative z-10 text-base font-avenir leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="text-white">
                  <h3 className="font-averia text-xl font-semibold">
                    {testimonial.author}
                  </h3>
                  <p className="text-white/70 uppercase text-sm font-avenir">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex sm:hidden justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={`dot-${index}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
              onClick={() => {
                goToPage(index);
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  if (!isPaused) {
                    intervalRef.current = setInterval(nextPage, INTERVAL_DELAY);
                  }
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
