"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-ow md:grid grid-cols-2 items-center gap-12">
      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-base leading-relaxed text-secondary-2">
            Temitope Ruth Jacob is a branding and marketing strategist with a
            clear vision and an unwavering commitment to unleashing the true
            potential of brands [personal/corporate] through strategic
            positioning and impactful marketing campaigns.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-base leading-relaxed text-secondary-2">
            She is skilled in developing branding strategies that incorporate
            multiple touchpoints, including digital media, social media, and
            experiential marketing and advertising.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-base leading-relaxed text-secondary-2">
            Her expertise lies in understanding consumer behavior and developing
            strategies that resonate with the audience. she has worked with a
            diverse range of clients, from startups to Fortune companies, across
            various industries such as technology, fashion, real estate,
            healthcare, and consumer goods.
          </p>
        </motion.div>

        <motion.p
          className="text-2xl font-semibold font-bai-jamjuree text-secondary"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Personal Branding | Marketing | Communication | Advertising | Strategy
        </motion.p>

        <div className="flex gap-4 font-bai-jamjuree">
          {/* Not animated as requested */}
          <Button
            variant="primary"
            href="/about"
            className="bg-primary text-white  tracking-widest py-3 px-5 rounded-tl-3xl text-sm duration-300 hover:bg-primary/10 hover:text-primary border "
          >
            MEET TEMITOPE
          </Button>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              href="/about"
              className="border-0 text-secondary text-sm tracking-widest  duration-300 bg-lightGray rounded-br-3xl"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </div>

        <div className="flex gap-2 items-center">
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <p>Connect with me</p>
          </motion.div>
          {/* <hr className="text-secondary bg-secondary" /> */}
          <span></span>
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <Link href="#" className="text-primary hover:text-primary/80">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              <Twitter size={24} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="absolute right-[27%] top-[2%]  z-[2]"
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
          className="grayscale-hover rounded-lg h-auto w-auto relative z-10"
        />
      </div>
    </section>
  );
}

export default Hero;
