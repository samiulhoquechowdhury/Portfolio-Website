import { motion } from "framer-motion";
import {
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiSocketdotio,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiGit,
  SiPython,
  SiDocker,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    icon: <SiReact size={80} className="text-cyan-400" />,
    x: -250,
    y: -180,
  },
  {
    id: 2,
    icon: <SiCss3 size={80} className="text-blue-500" />,
    x: 250,
    y: -180,
  },
  {
    id: 3,
    icon: <SiTailwindcss size={80} className="text-teal-400" />,
    x: -300,
    y: 0,
  },
  {
    id: 4,
    icon: <SiFramer size={80} className="text-purple-500" />,
    x: 300,
    y: 0,
  },
  {
    id: 5,
    icon: <SiNextdotjs size={80} className="text-gray-300" />,
    x: -250,
    y: 180,
  },
  {
    id: 6,
    icon: <SiSocketdotio size={80} className="text-white" />,
    x: 250,
    y: 180,
  },
  {
    id: 7,
    icon: <SiNodedotjs size={80} className="text-green-500" />,
    x: -100,
    y: -250,
  },
  {
    id: 8,
    icon: <SiTypescript size={80} className="text-blue-400" />,
    x: 100,
    y: -250,
  },
  {
    id: 9,
    icon: <SiMongodb size={80} className="text-green-400" />,
    x: -100,
    y: 250,
  },
  {
    id: 10,
    icon: <SiExpress size={80} className="text-gray-500" />,
    x: 100,
    y: 250,
  },
  {
    id: 11,
    icon: <SiGit size={80} className="text-red-500" />,
    x: -350,
    y: -50,
  },
  {
    id: 12,
    icon: <SiPython size={80} className="text-yellow-500" />,
    x: 350,
    y: -50,
  },
  {
    id: 13,
    icon: <SiDocker size={80} className="text-blue-500" />,
    x: 0,
    y: 300,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-screen flex flex-col items-center justify-center text-center bg-[#020617] px-2 md:px-12 overflow-hidden"
    >
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 tracking-wider drop-shadow-md mb-28 md:mb-28 sm:mb-12 mt-10 sm:mt-4 md:mt-0" // Added responsive margin top
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      {/* Mobile View */}
      <div className="w-full h-full md:hidden grid grid-cols-3 gap-4 justify-center items-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex justify-center items-center p-4 bg-[#08192d] rounded-lg"
          >
            <div className="text-white text-sm md:text-base">{skill.icon}</div>{" "}
            {/* Reduced size on mobile */}
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="relative mt-4 w-full h-[500px] flex items-center justify-center hidden md:flex">
        <motion.div className="absolute text-2xl text-cyan-300 font-bold border border-cyan-400 px-4 py-2 rounded-lg">
          Tech Stack
        </motion.div>
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="absolute flex flex-col items-center justify-center p-6 bg-[#08192d] rounded-lg border border-cyan-500/60 shadow-xl cursor-pointer"
            initial={{ opacity: 0, x: skill.x, y: skill.y }}
            animate={{ opacity: 1 }}
            drag
            dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
            whileTap={{ scale: 1.1 }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
