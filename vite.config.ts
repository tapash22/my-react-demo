import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // Add this line to ensure paths are relative
  // handle local server port
  server: {
    port: 5173,
    strictPort: true,
    open: true, // Optional: opens the browser automatically
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
  plugins: [tailwindcss(), react()],
});
