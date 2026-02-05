const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden 
                 bg-[#7c72ff]" 
    >
      {/* --- BIGGER BACKGROUND ANIMATIONS --- */}
      <div className="absolute inset-0 z-0">
        
        {/* Massive Animated Blobs for deep background coverage */}
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] animate-blob-giant" />
        <div className="absolute top-[20%] -right-[5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] animate-blob-giant animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[700px] h-[700px] bg-indigo-300/15 rounded-full blur-[130px] animate-blob-giant animation-delay-4000" />

        {/* Dense Particle Field (Representing AI Nodes) */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/30 rounded-full animate-float-up"
              style={{
                width: Math.random() * 6 + 2 + 'px', // Bigger particles
                height: Math.random() * 6 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDuration: Math.random() * 8 + 7 + 's', // Faster, more active motion
                animationDelay: Math.random() * 5 + 's',
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* --- BOX CONTENT (Exact same structure & colors) --- */}
      <div
        className="relative z-10 bg-[#1e3a8a] text-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                   p-8 md:p-12 max-w-2xl text-center border border-white/10
                   transition-all duration-500 hover:scale-[1.02]"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-tight">
          Neelamma S
        </h1>

        <p className="text-lg md:text-xl font-medium text-blue-300 mb-6">
          Gesix GeoAI Intern
        </p>

        <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">
          AI & ML engineering student with a strong foundation in React.js, Java, and JavaScript,
          passionate about building scalable web applications and real-world AI solutions.
          Experienced in developing academic and project-based systems that focus on usability, 
          performance, and problem-solving.
        </p>
      </div>

      {/* --- BIGGER & FASTER ANIMATION STYLES --- */}
      <style jsx>{`
        @keyframes blob-giant {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(100px, -80px) scale(1.2); }
          66% { transform: translate(-80px, 40px) scale(0.8); }
        }
        @keyframes float-up {
          0% { transform: translateY(10vh) translateX(0); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-blob-giant {
          animation: blob-giant 12s infinite ease-in-out alternate;
        }
        .animate-float-up {
          animation: float-up linear infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Hero;