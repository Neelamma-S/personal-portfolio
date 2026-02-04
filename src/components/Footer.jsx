import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 text-center">
      <div className="flex justify-center space-x-6 text-2xl mb-4">
        <a href="https://github.com/Neelamma-S"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourprofile"><FaLinkedin /></a>
        <a href="mailto:sneelamm.17@gmail.com"><FaEnvelope /></a>
        <a href="tel:+919901226240"><FaPhone /></a>
      </div>
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Neelamma S
      </p>
    </footer>
  );
};

export default Footer;
