import React from "react";
import { certifications } from "../../data/certifications";

function Certifications() {
  return (
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Certifications &{" "}
            <span className="text-accent-yellow">Achievements</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Continuous learning through courses, certifications, and skill
            development.
          </p>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            return (
              <div
                key={cert.id}
                className="bg-bg-card rounded-2xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow hover:-translate-y-2 transition-all overflow-hidden group"
              >
                <div className="h-40 bg-bg-hover flex items-center justify-center relative">
                  <div className="text-5xl opacity-50">🎓</div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-yellow transition-colors">
                    {cert.title}
                  </h2>

                  <p className="text-accent-yellow font-semibold mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-text-muted mb-4">
                    Issued: {cert.date}
                  </p>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">
                      Skills Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => {
                        return (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-bg-hover text-text-secondary rounded text-xs font-medium border border-border-primary"
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent-yellow hover:text-accent-yellow-light transition-colors text-sm font-semibold"
                    >
                      <span>View Certificate</span>
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
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-bg-card p-8 rounded-2xl border border-border-primary">
          <h2 className="text-2xl font-bold mb-4">
            Always <span className="text-accent-yellow">Learning</span>
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            I believe in continuous improvement and staying updated with the
            latest technologies and best practices in software development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-bg-hover rounded-lg border border-border-primary">
              <p className="text-2xl font-bold text-accent-yellow">
                {certifications.length}+
              </p>
              <p className="text-sm text-text-secondary">Certifications</p>
            </div>
            <div className="px-6 py-3 bg-bg-hover rounded-lg border border-border-primary">
              <p className="text-2xl font-bold text-accent-yellow">500+</p>
              <p className="text-sm text-text-secondary">Hours of Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
