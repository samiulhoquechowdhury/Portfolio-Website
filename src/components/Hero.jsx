import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden px-4 md:px-12">
      {/* Centered Hero Content */}
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable
        glareMaxOpacity={0.3}
      >
        <motion.div
          className="relative z-10 backdrop-blur-lg bg-white/10 p-6 md:p-12 rounded-2xl border border-cyan-500 shadow-lg hover:shadow-xl transition-all duration-500 max-w-lg md:max-w-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cybernetic Visionary
          </motion.h1>

          <motion.p
            className="text-gray-300 mt-4 text-base md:text-xl max-w-md md:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-cyan-400">[SYSTEMS FULLY OPERATIONAL]</span>{" "}
            <br />
            Innovating with <span className="text-cyan-400">AI</span>,{" "}
            <span className="text-blue-400">Blockchain</span>, and{" "}
            <span className="text-purple-400">Cybersecurity</span>.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:scale-110"
            >
              Explore the Future 🚀
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              Link to the Grid 📡
            </a>
          </motion.div>
        </motion.div>
      </Tilt>
    </section>
  );
};

export default Hero;
