import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../CSS/Hero.css";

function Hero() {
  return (
    <div className="hero">
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
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/path-to-your-image.jpg" alt="Moise Mihai profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
