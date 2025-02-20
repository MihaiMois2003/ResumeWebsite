import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../CSS/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hello <span className="wave">👋</span>, I'm{" "}
            <span className="highlight">Moise Mihai</span>
          </h1>
          <p>
            Computer Science student passionate about app and web development,
            always eager to learn and build innovative solutions. Skilled in
            both frontend and backend, constantly exploring new technologies to
            grow and create impactful projects.
          </p>
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/mihai_moise/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/MihaiMois2003"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
