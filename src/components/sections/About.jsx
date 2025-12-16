import React from "react";
import { personalInfo } from "../../data/personalInfo";

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text-light-primary dark:text-text-dark-primary mb-8">
          About Me
        </h2>

        <div className="space-y-6 text-text-light-secondary dark:text-text-dark-secondary leading-relaxed text-lg mb-12">
          <p>{personalInfo.about.introduction}</p>
          <p>{personalInfo.about.background}</p>
          <p>{personalInfo.about.values}</p>
        </div>

        {/* Beyond Coding Section */}
        <div className="mb-12 p-8 bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark rounded-xl">
          <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
            Beyond Coding
          </h3>
          <p className="text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
            {personalInfo.about.beyondCoding}
          </p>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-6">
            Interests & Focus Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            {personalInfo.about.interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark rounded-lg text-text-light-primary dark:text-text-dark-primary hover:border-accent-light dark:hover:border-accent-dark transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
