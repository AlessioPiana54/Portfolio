// Onde e astri del footer sono animazioni CSS infinite. Il footer è quasi sempre fuori schermo:
// lì si mettono in pausa.
export function initFooterWave() {
  const wave = document.querySelector<HTMLElement>('.footer-wave');
  if (!wave || !('IntersectionObserver' in window)) return;

  new IntersectionObserver(
    ([entry]) => wave.classList.toggle('is-offscreen', !entry.isIntersecting),
    { rootMargin: '200px 0px' }
  ).observe(wave);
}
