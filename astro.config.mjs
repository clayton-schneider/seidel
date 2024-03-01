import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // Needed to remove the backslash in CF Pages
  // https://docs.astro.build/en/reference/configuration-reference/#build-options
  build: {
    format: "file"
  },
  site: "https://seidelgroup.com",
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), partytown()],
  vite: {
    ssr: {
      noExternal: ["@splidejs/react-splide"]
    }
  }
});