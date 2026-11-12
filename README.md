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
- `src/content/bicytrust/`: the current work section and the `/work/bicytrust/` page.
- `src/content/experience/`: one file per company, newest first by `order`.
- `src/content/side-projects/`: one file per side project card.
- Images are looked up by file name, so a missing one renders an empty placeholder instead of breaking the build:
  - `src/assets/work/bicytrust/`: `cover`, `signup`, `reseller`, `client`
  - `src/assets/side-projects/<slug>/cover`
  - `src/assets/experience/<company>/<thumbnail>`
- `vercel.json`: permanent redirects for removed pages and legacy URLs.

## License

MIT, see [LICENSE.md](LICENSE.md).
