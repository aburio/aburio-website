import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Images are looked up by file name in src/assets/<collection>/<slug>/
// (see src/lib/media.ts) rather than declared with image(): image() fails the
// build when a file is missing, and most screenshots do not exist yet.
const mediaName = z.string().regex(/^[a-z0-9-]+$/, "File name without extension");

const link = z.object({ label: z.string(), url: z.string() });

const bicytrust = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/bicytrust" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    period: z.string(),
    intro: z.string(),
    blocks: z.array(z.object({ label: z.string(), text: z.string() })).length(3),
    figures: z.array(z.object({ value: z.string(), label: z.string() })).length(3),
    stack: z.array(z.string()),
    liveUrl: z.url(),
    coverAlt: z.string(),
    gallery: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        image: mediaName.optional(),
        alt: z.string().optional(),
      }),
    ),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
    summary: z.string(),
    achievements: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        figure: z.string(),
        thumbnail: mediaName.optional(),
        thumbnailAlt: z.string().optional(),
        link: link.optional(),
      }),
    ),
  }),
});

const sideProjects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/side-projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    text: z.string(),
    figure: z.string().optional(),
    tags: z.array(z.string()).max(5),
    // Projects without a cover file show the Aburio wordmark instead.
    cover: z.boolean().default(true),
    coverAlt: z.string().optional(),
    linkLabel: z.string().optional(),
    linkUrl: z.url().optional(),
    order: z.number(),
  }),
});

export const collections = { bicytrust, experience, "side-projects": sideProjects };
