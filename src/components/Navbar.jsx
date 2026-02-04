import { FiHome, FiCpu, FiFolder, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FiHome size={18} /> },
    { name: "Tech Stack", icon: <FiCpu size={18} /> },
    { name: "Projects", icon: <FiFolder size={18} /> },
    { name: "Contact", icon: <FiMail size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Left: Profile Avatar with Initial */}
        <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg">
          N
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <button
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Right: Menu Items */}
        <ul
          className={`flex gap-8 md:flex md:static absolute md:bg-transparent bg-white/90 
                      md:w-auto w-full left-0 md:top-auto top-16 md:flex-row flex-col 
                      items-center md:items-center transition-all duration-300 
                      ${isOpen ? "block" : "hidden md:flex"}`}
        >
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase().replace(" ", "")}`}
                className="flex items-center gap-1 relative text-blue-900 font-semibold transition-all duration-300
                           after:content-[''] after:absolute after:-bottom-1 after:left-0
                           after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full"
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;