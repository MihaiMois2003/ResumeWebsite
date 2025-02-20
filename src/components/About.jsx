import React, { useState, useEffect } from "react";
import { Briefcase, Code2, GraduationCap, Heart } from "lucide-react";
import "../CSS/About.css";

const descriptions = [
  {
    title: "Experience",
    text: `
      NTT DATA – TechTrek Program
      September 2023 – Present
      • Working on embedded C projects, gaining hands-on experience in software development
      • Developed strong teamwork, problem-solving, and adaptability skills through collaborative projects

      Education
      Technical University of Cluj-Napoca – Computer Science (2022 – 2026)
    `,
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "Skills",
    text: `
      Programming
      • Java, C/C++/C#, Python, JavaScript, TypeScript
      • HTML, CSS, React, React Native
      
      Software
      • MS Office (Word, Excel, PowerPoint)
      • Outlook
      
      Languages
      • English (C1)
      • Romanian (Native)
      • German
      
      Soft Skills
      • Adaptable and proactive
      • Charismatic and team-oriented
      • Strong communication skills
    `,
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    title: "Certifications",
    text: `
      Oracle Certifications
      • Oracle Database Design (May 2022)
      • Oracle Database Programming with SQL (May 2022)
      
      Language Certifications
      • Cambridge English: Advanced (C1) – April 2021
    `,
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    title: "Volunteering",
    text: `
      Faculty Ambassador – Faculty of Automation and Computers
      • Engaged in public speaking, event organization, and social media promotion
      • Strengthened interpersonal and leadership skills through outreach programs
      
      OSUT Cluj-Napoca (2022 – Present)
      • Active member in student-led initiatives
      • Fostering collaboration and networking opportunities
      • Participating in community-building activities
    `,
    icon: <Heart className="w-5 h-5" />,
  },
];

function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px",
        threshold: 0.1,
      }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="about-section" className="about-section">
      <div className={`section-title ${isVisible ? "visible" : ""}`}>
        <h2>About Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className={`tab-container ${isVisible ? "visible" : ""}`}>
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

        <div className="content-wrapper">
          {descriptions.map((desc, index) => (
            <div
              key={index}
              className={`content ${activeTab === index ? "active" : ""}`}
            >
              <pre className="content-text">{desc.text}</pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
