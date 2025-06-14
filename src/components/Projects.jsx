import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Second Brain",
    description: "A full-stack platform to organize, tag, and manage important content from across the web in one place.",
    technologies: ["React", "Express.js", "Tailwind CSS","Node.js", "MongoDB"],
    github: "https://github.com/adam-dev2/Brainly",
    demo: "https://github.com/adam-dev2/Brainly"
  },
  {
    title: "Code Editor",
    description: "Developed a C++ code Editor for C++ users with user friendly UI/UX no Registraion/Login required. The applicaiton follows Write & Run rule",
    technologies: ["React.js", "Express.js", "Tailwind CSS","Socket.io","GCC"],
    github: "https://github.com/adam-dev2/full-stack-code-editor-for-cpp-users",
    demo: "https://coderunner-0in4.onrender.com/"
  },
  {
    title: "Library Management System",
    description: "Built an API which replicates real time library scenario.",
    technologies: ["Node.js","Express.js","MongoDB","Mongoose","RESTful API","JWT Authentication",],
    github: "https://github.com/adam-dev2/library-management-api",
    demo: "https://github.com/adam-dev2/library-management-api"
  },
  {
    title: "Dev Portfolio",
    description: "A personal portfolio showcasing skills, projects, and contact information.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/adam-dev2/Portfolio",
    demo: "https://portfolio-m36s.onrender.com/"
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:underline">
          <FaExternalLinkAlt /> Live Demo
        </a> */}
      </div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  return (
    <section id="projects" className="bg-zinc-800 text-gray-300 py-16 px-8 items-center flex flex-col justify-center min-h-screen -z-10">
      <h2 className="text-7xl text-white font-extralight text-center mb-5 z-0">Projects</h2>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 h-full py-10 backdrop-blur-xs rounded-4xl px-15 relative bottom-12 z-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsGrid;