import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  //handle local server port
  // server: {
  //   port: 5000,
  //   strictPort: true,
  //   open: true, // Optional: opens the browser automatically
  // },
  preview: {
    port: 5000,
    strictPort: true,
  },
  plugins: [tailwindcss(), react()],
});
