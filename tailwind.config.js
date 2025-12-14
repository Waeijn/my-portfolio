export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "bg-dark": "#000000",
        "bg-dark-surface": "#0A0A0A",
        "bg-light": "#FFFFFF",
        "bg-light-surface": "#F8F8F8",

        // Borders
        "border-dark": "#1A1A1A",
        "border-light": "#E5E5E5",

        // Text colors for dark mode
        "text-dark-primary": "#FFFFFF",
        "text-dark-secondary": "#A0A0A0",
        "text-dark-muted": "#6B6B6B",

        // Text colors for light mode
        "text-light-primary": "#000000",
        "text-light-secondary": "#6B6B6B",
        "text-light-muted": "#9B9B9B",

        // Accent (minimal usage)
        "accent-yellow": "#FFD700",
        "accent-yellow-hover": "#FFC400",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.8s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
