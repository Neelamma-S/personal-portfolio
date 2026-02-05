// src/components/Projects.jsx
import React from "react";
import { projects } from "../data/projects";
import { FaGamepad, FaBook, FaQuestionCircle, FaVolumeUp } from "react-icons/fa";

// Map project titles to default icons
const defaultIconMap = {
  "Number Guessing Game": FaGamepad,
  "Library Management System": FaBook,
  "Quiz Game Web Application": FaQuestionCircle,
  "Text-to-Speech Web Application": FaVolumeUp,
};

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-20 bg-white text-gray-800">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-center mb-12
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-primary to-secondary"
      >
        Projects
      </h2>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto px-6">
        <div className="flex gap-6">
          {projects.map((project) => {
            const Icon = defaultIconMap[project.title] || FaQuestionCircle;

            return (
              <div
                key={project.id}
                className="flex-none w-64 rounded-3xl p-[1px]
                           bg-gradient-to-r from-primary to-secondary
                           hover:scale-[1.05] transition-transform duration-300"
              >
                <div className="bg-white rounded-3xl p-4 shadow-md flex flex-col justify-between text-gray-800 h-full">
                  {/* Icon */}
                  <Icon className="text-3xl text-primary mx-auto mb-3" />

                  {/* Project Title */}
                  <h3 className="text-lg font-semibold mb-2 text-center">{project.title}</h3>

                  {/* Description */}
                  <p className="text-sm flex-1 overflow-hidden text-center">{project.description}</p>

                  {/* Tech Stack */}
                  <p className="mt-2 text-xs text-center">
                    <b className="text-primary">Tech:</b> {project.tech}
                  </p>

                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 px-3 py-1 rounded-full
                                 bg-gradient-to-r from-primary to-secondary
                                 text-white text-xs font-semibold mx-auto"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
