import React from "react";
import { motion } from "framer-motion";
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16 bg-zinc-900 text-gray-300"
    >
        
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2 }} 
        className="w-60 h-60 md:w-[350px] md:h-[350px] bg-zinc-800 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
      >
        <img 
          src="/profile.png" 
          alt="Profile" 
          className="w-full h-full object-cover object-center rounded-xl"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.2 }} 
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-lg text-gray-400">
          I'm passionate about crafting high-quality web applications, solving real-world problems, and creating seamless user experiences. 
          With expertise in <span className="text-zinc-400/50 underline">MERN Stack</span>, I focus on building scalable, efficient, and robust solutions.
        </p>
        <motion.div 
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
        className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">Node.js</motion.span>
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">Express.js</motion.span>
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">Postman</motion.span>
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">MongoDB</motion.span>
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">Framer</motion.span>
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">React.js</motion.span>
          <motion.span initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 0.4}}
             className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-lg shadow">Tailwind CSS</motion.span>
        </motion.div>
        <div className="mt-6 flex gap-6 justify-center md:justify-start">
          <a href="https://github.com/adam-dev2" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-300 hover:text-white transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/shaik-adam-222328230/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-500 transition-all" />
          </a>
          <a href="https://x.com/dev_adam2" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-300 hover:text-blue-400 transition-all" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
