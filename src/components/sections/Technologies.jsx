import React from "react";
import { technologies } from "../../data/technologies";

function Technologies() {
  return (
    <section
      id="technologies"
      className="px-6 py-20 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Technologies &{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Skills
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {technologies.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                {/* Generic Code Icon to replace emojis/placeholders */}
                <svg
                  className="w-8 h-8 text-accent-light dark:text-accent-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h2 className="text-3xl font-bold">
                  <span className="text-text-light-primary dark:text-text-dark-primary">
                    {category.name}
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-bg-light-surface dark:bg-bg-dark-surface p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary">
                        {skill.name}
                      </h3>
                      <span className="text-accent-light dark:text-accent-dark font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative h-3 bg-bg-light dark:bg-bg-dark rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-accent-light dark:bg-accent-dark rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-bg-light-surface dark:bg-bg-dark-surface p-8 md:p-12 rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all">
            <h2 className="text-2xl font-bold mb-4">
              Always{" "}
              <span className="text-accent-light dark:text-accent-dark">
                Learning
              </span>
            </h2>
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-3xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies. Currently exploring cloud computing,
              DevOps practices, and advanced system design patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
