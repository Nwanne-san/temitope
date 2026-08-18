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
          <p className="hidden sm:block text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-rose font-sans">
            Brand Strategist &middot; Speaker &middot; Author
          </p>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl xl:text-5xl leading-tight font-semibold font-serif text-ink"
          variants={itemVariants}
        >
          I shape how African brands{" "}
          <span className="text-brand-pink">show up, grow and succeed.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-secondary-2 font-sans max-w-xl"
          variants={itemVariants}
        >
          Brand strategy, storytelling and speaking for founders, executives
          and purpose-led organisations across Africa.
        </motion.p>

        <motion.div
          className="flex gap-6 lg:justify-between xl:justify-normal lg:gap-40 xl:gap-4 font-serif"
          variants={itemVariants}
        >
          <Link href="/speaking">
            <Button
              variant="primary"
              className="bg-rose text-white text-nowrap tracking-widest py-3 px-5 rounded-tl-3xl text-xs sm:text-sm duration-300 hover:bg-aubergine hover:text-white border-0 hover:scale-105 transition-all"
            >
              BOOK TEMITOPE TO SPEAK
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border-0 text-ink text-nowrap text-xs sm:text-sm tracking-widest duration-300 bg-blush rounded-br-3xl hover:scale-105 hover:bg-rose hover:text-white transition-all"
            onClick={() => {
              window.location.href = "/books";
            }}
          >
            READ THE HANDBOOK
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-2 pb-4 items-center text-ink"
          variants={itemVariants}
        >
          <div className="flex gap-4 pt-4">
            <p className="text-ink font-medium capitalize font-sans">
              Connect with me
            </p>
          </div>
          <span className="flex items-center">
            <hr className="text-ink bg-ink/60 h-0.5 w-20 mt-3" />
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
                  className="text-ink px-1 hover:scale-110 duration-300 rounded-full hover:text-rose transition-all"
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
        <p className="text-center sm:hidden mb-2 my-5 leading-relaxed font-sans">
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-rose mb-2">
            Brand Strategist &middot; Speaker &middot; Author
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
