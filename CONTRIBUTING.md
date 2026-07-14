# Convenzioni di codice

- **HTML semantico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` al posto di `<div>` generici dove ha senso.
- **CSS**: metodologia BEM per le classi (`.card__title`, `.nav__links`, `.footer__grid`), niente `!important`, niente stili inline nell'HTML — tutto nei file `.css`.
- **Design tokens centralizzati**: tutti i colori, i font e gli spaziosi passano da variabili CSS in `css/base.css` (`:root { --night-deep: ...; }`), mai valori hardcoded ripetuti nei singoli file.
- **JS**: niente script inline nell'HTML, funzioni piccole e commentate solo dove la logica non è ovvia, `const`/`let` mai `var`.
- **Niente duplicazione**: nav e footer vivono in `partials/` e vengono iniettati via `include-partials.js`, non copiati e incollati in ogni pagina.
- **Accessibilità minima**: `alt` su ogni immagine, focus visibile su link/bottoni, rispetto di `prefers-reduced-motion`.
- **Commit message**: [Conventional Commits](https://www.conventionalcommits.org/) — `feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`.
