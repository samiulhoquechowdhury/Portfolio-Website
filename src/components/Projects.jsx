import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by GPT-4.",
    image:
      "https://img.freepik.com/free-vector/chatbot-technology-website-template_107791-113.jpg?t=st=1740331273~exp=1740334873~hmac=7c52373aa23571ae1a262e4737d76b02194bea5cee3dc1904a0ad897f7026040&w=1380",
    github: "https://github.com/yourprofile/ai-chatbot",
    live: "https://ai-chatbot-demo.com",
  },
  {
    title: "Crypto Dashboard",
    description: "A real-time dashboard for crypto market insights.",
    image:
      "https://img.freepik.com/free-photo/cyberpunk-bitcoin-illustration_23-2151611167.jpg?t=st=1740330707~exp=1740334307~hmac=ba3b1a2c395febe8b0b05df6863c2e87c7bf95ceede186e6a8123f6a6bdc161f&w=1380",
    github: "https://github.com/yourprofile/crypto-dashboard",
    live: "https://crypto-dashboard.com",
  },
  {
    title: "3D Portfolio",
    description: "An interactive 3D portfolio built with React Three Fiber.",
    image:
      "https://img.freepik.com/free-photo/creative-3d-render-design-web-banner-marketing-material-business-presentation-online-advertising_460848-7134.jpg?t=st=1740330967~exp=1740334567~hmac=6bc88c85a57170c132f2e0e2bc2ba94087c8a9450ad9a7815c963b468b9e4778&w=1060",
    github: "https://github.com/yourprofile/3d-portfolio",
    live: "https://your-portfolio.com",
  },
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with modern UI/UX.",
    image:
      "https://img.freepik.com/free-vector/man-laptop-technology-website-market-sale_24877-56045.jpg?t=st=1740331329~exp=1740334929~hmac=8965be362e57790b94b328aec1911101b460d5b3a7358aa12560d3c6d77f94ce&w=826",
    github: "https://github.com/yourprofile/ecommerce-platform",
    live: "https://ecommerce-platform.com",
  },
  {
    title: "Task Manager",
    description: "A minimal task manager with intuitive UI.",
    image:
      "https://img.freepik.com/free-vector/students-employees-adding-events-deadlines-calendar-app-young-people-using-time-organizer-planner-flat-illustration_74855-20735.jpg?t=st=1740331386~exp=1740334986~hmac=716308055403ba9818b81aabf92e43ea0f9bd6b8fa6694a5e7a8a2530b9578ef&w=826",
    github: "https://github.com/yourprofile/task-manager",
    live: "https://task-manager.com",
  },
];

const ProjectCard = ({ title, description, image, github, live }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareEnable
      glareMaxOpacity={0.2}
    >
      <motion.div
        className="bg-[#10141f] border border-cyan-500/40 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-500/50 overflow-hidden relative"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative z-10">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-white tracking-wide">
            {title}
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            {description}
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-lg hover:text-cyan-400 transition duration-300 flex items-center gap-2"
            >
              <FaGithub />
              <span className="text-base">Code</span>
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-lg hover:text-cyan-400 transition duration-300 flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              <span className="text-base">Live</span>
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 bg-[#080d16] relative"
    >
      <div className="absolute inset-0 bg-grid-cyan opacity-10 pointer-events-none"></div>
      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
