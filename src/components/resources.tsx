import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface ResourcesProps {
  id?: string;
}

const Resources = forwardRef<HTMLElement, ResourcesProps>(
  ({ id = "resources" }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className="container mx-auto px-4 lg:px-10 py-12 md:py-24 scroll-mt-20"
      >
        <div className="space-y-2 mb-6">
          <p className="text-primary uppercase tracking-wider flex items-center gap-2">
            <span className="text-2xl">✱</span> ARTICLES, GUIDES, TEMPLATES
          </p>
          <h2 className="font-bai-jamjuree text-3xl md:text-4xl">
            Resource Hub
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <button className="group">
            <div className="flex flex-col gap-2.5">
              <h2 className="font-bai-jamjuree text-xl font-semibold text-start">
                Your Authentic Signature <br />{" "}
                <div className="text-lg font-medium">
                  A Personal Branding Handbook
                </div>
              </h2>
              <Image
                src="/YAS BOOK .jpg"
                alt=""
                width={360}
                height={240}
                className="hover:scale-105 rounded-md duration-300"
              />
              <p className="font-poppins text-sm text-start mb-2 transition-colors">
                This handbook will guide you through a journey of
                self-discovery, strategic planning, and consistent execution.
                It&apos;s a practical guide designed to help you discover,
                define, and communicate your unique personal brand.
              </p>
            </div>
            <p className="text-primary capitalize flex items-center gap-2 text-base">
              Download for free <span className="text-lg">→</span>
            </p>
          </button>
          <button className="group">
            <div className="flex flex-col gap-2.5">
              <h2 className="font-bai-jamjuree text-xl mb-6 font-semibold text-start">
                Subscribe to my YouTube Channel
              </h2>
              <Image
                src="/YOUTUBE.jpg"
                alt=""
                width={360}
                height={240}
                className="hover:scale-105 rounded-md duration-300"
              />
              <p className="font-poppins text-sm text-start mb-2 transition-colors">
                This handbook will guide you through a journey of Listen to
                Branding Strategist; Temitope Ruth Jacob @thebranding.queen
                discuss brand building strategies and gain insights on how craft
                an impactful brand experience.
              </p>
            </div>
            <Link
              href="https://youtube.com/@thebranding_queen?si=huxVKdlZKb6NDpFY"
              target="_blank"
              className="text-primary capitalize flex items-center gap-2 text-base"
            >
              Connect With Me
            </Link>
          </button>
        </div>
      </section>
    );
  }
);

Resources.displayName = "Resources";

export default Resources;
