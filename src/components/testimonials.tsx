"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// Sample testimonials data
const testimonials = [
  {
    quote: "I worked with Tolulope on a number of financing deals involving borrowers in Nigeria – she acted as local counsel on the lender and borrower side. Not only is she responsive, but her knowledge of financing structures, documentation and commercial drivers of cross border financing were so valuable to the completion of the deals! To top it off, she is an absolute pleasure to work with and has always been one of my go to person.",
    author: "Laurie Hammond",
    title: "FOUNDER, DEALFLOW"
  },
  {
    quote: "I had the pleasure of working closely with Tolu from 2018 to 2019 while financing fintechs in Nigeria. Her expertise and dedication have been instrumental to our success. Tolu demonstrated an in-depth understanding of the complex and rapidly evolving fintech landscape in Nigeria. She was particularly adept at offering innovative legal strategies that supported the development and deployment of our fintech products and services.",
    author: "Sandra Locoh",
    title: "FOUNDER, FINLO"
  },
  {
    quote: "Working with Tolulope has been an exceptional experience. Her deep understanding of financial regulations and ability to navigate complex legal frameworks has been invaluable to our projects. She consistently delivers high-quality work with remarkable attention to detail.",
    author: "Michael Chen",
    title: "CEO, FINTECH INNOVATIONS"
  },
  {
    quote: "Tolulope brings a unique combination of legal expertise and business acumen to the table. Her strategic insights have helped us navigate challenging regulatory environments across multiple African markets. I highly recommend her services to any fintech looking to scale.",
    author: "Amara Okafor",
    title: "COO, PAYPRO AFRICA"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const INTERVAL_DELAY = 3000; // 3 seconds interval

  // Calculate the indices for the two visible testimonials
  const firstIndex = currentIndex % testimonials.length;
  const secondIndex = (currentIndex + 1) % testimonials.length;

  // Simplified slide animation variants (horizontal only)
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    })
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isDragging) {
      autoPlayRef.current = setTimeout(() => {
        nextSlide();
      }, INTERVAL_DELAY);
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isDragging]);

  // Handle drag end
  const handleDragEnd = (
    _: any, 
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    setIsDragging(false);
    
    // If dragged left with enough velocity or distance, go to next slide
    if (info.offset.x < -100 || info.velocity.x < -500) {
      nextSlide();
    } 
    // If dragged right with enough velocity or distance, go to previous slide
    else if (info.offset.x > 100 || info.velocity.x > 500) {
      prevSlide();
    }
  };

  return (
    <section className="py-12 md:py-24 px-4 bg-primary relative">
      {/* Background pattern with opacity */}
      <div
        className="absolute inset-0 bg-contain z-0"
        style={{
          backgroundImage: "url(/pattern.png)",
          opacity: 0.1,
        }}
      />

      {/* Content with full opacity */}
      <div className="container mx-auto relative !text-black z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-bai-jamjuree text-3xl md:text-4xl text-white font-semibold">
            Testimonials
          </h2>
          <Button
            className="bg-white/60 hover:bg-white hover:text-primary text-black px-6 py-2 rounded transition-colors"
            href="/meet"
          >
            MEET TOLULOPE
          </Button>
        </div>

        {/* Testimonial slider with fixed height */}
        <div className="relative overflow-hidden min-h-96">
          <motion.div
            className="grid md:grid-cols-2 gap-8 h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => {
              setIsDragging(true);
              if (autoPlayRef.current) {
                clearTimeout(autoPlayRef.current);
              }
            }}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {/* First visible testimonial */}
              <motion.div
                key={`testimonial-${firstIndex}`}
                className="relative space-y-4 overflow-y-auto h-full"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="flex items-start">
                  <Quote size={60} className="text-primary-dark opacity-20" />
                </div>
                <p className="text-white/90 relative z-10 text-base font-poppins leading-relaxed">
                  {testimonials[firstIndex].quote}
                </p>
                <div className="text-white">
                  <h3 className="font-bai-jamjuree text-xl">{testimonials[firstIndex].author}</h3>
                  <p className="text-white/70 uppercase text-sm">
                    {testimonials[firstIndex].title}
                  </p>
                </div>
              </motion.div>

              {/* Second visible testimonial */}
              <motion.div
                key={`testimonial-${secondIndex}`}
                className="relative space-y-4 overflow-y-auto h-full"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="flex items-start">
                  <Quote size={60} className="text-primary-dark opacity-20" />
                </div>
                <p className="text-white/90 relative z-10 text-base font-poppins leading-relaxed">
                  {testimonials[secondIndex].quote}
                </p>
                <div className="text-white">
                  <h3 className="font-bai-jamjuree text-xl">{testimonials[secondIndex].author}</h3>
                  <p className="text-white/70 uppercase text-sm">
                    {testimonials[secondIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;