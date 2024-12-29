import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   plugins: [react()],
   build: {
      outDir: "dist",
      assetsDir: "_assets", // Output static assets to a separate folder for easier caching
      manifest: true, // Generates a manifest.json for better file management
   },
   server: {
      port: 3000, // Optional, if you need to test locally
   },
});
