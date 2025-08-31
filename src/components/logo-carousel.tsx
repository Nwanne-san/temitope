"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { src: "/americann.png", alt: "America" },
  { src: "/DREAM.png", alt: "Dream" },
  { src: "/GOTNI.png", alt: "IFC" },
  { src: "/performx.png", alt: "PerformX" },
  { src: "/neccipr.png", alt: "Meta" },
];

export default function LogoCarousel() {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();

  const logoWidth = 160;
  const gapWidth = 64;
  const totalWidth = logos.length * (logoWidth + gapWidth);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const startInfiniteAnimation = () => {
    if (!isMounted) return;

    controls.start({
      x: [-totalWidth, 0],
      transition: {
        duration: 20, // Smooth continuous speed
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    });
  };

  useEffect(() => {
    if (!isMounted) return;
    startInfiniteAnimation();
    return () => controls.stop();
  }, [isMounted]);

  return (
    <section className="bg-primary flex flex-col md:flex-row gap-4 sm:gap-12 items-center py-6 sm:py-12 px-4 lg:px-10 -mt-16 sm:-mt-20 sm:z-20 relative">
      <h2 className="font-serif text-2xl text-white mb-2 md:mb-0 px-4 font-semibold">
        Organisations Impacted
      </h2>
      <div className="sm:px-7 overflow-hidden w-full">
        <motion.div className="flex items-center gap-16" animate={controls}>
          {[...Array(4)].map((_, setIndex) =>
            logos.map((logo, index) => (
              <motion.div
                key={`logo-${setIndex}-${index}`}
                className="flex-shrink-0 w-32 h-16 sm:w-40 sm:h-20 relative"
                whileHover={{
                  scale: 1.05,
                  filter: "grayscale(0%)",
                  transition: { duration: 0.3 },
                }}
                style={{
                  filter: "grayscale(100%)",
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
