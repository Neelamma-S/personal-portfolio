import { skills } from "../data/skills";

// Import only valid icons for the remaining skills
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPython,
  SiDatabricks,
} from "react-icons/si";

import { FaJava, FaMicrosoft } from "react-icons/fa"; // Java + Azure fallback

// Map each skill to its corresponding icon
// REST API Basics and Power BI will NOT have icons
const iconMap = {
  Java: FaJava,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  MySQL: SiMysql,
  Python: SiPython,
  "Azure Data Factory": FaMicrosoft, // Azure fallback
  "Azure Databricks": SiDatabricks,
  // "REST API Basics": no icon
  // "Power BI": no icon
};

const TechStack = ({ activeSection }) => {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-blue-50 to-purple-50"
    >
      {/* Section Title */}
      <h2
        className={`text-3xl font-bold text-center mb-6
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-primary to-secondary
                    transition-colors duration-300
                    ${
                      activeSection === "tech-stack"
                        ? "underline decoration-4 decoration-blue-600"
                        : ""
                    }`}
      >
        Tech Stack
      </h2>

      {/* Outer Container */}
      <div className="max-w-6xl mx-auto rounded-3xl p-[3px] bg-gradient-to-r from-primary to-secondary">
        <div className="bg-white rounded-3xl p-6 flex flex-col md:flex-row gap-6">
          {Object.entries(skills).map(([level, list]) => (
            <div
              key={level}
              className="flex-1 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition
                         bg-gradient-to-r from-primary to-secondary"
            >
              <h3 className="font-semibold text-lg mb-4 text-white text-center">
                {level}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {list.map((skill) => {
                  const Icon = iconMap[skill];
                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2 rounded-full
                                 bg-white/20 text-white text-sm font-medium
                                 hover:from-primary hover:to-secondary
                                 hover:text-white
                                 transition"
                    >
                      {/* Only render icon if it exists */}
                      {Icon && <Icon className="w-5 h-5" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
