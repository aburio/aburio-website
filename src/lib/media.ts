import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/*/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

const videos = import.meta.glob<string>("/src/assets/projects/*/*.mp4", {
  eager: true,
  query: "?url",
  import: "default",
});

function find<T>(map: Record<string, T>, slug: string, name: string) {
  const prefix = `/src/assets/projects/${slug}/${name}.`;
  const key = Object.keys(map).find((path) => path.startsWith(prefix));
  return key ? map[key] : undefined;
}

export function findImage(slug: string, name: string) {
  return find(images, slug, name)?.default;
}

export function findVideo(slug: string, name: string) {
  return find(videos, slug, name);
}

export function expectedPath(slug: string, name: string) {
  return `src/assets/projects/${slug}/${name}.png`;
}
