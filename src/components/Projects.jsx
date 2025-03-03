import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import mission100Image1 from "../assets/mission100_image1.jpg";
import mission100Image2 from "../assets/mission100_image2.jpg";
import mission100Image3 from "../assets/mission100_image3.jpg";
import expensesImage1 from "../assets/expenses_image1.jpg";
import expensesImage2 from "../assets/expenses_image2.jpg";
import expensesImage3 from "../assets/expenses_image3.jpg";
import mission100qr from "../assets/MISSION100_qr.jpg";
import expensesqr from "../assets/ExpensesApp_qr.jpg";

import "../CSS/Projects.css";

const projects = [
  {
    id: 1,
    title: "Mission 100",
    description:
      "MISSION100 – Your AI-powered health companion designed to help you live a longer, healthier life! Get real-time, personalized advice on fitness, nutrition, and lifestyle habits tailored just for you. With AI-driven insights, MISSION100 guides you toward optimal health, empowering you to reach 100 years with vitality. Start your journey to a better you today! 🚀💯",
    technologies: ["React-Native", "Node.js", "Firebase"],
    screenshots: [mission100Image1, mission100Image2, mission100Image3],
    qrCode: mission100qr,
    githubLink: "https://github.com/MihaiMois2003/mission100",
  },
  {
    id: 2,
    title: "Expenses app",
    description:
      "ExpensesApp – A simple React Native app to track expenses using Firebase. Add, update, and delete transactions seamlessly while learning real-time database functionality. 🚀🔥",
    technologies: ["React Native", "Node.js", "Firebase", "Redux"],
    screenshots: [expensesImage1, expensesImage2, expensesImage3],
    qrCode: expensesqr,
    githubLink: "https://github.com/MihaiMois2003/UdemyReactNative",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

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

    const section = document.getElementById("projects-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveScreenshot(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveScreenshot(0);
    document.body.style.overflow = "unset";
  };

  const nextScreenshot = () => {
    setActiveScreenshot((prev) =>
      prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevScreenshot = () => {
    setActiveScreenshot((prev) =>
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="projects-section"
      className={`projects-section ${isVisible ? "visible" : ""}`}
    >
      <div className={`section-title ${isVisible ? "visible" : ""}`}>
        <h2>My Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className={`projects-grid ${isVisible ? "visible" : ""}`}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => openModal(project)}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="view-project">View Project</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Left Column - Carousel */}
            <div className="carousel-section">
              <div className="screenshot-container">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className={`screenshot ${
                      index === activeScreenshot ? "active" : ""
                    }`}
                  />
                ))}

                <button className="nav-button prev" onClick={prevScreenshot}>
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-button next" onClick={nextScreenshot}>
                  <ChevronRight size={24} />
                </button>

                <div className="carousel-progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${
                        ((activeScreenshot + 1) /
                          selectedProject.screenshots.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Middle Column - Project Details */}
            <div className="project-details">
              <h2>{selectedProject.title}</h2>
              <p className="description">{selectedProject.description}</p>

              <div className="technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>

            {/* Right Column - QR Code */}
            <div className="qr-section">
              <img
                src={selectedProject.qrCode}
                alt="QR Code"
                className="qr-code"
              />
              <p>Scan to view live demo</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
