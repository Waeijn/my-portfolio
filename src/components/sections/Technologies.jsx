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
            Here are the technologies and tools I am practicing and working with
            to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-bg-light-surface dark:bg-bg-dark-surface p-8 rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col group/card"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-accent-light dark:text-accent-dark">
                  {/* Generic icon - can be replaced with category.icon if using components */}
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
                  {category.name}
                </h3>
              </div>

              {/* Skills Tags Container */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="py-2 px-4 rounded-lg bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark hover:text-accent-light dark:hover:text-accent-dark hover:border-accent-light dark:hover:border-accent-dark transition-all cursor-default group"
                  >
                    <span className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Learning Section */}
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
