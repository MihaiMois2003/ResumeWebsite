import React, { useEffect, useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "../CSS/Hero.css";

function Hero() {
  const [scroll, setScroll] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Set initial mobile state and handle resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Handle resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll position and manage image visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition);

      // Only for mobile: hide image when scrolling down
      if (isMobile) {
        if (scrollPosition > 100 && imageVisible) {
          setImageVisible(false);
        } else if (scrollPosition <= 100 && !imageVisible) {
          setImageVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageVisible, isMobile]);

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

        <div
          className={`hero-image ${
            isMobile && !imageVisible ? "hide-image" : ""
          }`}
        >
          <img src="/profile.jpg" alt="Moise Mihai profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
