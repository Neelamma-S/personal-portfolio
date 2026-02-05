import { FiHome, FiCpu, FiFolder, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

// Define menu items outside the component
const menuItems = [
  { name: "Home", slug: "home", icon: <FiHome size={18} /> },
  { name: "Tech Stack", slug: "tech-stack", icon: <FiCpu size={18} /> },
  { name: "Projects", slug: "projects", icon: <FiFolder size={18} /> },
  { name: "Contact", slug: "contact", icon: <FiMail size={18} /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 120; // Adjust for fixed navbar
          menuItems.forEach((item) => {
            const section = document.getElementById(item.slug);
            if (
              section &&
              section.offsetTop <= scrollPos &&
              section.offsetTop + section.offsetHeight > scrollPos
            ) {
              setActiveSection(item.slug);
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const handleLinkClick = (slug) => {
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav
      className="fixed w-full z-50 bg-white/30 backdrop-blur-md shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Left: Profile Avatar */}
        <div
          className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg
                     md:-ml-6"
          aria-label="Profile avatar for Neelamma S"
        >
          N
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu Items */}
        <ul
          id="primary-menu"
          className={`flex gap-8 md:static absolute md:bg-transparent bg-white/90 md:w-auto w-full left-0 top-16
            md:flex-row flex-col items-center transition-all duration-300
            ${isOpen ? "block" : "hidden md:flex"}`}
        >
          {menuItems.map((item) => (
            <li key={item.slug}>
              <button
                onClick={() => handleLinkClick(item.slug)}
                className={`flex items-center gap-1 relative font-semibold transition-all duration-300
                  after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500
                  hover:after:w-full ${
                    activeSection === item.slug
                      ? "text-blue-600 after:w-full"
                      : "text-blue-900"
                  }`}
              >
                {item.icon} {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
