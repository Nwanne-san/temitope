"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <section className="container mx-auto px-4 sm:py-12 flex pb-16 sm:pb-20 xl:pb-24 xl:px-10 flex-col-reverse lg:flex-row xl:grid grid-cols-2 items-center gap-12">
      <div className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-start space-y-6">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm sm:text-base xl:text-justify leading-relaxed text-secondary-2">
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
          <p className="text-sm sm:text-base xl:text-justify leading-relaxed text-secondary-2">
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
          <p className="text-sm sm:text-base xl:text-justify leading-relaxed text-secondary-2">
            Her expertise lies in understanding consumer behavior and developing
            strategies that resonate with the audience. she has worked with a
            diverse range of clients, from startups to Fortune companies, across
            various industries such as technology, fashion, real estate,
            healthcare, and consumer goods.
          </p>
        </motion.div>

        <motion.p
          className="text-lg sm:text-2xl font-semibold font-bai-jamjuree text-secondary"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Personal Branding | Marketing | Communication | Advertising | Strategy
        </motion.p>

        <div className="flex  gap-6 lg:justify-between xl:justify-normal lg:gap-40 xl:gap-4 font-bai-jamjuree">
          {/* Not animated as requested */}
          <Button
            variant="primary"
            href="/about"
            className="bg-primary text-white text-nowrap tracking-widest py-3 px-5 rounded-tl-3xl text-xs sm:text-sm duration-300 hover:bg-primary/10 hover:text-primary border "
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
              className="border-0 text-secondary text-nowrap text-xs sm:text-sm tracking-widest  duration-300 bg-lightGray rounded-br-3xl"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pb-4 items-center text-black">
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <p className="text-secondary font-medium capitalize ">
              Connect with me
            </p>
          </motion.div>
          <span className="flex items-center">
            <hr className="text-secondary bg-secondary h-0.5 w-20 mt-3" />
          </span>
          <motion.div
            className="flex gap-3 pt-4 items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              href="https://www.linkedin.com/in/temitoperuthjacob?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="text-white/60 p-2.5 hover:scale-90 duration-300 bg-black/80 rounded-full hover:text-white/80"
              target="_blank"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/thebranding.queen?igsh=b3BpcGdiejJmcG1y&utm_source=qr"
              className="text-white/70 p-2.5 hover:scale-90 duration-300 bg-black/80 rounded-full hover:text-white/80"
              target="_blank"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://x.com/thebrand_queen?s=11&t=s_pVVBco_gTAYdv-a-BSew"
              className="text-white/70 p-2.5 hover:scale-90 duration-300 bg-black/80 rounded-full hover:text-white/80"
              target="_blank"
            >
              <FaXTwitter size={18} />
            </Link>
            <Link
              href="https://www.facebook.com/temitope.jacob.731?mibextid=LQQJ4d"
              className="text-white/70 p-2.5 hover:scale-90 duration-300 bg-black/80 rounded-full hover:text-white/80"
              target="_blank"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://www.tiktok.com/@thebranding.queen?_t=ZM-8uhkYvLIXYb&_r=1"
              className="text-white/70 p-2.5 hover:scale-90 duration-300 bg-black/80 rounded-full hover:text-white/80"
              target="_blank"
            >
              <FaTiktok size={18} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="absolute right-[15%] md:right-[19%] lg:right-[21%] xl:right-[28%] max-[1400]:right-[39%] top-[2%]  z-[2]"
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
