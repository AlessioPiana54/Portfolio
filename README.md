# Portfolio

Sito portfolio personale — HTML/CSS/JS puro, nessun framework. Pensato per il deploy su GitHub Pages.

## Struttura

```
portfolio/
├── index.html            Home
├── progetti/              Elenco progetti + template singolo progetto
├── chi-sono/              Pagina Chi sono
├── partials/              Header e footer condivisi, iniettati via JS
├── css/                   base.css (token/reset), components.css, pages/*.css
├── js/                    include-partials.js, parallax.js, footer-animations.js
└── assets/                Immagini e icone
```

## Sviluppo in locale

Serve un server statico (i partial vengono caricati via `fetch`, che non funziona da `file://`):

```bash
npx serve .
# oppure
python -m http.server
```

Poi apri `http://localhost:PORT`.

## Deploy

Il sito è statico: basta pubblicare la cartella su GitHub Pages (branch `main`, root `/`).

## Convenzioni

Vedi [CONTRIBUTING.md](./CONTRIBUTING.md).
