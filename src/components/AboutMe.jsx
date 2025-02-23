import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    "Type 'help' to see available commands.",
  ]);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      let response = "Unknown command";
      switch (command.toLowerCase()) {
        case "whoami":
          response =
            "I am a creative developer passionate about UI/UX, Web Dev, and Tech Innovation.";
          break;
        case "skills":
          response =
            "Expert in React, Tailwind CSS, Framer Motion, and Three.js.";
          break;
        case "projects":
          response =
            "Check out my portfolio section for some amazing projects!";
          break;
        case "contact":
          response = "Reach me via email at developer@example.com";
          break;
        case "experience":
          response =
            "Worked on multiple projects in modern web development, specializing in React & Three.js.";
          break;
        case "education":
          response =
            "Bachelor's degree in Computer Science with a focus on web technologies.";
          break;
        case "help":
          response =
            "Available commands: whoami, skills, projects, contact, experience, education, clear.";
          break;
        case "clear":
          setOutput(["Type 'help' to see available commands."]);
          setCommand("");
          return;
      }
      setOutput([...output, `> ${command}`, response]);
      setCommand("");
    }
  };

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [output]);

  return (
    <section className="py-20 px-6 md:px-12 bg-[#080d16] relative overflow-hidden flex flex-col md:flex-row items-center text-center md:text-left">
      {/* Interactive Terminal Box */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-[700px] h-[450px] bg-[#0a0f1f] border border-gray-700 rounded-lg p-4 text-green-400 font-mono shadow-lg relative overflow-hidden"
          onClick={() => inputRef.current.focus()} // Refocus input on click
        >
          <div className="absolute top-0 left-0 w-full h-8 bg-[#121826] flex items-center px-3 text-white text-xs">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-auto">samiul@Legion: ~</span>
          </div>
          <div
            ref={terminalRef}
            className="text-sm overflow-y-hidden h-64 mt-8"
          >
            {output.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <p className="text-sm flex items-center mt-2">
            {">"}{" "}
            <input
              type="text"
              className="bg-transparent border-none outline-none text-green-400 w-full"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              ref={inputRef} // Keep reference to input
              autoFocus
            />
            <span className="animate-blink">_</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Dynamic Text Section */}
      <motion.div
        className="w-full md:w-1/2 p-6 text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide uppercase mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
          I am a passionate developer with expertise in modern web technologies.
          My focus is on creating immersive, high-performance applications that
          blend cutting-edge design with seamless functionality.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4 max-w-2xl">
          <Typewriter
            words={["Creative Developer", "UI/UX Enthusiast", "Tech Explorer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
