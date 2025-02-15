// About.jsx
import React, { useState, useEffect } from "react";
import { Monitor, Code, Palette, Lightbulb } from "lucide-react";
import "../CSS/About.css";

// Array of descriptions for each tab
const descriptions = [
  {
    title: "Description 1",
    text: "This is placeholder text for description 1. You'll want to replace this with your actual content about your skills, experience, or background.",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    title: "Description 2",
    text: "This is placeholder text for description 2. Each description will fade in smoothly as the user scrolls through the section.",
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: "Description 3",
    text: "This is placeholder text for description 3. The animation is synchronized with the scroll position for a smooth, interactive experience.",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    title: "Description 4",
    text: "This is placeholder text for description 4. The styling automatically adapts to your system's light/dark theme preferences.",
    icon: <Lightbulb className="w-5 h-5" />,
  },
];

function About() {
  // State to manage active tab and visibility
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Set up intersection observer to trigger animations when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null, // viewport
        rootMargin: "-20% 0px", // trigger slightly before section is fully visible
        threshold: 0.1, // trigger when 10% of section is visible
      }
    );

    // Start observing the about section
    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    // Cleanup observer on component unmount
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about-section" className="about-section">
      {/* Title section with animation */}
      <div className={`section-title ${isVisible ? "visible" : ""}`}>
        <h2>About Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className={`tab-container ${isVisible ? "visible" : ""}`}>
        {/* Tab buttons */}
        <div className="tabs-wrapper">
          {descriptions.map((desc, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`tab ${activeTab === index ? "active" : ""}`}
            >
              <span className="icon-wrapper">{desc.icon}</span>
              <span className="tab-text">{desc.title}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="content-wrapper">
          {descriptions.map((desc, index) => (
            <div
              key={index}
              className={`content ${activeTab === index ? "active" : ""}`}
            >
              <p>{desc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
