/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette - Monochrome + Yellow
        "bg-primary": "#0A0A0A",
        "bg-secondary": "#1A1A1A",
        "bg-card": "#252525",
        "bg-hover": "#2F2F2F",
        "text-primary": "#FFFFFF",
        "text-secondary": "#E0E0E0",
        "text-muted": "#B0B0B0",
        "accent-yellow": "#FFD700",
        "accent-yellow-dark": "#FFC400",
        "accent-yellow-light": "#FFED4E",
        "border-primary": "#333333",
        "border-light": "#404040",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["Courier New", "monospace"],
      },
      boxShadow: {
        yellow: "0 0 20px rgba(255, 215, 0, 0.3)",
        "yellow-strong": "0 0 30px rgba(255, 215, 0, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
