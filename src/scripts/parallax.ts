// Parallax della scena hero: colline, nuvole e astro si muovono a velocità diverse.
// Gli elementi dichiarano la velocità con data-parallax (verticale) o data-parallax-x (orizzontale).
export function initParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const vertical = [...hero.querySelectorAll<HTMLElement>('[data-parallax]')];
  const horizontal = [...hero.querySelectorAll<HTMLElement>('[data-parallax-x]')];
  const orbit = hero.querySelector<HTMLElement>('.hero__orbit');
  let ticking = false;

  // Altezza letta una volta (e a ogni resize), non a ogni frame di scroll.
  let height = hero.offsetHeight;
  window.addEventListener('resize', () => (height = hero.offsetHeight), { passive: true });

  // Hero fuori schermo: nuvole, raggi e indicatore di scroll si fermano (vedi home.css).
  new IntersectionObserver(([entry]) => {
    hero.classList.toggle('is-offscreen', !entry.isIntersecting);
  }).observe(hero);

  function render() {
    ticking = false;
    const y = window.scrollY;
    if (y > height) return; // fuori schermo: niente lavoro inutile

    for (const el of vertical) el.style.translate = `0 ${y * Number(el.dataset.parallax)}px`;
    for (const el of horizontal) el.style.translate = `${y * Number(el.dataset.parallaxX)}px 0`;
    if (orbit) orbit.style.opacity = String(1 - Math.min(y / height, 1) * 0.5);
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    },
    { passive: true }
  );
}
