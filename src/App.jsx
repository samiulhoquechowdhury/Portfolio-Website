import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
