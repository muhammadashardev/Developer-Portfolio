"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Banner: React.FC<{}> = () => {
  // Mouse tracking for Magnetic Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-10, 10]), springConfig);

  // Positional shift (Magnetic effect)
  const shiftX = useSpring(useTransform(mouseX, [-200, 200], [-15, 15]), springConfig);
  const shiftY = useSpring(useTransform(mouseY, [-200, 200], [-15, 15]), springConfig);

  // Specular Highlight / Shine position
  const shineX = useTransform(mouseX, [-200, 200], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-200, 200], ["0%", "100%"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        {/* Interactive Magnetic Container */}
        <div
          className="relative group mx-auto cursor-none"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Reactive Backdrop Glow */}
          <motion.div
            className="absolute -inset-16 opacity-30 blur-[80px] rounded-full"
            style={{
              background: "radial-gradient(circle, #a855f7 0%, #3b82f6 40%, transparent 70%)",
              x: shiftX,
              y: shiftY,
              scale: useTransform(mouseX, [-200, 200], [1, 1.2])
            }}
          />

          <motion.div
            style={{
              rotateX,
              rotateY,
              x: shiftX,
              y: shiftY,
              transformStyle: "preserve-3d",
            }}
            className="relative"
            initial={{ opacity: 0, y: 100, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            {/* The Main Card Frame */}
            <div className="relative overflow-hidden rounded-[3rem] p-[2px] bg-gradient-to-b from-white/30 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/20">

              <div className="relative z-10 bg-[#0f0f0f] rounded-[2.9rem] overflow-hidden">
                <Image
                  priority
                  src="/alamgeer.jpeg"
                  height={320}
                  width={300}
                  alt="Alamgeer Khan"
                  className="object-cover transition-opacity duration-500 group-hover:opacity-80"
                />

                {/* Specular Shine Layer */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-40"
                  style={{
                    background: useTransform(
                      [shineX, shineY],
                      ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.8) 0%, transparent 50%)`
                    ),
                  }}
                />

                {/* Subtle Overlay Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </div>

              {/* Edge highlight on hover */}
              <div className="absolute inset-0 z-30 border-2 border-white/0 group-hover:border-white/20 rounded-[3rem] transition-colors duration-500" />
            </div>

            {/* Float animation on the whole card */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Custom Cursor Circle (Optional, can remove if it feels too much) */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[100] hidden group-hover:block"
            style={{ x: useSpring(mouseX, { damping: 10 }), y: useSpring(mouseY, { damping: 10 }), translateX: "-50%", translateY: "-50%" }}
          />
        </div>

        <motion.div
          className="flex flex-col gap-6 mt-14 cursor-pointer tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{
            scale: 1.02,
            textShadow: "0px 0px 10px rgba(168, 85, 247, 0.4)",
          }}
        >
          Alamgeer Khan
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-2xl font-medium tracking-tighter text-gray-300">
            I do Code &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
              Chill
            </span>
          </p>
          <motion.div
            animate={{ rotate: [0, 5, -5, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image src="/popcorn.gif" height={50} width={50} alt="Popcorn" />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-md text-gray-200 my-5 max-w-[600px] mx-auto opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Passionate Software Engineer with a focus on React Native development,
          dedicated to crafting elegant and user-friendly mobile applications.
        </motion.p>

        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="px-10 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

