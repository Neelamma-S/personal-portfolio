const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary px-6"
    >
      {/* Card */}
      <div className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          Neelamma S
        </h1>

        <p className="text-lg md:text-xl font-semibold text-blue-200 mb-4">
          GeoAI Intern @ Gesix Solutions
        </p>

        <p className="text-sm md:text-base text-blue-100 leading-relaxed">
          AI & ML engineering student with a strong foundation in React.js, Java, and JavaScript,
passionate about building scalable web applications and real-world AI solutions.
Experienced in developing academic and project-based systems that focus on usability,
performance, and problem-solving.
        </p>
      </div>
    </section>
  );
};

export default Hero;
