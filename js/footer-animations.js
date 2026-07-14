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

document.addEventListener('partials:loaded', initFooterAnimations);
