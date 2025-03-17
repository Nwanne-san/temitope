"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";

const logos = [
  { src: "/americann.png", alt: "America" },
  { src: "/DREAM.png", alt: "Dream" },
  { src: "/GOTNI.png", alt: "IFC" },
  { src: "/MAIME.png", alt: "Lendable" },
  { src: "/market.png", alt: "Microsoft" },
  { src: "/neccipr.png", alt: "Meta" },
];

export default function LogoCarousel() {
  const [isDragging, setIsDragging] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const constraintsRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Calculate the total width of all logos plus gaps
  const logoWidth = 128; // 128px for logo width
  const gapWidth = 48; // 48px for gap
  const totalWidth = logos.length * (logoWidth + gapWidth);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Function to start the animation from the current position
  const startAnimation = async (startX = 0) => {
    if (!isMounted || isDragging) return;

    // Get the current x position or use the provided one
    const currentX = startX;

    // Calculate how far we need to go to reach the end
    const distanceToEnd = totalWidth + currentX;

    // Calculate the duration based on the remaining distance (keeping the same speed)
    const fullDuration = 20; // Full animation duration in seconds
    const remainingDuration = (distanceToEnd / totalWidth) * fullDuration;

    // Start the animation from the current position
    controls
      .start({
        x: -totalWidth,
        transition: {
          duration: remainingDuration,
          ease: "linear",
        },
      })
      .then(() => {
        // Once we reach the end, reset to the beginning and start again
        controls.set({ x: 0 });
        startAnimation(0);
      });
  };

  // Auto-scroll animation - only starts when component is mounted
  useEffect(() => {
    if (!isMounted) return;

    // Start the animation
    startAnimation(0);

    return () => {
      controls.stop();
    };
  }, [isMounted]);

  // Handle manual drag
  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop(); // Stop the automatic animation
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    // Get the current position after drag
    const currentX = x.get();

    // Resume animation from current position after a short delay
    setTimeout(() => {
      if (!isDragging) {
        startAnimation(currentX);
      }
    }, 500);
  };

  return (
    <main className="bg-primary flex flex-col md:flex-row gap-4 sm:gap-12 items-center py-6 sm:py-12 px-4 lg:px-10 -mt-16 sm:-mt-20 sm:z-20 relative">
      <h2 className="font-bai-jamjuree text-2xl text-white mb-8 md:mb-0 px-4">
        Organisations Impacted
      </h2>
      <div className="px-7 overflow-hidden w-full">
        <motion.div
          ref={carouselRef}
          className="flex items-center gap-12 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }}
          style={{ x }}
          animate={controls}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {/* Original logos */}
          {logos.map((logo, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
              style={{ pointerEvents: isDragging ? "none" : "auto" }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}

          {/* Duplicate logos for infinite loop effect */}
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
              style={{ pointerEvents: isDragging ? "none" : "auto" }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
