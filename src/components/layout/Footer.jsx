import React from "react";
import { personalInfo } from "../../data/personalInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light-surface dark:bg-bg-dark-surface border-t border-border-light dark:border-border-dark px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
        {/* Copyright and Name */}
        <div className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
          &copy; {currentYear}{" "}
          <span className="font-semibold text-text-light-primary dark:text-text-dark-primary">
            {personalInfo.firstName} {personalInfo.lastName}
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
