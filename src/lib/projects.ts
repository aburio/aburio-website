import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

const phaseRank = { "from-scratch": 0, scaled: 1, side: 2 } as const;

async function sorted(filter: (p: Project) => boolean) {
  const all = await getCollection("projects", filter);
  return all.sort(
    (a, b) =>
      phaseRank[a.data.phase] - phaseRank[b.data.phase] || a.data.order - b.data.order,
  );
}

// Work keeps the from-scratch projects first, then the scaled ones.
export const getWork = () => sorted((p) => p.data.phase !== "side");
export const getSide = () => sorted((p) => p.data.phase === "side");

export function contextLine({ org, period, role }: Project["data"]) {
  return [org, period, role].filter(Boolean).join(" · ");
}

export function caseStudyUrl(project: Project) {
  return `/work/${project.id}/`;
}

// Case studies are short plain prose under "## " headings; splitting the source
// lets the page lay each part out in two columns, which rendered Markdown cannot.
export function caseStudyParts(body = "") {
  return body
    .split(/^## /m)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [title, ...rest] = part.split("\n");
      return {
        title: title.trim(),
        paragraphs: rest.join("\n").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean),
      };
    });
}
