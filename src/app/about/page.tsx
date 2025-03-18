"use client";
import Education from "@/components/about/education";
import HeroSection from "@/components/about/hero";
import Impact from "@/components/about/impact";
import RecentProjects from "@/components/about/projects";
import SkillsAndSpeaking from "@/components/about/skills-and-speaking";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

function AboutUs() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="flex flex-col xl:gap-12">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <HeroSection />
      <Education />
      <RecentProjects />
      <Impact />
      <SkillsAndSpeaking />
      <Footer />
    </div>
  );
}

export default AboutUs;
