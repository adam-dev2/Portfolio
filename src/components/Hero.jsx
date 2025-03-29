import React from "react";
import { motion } from "framer-motion";
import ResumeViewer from "./ResumeViewer";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <motion.div
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center h-screen bg-zinc-800 z-5"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl font-bold text-white text-center"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.h3 
        variants={itemVariants}
        className="text-3xl font-semibold text-gray-300 mt-4">
        I am a <span className="text-zinc-400/50 underline">Full-Stack</span> developer
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="mt-4 text-lg text-gray-400 max-w-2xl text-center"
      >
       I am deeply passionate about transforming ideas into real-world solutions, developing scalable products, and tackling real-time challenges with innovative and efficient approaches
      </motion.p>
      <motion.button
        variants={itemVariants}
      >
        <ResumeViewer />
      </motion.button>
    </motion.div>
  );
};

export default Hero;
