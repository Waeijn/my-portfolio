import React from "react";
import { technologies } from "../../data/technologies";

function Technologies() {
  return (
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Technologies & <span className="text-accent-yellow">Skills</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {technologies.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-3xl font-bold">
                  <span className="text-accent-yellow">{category.name}</span>
                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-bg-card p-6 rounded-xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow transition-all group"
                  >
                    {/* Skill Name */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {skill.name}
                      </h3>
                      <span className="text-accent-yellow font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-bg-hover rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-yellow to-accent-yellow-light rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-bg-card p-8 md:p-12 rounded-2xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow transition-all">
            <h2 className="text-2xl font-bold mb-4">
              Always <span className="text-accent-yellow">Learning</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies. Currently exploring cloud computing,
              DevOps practices, and advanced system design patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
