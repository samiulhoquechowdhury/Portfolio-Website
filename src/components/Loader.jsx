("use client");
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
    >
      {/* Holographic Scan Light */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Sci-Fi Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-cyan-400 opacity-40"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "-20%", "20%", "0%"],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glitch Animated Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl sm:text-8xl font-extrabold text-white relative"
      >
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          Samiul
        </span>

        {/* Glitch Layers - Cyan */}
        <motion.span
          className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
          initial={{ x: 0 }}
          animate={{ x: [-3, 3, -3], y: [-1, 1, -1] }}
          transition={{ duration: 0.1, repeat: Infinity, ease: "easeInOut" }}
          style={{ textShadow: "0px 0px 12px rgba(0,255,255,0.8)" }}
        >
          Samiul
        </motion.span>

        {/* Glitch Layers - Magenta */}
        <motion.span
          className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          initial={{ x: 0 }}
          animate={{ x: [3, -3, 3], y: [1, -1, 1] }}
          transition={{ duration: 0.1, repeat: Infinity, ease: "easeInOut" }}
          style={{ textShadow: "0px 0px 12px rgba(255,0,255,0.8)" }}
        >
          Samiul⚡
        </motion.span>
      </motion.h1>

      {/* Sci-Fi Digital Loading Bar */}
      <motion.div
        className="absolute bottom-12 w-40 h-1 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-cyan-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loader;
