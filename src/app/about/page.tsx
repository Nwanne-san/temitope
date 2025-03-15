
import Education from '@/components/about/education'
import HeroSection from '@/components/about/hero'
import Impact from '@/components/about/impact'
import RecentProjects from '@/components/about/projects'
import SkillsAndSpeaking from '@/components/about/skills-and-speaking'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function AboutUs() {
  return (
    <div className='flex flex-col gap-12'>
        <Navbar/>
        <HeroSection/>
        <Education/>
        <RecentProjects/>
        <SkillsAndSpeaking/>
        <Footer/>
    </div>
  )
}

export default AboutUs