// Projects.jsx
const projects = [
  {
    title: "Number Guessing Game",
    description:
      "Developed an interactive number guessing game using JavaScript, HTML, and CSS. The game provides real-time feedback and keeps track of user attempts, creating an engaging experience.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Neelamma-S/NumberGuessingGame",
  },
  {
    title: "Library Management System",
    description: "Built a Java-based console application to manage library records using object-oriented programming concepts and Java Collections.",
    tech: "Java, Collections Framework",
    github: "https://github.com/Neelamma-S/LibraryManagementSystem"
  },
  {
    title: "Quiz Game Web Application",
    description: "Created an interactive quiz application with multiple-choice questions, real-time feedback, and score calculation.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Neelamma-S/QuizGameWebApp"
  },
  {
    title: "Text-to-Speech Web Application",
    description: "Developed a web application to convert user-entered text into speech using browser-based APIs with a responsive interface.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/Neelamma-S/TextToSpeechWebApp"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-12
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-primary to-secondary">
        Projects
      </h2>

      {/* Centered Horizontal Flex */}
      <div className="flex justify-center flex-wrap gap-6 px-6">
        {projects.map(project => (
          <div
            key={project.title}
            className="w-64 h-64 rounded-3xl p-[1px] bg-gradient-to-r from-primary to-secondary
                       hover:scale-[1.03] transition transform duration-300"
          >
            <div className="bg-white rounded-3xl p-4 h-full shadow-md flex flex-col justify-between">
              
              {/* Project Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm flex-1 overflow-hidden text-center">
                {project.description}
              </p>

              {/* Tech Stack */}
              <p className="mt-2 text-xs text-gray-700 text-center">
                <b className="text-primary">Tech:</b> {project.tech}
              </p>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 px-3 py-1 rounded-full
                           bg-gradient-to-r from-primary to-secondary
                           text-white text-xs font-semibold
                           hover:shadow-lg transition mx-auto"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
