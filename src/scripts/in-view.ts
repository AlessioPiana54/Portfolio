// Aggiunge `.is-in` agli elementi [data-inview] la prima volta che entrano nello schermo.
// Serve alle animazioni che devono partire una volta sola e a tempo (non legate allo scroll):
// i segni a mano e l'entrata sfalsata del carosello.

export function initInView() {
  const items = document.querySelectorAll<HTMLElement>('[data-inview]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  items.forEach((el) => io.observe(el));
}
