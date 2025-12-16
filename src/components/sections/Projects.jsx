import React, { useState } from "react";
import { projects } from "../../data/projects";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Projects
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            A showcase of my work, from web applications to personal projects.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                "px-6 py-3 rounded-lg font-semibold transition-all " +
                (selectedCategory === category
                  ? "bg-accent-light dark:bg-accent-dark text-white"
                  : "bg-bg-light-surface dark:bg-bg-dark-surface text-text-light-secondary dark:text-text-dark-secondary border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark hover:text-accent-light dark:hover:text-accent-dark")
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all overflow-hidden group"
            >
              <div className="h-48 bg-bg-light dark:bg-bg-dark flex items-center justify-center relative overflow-hidden">
                <svg
                  className="w-16 h-16 opacity-50 text-text-light-muted dark:text-text-dark-muted"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L12 19.25M12 19.25L14.25 17M12 19.25V4.75M16.5 13.5H7.5M19.5 7.5H4.5C3.671 7.5 3 8.171 3 9V17C3 17.829 3.671 18.5 4.5 18.5H19.5C20.329 18.5 21 17.829 21 17V9C21 8.171 20.329 7.5 19.5 7.5Z"
                  />
                </svg>
                <div className="absolute top-4 right-4">
                  <span
                    className={
                      "px-3 py-1 rounded-full text-xs font-semibold " +
                      (project.status === "Completed"
                        ? "bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500"
                        : "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-yellow-500")
                    }
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs text-text-light-muted dark:text-text-dark-muted whitespace-nowrap ml-2">
                    {project.date}
                  </span>
                </div>

                <p className="text-sm text-accent-light dark:text-accent-dark mb-3 font-medium">
                  {project.category}
                </p>

                <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded text-xs font-medium border border-border-light dark:border-border-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border-light dark:border-border-dark">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
