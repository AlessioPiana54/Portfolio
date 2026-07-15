// Toggle tema chiaro/scuro: il pulsante vive nell'header condiviso, iniettato
// via fetch, quindi si aggancia a partials:loaded invece che a DOMContentLoaded.
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const celestialWord = document.getElementById('celestialWord');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    toggle.setAttribute(
      'aria-label',
      theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
    );
    if (celestialWord) {
      celestialWord.textContent = theme === 'light' ? 'the sun' : 'the moon';
    }
  }

  // Sincronizza label/parola col tema già applicato da theme-init.js.
  applyTheme(document.documentElement.getAttribute('data-theme') || 'dark');

  toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
}

document.addEventListener('partials:loaded', initThemeToggle);
