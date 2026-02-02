"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import PhotoSphere from "@/components/PhotoSphere";

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <main className="h-full w-full bg-[url('/LooperGroup2.png')] bg-no-repeat min-h-screen">
      <AnimatePresence mode="wait">
        {!showPortfolio ? (
          <motion.div
            key="photosphere"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.8, ease: "circIn" }}
          >
            <PhotoSphere onEnter={() => setShowPortfolio(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-20"
          >
            <Banner />
            <About />
            <Experience />
            <Projects />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

