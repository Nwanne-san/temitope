"use client";
import { Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const date = new Date().getFullYear();

type SubscribeStatus = "idle" | "loading" | "success" | "error";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data?.message || "You're on the list.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-aubergine text-cream/80 py-12 xl:py-24 px-4 lg:px-10">
      <div className="container mx-auto">
        <motion.div
          className="mb-12 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-cream/70 uppercase tracking-widest flex items-center justify-center xl:justify-start gap-2 mb-4 font-sans">
            Have a project? Get in touch.
          </p>
          <div className="flex flex-col xl:flex-row justify-between items-end md:items-center gap-4">
            <h2 className="font-serif text-xl sm:text-3xl font-semibold md:text-4xl text-cream">
              hi@temitoperuthjacob.com
            </h2>
            <Link href="/contact">
              <Button
                variant="primary"
                className="bg-rose rounded-br-2xl duration-300 hover:bg-cream hover:text-aubergine border border-rose text-white px-6 py-2 font-sans transition-colors"
              >
                CONTACT TEMITOPE
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 py-12 border-t border-cream/10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/TRJ 2 Logo New.png"
              alt="Temitope Ruth Jacob"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-cream/60 font-sans">
              Brand strategy, storytelling and speaking for founders,
              executives and purpose-led organisations across Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4 text-cream">Contact Details</h3>
            <div className="space-y-2 text-cream/60 font-sans">
              <p>Abuja, Nigeria</p>
              <p>hi@temitoperuthjacob.com</p>
              <p>+(234) 9044044138</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-4 text-cream">Follow Me</h3>
            <div className="flex gap-4 sm:gap-6">
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
                  href: "https://www.tiktok.com/@thebranding.queen?_t=ZM-8uhkYvLIXYb&_r=1",
                  icon: FaTiktok,
                },
                {
                  href: "https://www.facebook.com/profile.php?id=61574652656986&mibextid=kFxxJD",
                  icon: FaFacebookF,
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    className="flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 transition-colors"
                    target="_blank"
                  >
                    <social.icon
                      size={20}
                      className="w-3.5 h-3.5 sm:w-5 sm:h-5"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.section
            className="flex flex-col gap-5 sm:gap-4 flex-grow basis-full lg:basis-1/4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-lg font-semibold font-serif text-cream">
                Work With Me
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              noValidate
              className="flex flex-col gap-2"
            >
              <div className="bg-cream/10 rounded-lg flex items-center gap-2 py-1.5 px-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="bg-transparent rounded-lg placeholder:text-cream/40 py-1 text-cream w-full focus:outline-none px-2 font-sans disabled:opacity-60"
                  placeholder="Enter your email address"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="flex items-center gap-2 justify-center uppercase font-sans font-medium focus-visible:outline-none bg-rose text-white px-4 py-1.5 rounded-lg transition-all duration-300 hover:bg-cream hover:text-aubergine disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Subscribe"}
                </button>
              </div>
              {message && (
                <p
                  role={status === "error" ? "alert" : "status"}
                  className={`text-xs font-sans ${
                    status === "error" ? "text-red-300" : "text-cream/80"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </motion.section>
        </div>

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 sm:pt-12 border-t border-cream/10 text-sm text-cream/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="sm:w-1/2 text-center sm:text-start font-sans">
            Copyright © {date} Temitope Ruth-Jacob. All rights reserved.
            Designed By <br className="hidden xl:block" />
            <Link
              href="https://nwanne-san.vercel.app"
              className="text-rose hover:text-rose/80"
            >
              Nwanne Nnamani.
            </Link>
            <span className="text-cream/60 px-2">|</span>
            <Link
              href="https://eleganceinspired.org"
              target="_blank"
              className="text-rose hover:text-rose/80"
            >
              Elegance Inspired Limited
            </Link>
          </p>
          <Link
            href="/privacy"
            className="hover:text-cream/80 sm:block hidden font-sans"
          >
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
