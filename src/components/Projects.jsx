import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real-Time Chat App",
    description: "A web-based real-time chat application with authentication and private messaging.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.vercel.app"
  },
  {
    title: "AI-Powered Blog Generator",
    description: "A full-stack AI-based blogging platform that generates content suggestions.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-blog-generator",
    demo: "https://ai-blog-demo.vercel.app"
  },
  {
    title: "Expense Tracker",
    description: "A personal finance manager to track daily expenses and generate reports.",
    technologies: ["React", "Redux", "Express", "MongoDB"],
    github: "https://github.com/yourusername/expense-tracker",
    demo: "https://expense-tracker-demo.vercel.app"
  },
  {
    title: "Dev Portfolio",
    description: "A personal portfolio showcasing skills, projects, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/dev-portfolio",
    demo: "https://yourportfolio.vercel.app"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:scale-[1.05] transition-transform duration-300"
    >
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-zinc-700 text-sm rounded-lg">{tech}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:underline">
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:underline">
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  return (
    <section className="bg-zinc-800 text-gray-300 py-16 px-8">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
