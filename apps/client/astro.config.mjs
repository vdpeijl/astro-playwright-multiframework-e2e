import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), analogjsangular()],
});
