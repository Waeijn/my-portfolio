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
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-accent-yellow">Projects</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my work, from web applications to personal projects.
          </p>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={
                  "px-6 py-3 rounded-lg font-semibold transition-all " +
                  (selectedCategory === category
                    ? "bg-accent-yellow text-bg-primary shadow-yellow"
                    : "bg-bg-card text-text-secondary border border-border-primary hover:border-accent-yellow hover:text-accent-yellow")
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-bg-card rounded-2xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow hover:-translate-y-2 transition-all overflow-hidden group"
              >
                <div className="h-48 bg-bg-hover flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-50">💻</div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={
                        "px-3 py-1 rounded-full text-xs font-semibold " +
                        (project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500"
                          : "bg-yellow-500/20 text-yellow-400 border border-yellow-500")
                      }
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-text-primary group-hover:text-accent-yellow transition-colors">
                      {project.title}
                    </h2>
                    <span className="text-xs text-text-muted whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-sm text-accent-yellow mb-3 font-medium">
                    {project.category}
                  </p>

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => {
                        return (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-bg-hover text-text-secondary rounded text-xs font-medium border border-border-primary"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-border-primary">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent-yellow transition-colors"
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent-yellow transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
