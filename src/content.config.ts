import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Screenshots are looked up by file name in src/assets/<collection>/<slug>/
// (see src/lib/media.ts) rather than declared with image(): image() fails the
// build when a file is missing, and most screenshots do not exist yet.
const mediaName = z.string().regex(/^[a-z0-9-]+$/, "File name without extension");

const galleryItem = z.union([
  z.object({
    image: mediaName,
    alt: z.string(),
    caption: z.string(),
  }),
  z.object({
    before: mediaName,
    after: mediaName,
    beforeAlt: z.string(),
    afterAlt: z.string(),
    caption: z.string(),
  }),
]);

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z
    .object({
      title: z.string(),
      client: z.string(),
      period: z.string().optional(),
      role: z.string().optional(),
      featured: z.boolean(),
      order: z.number(),
      summary: z.string(),
      keyFigure: z.string().optional(),
      tags: z.array(z.string()).min(1).max(5),
      stack: z.array(z.string()).default([]),
      liveUrl: z.url().optional(),
      coverAlt: z.string(),
      gallery: z.array(galleryItem).optional(),
      document: z.object({ label: z.string(), file: z.string() }).optional(),
    })
    .refine((entry) => !entry.featured || (entry.period && entry.role && entry.liveUrl), {
      message: "Featured work needs period, role and liveUrl for its detail page",
    }),
});

const sideProjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/side-projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    tags: z.array(z.string()).max(5).default([]),
    githubUrl: z.url().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { work, "side-projects": sideProjects };
