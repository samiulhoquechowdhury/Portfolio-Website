import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"; // Import social media icons
import { FaMouse } from "react-icons/fa"; // Import mouse icon

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden px-4 md:px-12"
    >
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
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 uppercase"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cybernetic Visionary
          </motion.h1>

          {/* New Content in the Card */}
          <motion.p
            className="text-gray-300 mt-6 text-lg md:text-xl max-w-md md:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I am a passionate innovator at the intersection of technology and
            creativity. With a focus on{" "}
            <span className="text-cyan-400">AI/Ml</span>,{" "}
            <span className="text-blue-400">Full Stack</span>, and{" "}
            <span className="text-purple-400">DevOps</span>, I strive to build
            the future today.
            <br />
            <br />
            My goal is to push the boundaries of what is possible, creating
            solutions that will revolutionize industries and empower the digital
            age.
          </motion.p>

          <motion.p
            className="text-gray-300 mt-4 text-lg md:text-xl max-w-md md:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Whether it’s crafting decentralized apps, strengthening digital
            security, or pioneering AI-driven solutions, I am driven by a deep
            desire to innovate and bring meaningful change to the world.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
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

          {/* Social Media Icons */}
          <motion.div
            className="mt-8 flex space-x-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="https://github.com/samiulhoquechowdhury"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition-all duration-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition-all duration-300 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 transition-all duration-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:yourname@gmail.com"
              className="text-white hover:text-cyan-400 transition-all duration-300 text-2xl"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </Tilt>

      {/* Scroll Text and Mouse Icon */}
      <motion.div
        className="absolute bottom-6 w-full flex flex-col items-center text-gray-300 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Scroll Text */}

        {/* Mouse Icon with Animation */}
        <motion.div
          className="mt-4 text-3xl text-cyan-500"
          animate={{
            y: [0, 15, 0], // Animate mouse up and down
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaMouse />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
