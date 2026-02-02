"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC<{}> = () => {
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  return (
    <section id="experience">
      <motion.h2
        className="text-white font-semibold text-center text-6xl   pt-[35px]"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        EXPERIENCE
      </motion.h2>
      <motion.p
        className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        EXPLORE NOW
      </motion.p>
      <div className=" container mx-auto 2xl ">
        <motion.div
          className="md:flex md:flex-row md:justify-between pt-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Ibrahim Memon - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">WebHR /</span> Software Engineer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2022 - Present, United States
          </p>
        </motion.div>

        <motion.p
          className="text-gray-300 pt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Currently, I am working on WebHR Mobile Application, WebHR is a Cloud
          based Social HR Software for SMEs by Verge Systems Inc. WebHR is
          currently used in over 160 countries world wide by thousands of
          organizations to manage HR, As a React.js developer with 2.5 year of
          experience, I have a strong foundation in creating dynamic and
          responsive mobile and web applications.
          <br />
          <br />
          My experience with React Native has allowed me to develop
          cross-platform mobile applications that run seamlessly on both iOS and
          Android platforms. Additionally, my proficiency in React.js has
          equipped me with the skills to create fast, scalable, and dynamic web
          pages with excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
        </motion.p>
        <motion.div
          className="flex-col flex sm:flex-row "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
        >
          <motion.div
            className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
            variants={badgeVariants}
            whileHover={{
              scale: 1.1,
              borderColor: "#8b5cf6",
              boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            React Native
          </motion.div>
          <motion.div
            className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
            variants={badgeVariants}
            whileHover={{
              scale: 1.1,
              borderColor: "#8b5cf6",
              boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            React
          </motion.div>
          <motion.div
            className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
            variants={badgeVariants}
            whileHover={{
              scale: 1.1,
              borderColor: "#8b5cf6",
              boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            JavaScript
          </motion.div>
          <motion.div
            className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max"
            variants={badgeVariants}
            whileHover={{
              scale: 1.1,
              borderColor: "#8b5cf6",
              boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.5)",
              transition: { duration: 0.2 },
            }}
          >
            Typescript
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

