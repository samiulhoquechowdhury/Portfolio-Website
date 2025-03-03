import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800); // Start fade-out animation
    const removeLoader = setTimeout(() => setIsLoading(false), 2200); // Remove loader fully

    return () => {
      clearTimeout(timer);
      clearTimeout(removeLoader);
    };
  }, []);

  if (isLoading) {
    return <Loader fadeOut={fadeOut} />; // Pass fadeOut state to Loader
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
