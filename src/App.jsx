// App.jsx
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./CSS/App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "projects", "contact"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className={`navbar ${scrolled ? "visible" : ""}`}>
        <div className="nav-content">
          <div className="nav-left">
            <span className="nav-name">Moise Mihai</span>
          </div>
          <div className="nav-links">
            {["hero", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div id="hero" className="section-container">
        <Hero />
      </div>
      <div id="about" className="section-container">
        <About />
      </div>
      <div id="projects" className="section-container">
        <Projects />
      </div>
      <div id="contact" className="section-container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
