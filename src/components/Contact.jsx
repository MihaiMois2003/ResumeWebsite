import React, { useState, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import "../CSS/Contact.css";

const Contact = () => {
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

    const section = document.getElementById("contact-section");
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
    <section
      id="contact-section"
      className={`contact-section ${isVisible ? "visible" : ""}`}
    >
      <div className={`contact-card ${isVisible ? "visible" : ""}`}>
        <div className="contact-header">
          <h2 className="contact-title">Contact Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-content">
          {/* Email Contact */}
          <div className="contact-item">
            <a href="mailto:mihaimoise73@gmail.com" className="icon-link">
              <div className="icon-container">
                <Mail />
              </div>
            </a>
            <div className="contact-info">
              <h3 className="info-label">Email</h3>
              <a href="mailto:mihaimoise73@gmail.com" className="info-value">
                mihaimoise73@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact-item">
            <a
              href="https://www.google.com/maps/place/Cluj-Napoca,+Romania"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <div className="icon-container">
                <MapPin />
              </div>
            </a>
            <div className="contact-info">
              <h3 className="info-label">Location</h3>
              <p className="info-value">Cluj-Napoca, Romania</p>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <a href="tel:+40725465205" className="icon-link">
              <div className="icon-container">
                <Phone />
              </div>
            </a>
            <div className="contact-info">
              <h3 className="info-label">Phone</h3>
              <a href="tel:+40725465205" className="info-value">
                +40 725 465 205
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
