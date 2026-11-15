// Carosello a nastro continuo: lo scorrimento è un'animazione CSS (vedi about.css).
// Qui ci sono il pulsante pausa, la pausa fuori schermo e, con "riduci movimento" (niente
// nastro, si scorre a mano), il focus da tastiera sulla fila di card.
import { bindPauseToggle, pauseWhenOffscreen, prefersReducedMotion } from './lib/motion';

function setupCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>('.carousel__viewport');
  if (viewport) {
    pauseWhenOffscreen(viewport);
    if (prefersReducedMotion().matches) viewport.tabIndex = 0;
  }

  const toggle = root.querySelector<HTMLButtonElement>('[data-marquee-toggle]');
  if (toggle) bindPauseToggle(toggle, (paused) => root.classList.toggle('is-paused', paused));
}

export function initCarousels() {
  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach(setupCarousel);
}
