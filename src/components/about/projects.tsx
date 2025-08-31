"use client";
import { motion } from "framer-motion";

function RecentProjects() {
  const projects = [
    {
      title: "Instructor",
      role: "Teaching Branding & Marketing in Abuja's most influential Brand communications & Advertising academy.",
      organization: "02 Academy",
      year: "2025",
      location: "Abuja, Nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: "Created and executed creative branding and communications strategy for the PerformX Nexus and Summit for the Akin Akinpelu Conference with the Theme: Building Bold, Executing Smart, Performing Smart.",
      organization: "PerformX Nexus",
      year: "2025",
      location: "Lagos, Nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: `Creating and implementing Creative branding & communication Strategy for the UPGRADE MARKETING CONFERNCE 2025 themed; Marketing is not a Department. `,
      organization: "Yantic Business Academy",
      year: "2025",
      location: "lagos, nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Community Director",
      role: `Mentoring about 700 young people across 3 universities [Babcock 
            University, University of Ibadan and Obafemi Awolowo University, Ife] in Nigeria  on Leadership, Faith, 
            entrepreneurship.  `,
      organization: "Dream Center Trybe",
      year: "2025",
      location: "nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Branding & Communications Strategist",
      role: `Created and executed creative branding and communications strategy for the 24th edition of the
       NECCI PR ROUNDTABLE with the Theme: Women In Technology; Breaking Barriers. `,
      organization: "Necci PR Roundtable",
      year: "2024",
      location: "lagos, nigeria",
      className: "sm:border-b border-black",
    },
    {
      title: "Training Facilitator",
      role: `Trained over 2,000 people in 22 states across Nigeria in 6 weeks on 
            Digital Marketing and advertising.    `,
      organization: "American Spaces Nigeria",
      year: "2023",
      location: "nigeria",
      className: "sm:border-b border-black",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="mx-auto container px-4 lg:px-10 py-12 md:py-20 flex flex-col sm:flex-row gap-10 items-start justify-center">
      <motion.div
        className="flex flex-col justify-between gap-8 items-center sm:items-start py-6 container sm:w-1/3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-serif text-3xl text-center sm:text-start md:text-4xl">
          Some Of My projects
        </h2>
      </motion.div>
      <motion.div
        className="flex flex-col container sm:w-2/3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((achievement, index) => (
          <motion.div
            key={index}
            className={`${achievement.className} flex flex-col sm:flex-row gap-8 items-center sm:items-start pb-5 sm:pb-0 sm:p-6 border-b- hover:bg-gray-50 transition-all duration-300`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <motion.span
              className="flex-shrink-0 w-10 h-12 flex items-center justify-center bg-primary text-white rounded font-sans"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {index + 1}
            </motion.span>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 items-center text-center sm:text-start">
              <div className="xl:max-w-[340px] w-full max-w-[320px] max-sm:pb-4 max-sm:border-b border-secondary">
                <h3 className="font-serif font-semibold text-secondary text-xl mb-2">
                  {achievement.title}
                </h3>
                <p className="text-secondary-2 mb-2 text-sm font-semibold font-sans">
                  {achievement.organization}
                </p>
                <p className="text-secondary-2 mb-2 text-sm font-normal font-sans">
                  {achievement.role}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:border-l-[1.5px] pb-5 max-sm:border-b sm:pl-8 border-secondary-2">
                <span className="uppercase tracking-wider font-sans">
                  {achievement.location}
                </span>
                <span className="text-gray-500 font-sans">
                  {achievement.year}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default RecentProjects;
