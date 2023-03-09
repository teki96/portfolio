import React from "react";
import { motion } from "framer-motion";
import Education from "../../components/education/Education";
import Experience from "../../components/workexperience/Experience";
import Skills from "../../components/skills/Skills";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div
        id="about"
        className="flex min-h-screen max-sm:px-4 sm:px-20 pt-4 sm:pb-10 flex-col justify-center lg:flex-row text-primary"
      >
        <div className="lg:w-2/5">
          <h1 className="py-10 text-4xl text-center">Koulutus</h1>
          <Education />
          <h1 className="pt-10 pb-10 text-center text-4xl">Työkokemus</h1>
          <Experience />
        </div>
        <div className="divider py-20 lg:divider-horizontal"></div>
        <div className="lg:w-2/5">
          <h1 className="py-10 text-4xl text-center">Taidot</h1>
          <Skills />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
