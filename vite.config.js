import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "**/*.{jsx,js}", // Allow .js files to contain JSX
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
});
