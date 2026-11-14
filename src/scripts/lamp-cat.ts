// Ferma la scena del gatto quando non si vede (fuori schermo o scheda in background) e quando
// chi legge preme il pulsante pausa. Le animazioni CSS si fermano con una classe; la coda è
// un <animate> SVG, che si ferma solo con pauseAnimations(). Con "riduci movimento" la coda
// resta ferma nella posa di riposo.
// Cliccando la scena il gatto risponde con un fumetto sopra la testa.

const NIGHT_LINES = ['meow!', 'mrrp?', 'that moth is mine', 'purrr…'];
const DAY_LINES = ['five more minutes…', '…mrrm?', 'not now', '*yawn*'];

export function initLampCat() {
  const scene = document.getElementById('lampCat');
  if (!scene) return;
  const svg = scene.querySelector<SVGSVGElement>('.lamp-cat__pet > svg');
  const pauseButton = scene.querySelector<HTMLButtonElement>('.lamp-cat__pause');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  let onScreen = true;
  let userPaused = false;

  const update = () => {
    const stopped = !onScreen || document.hidden || userPaused || reduce.matches;
    scene.classList.toggle('is-paused', !onScreen || document.hidden);
    scene.classList.toggle('is-user-paused', userPaused);
    if (!svg) return;
    if (stopped) svg.pauseAnimations();
    else svg.unpauseAnimations();
    if (reduce.matches) svg.setCurrentTime(0);
  };

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      onScreen = entries.some((e) => e.isIntersecting);
      update();
    }).observe(scene);
  }

  pauseButton?.addEventListener('click', () => {
    userPaused = !userPaused;
    pauseButton.setAttribute('aria-pressed', String(userPaused));
    pauseButton.setAttribute('aria-label', userPaused ? 'Play the animation' : 'Pause the animation');
    update();
  });

  document.addEventListener('visibilitychange', update);
  reduce.addEventListener('change', update);
  update();

  initPet(scene);
}

function initPet(scene: HTMLElement) {
  const button = scene.querySelector<HTMLButtonElement>('.lamp-cat__pet');
  const bubble = scene.querySelector<HTMLElement>('.lamp-cat__bubble');
  if (!button || !bubble) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let count = 0;
  let pop: Animation | undefined;

  button.addEventListener('click', () => {
    const day = document.documentElement.dataset.theme === 'light';
    const head = scene.querySelector(day ? '.sleeper__head' : '.cat__head');
    if (!head) return;

    // Sopra la testa, nel punto in cui si trova adesso (anche a metà salto).
    const box = scene.getBoundingClientRect();
    const h = head.getBoundingClientRect();
    bubble.style.setProperty('--x', `${h.left + h.width / 2 - box.left}px`);
    bubble.style.setProperty('--y', `${h.top - box.top - 10}px`);

    const lines = day ? DAY_LINES : NIGHT_LINES;
    bubble.textContent = lines[count++ % lines.length];

    // Entra in fretta, resta il tempo di leggerlo, esce piano. Cliccando di nuovo riparte.
    pop?.cancel();
    scene.classList.add('is-talking');
    const lift = reduce.matches ? '0px' : '6px';
    const from = reduce.matches ? 'scale(1)' : 'scale(0.85)';
    pop = bubble.animate(
      [
        { opacity: 0, transform: `translateY(${lift}) ${from}`, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
        { opacity: 1, transform: 'none', offset: 0.13 },
        { opacity: 1, transform: 'none', offset: 0.86, easing: 'ease-in' },
        { opacity: 0, transform: `translateY(-${lift})` },
      ],
      { duration: 1900 },
    );
    pop.finished.then(() => scene.classList.remove('is-talking'), () => {});
  });
}
