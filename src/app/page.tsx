"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BookModal, BookPromo } from "@/components/book-modal";

import LogoCarousel from "@/components/logo-carousel";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Achievements from "@/components/achievements";
import Resources from "@/components/resources";

import Education from "@/components/about/education";
import HeroSection from "@/components/about/hero";
import Impact from "@/components/about/impact";
import RecentProjects from "@/components/about/projects";
import SkillsAndSpeaking from "@/components/about/skills-and-speaking";

export default function MergedPage() {
  const [activePage, setActivePage] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    console.log("Setting up modal timer");
    const timer = setTimeout(() => {
      console.log("Timer completed, showing modal");
      setShowModal(true);
    }, 3000);

    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, []);

  const handleCloseModal = () => {
    console.log("Modal closed");
    setShowModal(false);
    setShowPromo(true);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setShowPromo(false);
  };

  useEffect(() => {
    console.log("Current state:", { showModal, showPromo });
  }, [showModal, showPromo]);

  return (
    <div className="relative">
      {showModal && <BookModal onClose={handleCloseModal} />}
      {showPromo && <BookPromo onOpen={handleOpenModal} />}

      <main className={activePage === "home" ? "m" : "flex flex-col xl:gap-12"}>
        {activePage === "home" ? (
          <>
            <section className="bg-gray-200">
              <Navbar activePage={activePage} setActivePage={setActivePage} />
              <Hero setActivePage={setActivePage} />
            </section>
            <section className="mx-auto container px-10">
              <LogoCarousel />
            </section>
            <Achievements setActivePage={setActivePage} />
            <Testimonials />
            <Resources id="resources" />
            <Footer />
          </>
        ) : (
          <>
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <HeroSection />
            <Education />
            <RecentProjects />
            <Impact />
            <SkillsAndSpeaking />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
