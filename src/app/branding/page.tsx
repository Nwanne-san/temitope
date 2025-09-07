"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Navbar from "@/components/branding/navbar";

export default function BrandingInitiative() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const keyComponents = [
    {
      icon: Target,
      title: "Clarity on Brand Identity",
      description:
        "We help you define your brand's core values, mission, and vision to establish a strong foundation for all communication and customer interactions.",
    },
    {
      icon: Lightbulb,
      title: "A Strong Brand Story",
      description:
        "You'll learn how to craft an authentic and emotional story that deeply resonates with your target audience.",
    },
    {
      icon: TrendingUp,
      title: "Consistency Across All Channels",
      description:
        "We provide strategies for maintaining a unified brand message across all touchpoints, including marketing materials and customer service interactions.",
    },
    {
      icon: Users,
      title: "Brand Advocacy Strategies",
      description:
        "We explore tactics for building customer loyalty and empowering satisfied customers to become enthusiastic brand advocates.",
    },
  ];

  const targetAudience = [
    "Entrepreneurs",
    "CEOs & Founders",
    "Startups",
    "Policymakers",
    "Individuals passionate about building a personal brand",
  ];

  const benefits = [
    "Improved brand recognition and visibility",
    "Stronger customer relationships and increased loyalty",
    "Enhanced differentiation from competitors",
    "Greater impact from marketing and sales efforts",
  ];

  const offerings = [
    {
      title: "Trainings",
      description:
        "Hands-on workshops with practical exercises, case studies, and peer discussions.",
    },
    {
      title: "Book",
      description:
        "A detailed guide on branding principles, offering practical tips and real-life case studies.",
    },
    {
      title: "Masterclasses",
      description:
        "In-depth, focused learning sessions led by Temitope Ruth Jacob.",
    },
    {
      title: "Conferences",
      description:
        "Live events for networking, expert-led sessions, and interactive workshops.",
    },
    {
      title: "Podcast",
      description:
        "On-the-go learning with expert insights and strategies from Temitope.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 font-sk-modernist">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-6 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="font-bold text-4xl md:text-6xl  text-gray-900 mb-6"
              {...fadeInUp}
            >
              BRAND EXPERIENCE
              <span className="block text-transparent bg-gradient-to-r from-[#9a33cc] to-[#ff0066] bg-clip-text">
                INITIATIVE
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building Brands That Resonate
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-gradient-to-r from-[#9a33cc] to-[#ff0066] hover:from-[#8b2db8] hover:to-[#e6005c] text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Introduction
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                In today&apos;s highly competitive market, it takes more than a
                great product or service to stand out. The Brand Experience
                Initiative is a program designed to help entrepreneurs create
                powerful and memorable experiences for both personal and
                corporate brands that connect with consumers on an emotional
                level, fostering lasting loyalty and advocacy.
              </p>
              <p>
                This initiative focuses on helping businesses move beyond simple
                features and functions to build a clear, compelling, and
                emotionally resonant brand that aligns with their
                customers&apos; values, aspirations, and lifestyles.
              </p>
              <p className="font-medium text-transparent bg-gradient-to-r from-[#9a33cc] to-[#ff0066] bg-clip-text">
                In essence, the Brand Experience Initiative helps businesses
                stop selling just products and start selling a vision, a
                lifestyle, and a genuine relationship.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Key Components
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The initiative provides entrepreneurs with actionable tools and
              strategies to build impactful brand experiences, covering four key
              areas:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {keyComponents.map((component, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#9a33cc]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#9a33cc]/10 to-[#ff0066]/10 rounded-lg flex items-center justify-center">
                          <component.icon className="h-6 w-6 text-[#9a33cc]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-3">
                          {component.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Who Is This For?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The Brand Experience Initiative is tailored for:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#9a33cc]/5 to-[#ff0066]/5 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-[#9a33cc]/20"
                >
                  <p className="font-medium text-gray-800">{audience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Benefits of Participation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Participants in the initiative will gain several key benefits,
              including:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-left"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#9a33cc] to-[#ff0066] rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Convener Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-8">
              Meet the Convener
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#9a33cc]/10">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/pfp.jpg"
                    alt="Temitope Ruth Jacob"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-gradient-to-r from-[#9a33cc] to-[#ff0066]"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-2xl text-gray-900 mb-4">
                    Temitope Ruth Jacob
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The initiative is led by Temitope Ruth Jacob, a seasoned
                    branding and marketing strategist and the Founder/CEO of
                    Elegance Inspired Limited. Temitope&apos;s expertise in
                    digital media, brand architecture, and storytelling helps
                    businesses rise above the noise and achieve their full
                    potential. She holds an MSc in Marketing and Sales from Rome
                    Business School and a Brand Management certification from
                    the London School of Business Administration. Temitope also
                    mentors young leaders at Dream Centre Trybe and is a
                    sought-after speaker and trainer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive, multi-format approach to learning to
              suit different preferences:
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offerings.map((offering, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-t-[#ff0066]">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {offering.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#9a33cc]/10 to-[#ff0066]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-8">
              Connect With Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-[#9a33cc] mb-4" />
                <p className="text-gray-700">hi@temitoperuthjacob.com</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-[#ff0066] mb-4" />
                <p className="text-gray-700">+234 904 404 4138</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex space-x-4 mb-4">
                  <Facebook className="h-6 w-6 text-[#9a33cc] hover:text-[#ff0066] transition-colors cursor-pointer" />
                  <Linkedin className="h-6 w-6 text-[#9a33cc] hover:text-[#ff0066] transition-colors cursor-pointer" />
                  <Instagram className="h-6 w-6 text-[#9a33cc] hover:text-[#ff0066] transition-colors cursor-pointer" />
                  <Youtube className="h-6 w-6 text-[#9a33cc] hover:text-[#ff0066] transition-colors cursor-pointer" />
                </div>
                <p className="text-gray-700">@brandingExperience</p>
              </div>
            </div>

            <p className="text-gray-600 italic">
              This initiative offers a well-rounded and flexible approach,
              whether you prefer reading, listening, or active participation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
