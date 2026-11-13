// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pubblicato su GitHub Pages come "project site": https://alessiopiana54.github.io/Portfolio/
// Se un giorno colleghi un dominio personalizzato, imposta `site` al dominio e `base` a '/'.
export default defineConfig({
  site: 'https://alessiopiana54.github.io',
  base: '/Portfolio',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    // Inlinea i CSS piccoli: meno richieste al primo caricamento.
    inlineStylesheets: 'auto',
  },
});
