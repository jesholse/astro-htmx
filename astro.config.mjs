import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: nodejs({
    mode: "standalone",
  }),
  integrations: [tailwind()],
});
