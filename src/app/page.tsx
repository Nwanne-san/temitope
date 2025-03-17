"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Home components
import LogoCarousel from "@/components/logo-carousel";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Achievements from "@/components/achievements";
import Resources from "@/components/resources";

// About components
import Education from "@/components/about/education";
import HeroSection from "@/components/about/hero";
import Impact from "@/components/about/impact";
import RecentProjects from "@/components/about/projects";
import SkillsAndSpeaking from "@/components/about/skills-and-speaking";

export default function MergedPage() {
  const [activePage, setActivePage] = useState("home");

  return (
    <main className={activePage === "home" ? "m" : "flex flex-col xl:gap-12"}>
      {activePage === "home" ? (
        <>
          <section className="bg-gray-200">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <Hero setActivePage={setActivePage}  />
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
  );
}
