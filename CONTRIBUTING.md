# Code conventions

- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` instead of generic `<div>`s where it makes sense.
- **CSS**: BEM class names (`.card__title`, `.nav__links`), no `!important` outside the reduced-motion reset. Styles live in `src/styles/`; small page-only styles may sit in a scoped `<style>` block.
- **Inline styles**: only to pass data to CSS as custom properties (e.g. a card's `--cover` image and framing from the Markdown frontmatter). Never for visual values written by hand.
- **Design tokens**: all colors, fonts and spacing go through the semantic variables in `src/styles/base.css` (`--bg`, `--text`, `--accent`…). Each token has a night value (`:root`) and a day value (`html[data-theme='light']`).
- **Links**: always build internal URLs with `url()` from `src/utils/url.ts`, so they keep working under the `/Portfolio/` base path.
- **JS**: TypeScript modules in `src/scripts/`, imported from a component's `<script>`. Only the theme bootstrap in `BaseLayout` is inline, because it must run before the first paint.
- **Accessibility**: `alt` on every image, visible focus, keyboard support, respect `prefers-reduced-motion`.
- **Commit messages**: [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`.
