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

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
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

  // Helper function to determine if a path is active
  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="bg-gray-200">
      <nav className="mx-auto container relative px-4 py-6  sm:px-10 flex justify-between items-center">
        <Link href="/" className="z-10">
          <Image src="/trj logo.png" alt="Tols Logo" width={120} height={40} />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden text-sm xl:flex items-center gap-8">
          <Link
            href="/"
            className={`transition-colors relative ${
              isActivePath("/")
                ? "text-primary font-medium"
                : "hover:text-primary"
            }`}
          >
            HOME
            {isActivePath("/") && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </Link>
          <Link
            href="/about"
            className={`transition-colors relative ${
              isActivePath("/about")
                ? "text-primary font-medium"
                : "hover:text-primary"
            }`}
          >
            ABOUT TEMITOPE
            {isActivePath("/about") && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </Link>
          <button
            onClick={() => scrollToSection("resources")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            RESOURCES
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Button className="duration-300 px-3 text-xs py-1  sm:text-base hover:bg-white rounded-br-2xl hover:text-primary border border-primary">
            Connect With Me
          </Button>
          {/* Mobile Menu Button */}
          <button className="xl:hidden z-10" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Fixed positioning and display */}
        <div
          className={`fixed top-0 left-0 h-full w-[60%] bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ display: "block" }} /* Ensure it's always in the DOM */
        >
          <div className="flex justify-between items-center">
            <Link href="/" className="z-10">
              <Image
                src="/trj logo.png"
                alt="Tols Logo"
                width={120}
                height={40}
              />
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <X
                size={24}
                className="text-primary hover:text-gray-800 transition-colors"
              />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <Link
              href="/"
              className={`transition-colors relative pl-2 ${
                isActivePath("/")
                  ? "text-primary font-medium border-l-2 border-primary"
                  : "hover:text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`transition-colors relative pl-2 ${
                isActivePath("/about")
                  ? "text-primary font-medium border-l-2 border-primary"
                  : "hover:text-primary"
              }`}
              onClick={() => setIsOpen(false)}
            >
              ABOUT TEMITOPE
            </Link>
            <button
              onClick={() => scrollToSection("resources")}
              className="hover:text-primary transition-colors text-left cursor-pointer pl-2"
            >
              RESOURCES
            </button>
          </div>
        </div>

        {/* Overlay with blur effect */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </div>
  );
}
