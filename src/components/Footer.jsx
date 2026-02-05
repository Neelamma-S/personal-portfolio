import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = ({ activeSection }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(activeSection === "contact");
  }, [activeSection]);

  return (
    <footer
      id="contact"
      className={`bg-gray-900 text-white py-10 text-center transition-transform duration-700 ease-out
        ${animate ? "rotate-x-6 rotate-y-6 scale-105 shadow-2xl perspective-1000" : ""}`}
      aria-label="Contact section"
    >
      <div className="flex justify-center space-x-6 text-2xl mb-4">
        
        {/* GitHub */}
        <a
          href="https://github.com/Neelamma-S"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className={`transition-transform duration-300 hover:scale-125 focus:scale-125 
            ${animate ? "animate-fadeIn delay-[0ms]" : ""}`}
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/neelamma-s-a9a482330/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className={`transition-transform duration-300 hover:scale-125 focus:scale-125 
            ${animate ? "animate-fadeIn delay-[500ms]" : ""}`}
        >
          <FaLinkedin />
        </a>

        {/* Email */}
        <a
          href="mailto:sneelamm.17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send email"
          className={`transition-transform duration-300 hover:scale-125 focus:scale-125 
            ${animate ? "animate-fadeIn delay-[1000ms]" : ""}`}
        >
          <FaEnvelope />
        </a>

        {/* Phone */}
        <a
          href="tel:+919901226240"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Call phone number"
          className={`transition-transform duration-300 hover:scale-125 focus:scale-125 
            ${animate ? "animate-fadeIn delay-[1500ms]" : ""}`}
        >
          <FaPhone />
        </a>
      </div>

      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Neelamma S
      </p>
    </footer>
  );
};

export default Footer;
