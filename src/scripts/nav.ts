// Sfondo alla nav quando la pagina scorre.
export function initNav() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}
