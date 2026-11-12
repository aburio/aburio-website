# abur.io

Portfolio of Arthur Burnichon, built with [Astro](https://astro.build) and the Aburio design system. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Structure

- `src/styles/aburio/`: Aburio design system (tokens and `ab-` components). Kept free of site dependencies so it can move to its own repository. Do not edit it for site needs; see `docs/aburio.md`.
- `src/styles/global.css`: reset, layout and site-only styles.
- `src/content/work/`: one case study per Markdown file.
- `src/content/side-projects/`: short side project entries.
- `src/assets/work/<slug>/`: screenshots, looked up by file name (`cover`, `signup`, `before`...). A missing file renders an empty placeholder instead of breaking the build.

## License

MIT, see [LICENSE.md](LICENSE.md).
