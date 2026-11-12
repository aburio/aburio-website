import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.abur.io",
  integrations: [sitemap()],
  // The whole stylesheet is about 10 KB: inlining it removes the only render-blocking request.
  build: { inlineStylesheets: "always" },
});
