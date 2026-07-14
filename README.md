# Portfolio

Personal portfolio site — plain HTML/CSS/JS, no framework. Built for deployment on GitHub Pages.

## Structure

```
portfolio/
├── index.html            Home
├── projects/              Project list + single project template
├── about/                 About page
├── partials/              Shared header and footer, injected via JS
├── css/                   base.css (tokens/reset), components.css, pages/*.css
├── js/                    include-partials.js, parallax.js, footer-animations.js
└── assets/                Images and icons
```

## Local development

You need a static server (partials are loaded via `fetch`, which doesn't work from `file://`):

```bash
npx serve .
# or
python -m http.server
```

Then open `http://localhost:PORT`.

## Deploy

The site is static: just publish the folder on GitHub Pages (branch `main`, root `/`).

## Conventions

See [CONTRIBUTING.md](./CONTRIBUTING.md).
