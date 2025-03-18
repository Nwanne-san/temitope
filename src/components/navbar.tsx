"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
  activePage?: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);

    if (activePage !== "home") {
      setActivePage("home");
      // Add a small delay to allow the home page to render before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // If we're already on the homepage, just scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper function to determine if a path is active
  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Handle hash in URL when page loads
  useEffect(() => {
    if (activePage === "home" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [activePage]);

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
      <nav className="mx-auto container relative px-4 py-6 sm:px-10 flex justify-between items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setActivePage("home");
            window.location.href = "/";
          }}
          className="z-10"
        >
          <Image src="/trj logo.png" alt="Tols Logo" width={120} height={40} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden text-sm xl:flex items-center gap-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              setActivePage("home");
              window.location.href = "/";
            }}
            className={`transition-colors relative ${
              isActivePath("/")
                ? "text-primary font-medium"
                : "hover:text-primary"
            }
            `}
          >
            HOME
            {isActivePath("/") && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
          <button
            onClick={(e) => {
              // e.preventDefault();
              // setActivePage("about");
              window.location.href = "/about";
            }}
            className={`transition-colors relative ${
              isActivePath("/about")
                ? "text-primary font-medium"
                : "hover:text-primary"
            }`}
          >
            ABOUT TEMITOPE
            {activePage === "about" && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            )}
            {isActivePath("/about") && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
          <button
            onClick={() => {
              if (isActivePath("/about")) {
                window.location.href = "/#resources"; // Navigate first
                setTimeout(() => scrollToSection("resources"), 500); // Delay scroll to allow navigation
              } else {
                scrollToSection("resources");
              }
            }}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            RESOURCES
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={(e) => {
              window.location.href = "";
            }}
            className="duration-300 px-3 text-xs py-1 sm:text-base hover:bg-white rounded-br-2xl hover:text-primary border border-primary"
          >
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
            <button
              onClick={(e) => {
                e.preventDefault();
                setActivePage("home");
                setIsOpen(false);
              }}
              className="z-10"
            >
              <Image
                src="/trj logo.png"
                alt="Tols Logo"
                width={120}
                height={40}
              />
            </button>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <X
                size={24}
                className="text-primary hover:text-gray-800 transition-colors"
              />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <button
              className={`transition-colors text-start relative pl-2 ${
                isActivePath("/")
                  ? "text-primary font-medium  border-primary"
                  : "hover:text-primary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
                setIsOpen(false);
              }}
            >
              HOME
              {isActivePath("/") && (
                <span className="absolute -bottom-2 left-0 w-fit h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              className={`transition-colors text-start relative pl-2 ${
                activePage === "about"
                  ? "text-primary font-medium  border-primary"
                  : "hover:text-primary"
              } ${
                isActivePath("/about")
                  ? "text-primary font-medium"
                  : "hover:text-primary"
              }`}
              onClick={(e) => {
                e.preventDefault();
                // setActivePage("about");
                window.location.href = "/about";

                setIsOpen(false);
              }}
            >
              ABOUT TEMITOPE
              {isActivePath("/about") && (
                <span className="absolute -bottom-2 left-0 w-fit h-0.5 bg-primary"></span>
              )}
            </button>
            <button
              onClick={() => {
                if (isActivePath("/about")) {
                  window.location.href = "/#resources"; // Navigate first
                  setTimeout(() => scrollToSection("resources"), 500); // Delay scroll to allow navigation
                } else {
                  scrollToSection("resources");
                }
              }}
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
