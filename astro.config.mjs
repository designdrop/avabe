import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://avmagic.pro",
  integrations: [
    tailwind(),
    // 🚫 REMOVE astroConfig.assets()
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
