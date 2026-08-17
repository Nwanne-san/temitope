"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="container mx-auto xl:px-10 xl:py-12 flex flex-col xl:flex-row xl:grid grid-cols-2 items-center gap-12">
      <motion.div
        className="flex flex-col items-center px-4 sm:px-10 pt-10 xl:pt-0 xl:px-0 gap-5 xl:items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src="/iconn.jpg" alt="icon" width={20} height={20} />
          <span className="font-sans text-base text-secondary uppercase">
            About me
          </span>
        </motion.div>
        <div className="text-center xl:text-start space-y-7 text-sm">
          <motion.h3
            className="text-4xl text-secondary font-bold font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Meet Temitope
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Temitope Ruth Jacob is a brand strategist and the founder and CEO
              of{" "}
              <a
                href="https://eleganceinspired.org"
                target="_blank"
                className="text-primary hover:text-secondary-2 underline transition-colors duration-300"
                rel="noreferrer"
              >
                Elegance Inspired Limited
              </a>
              , an Abuja-based branding and marketing agency. She leads Brand
              Xperience, the firm&apos;s learning arm, and mentors around 700
              university students across Babcock University, the University of
              Ibadan, and Obafemi Awolowo University through Dream Center Trybe.
            </motion.p>
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              She holds an MSc in Marketing and Sales from Rome Business School,
              brand management and digital marketing certifications from the
              London School of Business Administration, and a BSc in Human
              Anatomy from Ahmadu Bello University. Her clients span technology,
              fashion, real estate, healthcare and consumer goods &mdash; from
              early-stage startups to Fortune-class companies.
            </motion.p>
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              She teaches a three-part framework &mdash; define your values,
              communicate with clarity, and consistently deliver on your
              promises &mdash; and speaks on personal branding, African brand
              identity, and the shift from execution to influence.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="relative bg-lightGray/70 mt-9 h-[60vh] sm:h-screen w-full xl:pt-20 flex justify-center items-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute lg:right-[35%] xl:right-[27%] max-sm:top-[25%] max-lg:top-[10%] xl:bottom-[32%] z-[2]"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src="/icon-two.png"
            alt=""
            width={300}
            height={300}
            className="h-auto w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/profile-img.png"
            alt="Professional headshot"
            width={500}
            height={600}
            className="grayscale-hover rounded-lg h-auto lg:h-full xl:h-auto w-auto relative z-20 transition-all duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Image
            src="/trj-pattern.png"
            alt="Professional headshot"
            width={500}
            height={200}
            className="grayscale-hover w-full xl:h-auto h- absolute -bottom-[30%] xl:-bottom-[0%] left-0 rounded-lg z-10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
