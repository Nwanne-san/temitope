import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white/80 py-12 md:py-24 px-4 lg:px-10">
      <div className="container mx-auto">
        <div className="mb-12">
          <p className="text-white/70 uppercase tracking-widest flex items-center gap-2 mb-4">
            <span className="text-2xl text-white">✱</span> LET &abos S WORK
            TOGETHER
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="font-bai-jamjuree text-3xl font-semibold md:text-4xl text-white">
              hi@temitoperuthjacob.com
            </h2>
            <Button
              variant="primary"
              className="bg-primary duration-300 hover:bg-white hover:text-primary border border-primary text-white px-6 py-2  transition-colors"
              href="/meet"
            >
              MEET TEMITOPE
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-white/10">
          <div>
            <Image
              src="/logo-white.svg"
              alt="Tols Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-white/60">
              Banking and Financing | Fintech | Private Credit | Emerging
              Markets | Strategic Projects
            </p>
          </div>
          <div>
            <h3 className="font-bai-jamjuree text-lg mb-4">Contact Details</h3>
            <div className="space-y-2 text-white/60">
              <p>Abuja, Nigeria</p>
              <p>hi@tolulopeomoleye.com</p>
              <p>+(234) 9044044138</p>
            </div>
          </div>
          <div>
            <h3 className="font-bai-jamjuree text-lg mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t border-white/10 text-sm text-white/40">
          <p>
            Copyright © 2024 Tolulope Omoleye. All rights reserved. Designed By{" "}
            <Link href="#" className="text-primary hover:text-primary/80">
              Wale Ogunjobi
            </Link>
          </p>
          <Link href="/privacy" className="hover:text-white/60">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
