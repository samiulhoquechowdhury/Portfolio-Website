"use client";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Parallax Dots Background */}
      <motion.div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 grid grid-cols-40 grid-rows-40 gap-1">
          {Array.from({ length: 1600 }).map((_, i) => {
            const dotX = (i % 40) * 25 + 12;
            const dotY = Math.floor(i / 40) * 25 + 12;
            const distance = Math.sqrt(
              Math.pow(mousePosition.x - dotX, 2) +
                Math.pow(mousePosition.y - dotY, 2)
            );
            const glowIntensity = Math.max(0, 1 - distance / 50);

            return (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-gray-700 rounded-full"
                animate={{
                  backgroundColor: glowIntensity > 0 ? "#ffffff" : "#555",
                  boxShadow:
                    glowIntensity > 0
                      ? `0px 0px ${8 * glowIntensity}px ${
                          3 * glowIntensity
                        }px #ffffff`
                      : "none",
                  opacity: glowIntensity > 0 ? 1 : 0.4,
                }}
                transition={{ duration: 0.02, ease: "linear" }}
                style={{ position: "absolute", left: dotX, top: dotY }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-7xl font-extrabold relative tracking-wide drop-shadow-md"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Hi, I'm
        </span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-lg"
        >
          Samiul Chowdhury
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg mt-6 max-w-2xl text-gray-300 leading-relaxed shadow-md tracking-wide"
      >
        Crafting clean, modern, and interactive web experiences with a
        futuristic touch.
      </motion.p>

      {/* Social Icons */}
      <motion.div className="mt-10 flex gap-6">
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/samiulhoquechowdhury",
          },
          { icon: <FaTwitter />, link: "https://twitter.com/yourprofile" },
          {
            icon: <FaInstagram />,
            link: "https://instagram.com/johnny_instaa",
          },
          {
            icon: <FaEnvelope />,
            link: "mailto:samiulofficialworks@gmail.com",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-300 transition-all drop-shadow-lg"
          >
            {item.icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 text-gray-400 text-sm animate-bounce"
      >
        Scroll down to explore ↓
      </motion.div>
    </section>
  );
}
