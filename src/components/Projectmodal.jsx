import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const isWebsite = project.type === "website";

  const nextScreenshot = () => {
    setActiveScreenshot((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevScreenshot = () => {
    setActiveScreenshot((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${isWebsite ? "website-modal" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Carousel Section - Only for apps */}
        {!isWebsite && (
          <div className="carousel-section">
            <div className="screenshot-container">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
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
                      ((activeScreenshot + 1) / project.screenshots.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Project Details - Always present */}
        <div className="project-details">
          <h2>{project.title}</h2>
          <p className="description">{project.description}</p>

          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="action-buttons">
            {isWebsite && project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                View Website
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>

        {/* QR Section - Only for apps */}
        {!isWebsite && project.qrCode && (
          <div className="qr-section">
            <img src={project.qrCode} alt="QR Code" className="qr-code" />
            <p>Scan to view live demo</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
