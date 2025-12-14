import React, { useState } from "react";
import { personalInfo } from "../../data/personalInfo";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just show success message
    // Later, you can integrate with EmailJS, Formspree, or your backend
    setStatus("success");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear success message after 5 seconds
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-accent-yellow">Touch</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
          <div className="w-24 h-1 bg-accent-yellow mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Let's <span className="text-accent-yellow">Connect</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={"mailto:" + personalInfo.email}
                className="flex items-start gap-4 p-6 bg-bg-card rounded-xl border border-border-primary hover:border-accent-yellow hover:shadow-yellow transition-all group"
              >
                <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-yellow/20 transition-colors">
                  <svg
                    className="w-6 h-6 text-accent-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Email
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-bg-card rounded-xl border border-border-primary">
                <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Phone
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-bg-card rounded-xl border border-border-primary">
                <div className="w-12 h-12 bg-accent-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Location
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-text-primary mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-bg-card border border-border-primary rounded-lg flex items-center justify-center hover:border-accent-yellow hover:bg-accent-yellow/10 transition-all group"
                >
                  <svg
                    className="w-6 h-6 text-text-secondary group-hover:text-accent-yellow transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-bg-card border border-border-primary rounded-lg flex items-center justify-center hover:border-accent-yellow hover:bg-accent-yellow/10 transition-all group"
                >
                  <svg
                    className="w-6 h-6 text-text-secondary group-hover:text-accent-yellow transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-card p-8 rounded-2xl border border-border-primary">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg">
                <p className="text-green-400 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-hover border border-border-primary rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-hover border border-border-primary rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bg-hover border border-border-primary rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-bg-hover border border-border-primary rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-accent-yellow text-bg-primary font-semibold rounded-lg hover:bg-accent-yellow-dark hover:-translate-y-1 hover:shadow-yellow transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
