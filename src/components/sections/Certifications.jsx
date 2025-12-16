import React from "react";
import { certifications } from "../../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
      className="px-6 py-20 bg-bg-light dark:bg-bg-dark"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Certifications
            </span>
          </h1>
          <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg max-w-2xl mx-auto">
            Formal training and credentials that validate my skill set.
          </p>
          <div className="w-24 h-1 bg-accent-light dark:bg-accent-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">
                  {cert.title}
                </h2>
                <span className="text-sm text-text-light-muted dark:text-text-dark-muted whitespace-nowrap ml-4">
                  {cert.date}
                </span>
              </div>

              <p className="text-accent-light dark:text-accent-dark font-medium mb-3">
                {cert.issuer}
              </p>

              <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm mb-4">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary mb-2">
                  Skills Gained:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bg-light dark:bg-bg-dark text-text-light-secondary dark:text-text-dark-secondary rounded text-xs font-medium border border-border-light dark:border-border-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.link && (
                <div className="pt-4 border-t border-border-light dark:border-border-dark">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
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
                    <span className="text-sm font-medium">View Credential</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
