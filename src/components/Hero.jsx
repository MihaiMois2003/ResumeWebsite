import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
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
            I'm a UX Designer and Web Developer. I focus on creating experiences
            that are functional and visually compelling.
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
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
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
