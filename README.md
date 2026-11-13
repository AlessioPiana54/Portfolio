# Portfolio

Personal portfolio of Alessio Pianaroli, built with [Astro](https://astro.build) and published on
GitHub Pages at **https://alessiopiana54.github.io/Portfolio/**.

The whole site follows a day/night idea: the toggle in the header swaps the moon for the sun.
On the home page the moon sets behind the hills while the sun rises; the footer shows the real
moon phase of tonight.

## Local development

Requires Node 22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321/Portfolio/
npm run build     # static site in dist/
npm run preview   # serve the built site
npm run check     # type-check .astro and .ts files
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Where things live

```
src/
├── content/projects/   One Markdown file per project (text, cover, framing)
├── data/site.ts        Name, email, social links, CV
├── data/hobbies.ts     Photos for the About carousel
├── pages/              Routes: home, about, privacy, 404, projects
├── components/         Header, Footer, ThemeToggle, ProjectCard, Arrow
├── layouts/            BaseLayout (head, SEO meta, theme bootstrap)
├── styles/             base.css (tokens), components.css, per-page CSS
├── scripts/            theme, parallax, carousel, moon phase, footer wave
└── assets/             Fonts and images (optimized to WebP at build time)
public/                 Files copied as-is (favicon, og-cover, robots.txt)
```

### Add a project

1. Put the image in `src/assets/img/`.
2. Copy `src/content/projects/project-01.md`, rename it (the file name becomes the URL) and edit
   the frontmatter. `featured: true` shows it on the home page; `order` sets the position.
3. Optional: add a `gallery` list of `{ src, alt }` images.

## Conventions

See [CONTRIBUTING.md](./CONTRIBUTING.md).
