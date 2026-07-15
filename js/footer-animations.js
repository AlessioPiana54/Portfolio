// Ciclo delle fasi lunari nel footer (le stelle animano via CSS).
function initFooterAnimations() {
  const phaseDots = document.querySelectorAll('#moonPhase span');
  if (!phaseDots.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  let active = phaseDots.length - 1;
  setInterval(() => {
    phaseDots[active].classList.remove('is-active');
    active = (active + 1) % phaseDots.length;
    phaseDots[active].classList.add('is-active');
  }, 1400);
}

// Morphing dell'onda del footer tra tre forme, via Web Animations API.
function initFooterWave() {
  const path = document.getElementById('footerWavePath');
  if (!path || !path.animate) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const shapes = [
    'M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z',
    'M0,50 C240,10 480,90 720,50 C960,10 1200,90 1440,50 L1440,100 L0,100 Z',
    'M0,30 C240,70 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z',
  ];

  // La proprietà CSS "d" richiede la sintassi path("...."), non la stringa nuda.
  path.animate(
    shapes.map((d) => ({ d: `path("${d}")` })),
    { duration: 9000, easing: 'ease-in-out', iterations: Infinity, direction: 'alternate' }
  );
}

document.addEventListener('partials:loaded', initFooterAnimations);
document.addEventListener('partials:loaded', initFooterWave);
