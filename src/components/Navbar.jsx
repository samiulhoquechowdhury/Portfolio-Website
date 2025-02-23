import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] lg:w-[60%] bg-[#0a0f1f]/80 backdrop-blur-lg border border-cyan-500/20 shadow-[0px_0px_20px_rgba(0,255,255,0.2)] rounded-full px-6 py-4 flex justify-between items-center z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Logo with Holographic Effect */}
      <motion.div
        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide cursor-pointer"
        whileHover={{ textShadow: "0px 0px 10px rgba(0, 255, 255, 0.9)" }}
      >
        Samiul ⚡
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (item, index) => (
            <motion.li
              key={index}
              className="relative text-white cursor-pointer tracking-wider transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
            >
              {/* Use Link for smooth scrolling */}
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-50} // Adjust for any fixed navbar height
                className="cursor-pointer"
              >
                {item}
              </Link>
              {/* Neon Animated Underline */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-[65px] left-0 w-full bg-[#0a0f1f]/90 border-t border-cyan-500/20 flex flex-col items-center py-6 space-y-4 text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`} // Update to match the ID of the section
                className="text-white cursor-pointer hover:text-cyan-400 transition duration-300"
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
