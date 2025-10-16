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
              Temitope Ruth-Jacob is a branding and marketing strategist with a
              clear vision and an unwavering commitment to unleashing the true
              potential of brands [personal/corporate] through strategic
              positioning and impactful marketing campaigns. She is skilled in
              developing branding strategies that incorporate multiple
              touchpoints, including digital media, social media, and
              experiential marketing and advertising.
            </motion.p>
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Her expertise lies in understanding consumer behavior and
              developing strategies that resonate with the audience. she has
              worked with a diverse range of clients, from startups to Fortune
              companies, across various industries such as technology, fashion,
              real estate, healthcare, and consumer goods. Temitope has
              developed a reputation for her strategic approach to brand
              development. She understands that every business is unique and
              believes that a successful brand is more than just a logo and
              color scheme. Rather, it is an expression of a company &apos; s
              values, vision, and mission.
            </motion.p>
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Possessing a deep understanding of consumer behavior and market
              trends, she is driven to make a difference in the way brands
              engage with their target audience. She has a keen eye for
              identifying a company &apos; s unique value proposition and
              developing creative strategies to communicate that message to the
              target audience. Armed with an insatiable curiosity and a hunger
              for knowledge, she has consistently sought for opportunities to
              expand her skills and expertise, carving a path towards becoming an
              industry leader in branding and marketing.
            </motion.p>
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              She is the founder and CEO of{" "}
              <a
                href="https://eleganceinspired.org"
                target="_blank"
                className="text-primary hover:text-secondary-2 underline transition-colors duration-300"
                rel="noreferrer"
              >
                Elegance Inspired Limited
              </a>
              ; A corporate Branding & Marketing company.{" "}
              <br className="mt-2" />
              Branding is not just a business for her, she has a passion to see
              brands thrive in the marketplace. At the core of her ambitions
              lies a desire to create meaningful connections between brands and
              consumers.
            </motion.p>
            <motion.p
              className="text-secondary-2 font-medium text-center xl:text-start mb-3 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Moreover, she aspires to be a thought leader and contribute to the
              branding and marketing community through speaking engagements,
              writing, and mentorship. she believes in the power of
              knowledge-sharing and collaboration, aiming to inspire and empower
              entrepreneurs to push boundaries, think creatively, and strive for
              excellence.
              <br /> She is a trusted advisor to her clients and has a track
              record of delivering results that exceed expectations.
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
