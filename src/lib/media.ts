import type { ImageMetadata } from "astro";

type Folder = "work" | "experience" | "side-projects";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/{work,experience,side-projects}/*/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

const videos = import.meta.glob<string>("/src/assets/{work,experience,side-projects}/*/*.mp4", {
  eager: true,
  query: "?url",
  import: "default",
});

function find<T>(map: Record<string, T>, folder: Folder, slug: string, name: string) {
  const prefix = `/src/assets/${folder}/${slug}/${name}.`;
  const key = Object.keys(map).find((path) => path.startsWith(prefix));
  return key ? map[key] : undefined;
}

export function findImage(folder: Folder, slug: string, name: string) {
  return find(images, folder, slug, name)?.default;
}

export function findVideo(folder: Folder, slug: string, name: string) {
  return find(videos, folder, slug, name);
}

export function expectedPath(folder: Folder, slug: string, name: string) {
  return `src/assets/${folder}/${slug}/${name}.png`;
}
