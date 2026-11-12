import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;
export type Phase = Project["data"]["phase"];

export const groups: { phase: Phase; id: string; title: string; intro: string }[] = [
  {
    phase: "from-scratch",
    id: "from-scratch",
    title: "Built from scratch",
    intro: "Products I took from nothing to their first customers.",
  },
  {
    phase: "scaled",
    id: "scaled",
    title: "Scaled",
    intro: "Products that already existed, and had to work at a larger size.",
  },
  {
    phase: "side",
    id: "on-the-side",
    title: "On the side",
    intro: "Things I build for others or for fun, outside my job.",
  },
];

export async function getProjects(phase?: Phase) {
  const all = await getCollection("projects", (p) => !phase || p.data.phase === phase);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function contextLine({ org, period, role }: Project["data"]) {
  return [org, period, role].filter(Boolean).join(" · ");
}

export function caseStudyUrl(project: Project) {
  return `/work/${project.id}/`;
}
