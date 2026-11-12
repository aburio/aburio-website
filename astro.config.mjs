import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";

// Case study intertitles use the Aburio section block, which needs the text
// wrapped in a <span>; Markdown cannot express that on its own.
const sectionHeadings = {
  name: "aburio-section-headings",
  element: {
    filter: ["h2"],
    visit(node, ctx) {
      ctx.setProperty(node, "className", ["ab-section"]);
      ctx.setField(node, "children", [
        { type: "element", tagName: "span", properties: {}, children: [...node.children] },
      ]);
    },
  },
};

export default defineConfig({
  site: "https://www.abur.io",
  integrations: [sitemap()],
  // The whole stylesheet is about 10 KB: inlining it removes the only render-blocking request.
  build: { inlineStylesheets: "always" },
  markdown: {
    processor: satteri({ hastPlugins: [sectionHeadings] }),
  },
});
