"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Function to handle scrolling to a section
  const scrollToSection = (sectionId: string) => {
    // Close mobile menu if open
    setIsOpen(false);

    // If we're not on the homepage, navigate to homepage first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    // If we're already on the homepage, just scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle hash in URL when page loads
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [pathname]);

  return (
    <div className="bg-gray-200">
        <nav className="mx-auto container relative px-4 py-10 sm:px-10 flex justify-between items-center">
          <Link href="/" className="z-10">
            <Image src="/Trj logo.svg" alt="Tols Logo" width={120} height={40} />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden text-sm md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              ABOUT TOLULOPE
            </Link>
            <button
              onClick={() => scrollToSection("resources")}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              RESOURCES
            </button>
          </div>
          <Button className="duration-300 hover:bg-white rounded-br-2xl hover:text-primary border border-primary">
            Connect
          </Button>
          {/* Mobile Menu Button */}
          <button className="md:hidden z-10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Mobile Menu */}
          <div
            className={`mobile-menu fixed top-0 left-0 h-full w-[60%] bg-white shadow-lg z-50 p-6 ${
              isOpen ? "open" : ""
            }`}
          >
            <div className="flex flex-col gap-6 mt-16">
              <Link
                href="/"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ABOUT TOLULOPE
              </Link>
              <button
                onClick={() => scrollToSection("resources")}
                className="hover:text-primary transition-colors text-left cursor-pointer"
              >
                RESOURCES
              </button>
              <Link
                href="/connect"
                className="btn-primary inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                CONNECT
              </Link>
            </div>
          </div>
          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </nav>
    </div>
  );
}
