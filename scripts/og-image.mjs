// Renders public/og.png (1200 × 630) from the Aburio tokens and the site fonts.
// Run with `node scripts/og-image.mjs` after changing the name, title or tagline.
// Needs Playwright with Chromium; it is not a project dependency so installs stay light.
import { chromium } from "playwright";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root));
const fontUrl = async (path) =>
  `data:font/woff2;base64,${(await read(path)).toString("base64")}`;

// Node cannot import TypeScript without a loader, so read the strings from the source.
const siteSource = (await read("src/lib/site.ts")).toString();
const pick = (key) => siteSource.match(new RegExp(`${key}: "([^"]+)"`))[1];
const site = { name: pick("name"), jobTitle: pick("jobTitle"), tagline: pick("tagline") };

const tokens = (await read("src/styles/aburio/tokens.css")).toString();
const components = (await read("src/styles/aburio/components.css")).toString();
const hanken = await fontUrl(
  "node_modules/@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2",
);

const html = `<!doctype html><html data-theme="light"><head><meta charset="utf-8"><style>
@font-face{font-family:"Hanken Grotesk";font-weight:300 700;src:url(${hanken}) format("woff2")}
${tokens}
${components}
*{box-sizing:border-box}
body{margin:0;width:1200px;height:630px;background:var(--page);color:var(--text);font-family:var(--font-sans)}
.frame{display:flex;flex-direction:column;justify-content:space-between;height:100%;padding:72px 88px}
.ab-section{font-size:36px;border-bottom:0;padding:0;margin:0}
h1{margin:0;font-size:88px;line-height:1.05;font-weight:700;letter-spacing:-0.02em}
.title{margin:16px 0 0;font-size:40px;font-weight:300;color:var(--text-muted)}
.tagline{margin:0;padding-top:32px;border-top:1px solid var(--divider);font-size:32px;font-weight:500}
</style></head><body><div class="frame">
<p class="ab-section"><span>abur.io</span></p>
<div><h1>${site.name}</h1><p class="title">${site.jobTitle}</p></div>
<p class="tagline">${site.tagline}</p>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
const png = await page.screenshot({ type: "png" });
await browser.close();
await writeFile(fileURLToPath(new URL("public/og.png", root)), png);
console.log("Wrote public/og.png");
