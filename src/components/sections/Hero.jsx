import React from "react";
import { personalInfo } from "../../data/personalInfo";
import { ArrowDownIcon } from "../../assets/icons";

function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border-2 border-border-light dark:border-border-dark overflow-hidden flex items-center justify-center">
            <img
              src="/img/1x1-no_bg.png"
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://ui-avatars.com/api/?name=John+Wayne&background=random";
              }}
            />
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

        <p className="text-xl md:text-2xl text-accent-light dark:text-accent-dark font-semibold mb-4">
          {personalInfo.title}
        </p>

        <p className="text-lg text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-12">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded hover:opacity-90 transition-all shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/10"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-border-light dark:border-border-dark text-text-light-primary dark:text-text-dark-primary font-bold rounded hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-text-light-muted dark:text-text-dark-muted hover:text-accent-light dark:hover:text-accent-dark transition-colors"
          aria-label="Scroll down"
        >
          <div className="animate-bounce">
            <ArrowDownIcon className="w-8 h-8" />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
