// L'onda del footer cambia forma lentamente (Web Animations API sulla proprietà CSS `d`).
export function initFooterWave() {
  const path = document.getElementById('footerWavePath');
  if (!path?.animate) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const shapes = [
    'M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z',
    'M0,50 C240,10 480,90 720,50 C960,10 1200,90 1440,50 L1440,100 L0,100 Z',
    'M0,30 C240,70 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z',
  ];

  let animation: Animation;
  try {
    animation = path.animate(
      shapes.map((d) => ({ d: `path("${d}")` })),
      { duration: 9000, easing: 'ease-in-out', iterations: Infinity, direction: 'alternate' }
    );
  } catch {
    // Browser senza supporto all'animazione di `d` (Safari): l'onda resta ferma.
    return;
  }

  // Animare `d` costa (gira sul main thread e ridipinge): la si ferma quando l'onda non si vede.
  const wave = path.closest('svg') ?? path;
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) animation.play();
    else animation.pause();
  }).observe(wave);
}
