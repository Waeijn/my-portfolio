import React from "react";

function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 bg-gradient-to-br from-bg-primary to-bg-secondary">
      <div className="max-w-4xl w-full animate-fade-in-up">
        {/* Greeting */}
        <h1 className="text-2xl text-text-secondary mb-3 animate-fade-in">
          Hi, I'm
        </h1>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">John Wayne</span>{" "}
          <span className="text-accent-yellow">Landong</span>
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl text-text-primary font-medium mb-6">
          Full Stack Developer | Tech Enthusiast
        </p>

        {/* Description */}
        <p className="text-lg text-text-secondary max-w-2xl mb-12 leading-relaxed">
          I create elegant solutions to complex problems through clean code and
          innovative thinking.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6">
          {/* First Button (Get In Touch) - FIX APPLIED HERE */}
          <a
            href="/contact"
            className="px-8 py-4 bg-accent-yellow text-bg-primary font-semibold rounded-lg border-2 border-accent-yellow hover:bg-transparent hover:text-accent-yellow hover:-translate-y-1 hover:shadow-yellow transition-all"
          >
            Get In Touch
          </a>

          {/* Second Button (View My Work) - FIX APPLIED HERE */}
          <a
            href="/projects"
            className="px-8 py-4 bg-transparent text-text-primary font-semibold rounded-lg border-2 border-border-light hover:bg-bg-hover hover:border-accent-yellow hover:text-accent-yellow hover:-translate-y-1 transition-all"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
