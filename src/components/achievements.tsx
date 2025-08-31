"use client";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface AchievementsProps {
  setActivePage?: (page: string) => void;
}

function Achievements({ setActivePage }: AchievementsProps) {
  const achievements = [
    {
      title: "Instructor",
      role: "Teaching Branding & Marketing in Abuja's most influential Brand communications & Advertising academy.",
      organization: "02 Academy",
      year: "2025",
      location: "Abuja, Nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Community Director",
      role: `Mentoring about 700 young people across 3 universities [Babcock 
            University, University of Ibadan and Obafemi Awolowo University, Ife] in Nigeria on Leadership, Faith, 
            entrepreneurship.`,
      organization: "Dream Center Trybe",
      year: "2025",
      location: "Nigeria",
      className: "sm:border-b border-black",
    },
  ];

  return (
    <section className="mx-auto container px-4 lg:px-10 lg:py-12 xl:py-20 flex lg:flex-row flex-col xl:gap-10 items-start justify-center">
      <motion.div
        className="flex flex-col justify-between items-center sm:items-start sm:mb-12 py-6 gap-8 container lg:max-w-sm"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-averia font-semibold text-3xl md:text-4xl">
          Some Of My Projects
        </h2>
        <Button
          variant="outline"
          onClick={() => {
            window.location.href = "/about";
          }}
          className="font-avenir"
        >
          VIEW ALL
        </Button>
      </motion.div>
      <div className="flex flex-col container">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className={`${achievement.className} flex flex-col sm:flex-row gap-8 items-center sm:items-start py-3 sm:p-6 hover:bg-gray-50 transition-colors duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span
              className="flex-shrink-0 w-10 h-12 flex items-center justify-center bg-primary text-white rounded font-avenir font-bold"
              whileHover={{ scale: 1.1 }}
            >
              {index + 1}
            </motion.span>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="lg:max-w-[340px] text-center sm:text-start max-sm:border-b max-sm:pb-3">
                <h3 className="font-averia font-semibold text-secondary text-xl mb-2">
                  {achievement.title}
                </h3>
                <p className="text-secondary-2 mb-2 text-sm font-semibold font-avenir">
                  {achievement.organization}
                </p>
                <p className="text-secondary-2 mb-2 text-sm font-avenir">
                  {achievement.role}
                </p>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-3 sm:border-l-[1.5px] sm:pl-8 border-secondary-2">
                <span className="uppercase tracking-wider font-avenir text-sm">
                  {achievement.location}
                </span>
                <span className="text-gray-500 pb-4 max-sm:border-b-[1.5px] max-sm:w-fit max-sm:px-10 font-avenir">
                  {achievement.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
