// Tema notte (luna) / giorno (sole).
// Lo stato iniziale è già applicato dallo script inline nel <head> per evitare flash;
// qui si gestisce il cambio con una rivelazione circolare che parte dal pulsante.

type Theme = 'light' | 'dark';

const THEME_COLORS: Record<Theme, string> = { dark: '#1b1b3a', light: '#fbf3e6' };

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage bloccato (navigazione privata): il tema vale solo per questa pagina.
  }
}

function syncButton(button: HTMLButtonElement) {
  button.setAttribute('aria-pressed', String(currentTheme() === 'light'));
}

export function initThemeToggle() {
  const button = document.getElementById('themeToggle') as HTMLButtonElement | null;
  if (!button) return;
  syncButton(button);

  button.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'light' ? 'dark' : 'light';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!document.startViewTransition || reduceMotion) {
      applyTheme(next);
      syncButton(button);
      return;
    }

    // Cerchio che si allarga dal centro del pulsante fino all'angolo più lontano.
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    const root = document.documentElement;
    root.classList.add('theme-switching');
    const transition = document.startViewTransition(() => {
      applyTheme(next);
      syncButton(button);
    });

    // Stessa curva del resto del sito: il token --ease-out in base.css.
    const easing = getComputedStyle(root).getPropertyValue('--ease-out').trim() || 'ease-out';

    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 700, easing, pseudoElement: '::view-transition-new(root)' }
      );
    });
    transition.finished.finally(() => root.classList.remove('theme-switching'));
  });
}
