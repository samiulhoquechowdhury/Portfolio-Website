import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[65%] lg:w-[50%] bg-[#0a0f1f]/80 backdrop-blur-lg border border-cyan-500/20 shadow-[0px_0px_15px_rgba(0,255,255,0.2)] rounded-full px-5 py-3 flex justify-between items-center z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide cursor-pointer"
        whileHover={{ textShadow: "0px 0px 10px rgba(0, 255, 255, 0.9)" }}
      >
        Samiul ⚡
      </motion.div>

      <ul className="hidden md:flex space-x-6 text-base">
        {["Home", "About", "Skills", "Projects", "Contact"].map(
          (item, index) => (
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
                className="cursor-pointer"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          )
        )}
      </ul>

      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-[#0a0f1f] to-[#08192d] flex flex-col items-center justify-center space-y-6 text-lg text-white z-50 p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="absolute top-5 right-5 text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="cursor-pointer text-2xl font-semibold tracking-wider px-8 py-4 rounded-lg bg-white text-[#0a0f1f] shadow-md hover:shadow-cyan-400/50 transform hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
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
