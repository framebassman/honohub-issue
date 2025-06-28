import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import honohub from "@honohub/vite";
import hubConfig from "./hub.config";

export default defineConfig({
  plugins: [
    react(),
    cloudflare(),
    honohub({
      config: hubConfig, // Your hub configuration
      basePath: "/", // Base path for the admin panel
    }),
  ],
});
