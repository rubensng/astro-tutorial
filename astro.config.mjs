import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://clinquant-cat-b3c19a.netlify.app/",
  integrations: [preact()]
});