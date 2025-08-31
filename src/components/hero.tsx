"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

function Hero() {
  return (
    <section className="container mx-auto px-4 sm:py-12 flex pb-16 sm:pb-20 xl:pb-24 xl:px-10 flex-col-reverse lg:flex-row xl:grid grid-cols-2 items-center gap-12">
      <motion.div
        className="flex-1 flex flex-col items-center xl:items-start text-center xl:text-start space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="text-sm hidden sm:block mb-2 sm:text-base xl:text-justify leading-relaxed text-secondary-2 font-sans">
            Temitope Ruth Jacob is a brand strategist{" "}
            <span className="text-base sm:text-lg font-semibold text-primary font-serif">
              shaping how African brands grow, show up & succeed
            </span>
            . <br />
          </p>
        </motion.div>

        <motion.p
          className="text-lg sm:text-2xl font-semibold font-serif text-secondary"
          variants={itemVariants}
        >
          Branding | Marketing | Communication | Advertising | Strategy
        </motion.p>

        <motion.div
          className="flex gap-6 lg:justify-between xl:justify-normal lg:gap-40 xl:gap-4 font-serif"
          variants={itemVariants}
        >
          <a href="https://selar.com/412292" target="_blank" rel="noreferrer">
            <Button
              variant="primary"
              className="bg-primary text-white text-nowrap tracking-widest py-3 px-5 rounded-tl-3xl text-xs sm:text-sm duration-300 hover:bg-primary/10 hover:text-primary border hover:scale-105 transition-all"
            >
              MEET TEMITOPE
            </Button>
          </a>

          <Button
            variant="outline"
            className="border-0 text-secondary text-nowrap text-xs sm:text-sm tracking-widest duration-300 bg-lightGray rounded-br-3xl hover:scale-105 transition-all"
            onClick={() => {
              window.location.href = "/about";
            }}
          >
            LEARN MORE
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-2 pb-4 items-center text-black"
          variants={itemVariants}
        >
          <div className="flex gap-4 pt-4">
            <p className="text-secondary font-medium capitalize font-sans">
              Connect with me
            </p>
          </div>
          <span className="flex items-center">
            <hr className="text-secondary bg-secondary h-0.5 w-20 mt-3" />
          </span>
          <motion.div
            className="flex gap-3 pt-4 items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            {[
              {
                href: "https://www.linkedin.com/in/temitoperuthjacob?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                icon: Linkedin,
              },
              {
                href: "https://www.instagram.com/brandingqueen2?igsh=Z2pia3F4eXZ4ZnRj",
                icon: Instagram,
              },
              {
                href: "https://x.com/thebrand_queen?s=11&t=s_pVVBco_gTAYdv-a-BSew",
                icon: FaXTwitter,
              },
              {
                href: "https://youtube.com/@thebranding_queen?si=huxVKdlZKb6NDpFY",
                icon: FaYoutube,
              },
              {
                href: "https://www.facebook.com/profile.php?id=61574652656986&mibextid=kFxxJD",
                icon: FaFacebookF,
              },
              {
                href: "https://www.tiktok.com/@thebranding.queen?_t=ZM-8uhkYvLIXYb&_r=1",
                icon: FaTiktok,
              },
            ].map((social, index) => (
              <motion.div key={index} variants={socialVariants}>
                <Link
                  href={social.href}
                  className="text-secondary px-1 hover:scale-110 duration-300 bg-blck/0 rounded-full hover:text-primary transition-all hover:bg-rimary"
                  target="_blank"
                >
                  <social.icon size={18} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="text-lg text-center sm:hidden mb-2 sm:text-base xl:text-justify my-5 leading-relaxed text-secondary-2 font-sans">
          <span className="text-xl capitalize text-center sm:text-lg font-bold text-primary font-serif">
            I am shaping how African brands grow, show up & succeed.
          </span>
        </p>

        <motion.div
          className="absolute right-[15%] md:right-[19%] lg:right-[21%] xl:right-[28%] max-[1400]:right-[39%] top-[10] sm:top-[2%] z-[2]"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "backOut", delay: 0.5 }}
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
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.00 }}
        >
          <Image
            src="/profile-img.png"
            alt="Professional headshot"
            width={500}
            height={600}
            className="grayscale-hover rounded-lg h-auto w-auto relative z-20"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
