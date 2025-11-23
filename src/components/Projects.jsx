import React, { useState, useEffect } from "react";

import mission100Image1 from "../assets/mission100_image1.jpg";
import mission100Image2 from "../assets/mission100_image2.jpg";
import mission100Image3 from "../assets/mission100_image3.jpg";
import mission100qr from "../assets/MISSION100_qr.jpg";
import feedScreen from "../assets/FeedScreenLifeMesh.png";
import postModal from "../assets/PostModalLifeMesh.png";
import profileScreen from "../assets/ProfileScreenLifeMesh.png";
import welcomeScreen from "../assets/WelcomeScreenLifeMesh.png";
import registerScreen from "../assets/RegisterScreenLifeMesh.png";
import qrCodeLifeMesh from "../assets/qrCodeLifeMeshMobile.png";

import ProjectModal from "./ProjectModal";
import "../CSS/Projects.css";

const projects = [
  {
    id: 1,
    type: "app", // 'app' or 'website'
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
    type: "app",
    title: "LifeMesh",
    description:
      "LifeMesh – A smart local community network that connects people in the same area for help, donations, events, and civic initiatives. Features include an interactive local map, user profiles with reputation, community feed, real-time chat, and AI-powered recommendations & moderation. Built with React Native (Expo) for mobile, Next.js for web, and MySQL backend.",
    technologies: [
      "React Native (Expo)",
      "Next.js",
      "MySQL",
      "Node.js",
      "Prisma",
      "Redux",
    ],
    screenshots: [
      welcomeScreen,
      registerScreen,
      feedScreen,
      postModal,
      profileScreen,
    ],
    qrCode: qrCodeLifeMesh,
    githubLink: "https://github.com/MihaiMois2003/LifeMesh",
  },

  {
    id: 3,
    type: "website",
    title: "TimeTracker App",
    description:
      "A simple timetracking app that helped me organize my projects and keep track of time",
    technologies: ["React", "Firebase"],
    websiteUrl: "https://time-tracking-plum.vercel.app/",
    githubLink: "https://github.com/MihaiMois2003/TimeTracking",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
              <div className="project-type-badge">
                {project.type === "app" ? "📱 Mobile App" : "🌐 Website"}
              </div>
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
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
