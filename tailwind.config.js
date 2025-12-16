export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds (Neutral Grays instead of pure Black/White)
        "bg-dark": "#0A0A0A", // Very dark gray
        "bg-dark-surface": "#1A1A1A", // Slightly lighter surface
        "bg-light": "#F5F5F5", // Off-white/light gray
        "bg-light-surface": "#FFFFFF", // Pure white for cards/surfaces

        // Borders
        "border-dark": "#333333", // Darker border
        "border-light": "#E0E0E0", // Lighter border

        // Text colors for dark mode (adjusted for better contrast against gray backgrounds)
        "text-dark-primary": "#FFFFFF",
        "text-dark-secondary": "#B0B0B0",
        "text-dark-muted": "#808080",

        // Text colors for light mode (darkened slightly against off-white backgrounds)
        "text-light-primary": "#1A1A1A",
        "text-light-secondary": "#5C5C5C",
        "text-light-muted": "#9A9A9A",

        // Accent colors: Muted Gold/Amber
        // Light mode: Deeper, slightly brownish yellow
        "accent-light": "#B8860B", // DarkGoldenrod - Muted, elegant
        // Dark mode: Cleaner, brighter amber
        "accent-dark": "#FFD700", // Gold - Brighter, clean
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
      },
    },
  },
  plugins: [],
};
