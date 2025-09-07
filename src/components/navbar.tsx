"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activePage?: string;
  setActivePage?: (page: string) => void;
}

const mobileMenuVariants = {
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const menuItemVariants = {
  closed: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const [isBrandXDomain, setIsBrandXDomain] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      setIsBrandXDomain(
        hostname.includes("brandx.temitope.com") ||
          hostname.includes("brandx.localhost")
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActivePath = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [pathname]);

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

  if (isBrandXDomain) {
    return null;
  }

  return (
    <div className="bg-gray-200">
      <motion.nav
        className="mx-auto container relative px-4 py-6 sm:px-10 flex justify-between items-center font-sans"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Link href="/" className="z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/TRJ Logo MAIN.png"
              alt="Tols Logo"
              width={120}
              height={40}
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden text-sm xl:flex items-center gap-8 font-serif">
          <Link
            href="/"
            className={`transition-all duration-300 relative hover:scale-105 ${
              isActivePath("/")
                ? "text-primary font-medium"
                : "hover:text-primary"
            }`}
          >
            HOME
            {isActivePath("/") && (
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
          <Link
            href="/about"
            className={`transition-all duration-300 relative hover:scale-105 ${
              isActivePath("/about")
                ? "text-primary font-medium"
                : "hover:text-primary"
            }`}
          >
            ABOUT TEMITOPE
            {isActivePath("/about") && (
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
          <a
            href="https://brandx.temitoperuthjacob.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 relative hover:scale-105 hover:text-primary"
          >
            BRANDX
          </a>
          <motion.button
            onClick={() => {
              if (pathname !== "/") {
                router.push("/#resources");
              } else {
                scrollToSection("resources");
              }
            }}
            className="hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RESOURCES
          </motion.button>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://wa.link/dtys70" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="duration-300 px-3 text-xs py-1 sm:text-base hover:bg-white rounded-br-2xl hover:text-primary border border-primary font-sans">
                Connect With Me
              </Button>
            </motion.div>
          </a>

          <motion.button
            className="xl:hidden z-10"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 h-full w-[60%] bg-white shadow-lg p-6 z-50 font-sans"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex justify-between items-center">
                <Link
                  href="/"
                  className="z-10"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/trj logo.png"
                    alt="Tols Logo"
                    width={120}
                    height={40}
                  />
                </Link>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X
                    size={24}
                    className="text-primary hover:text-gray-800 transition-colors"
                  />
                </motion.button>
              </div>

              <motion.div
                className="flex flex-col gap-6 mt-6 font-serif"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
              >
                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/"
                    className={`transition-colors text-start relative pl-2 block ${
                      isActivePath("/")
                        ? "text-primary font-medium"
                        : "hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    HOME
                    {isActivePath("/") && (
                      <span className="absolute -bottom-2 left-0 w-fit h-0.5 bg-primary"></span>
                    )}
                  </Link>
                </motion.div>

                <motion.div variants={menuItemVariants}>
                  <Link
                    href="/about"
                    className={`transition-colors text-start relative pl-2 block ${
                      isActivePath("/about")
                        ? "text-primary font-medium"
                        : "hover:text-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT TEMITOPE
                    {isActivePath("/about") && (
                      <span className="absolute -bottom-2 left-0 w-fit h-0.5 bg-primary"></span>
                    )}
                  </Link>
                </motion.div>

                <motion.div variants={menuItemVariants}>
                  <a
                    href="https://brandx.temitoperuthjacob.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-left cursor-pointer pl-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    BRANDX
                  </a>
                </motion.div>

                <motion.div variants={menuItemVariants}>
                  <button
                    onClick={() => {
                      if (pathname !== "/") {
                        router.push("/#resources");
                      } else {
                        scrollToSection("resources");
                      }
                      setIsOpen(false);
                    }}
                    className="hover:text-primary transition-colors text-left cursor-pointer pl-2 block"
                  >
                    RESOURCES
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40"
              onClick={() => setIsOpen(false)}
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
            />
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
