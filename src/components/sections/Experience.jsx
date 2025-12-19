import React from "react";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Experience
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            My journey in software development and the leadership roles that are
            shaping my skills.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                    {exp.position}
                  </h2>
                  <h3 className="text-xl text-accent-light dark:text-accent-dark font-semibold mb-2">
                    {exp.company}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-text-light-secondary dark:text-text-dark-secondary text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-accent-light dark:text-accent-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.727A8 8 0 016.343 7.273L7.757 8.687M5 12h2m10 0h2m-6 6v-2m0-8V6m-2.828 4.243l-1.414 1.414M15.536 8.464l1.414-1.414M11 12a1 1 0 102 0 1 1 0 00-2 0z"
                        />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-accent-light dark:text-accent-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span
                    className={
                      "px-4 py-2 rounded-lg text-sm font-bold transition-colors " +
                      (exp.current
                        ? "bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark animate-pulse-slow"
                        : "...")
                    }
                  >
                    {exp.current ? "Current" : exp.type}
                  </span>
                </div>
              </div>

              <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-text-light-secondary dark:text-text-dark-secondary"
                    >
                      <svg
                        className="w-4 h-4 text-accent-light dark:text-accent-dark flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 5l7 7-7 7M5 5l7 7-7 7"
                        />
                      </svg>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded-lg border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark transition-all text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-bg-light-surface dark:bg-bg-dark-surface p-8 rounded-2xl border border-border-light dark:border-border-dark">
          <h2 className="text-2xl font-bold mb-4">
            Looking for{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Opportunities
            </span>
          </h2>
          <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-8 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/10"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
