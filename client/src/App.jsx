import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Projects from "./components/Projects.jsx";
import LiveProjectLinks from "./components/LiveProjectLinks.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-base text-ink min-h-screen">
      <Navbar />
      <main id="top" className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <LiveProjectLinks />
        <Education />
        <Publications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
