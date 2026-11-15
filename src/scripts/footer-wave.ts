// Onde e stelle del footer sono animazioni CSS infinite. Il footer è quasi sempre fuori
// schermo: lì si mettono in pausa.
import { pauseWhenOffscreen } from './lib/motion';

export function initFooterWave() {
  const wave = document.querySelector('.footer-wave');
  if (wave) pauseWhenOffscreen(wave, { rootMargin: '200px 0px' });
}
