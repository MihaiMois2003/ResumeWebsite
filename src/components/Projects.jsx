import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import "../CSS/Projects.css";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Mission 100",
    description:
      "MISSION100 – Your AI-powered health companion designed to help you live a longer, healthier life! Get real-time, personalized advice on fitness, nutrition, and lifestyle habits tailored just for you. With AI-driven insights, MISSION100 guides you toward optimal health, empowering you to reach 100 years with vitality. Start your journey to a better you today! 🚀💯",
    technologies: ["React-Native", "Node.js", "Firebase"],
    screenshots: [
      "../assets/mission100_image1.jpg",
      "../assets/mission100_image2.jpg",
      "../assets/mission100_image3.jpg",
    ],
    qrCode: "/api/placeholder/200/200",
    githubLink: "https://github.com/MihaiMois2003/mission100",
  },
  {
    id: 2,
    title: "Expenses app",
    description:
      "A collaborative task management application with real-time updates. Users can create, assign, and track tasks within their team.",
    technologies: ["React Native", "Node.js", "Firebase", "Redux"],
    screenshots: [
      "../assets/expenses_image1.jpg",
      "../assets/expenses_image2.jpg",
      "../assets/expenses_image3.jpg",
    ],
    qrCode: "/api/placeholder/200/200",
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
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveScreenshot(0);
    document.body.style.overflow = "unset";
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

            <h2>{selectedProject.title}</h2>

            <div className="project-details">
              <p className="description">{selectedProject.description}</p>

              <div className="technologies">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="qr-section">
                <img
                  src={selectedProject.qrCode}
                  alt="QR Code"
                  className="qr-code"
                />
                <p>Scan to view live demo</p>
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
