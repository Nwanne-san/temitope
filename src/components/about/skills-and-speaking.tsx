"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Button } from "../ui/button";

const skills = [
  { name: "Brand Strategy", percentage: 96 },
  { name: "Marketing Campaign Execution", percentage: 91 },
  { name: "Corporate Communications", percentage: 90 },
  { name: "Design Thinking", percentage: 95 },
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
        transition: { duration: 2, ease: "easeOut" },
      });
    }
  }, [controls, isInView, percentage]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white text-sm">{name}</span>
        <span className="text-white/80 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/20 rounded overflow-hidden" ref={barRef}>
        <motion.div
          className="h-full bg-white/40 rounded"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}

export default function SkillsAndSpeaking() {
  return (
    <div className="grid xl:grid-cols-2 mx-auto container px-10">
      {/* Skills Section */}
      <motion.div
        className="bg-primary p-8 md:p-12"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-bai-jamjuree text-2xl md:text-3xl text-white mb-8">
          My Top Skills
        </h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </motion.div>

      {/* Speaking Section */}
      <div className="bg-[#FFD1F7] p-8 md:p-12 flex flex-col justify-center">
        <h2 className="font-bai-jamjuree text-3xl md:text-4xl text-primary mb-8 leading-tight">
          For Speaking, Mentoring & Other Relevant Opportunities
        </h2>
        <div>
          <Button
            variant="primary"
            href="/connect"
            className="inline-flex items-center bg-primary"
          >
            CONNECT WITH ME
          </Button>
        </div>
      </div>
    </div>
  );
}
