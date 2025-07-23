"use client";

import type React from "react";

import { X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface BookModalProps {
  onClose: () => void;
}

export function BookModal({ onClose }: BookModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ease-in-out ${
        isVisible
          ? "bg-black/60 backdrop-blur-sm"
          : "bg-black/0 backdrop-blur-none"
      }`}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <div
        ref={modalRef}
        className={`relative w-[90%] md:w-[80%] max-sm:h-[60vh] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-700 hover:text-white/90 text-gray-800 z-10 transition-transform duration-200 hover:scale-110"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/30">
            <div
              className={`relative w-full md:max-w-[400px] flex items-center justify-center lg:aspect-[3/4] drop-shadow-xl transition-all duration-500 delay-150 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <Image
                src="/out now.jpg"
                alt="Book Cover"
                width={460}
                height={400}
                className="object-cover hidden sm:flex rounded-md max-sm:h- transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
              />
              <Image
                src="/out now website.jpg"
                alt="Book Cover"
                width={360}
                height={300}
                className="object-cover block sm:hidden rounded-md max-sm:h- transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center transition-all duration-500 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-3">
              Authentic Self Handbook
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Get your free copy of our exclusive e-book with practical guides
              to help you discover, define and communicate your brand.
            </p>
            <a href="https://selar.com/1v4g42" target="_blank">
              <Button className="!w-fit md:w-auto rounded-bl-3xl transition-transform duration-200 hover:scale-105">
                Download For Free
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BookPromoProps {
  onOpen: () => void;
}

export function BookPromo({ onOpen }: BookPromoProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-[90] bg-secondary-2 rounded-lg shadow-lg p-3 max-w-[40%] flex flex-row items-center gap-3 cursor-pointer hover:shadow-xl transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={onOpen}
    >
      <div className="relative h-14 w-10 flex-shrink-0">
        <Image
          src="/out now.jpg"
          alt="Book Cover"
          width={100}
          height={140}
          className=" object-contain rounded-sm h-full w-full"
        />
      </div>
      <div className="sm:pr-2">
        <h3 className="text-[9px] xl:text-sm font-semibold text-white">
          Personal branding handbook
        </h3>
        <p className="text-[8px] sm:text-xs text-white/80">Click to download now</p>
      </div>
    </div>
  );
}
