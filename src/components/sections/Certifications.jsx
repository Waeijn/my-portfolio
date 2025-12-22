import React, { useState } from "react";
import { certifications } from "../../data/certifications";
import { ExternalLinkIcon } from "../../assets/icons";
import CertificationGalleryModal from "./modals/CertificationGalleryModal";

function Certifications() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const featuredCertifications = certifications.slice(0, 4);

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

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-bg-light-surface dark:bg-bg-dark-surface rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all p-6 flex flex-col group"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
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

              <div className="mb-6">
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
                <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-light-secondary dark:text-text-dark-secondary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">View Credential</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* "See All" Action Button */}
        {certifications.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="px-10 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark font-bold rounded-xl hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white dark:hover:text-bg-dark transition-all duration-300"
            >
              See All Certifications
            </button>
          </div>
        )}
      </div>

      {/* Modal for full list */}
      <CertificationGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}

export default Certifications;
