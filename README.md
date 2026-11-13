# abur.io

Portfolio of Arthur Burnichon, built with [Astro](https://astro.build) and the Aburio design system. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Structure

- `src/styles/aburio/`: Aburio design system, version 2 (tokens and `ab-` components, including Frame and Cta). Kept free of site dependencies so it can move to its own repository; rules in `docs/aburio.md`.
- `src/styles/global.css`: reset, layout and site-only styles.
- `src/content/projects/`: one file per project. `phase` picks the home page group, `caseStudy: true` generates `/work/<slug>/` from the file body.
- Images are looked up by file name in `src/assets/projects/<slug>/` (`cover`, then gallery names such as `signup`), so a missing one renders an empty placeholder instead of breaking the build. A project without `cover` in its front matter shows no visual at all.
- `vercel.json`: permanent redirects for removed pages and legacy URLs.

## License

MIT, see [LICENSE.md](LICENSE.md).
