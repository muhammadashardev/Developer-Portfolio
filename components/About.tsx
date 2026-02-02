"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <motion.h1
          className="text-white font-semibold text-6xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          EXPLORE NOW
        </motion.p>
        <motion.p
          className="text-gray-300 text-center "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          As a passionate software engineer, I thrive on the intricate dance
          between logic and creativity. Currently immersed in the dynamic world
          of WebHR, my expertise centers around React Native, where I seamlessly
          blend technology with innovation.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and constantly pushing the boundaries of what&#39;s possible
        </motion.p>
      </div>
    </section>
  );
};

export default About;

