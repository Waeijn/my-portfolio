import React from "react";
import { personalInfo } from "../../data/personalInfo";

function About() {
  return (
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-accent-yellow">Me</span>
          </h1>
          <div className="w-24 h-1 bg-accent-yellow mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-bg-card rounded-2xl border-4 border-accent-yellow shadow-yellow flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
              <p className="text-xl text-accent-yellow font-medium">
                {personalInfo.title} | {personalInfo.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-text-secondary">
              <p className="leading-relaxed">
                {personalInfo.about.introduction}
              </p>
              <p className="leading-relaxed">{personalInfo.about.background}</p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-text-secondary">
                <span>📧</span>
                <a href={"mailto:" + personalInfo.email}>
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <span>📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What I am{" "}
            <span className="text-accent-yellow">Passionate About</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.about.interests.map((interest, index) => {
              return (
                <div
                  key={index}
                  className="bg-bg-card p-6 rounded-xl border border-border-primary hover:border-accent-yellow transition-all"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {interest}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-bg-card p-8 md:p-12 rounded-2xl border border-border-primary mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            My <span className="text-accent-yellow">Philosophy</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {personalInfo.about.values}
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Let's Work <span className="text-accent-yellow">Together</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/contact"
              className="px-8 py-4 bg-accent-yellow text-bg-primary font-semibold rounded-lg hover:bg-accent-yellow-dark transition-all"
            >
              Get In Touch
            </a>

            <a
              href="/projects"
              className="px-8 py-4 bg-transparent text-text-primary font-semibold rounded-lg border-2 border-border-light hover:border-accent-yellow hover:text-accent-yellow transition-all"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
