"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC<{}> = () => {
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
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects">
      <motion.h2
        className="text-white font-semibold text-center text-6xl pt-[35px]"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        PROJECTS
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
      <div className=" container mx-auto 2xl  ">
        <motion.div
          className="flex-col flex md:flex-row  mt-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            href="https://web.hr/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <motion.div
              className="flex-row flex mb-5"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.3)",
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="Ibrahim Memon - UX Design Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">WebHR</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the integration of a blog using Next.js.
                </p>
              </div>
            </motion.div>
          </Link>
          <Link
            href="https://hireside.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <motion.div
              className="flex-row flex mb-5"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.3)",
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="Ibrahim Memon - UX Design Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">HireSide</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on Next.js that allows users to
                  apply for jobs, create job posts, and manage their company
                  profiles.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          className="flex-col flex md:flex-row "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            href="https://www.vergesystems.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <motion.div
              className="flex-row flex mb-5"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.3)",
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="Ibrahim Memon - UX Design Project"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Verge Systems
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </motion.div>
          </Link>
          <Link
            href="http://44.201.47.75/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <motion.div
              className="flex-row flex mb-5"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.3)",
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Ibrahim Memon - UX Design Project"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Payoasis</p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a banking website utilizing Gatsby.
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

