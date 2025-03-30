import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Code Runner",
    description: "Developed a C++ code Editor for C++ users with user friendly UI/UX no Registraion/Login required. The applicaiton follows Write & Run rule",
    technologies: ["React.js", "Express.js", "Tailwind CSS","Socket.io","GCC"],
    github: "https://github.com/adam-dev2/full-stack-code-editor-for-cpp-users",
    demo: "https://ai-blog-demo.vercel.app"
  },
  {
    title: "Communicate",
    description: "A web-based real-time chat application with authentication and private messaging.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB","Express.js"],
    github: "https://github.com/shaikadam222/Real-Time-Chat-Application",
    demo: "https://chat-app-demo.vercel.app"
  },
  {
    title: "Dev Portfolio",
    description: "A personal portfolio showcasing skills, projects, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/adam-dev2/Portfolio",
    demo: "https://yourportfolio.vercel.app"
  },
  {
    title: "Task Manager",
    description: "Developed a todo application with Vanilla.js for frontend functionality.",
    technologies: ["React", "Express", "CSS", "MongoDB"],
    github: "https://github.com/adam-dev2/Task-Manager",
    demo: "https://expense-tracker-demo.vercel.app"
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-zinc-900/60 p-6 rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 scroll-mt-20"
    >
      <h3 className="text-xl font-semibold text-zinc-300">{project.title}</h3>
      <p className="text-zinc-400 mt-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-zinc-700 text-sm rounded-lg">{tech}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:underline">
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  return (
    <section id="projects" className="bg-zinc-800 text-gray-300 py-16 px-8 items-center flex flex-col justify-center min-h-screen -z-10">
      <h2 className="text-7xl text-white font-extralight text-center mb-5 z-0">Projects</h2>
      <div
        className="bg-white/10 h-full py-10 backdrop-blur-xs rounded-4xl px-15 relative bottom-12 z-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
