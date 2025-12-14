import React from "react";
import { personalInfo } from "../../data/personalInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-yellow transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-yellow transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-yellow transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-yellow transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-yellow transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-yellow transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-text-light-muted dark:text-text-dark-muted text-sm">
            © {currentYear} John Wayne Landong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
