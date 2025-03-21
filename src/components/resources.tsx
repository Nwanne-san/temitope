import React, { forwardRef, useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ResourcesProps {
  id?: string;
}

const Resources = forwardRef<HTMLElement, ResourcesProps>(
  ({ id = "resources" }, ref) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(5);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile view
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);

    // Update current index based on scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (sliderRef.current && !isDragging) {
          const scrollPosition = sliderRef.current.scrollLeft;
          const itemWidth = sliderRef.current.offsetWidth;
          const newIndex = Math.round(scrollPosition / itemWidth);
          setCurrentIndex(newIndex);
        }
      };

      const sliderElement = sliderRef.current;
      if (sliderElement) {
        sliderElement.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (sliderElement) {
          sliderElement.removeEventListener("scroll", handleScroll);
        }
      };
    }, [isDragging]);

    const handlePrev = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        const newIndex = Math.max(0, currentIndex - 1);
        setCurrentIndex(newIndex);
        sliderRef.current.scrollTo({
          left: newIndex * width,
          behavior: "smooth",
        });
      }
    };

    const handleNext = () => {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        const newIndex = Math.min(totalSlides - 1, currentIndex + 1);
        setCurrentIndex(newIndex);
        sliderRef.current.scrollTo({
          left: newIndex * width,
          behavior: "smooth",
        });
      }
    };

    const goToSlide = (index: number) => {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        setCurrentIndex(index);
        sliderRef.current.scrollTo({
          left: index * width,
          behavior: "smooth",
        });
      }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
      if (sliderRef.current) {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      if (sliderRef.current) {
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
      if (sliderRef.current) {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (!isDragging) return;
      if (sliderRef.current) {
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
      }
    };

    const resources = [
      {
        title: "Your Authentic Signature",
        subtitle: "A Personal Branding Handbook",
        image: "/YAS BOOK .jpg",
        description:
          "This handbook will guide you through a journey of self-discovery, strategic planning, and consistent execution. It's a practical guide designed to help you discover, define, and communicate your unique personal brand.",
        cta: "Download for free",
        link: "https://selar.com/1v4g42",
      },
      {
        title: "Personal Branding Consultation",
        subtitle: "",
        image: "/brand-consultation.jpg",
        description:
          "Personal brand is essential for career advancement, networking, and establishing credibility, Schedule a consultation so we discuss how to shape your public perception.",
        cta: "Schedule Consultation",
        link: "https://selar.com/412292",
      },
      {
        title: "Subscribe to my YouTube Channel",
        subtitle: "",
        image: "/YOUTUBE.jpg",
        description:
          "This handbook will guide you through a journey of Listen to Branding Strategist; Temitope Ruth Jacob @thebranding.queen discuss brand building strategies and gain insights on how craft an impactful brand experience.",
        cta: "Connect With Me",
        link: "https://youtube.com/@thebranding_queen?si=huxVKdlZKb6NDpFY",
      },
      {
        title: "Join My WhatsApp Community",
        subtitle: "",
        image: "/WHATSAPP.jpg",
        description:
          "Join to learn building strategies and gain insights on how craft an impactful brand experience.",
        cta: "Connect With Me",
        link: "https://chat.whatsapp.com/Ezs3MhInzZiHv6MRp8hYRo",
      },
      {
        title: "Join My Instagram Community",
        subtitle: "",
        image: "/IG.jpg",
        description:
          "Join to learn building strategies and gain insights on how craft an impactful brand experience.",
        cta: "Connect With Me",
        link: "https://www.instagram.com/channel/Aba-aF1wiK2wbTcn/",
      },

      {
        title: "My Articles",
        subtitle: "",
        image: "/articles-2.jpg",
        description:
          "Gain impactful insights on branding and marketing strategies.",
        cta: "Read my Articles",
        link: "https://temitoperuthjacob.medium.com",
      },
    ];

    return (
      <>
        <main className="bg-gray-300">
          <section
            id={id}
            ref={ref}
            className="container mx-auto px-4 lg:px-10 py-12 md:py-24 scroll-mt-20 relative"
          >
            <div className="space-y-2 mb-6">
              <h2 className="font-bai-jamjuree text-3xl md:text-4xl">
                Resource Hub
              </h2>
            </div>
            <div className="relative">
              <AnimatePresence>
                <>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300"
                    aria-label="Previous resources"
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300"
                    aria-label="Next resources"
                    disabled={currentIndex === totalSlides - 1}
                  >
                    <ChevronRight />
                  </motion.button>
                </>
              </AnimatePresence>
              {/* Slider Container */}
              <div
                ref={sliderRef}
                className={`flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory hide-scrollbar `}
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
              >
                {/* Resource Items */}
                {resources.map((resource, index) => (
                  <motion.section
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex-shrink-0 w-full flex sm:w-[calc(50%-16px)] items-center justify-center lg:w-[calc(33.333%-21.333px)] xl:w-[calc(25%-24px)] snap-start"
                  >
                    <div className="flex flex-col justify- gap-2 sm:gap-2.5 h-full">
                      <h2 className="font-bai-jamjuree text-[22px] px-1 sm:px-0 h-16 font-semibold text-start">
                        {resource.title}
                        {resource.subtitle && (
                          <div className="text-lg font-medium">
                            {resource.subtitle}
                          </div>
                        )}
                      </h2>
                      <Link
                        href={resource.link}
                        target="_blank"
                        className="flex justify-center items-center overflow-hidden rounded-md"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            width={360}
                            height={240}
                            className="rounded-md"
                          />
                        </motion.div>
                      </Link>
                      {resource.description && (
                        <p className="font-poppins px-1 sm:px-0 text-sm text-start mb-2 transition-colors sm:flex-grow">
                          {resource.description}
                        </p>
                      )}
                      <Link
                        href={resource.link}
                        target="_blank"
                        className="text-primary hover:underline hover:text-secondary duration-300 px-4 sm:px-0 capitalize flex items-center gap-2 text-base sm:mtauto"
                      >
                        {resource.cta} <ChevronRight />
                      </Link>
                    </div>
                  </motion.section>
                ))}
              </div>
              {isMobile && (
                <div className="flex justify-center gap-4 mt-6">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? "bg-primary w-8"
                          : "bg-primary/40"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Add a style tag to hide scrollbar */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </section>
        </main>
        <section className="bg-white">
          <div className=" mx-auto container  p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-bai-jamjuree text-2xl md:text-4xl text-black mb-8 leading-tight">
              For Speaking, Mentoring & Other Relevant Opportunities
            </h2>
            <a href="https://wa.link/dtys70" target="_blank">
              <Button
                variant="primary"
                // href="/connect"
                className="inline-flex items-center rounded-bl-xl bg-primary hover:bg-secondary hover:text-white"
              >
                CONNECT WITH ME
              </Button>
            </a>
          </div>
        </section>
      </>
    );
  }
);

Resources.displayName = "Resources";

export default Resources;
