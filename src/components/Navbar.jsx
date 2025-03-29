import React, { useState } from "react";
import {motion} from 'motion/react'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {

  const [isOpen, setIsopen] = useState(false);
  const mobileView = () => {
    setIsopen(!isOpen);
  }

  return (
    <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y:0}} transition={{duration: 0.3}}>
      <nav className="md: fixed top-4 items-center md:left-1/2 md:transform -translate-x-1/2 bg-zinc-900/50 text-white font-sans rounded-2xl shadow-lg md:px-6 px-5 py-3 md:flex md:justify-around gap-6 z-50 left-[95%] pointer-events-auto">
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-gray-500/50">Home</a>
        <a href="#about" className="hover:text-gray-500/50">About</a>
        <a href="#projects" className="hover:text-gray-500/50">Projects</a>
        <a href="#contact" className="hover:text-gray-500/50">Contact</a>
      </div>
      <button onClick={mobileView} className="bg-zinc-900 md:hidden relative left-[50%] transform -translate-x-1/2 z-5 cursor-pointer" >
        {isOpen ? <IoCloseOutline className="text-2xl text-white" /> : <CiMenuFries className="text-2xl text-white" />}
      </button>
    </nav>
    {isOpen && (
  <div className="fixed inset-0 bg-black/50" onClick={mobileView}>
    <motion.div 
      initial={{ x: "100%" }} 
      animate={{ x: 0 }} 
      exit={{ x: "100%" }} 
      transition={{ duration: 0.25 }} 
      onClick={(e) => e.stopPropagation()} 
      className="fixed h-full bg-zinc-800/30 backdrop-blur-lg w-64 z-[100] right-0 top-0 text-white shadow-lg p-6 flex flex-col gap-4"
    >
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } } 
        }}
        className="flex flex-col gap-4 z-50"
      >
        <motion.a initial={{opacity: 0,y: 50}} animate={{opacity: 1,y: 0}} transition={{duration: 0.5}} href="#home" className="hover:text-gray-500/50 cursor-pointer" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Home</motion.a>
        <motion.a initial={{opacity: 0,y: 50}} animate={{opacity: 1,y: 0}} transition={{duration: 0.5}} href="#about" className="hover:text-gray-500/50 cursor-pointer" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>About</motion.a>
        <motion.a initial={{opacity: 0,y: 50}} animate={{opacity: 1,y: 0}} transition={{duration: 0.5}} href="#projects" className="hover:text-gray-500/50 cursor-pointer" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Projects</motion.a>
        <motion.a initial={{opacity: 0,y: 50}} animate={{opacity: 1,y: 0}} transition={{duration: 0.5}} href="#contact" className="hover:text-gray-500/50 cursor-pointer" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>Contact</motion.a>
      </motion.div>
    </motion.div>
  </div>
)}

    </motion.div>
  );
};

export default Navbar;
