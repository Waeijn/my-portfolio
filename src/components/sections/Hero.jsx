import React from "react";
import { personalInfo } from "../../data/personalInfo";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border-2 border-border-light dark:border-border-dark flex items-center justify-center text-3xl">
            👨‍💻
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          <span className="text-text-light-primary dark:text-text-dark-primary">
            {personalInfo.firstName}
          </span>
          <br />
          <span className="text-text-light-primary dark:text-text-dark-primary">
            {personalInfo.lastName}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-text-light-secondary dark:text-text-dark-secondary mb-4">
          {personalInfo.title}
        </p>

        <p className="text-lg text-text-light-muted dark:text-text-dark-muted max-w-2xl mx-auto mb-12">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-text-light-primary dark:bg-text-dark-primary text-bg-light dark:text-bg-dark font-medium rounded hover:bg-accent-yellow hover:text-bg-dark transition-all"
          >
            View Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary font-medium rounded hover:border-accent-yellow transition-all"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-text-light-muted dark:text-text-dark-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
