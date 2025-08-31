"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "../ui/button";

const skills = [
  { name: "Brand Strategy", percentage: 96 },
  { name: "Marketing Campaign Execution", percentage: 91 },
  { name: "Corporate Communications", percentage: 90 },
  { name: "Design Thinking", percentage: 95 },
  { name: "Marketing Plan Development", percentage: 90 },
  { name: "Strategic Advertising", percentage: 93 },
  { name: "Leadership", percentage: 90 },
];

function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  const controls = useAnimation();
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [controls, isInView, percentage]);

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-white text-sm font-sans">{name}</span>
        <span className="text-white/80 text-sm font-sans">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/20 rounded overflow-hidden" ref={barRef}>
        <motion.div
          className="h-full bg-white/40 rounded"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsAndSpeaking() {
  return (
    <div className="grid xl:grid-cols-2 mx-auto container xl:px-10">
      {/* Skills Section */}
      <motion.div
        className="bg-primary p-8 md:p-12"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
          My Top Skills
        </h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillBar name={skill.name} percentage={skill.percentage} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Speaking Section */}
      <motion.div
        className="bg-[#FFD1F7] p-8 md:p-12 flex flex-col justify-center"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-primary mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          For Speaking, Mentoring & Other Relevant Opportunities
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="primary"
            className="inline-flex items-center bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-sans"
          >
            CONNECT WITH ME
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
