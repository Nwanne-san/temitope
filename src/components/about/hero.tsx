"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="container mx-auto  xl:px-10 xl:py-12 flex flex-col xl:flex-row xl:grid grid-cols-2 items-center gap-12">
      <div className="flex flex-col items-center px-4 sm:px-10 pt-10 xl:pt-0 xl:px-0 gap-5 xl:items-start">
        <div className="flex gap-4">
          <Image src="/iconn.jpg" alt="icon" width={20} height={20} />
          <span className="font-poppins text-base text-secondary uppercase">
            About me
          </span>
        </div>
        <div className="text-center xl:text-start space-y-7 text-sm">
          <h3 className="text-4xl text-secondary font-bold font-bai-jamjuree">
            Meet Temitope
          </h3>
          <p className="text-secondary-2 font-normal text-center xl:text-start mb-3">
            Temitope Ruth-Jacob is a branding and marketing strategist with a
            clear vision and an unwavering commitment to unleashing the true
            potential of brands [personal/corporate] through strategic
            positioning and impactful marketing campaigns. She is skilled in
            developing branding strategies that incorporate multiple
            touchpoints, including digital media, social media, and experiential
            marketing and advertising.
          </p>
          <p className="text-secondary-2 font-normal text-center xl:text-start mb-3">
            {" "}
            Her expertise lies in understanding consumer behavior and developing
            strategies that resonate with the audience. she has worked with a
            diverse range of clients, from startups to Fortune companies, across
            various industries such as technology, fashion, real estate,
            healthcare, and consumer goods. Temitope has developed a reputation
            for her strategic approach to brand development. She understands
            that every business is unique and believes that a successful brand
            is more than just a logo and color scheme. Rather, it is an
            expression of a company &apos; s values, vision, and mission.
          </p>
          <p className="text-secondary-2 font-normal text-center xl:text-start mb-3">
            Possessing a deep understanding of consumer behavior and market
            trends, she is driven to make a difference in the way brands engage
            with their target audience. She has a keen eye for identifying a
            company &apos; s unique value proposition and developing creative
            strategies to communicate that message to the target audience. Armed
            with an insatiable curiosity and a hunger for knowledge, she has
            consistently sought for opportunities to expand my skills and
            expertise, carving a path towards becoming an industry leader in
            branding and marketing.
          </p>
          <p className="text-secondary-2 font-normal text-center xl:text-start mb-3">
            She is the founder and CEO of{" "}
            <a
              href="https://eleganceinspired.org"
              target="_blank"
              className="text-primary hover:text-secondary-2 underline transition-colors"
            >
              Elegance Inspired Limited
            </a>
            ; A corporate Branding & Marketing company. <br className="mt-2" />
            Branding is not just a business for her, she has a passion to see
            brands thrive in the marketplace. At the core of her ambitions lies
            a desire to create meaningful connections between brands and
            consumers.
          </p>
          <p className="text-secondary-2 font-normal text-center xl:text-start mb-3">
            Moreover, she aspires to be a thought leader and contribute to the
            branding and marketing community through speaking engagements,
            writing, and mentorship. she believes in the power of
            knowledge-sharing and collaboration, aiming to inspire and empower
            entrepreneurs to push boundaries, think creatively, and strive for
            excellence.
            <br /> She is a trusted advisor to her clients and has a track
            record of delivering results that exceed expectations.
          </p>
        </div>
      </div>
      <div className="relative bg-lightGray/70 mt-9 h-[60vh] sm:h-screen w-full xl:pt-20 flex justify-center items-end">
        <motion.div
          className="absolute lg:right-[35%] xl:right-[27%] max-sm:top-[25%] max-lg:top-[10%] xl:bottom-[32%]   z-[2]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/icon-two.png"
            alt=""
            width={300}
            height={300}
            className="h-auto w-auto"
          />
        </motion.div>
        <Image
          src="/profile-img.png"
          alt="Professional headshot"
          width={500}
          height={600}
          className="grayscale-hover rounded-lg h-auto lg:h-full xl:h-auto w-auto relative z-20"
        />
        <Image
          src="/trj-pattern.png"
          alt="Professional headshot"
          width={500}
          height={200}
          className="grayscale-hover w-full xl:h-auto h- absolute -bottom-[30%] xl:-bottom-[0%] left-0 rounded-lg  z-10"
        />
      </div>
    </section>
  );
}

export default HeroSection;
