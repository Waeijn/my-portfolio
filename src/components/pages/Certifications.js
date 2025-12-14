import React from "react";
import { certifications } from "../../data/certifications";

function Certifications() {
  return (
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-accent-yellow">Certifications</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Formal training and credentials that validate my skills.
          </p>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-bg-card rounded-2xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow transition-all flex flex-col overflow-hidden"
            >
              <div className="h-40 bg-gray-900 flex items-center justify-center relative">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover opacity-50"
                />
                <h3 className="absolute text-xl font-bold text-white text-center px-4">
                  {cert.title}
                </h3>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <p className="text-text-secondary text-sm mb-1">
                  Issued by{" "}
                  <span className="text-accent-yellow font-medium">
                    {cert.issuer}
                  </span>
                </p>
                <p className="text-text-secondary text-sm mb-4">
                  Issued: {cert.date}
                </p>

                <p className="text-text-secondary leading-relaxed text-sm flex-grow mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-bg-hover text-text-secondary rounded-full border border-border-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-accent-yellow text-bg-primary font-semibold rounded-lg text-sm hover:bg-accent-yellow-dark transition-all"
                >
                  View Credential 🔗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary text-lg">
            Verifiable proof of continuous learning and dedication to mastering
            modern web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
