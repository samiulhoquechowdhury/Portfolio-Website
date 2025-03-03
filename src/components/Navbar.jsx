import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[65%] lg:w-[50%] bg-[#0a0f1f]/90 backdrop-blur-lg border border-cyan-500/20 shadow-[0px_0px_15px_rgba(0,255,255,0.2)] rounded-full px-5 py-3 flex justify-between items-center z-50">
      <motion.div
        className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide cursor-pointer"
        whileHover={{ textShadow: "0px 0px 10px rgba(0, 255, 255, 0.9)" }}
      >
        Samiul ⚡
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-base">
        {["Home", "About", "Skills", "Projects"].map((item, index) => (
          <motion.li
            key={index}
            className="relative text-white cursor-pointer tracking-wider transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-50}
            >
              {item}
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Slide-in Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-[#1a1a1a] shadow-lg flex flex-col items-center justify-center space-y-8 text-xl font-semibold text-white z-50"
            initial={{ x: "100%" }}
            animate={{ x: "25%" }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={36} />
            </button>
            {["Home", "About", "Skills", "Projects"].map((item, index) => (
              <motion.div
                key={index}
                className="cursor-pointer tracking-wide transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
