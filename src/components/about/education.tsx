"use client";
import { motion } from "framer-motion";

function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-12 md:py-24 px-4 sm:px-10 bg-primary relative z-30">
      <div
        className="absolute inset-0 bg-contain z-0"
        style={{
          backgroundImage: "url(/pattern.png)",
          opacity: 0.1,
        }}
      />
      <div className="container mx-auto relative !text-black z-10">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl capitalize text-white font-semibold">
            Education and recent Certifications
          </h2>
        </motion.div>
        <motion.section
          className="grid sm:grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col gap-6 lg:max-w-lg"
            variants={itemVariants}
          >
            <h4 className="font-semibold text-3xl text-white font-serif">
              Recent Certifications
            </h4>
            <motion.hr
              className="bg-white w-2/3"
              initial={{ width: 0 }}
              whileInView={{ width: "66.666667%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div className="flex flex-col" variants={itemVariants}>
              <p className="mb-2 text-xl text-white font-semibold font-serif">
                London School of Business Administration: Brand Management
              </p>
              <span className="text-lightGray/80 font-sans">-London, UK</span>
            </motion.div>
            <motion.div className="flex flex-col" variants={itemVariants}>
              <p className="mb-2 text-xl text-white font-semibold font-serif">
                London School of Business Administration: Digital Marketing
              </p>
              <span className="text-lightGray/80 font-sans">-London, UK</span>
            </motion.div>
            <motion.div className="flex flex-col" variants={itemVariants}>
              <p className="mb-2 text-xl text-white font-semibold font-serif">
                Agillant Group: Agile/Scrum Project Management
              </p>
              <span className="text-lightGray/80 font-sans">
                -North Carolina, USA
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-6 lg:max-w-lg"
            variants={itemVariants}
          >
            <h4 className="font-semibold text-3xl text-white font-serif">
              Education
            </h4>
            <motion.hr
              className="bg-white w-1/3"
              initial={{ width: 0 }}
              whileInView={{ width: "33.333333%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            <motion.div className="flex flex-col" variants={itemVariants}>
              <p className="mb-2 text-xl text-white font-semibold font-serif">
                Rome Business School | MSc. Marketing And Sales
              </p>
              <span className="text-lightGray/80 font-sans">-Rome, Italy</span>
            </motion.div>
            <motion.div className="flex flex-col" variants={itemVariants}>
              <span className="text-lightGray/80"></span>
              <p className="mb-2 text-xl text-white font-semibold font-serif">
                Ahmadu Bello University | BSc. Human Anatomy
              </p>
              <span className="text-lightGray/80 font-sans">
                -Zaria, Nigeria
              </span>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}

export default Education;
