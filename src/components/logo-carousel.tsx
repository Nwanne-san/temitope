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
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const opacity = useTransform(x, [-100, 0, 100], [1, 1, 1]);

  // Calculate the total width of all logos plus gaps
  const totalWidth = logos.length * (128 + 48); // 128px for logo width, 48px for gap

  // Auto-scroll animation
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startAnimation = async () => {
      if (!isDragging) {
        // Reset position first if needed
        await controls.start({ x: 0, transition: { duration: 0 } });

        // Animate to the negative of total width
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: 20, // Slow animation (20 seconds)
            ease: "linear",
          },
        });

        // Small delay before restarting
        timeoutId = setTimeout(startAnimation, 100);
      }
    };

    startAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [controls, totalWidth, isDragging]);

  // Handle manual drag
  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop(); // Stop the automatic animation
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    // Resume automatic animation after a short delay
    setTimeout(() => {
      if (!isDragging) {
        controls.start({
          x: -totalWidth,
          transition: {
            duration: 20,
            ease: "linear",
          },
        });
      }
    }, 1000);
  };

  return (
    <main className="bg-primary flex flex-col md:flex-row gap-12 items-center py-12 px-4 lg:px-10 -mt-20 sm:z-20 relative">
      <h2 className="font-bai-jamjuree text-2xl text-white mb-8 md:mb-0 px-4">
        Organisations Impacted
      </h2>
      <div className="px-7 overflow-hidden w-full">
        <motion.div
          ref={constraintsRef}
          className="flex items-center gap-12 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -totalWidth, right: 0 }}
          style={{ x, opacity }}
          animate={controls}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {/* Original logos */}
          {logos.map((logo, index) => (
            <div
              key={`original-${index}`}
              className="flex-shrink-0 w-32 h-16 relative grayscale-hover"
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
              className="flex-shrink-0 w-32 h-16 relative grayscale-hover"
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
