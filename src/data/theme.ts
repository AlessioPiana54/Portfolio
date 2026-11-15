// Tema notte (luna) / giorno (sole): un'unica fonte per i valori dello script inline nel
// <head> (BaseLayout) e dell'interruttore (scripts/theme.ts).
// I colori devono restare uguali a `--bg` in styles/base.css: colorano la barra del browser.

export type Theme = 'light' | 'dark';

export const THEME_COLORS: Record<Theme, string> = { dark: '#1b1b3a', light: '#fbf3e6' };

/** Chiave in localStorage della scelta del visitatore. */
export const THEME_STORAGE_KEY = 'theme';

/** Solo per lo script del <head>: senza una scelta salvata, giorno dalle 7 alle 19. */
export const DAY_HOURS = { from: 7, to: 19 };
