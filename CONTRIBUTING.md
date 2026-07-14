# Code conventions

- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` instead of generic `<div>`s where it makes sense.
- **CSS**: BEM methodology for class names (`.card__title`, `.nav__links`, `.footer__grid`), no `!important`, no inline styles in HTML — everything lives in `.css` files.
- **Centralized design tokens**: all colors, fonts, and spacing go through CSS variables in `css/base.css` (`:root { --night-deep: ...; }`), never hardcoded values repeated across files.
- **JS**: no inline scripts in HTML, small functions commented only where the logic isn't obvious, `const`/`let` never `var`.
- **No duplication**: nav and footer live in `partials/` and get injected via `include-partials.js`, not copy-pasted into every page.
- **Minimal accessibility**: `alt` on every image, visible focus on links/buttons, respect `prefers-reduced-motion`.
- **Commit messages**: [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`.
