import React from "react";
import { certifications } from "../../../data/certifications";
import { ExternalLinkIcon, XIcon } from "../../../assets/icons";

function CertificationGalleryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-dark/80 backdrop-blur-sm">
      <div className="bg-bg-light dark:bg-bg-dark-surface w-full max-w-5xl max-h-[90vh] rounded-2xl border border-border-light dark:border-border-dark overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="p-6 border-b border-border-light dark:border-border-dark flex justify-between items-center bg-bg-light-surface dark:bg-bg-dark-surface">
          <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
            All{" "}
            <span className="text-accent-light dark:text-accent-dark">
              Certifications
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg-light dark:hover:bg-bg-dark rounded-full transition-colors"
          >
            <XIcon className="w-6 h-6 text-text-light-muted" />
          </button>
        </div>

        {/* Modal Body (Scrollable Grid) */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl border border-border-light dark:border-border-dark bg-bg-light-surface dark:bg-bg-dark"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <span className="text-xs text-text-light-muted">
                    {cert.date}
                  </span>
                </div>
                <p className="text-accent-light dark:text-accent-dark text-sm mb-2">
                  {cert.issuer}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-1 bg-bg-light dark:bg-bg-dark-surface rounded border border-border-light dark:border-border-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationGalleryModal;
