// Carosello orizzontale con scroll-snap: pulsanti prev/next e frecce da tastiera.
// I pulsanti si disattivano quando sei all'inizio o alla fine.
function setupCarousel(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>('.carousel__track');
  const item = track?.querySelector<HTMLElement>('.carousel__item');
  if (!track || !item) return;

  const buttons = [...root.querySelectorAll<HTMLButtonElement>('.carousel__btn')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;

  const scrollByItem = (dir: number) =>
    track.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: reduceMotion ? 'auto' : 'smooth' });

  function updateButtons() {
    const max = track!.scrollWidth - track!.clientWidth - 2;
    for (const b of buttons) {
      const dir = Number(b.dataset.dir);
      b.disabled = dir < 0 ? track!.scrollLeft <= 2 : track!.scrollLeft >= max;
    }
  }

  buttons.forEach((b) => b.addEventListener('click', () => scrollByItem(Number(b.dataset.dir))));
  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();

  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByItem(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
}

export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach(setupCarousel);
}
