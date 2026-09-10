import Education from "@/components/about/education";
import HeroSection from "@/components/about/hero";
import RecentProjects from "@/components/about/projects";
import SkillsAndSpeaking from "@/components/about/skills-and-speaking";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function AboutUs() {
  return (
    <div className="flex flex-col xl:gap-12">
      <Navbar />
      <HeroSection />
      <Education />
      <RecentProjects />
      <SkillsAndSpeaking />
      <Footer />
    </div>
  );
}
