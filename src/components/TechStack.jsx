import { skills } from "../data/skills";

const TechStack = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-6
                     bg-clip-text text-transparent
                     bg-gradient-to-r from-primary to-secondary">
        Tech Stack
      </h2>

      {/* Outer Large Box with Gradient Border */}
      <div className="max-w-6xl mx-auto rounded-3xl p-[3px] bg-gradient-to-r from-primary to-secondary">
        
        {/* Inner container */}
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
                {list.map(skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full
                               bg-white/20 text-white text-sm font-medium
                               hover:from-primary hover:to-secondary
                               hover:text-white
                               transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
