import React from "react";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Professional <span className="text-accent-yellow">Experience</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My journey in software development and the roles that shaped my
            career.
          </p>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            return (
              <div
                key={exp.id}
                className="bg-bg-card rounded-2xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow transition-all p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold text-text-primary mb-2">
                      {exp.position}
                    </h2>
                    <h3 className="text-xl text-accent-yellow font-semibold mb-2">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-text-secondary text-sm">
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span
                      className={
                        "px-4 py-2 rounded-lg text-sm font-semibold " +
                        (exp.current
                          ? "bg-accent-yellow text-bg-primary"
                          : "bg-bg-hover text-text-secondary border border-border-primary")
                      }
                    >
                      {exp.current ? "Current" : exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => {
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-text-secondary"
                        >
                          <span className="text-accent-yellow mt-1">▹</span>
                          <span>{responsibility}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => {
                      return (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-bg-hover text-text-secondary rounded-lg border border-border-primary hover:border-accent-yellow hover:text-accent-yellow transition-all text-sm font-medium"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-bg-card p-8 rounded-2xl border border-border-primary">
          <h2 className="text-2xl font-bold mb-4">
            Looking for{" "}
            <span className="text-accent-yellow">Opportunities</span>
          </h2>
          <p className="text-text-secondary mb-6">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-yellow text-bg-primary font-semibold rounded-lg hover:bg-accent-yellow-dark hover:-translate-y-1 hover:shadow-yellow transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
