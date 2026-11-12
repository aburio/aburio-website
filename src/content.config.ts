import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Images are looked up by file name in src/assets/projects/<slug>/ (see
// src/lib/media.ts) rather than declared with image(): image() fails the build
// when a file is missing, and some screenshots do not exist yet.
const mediaName = z.string().regex(/^[a-z0-9-]+$/, "File name without extension");

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z
    .object({
      title: z.string(),
      org: z.string(),
      period: z.string().optional(),
      role: z.string().optional(),
      phase: z.enum(["from-scratch", "scaled", "side"]),
      order: z.number(),
      featured: z.boolean().default(false),
      summary: z.string(),
      figure: z.string().optional(),
      figures: z.array(z.object({ value: z.string(), label: z.string() })).length(3).optional(),
      tags: z.array(z.string()).max(3),
      stack: z.array(z.string()).optional(),
      // Present when the project has a visual, even if the file is not there yet;
      // absent means the card starts with its text.
      cover: z.object({ alt: z.string() }).optional(),
      gallery: z
        .array(
          z.object({ image: mediaName, alt: z.string(), title: z.string(), text: z.string() }),
        )
        .optional(),
      caseStudy: z.boolean().default(false),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    })
    .refine((p) => !p.featured || p.figures, { message: "A featured project needs figures" }),
});

export const collections = { projects };
