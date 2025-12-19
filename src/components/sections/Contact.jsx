import React from "react";
import { personalInfo } from "../../data/personalInfo";

// Helper function to create SVG icons
const createIcon = (d) => (
  <svg
    className="w-6 h-6 text-accent-light dark:text-accent-dark flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    url: personalInfo.social.github,
    icon: createIcon(
      "M8 9H7a4 4 0 00-4 4v5a4 4 0 004 4h10a4 4 0 004-4v-5a4 4 0 00-4-4h-1"
    ),
    fallbackD: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    name: "LinkedIn",
    url: personalInfo.social.linkedin,
    icon: createIcon(
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ),
    fallbackD:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    name: "Email",
    url: personalInfo.social.email,
    icon: createIcon(
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.903l-4.27 2.605A3.75 3.75 0 0112 13.5c-1.037 0-2.057-.29-2.943-.847L4.5 9.07a2.25 2.25 0 01-1.07-1.903V6.75"
    ),
    fallbackD:
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.903l-4.27 2.605A3.75 3.75 0 0112 13.5c-1.037 0-2.057-.29-2.943-.847L4.5 9.07a2.25 2.25 0 01-1.07-1.903V6.75",
  },
];

const contactItems = [
  {
    label: "Location",
    value: personalInfo.location,
    icon: createIcon(
      "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 3.86-5.25 7.5-7.5 7.5S4.5 14.36 4.5 10.5a7.5 7.5 0 1115 0z"
    ), // Map pin icon
  },
  {
    label: "Email",
    value: personalInfo.email,
    icon: createIcon(
      "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.903l-4.27 2.605A3.75 3.75 0 0112 13.5c-1.037 0-2.057-.29-2.943-.847L4.5 9.07a2.25 2.25 0 01-1.07-1.903V6.75"
    ), // Envelope icon
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    icon: createIcon(
      "M2.25 6.75c0-1.025.748-1.874 1.767-1.967l1.393-.119A.75.75 0 016 4.75c0 .38-.28.706-.67.74l-1.393.119C3.748 5.626 3 6.475 3 7.5v9c0 1.025.748 1.874 1.767 1.967l1.393.119A.75.75 0 016 19.5c0 .38-.28.706-.67.74l-1.393.119C3.748 20.374 3 19.525 3 18.5v-9z"
    ), // Phone icon (simple path)
  },
];

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Get In{" "}
          <span className="text-accent-light dark:text-accent-dark">Touch</span>
        </h1>
        <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary max-w-2xl mx-auto mb-12">
          I am currently open to new opportunities. Feel free to connect or drop
          a message!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-bg-light-surface dark:bg-bg-dark-surface p-6 rounded-2xl border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-all flex flex-col items-center text-center"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mt-4 mb-2">
                {item.label}
              </h3>
              <p className="text-text-light-secondary dark:text-text-dark-secondary">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-6">
            Connect With Me
          </h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-bg-light-surface dark:bg-bg-dark-surface border border-border-light dark:border-border-dark hover:border-accent-light dark:hover:border-accent-dark transition-colors"
              >
                <svg
                  className="w-6 h-6 text-text-light-primary dark:text-text-dark-primary hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Since we don't have a library for brand icons, we use a generic path that should be replaced with the actual brand icon path (GitHub, LinkedIn) in a real project */}
                  {link.name === "GitHub" && (
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  )}
                  {link.name === "LinkedIn" && (
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.567-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.441v6.794z" />
                  )}
                  {link.name === "Email" && (
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-6.623 5.671v-13.639l6.623 7.968zm-.623-1.929l-3.3-3.018h16.208l-3.292 3.008-3.321 3.238-3.003-3.24-3.292-3.008zm16.2 3.291l-6.622-5.667 6.622-7.969v13.636z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Resume Button */}
        <a
          href={personalInfo.resume}
          download
          className="inline-flex items-center gap-2 px-10 py-4 bg-accent-light dark:bg-accent-dark text-white dark:text-bg-dark font-bold rounded-lg hover:opacity-90 transition-all mt-8 shadow-lg shadow-accent-light/20 dark:shadow-accent-dark/10"
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
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
