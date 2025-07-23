import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "sonner";

const date = new Date().getFullYear();
const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <footer className="bg-zinc-800 text-white/80 py-12 xl:py-24 px-4 lg:px-10">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col">
          <p className="text-white/70 uppercase tracking-widest flex items-center justify-center xl:justify-start gap-2 mb-4">
            Have a Project ? Get in Touch
          </p>
          <div className="flex flex-col xl:flex-row justify-between items-end md:items-center gap-4">
            <h2 className="font-bai-jamjuree text-xl sm:text-3xl font-semibold md:text-4xl text-white">
              hi@temitoperuthjacob.com
            </h2>
            <a href="https://selar.com/412292" target="_blank">
              <Button
                variant="primary"
                className="bg-primary rounded-br-2xl duration-300 hover:bg-white hover:text-primary border border-primary text-white px-6 py-2  transition-colors"
              >
                MEET TEMITOPE
              </Button>
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 py-12 border-t border-white/10">
          <div>
            <Image
              src="/TRJ logo white.png"
              alt="Tols Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-white/60">
              Personal Branding | Marketing | Communication | Advertising |
              Strategy
            </p>
          </div>
          <div>
            <h3 className="font-bai-jamjuree text-lg mb-4">Contact Details</h3>
            <div className="space-y-2 text-white/60">
              <p>Abuja, Nigeria</p>
              <p>hi@temitoperuthjacob.com</p>
              <p>+(234) 9044044138</p>
            </div>
          </div>
          <div>
            <h3 className="font-bai-jamjuree text-lg mb-4">Follow Me</h3>
            <div className="flex gap-4 sm:gap-6">
              <Link
                href="https://www.linkedin.com/in/temitoperuthjacob?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="hover:text- flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 ransition-colors"
                target="_blank"
              >
                <Linkedin size={20} className="w-3.5 h-3.5 sm:w-5 sm:h-5 " />
              </Link>
              <Link
                href="https://www.instagram.com/brandingqueen2?igsh=Z2pia3F4eXZ4ZnRj"
                className="hover:text- flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 ransition-colors"
                target="_blank"
              >
                <Instagram size={20} className="w-3.5 h-3.5 sm:w-5 sm:h-5 " />
              </Link>
              <Link
                href="https://x.com/thebrand_queen?s=11&t=s_pVVBco_gTAYdv-a-BSew"
                className="hover:text- flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 ransition-colors"
                target="_blank"
              >
                <FaXTwitter size={18} />
              </Link>
              <Link
                href="https://youtube.com/@thebranding_queen?si=huxVKdlZKb6NDpFY"
                className="hover:text- flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 ransition-colors"
                target="_blank"
              >
                <FaYoutube size={18} />
              </Link>
              <Link
                href="https://www.tiktok.com/@thebranding.queen?_t=ZM-8uhkYvLIXYb&_r=1"
                className="hover:text- flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 ransition-colors"
                target="_blank"
              >
                <FaTiktok size={20} className="w-3.5 h-3.5 sm:w-5 sm:h-5 " />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61574652656986&mibextid=kFxxJD"
                className="hover:text- flex items-center justify-center px-2 py-1.5 sm:p-3 rounded-full bg-gray-100 text-black/70 hover:scale-90 duration-200 ransition-colors"
                target="_blank"
              >
                <FaFacebookF size={20} className="w-3.5 h-3.5 sm:w-5 sm:h-5 " />
              </Link>
            </div>
          </div>
          <section className="flex flex-col gap-5 sm:gap-4 flex-grow basis-full lg:basis-1/4">
            <div>
              <p className="text-lg font-semibold">Work With Me</p>
            </div>
            <div className="bg-accent rounded-lg flex items-center gap-2 py-1.5 px-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-accent rounded-lg placeholder:text-secondary/50 py-1 text-secondary w-full focus:outline-none px-2"
                placeholder="Enter your email address"
              />
              <Link
                href="mailto:hi@temitoperuthjacob.com"
                className={`flex items-center gap-2  justify-center uppercase font-bai-jamjuree font-medium focus-visible:outline-none bg-primary text-white px-4 py-1.5 rounded-lg transition-all duration-300 hover:bg-red-600 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Subscribe
              </Link>
            </div>
          </section>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 sm:pt-12 border-t border-white/10 text-sm text-white/40">
          <p className="sm:w-1/2 text-center sm:text-start">
            Copyright © {date} Temitope Ruth-Jacob. All rights reserved.
            Designed By <br className="hidden xl:block" />
            <Link
              href="https://nwanne-san.vercel.app"
              className="text-primary hover:text-primary/80"
            >
              Nwanne Nnamani.
            </Link>
            <span className="text-white px-2">|</span>
            <Link
              href="https://eleganceinspired.org"
              target="_blank"
              className="  text-primary hover:text-primary/80"
            >
              Elegance Inspired Limited
            </Link>
          </p>
          <Link href="" className="hover:text-white/60 sm:block hidden">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
