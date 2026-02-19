import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import "./index.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
};

export default App;
