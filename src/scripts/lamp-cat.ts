// Scena del gatto nella pagina About. Due compiti separati:
// - playback: ferma la scena quando non si vede (fuori schermo o scheda in background), quando
//   chi legge preme pausa e con "riduci movimento". Le animazioni CSS si fermano con una classe;
//   la coda è un <animate> SVG, che si ferma solo con pauseAnimations(). Con "riduci movimento"
//   la coda resta ferma nella posa di riposo.
// - pet: cliccando la scena il gatto risponde con un fumetto sopra la testa.
import { bindPauseToggle, onVisibilityChange, prefersReducedMotion } from './lib/motion';
import { currentTheme } from './theme';

const NIGHT_LINES = ['meow!', 'mrrp?', 'that moth is mine', 'purrr…'];
const DAY_LINES = ['five more minutes…', '…mrrm?', 'not now', '*yawn*'];

export function initLampCat() {
  const scene = document.getElementById('lampCat');
  if (!scene) return;
  initPlayback(scene);
  initPet(scene);
}

function initPlayback(scene: HTMLElement) {
  const svg = scene.querySelector<SVGSVGElement>('.lamp-cat__pet > svg');
  const pauseButton = scene.querySelector<HTMLButtonElement>('.lamp-cat__pause');
  const reduce = prefersReducedMotion();
  let onScreen = true;
  let userPaused = false;

  const render = () => {
    const hidden = !onScreen || document.hidden;
    scene.classList.toggle('is-paused', hidden);
    scene.classList.toggle('is-user-paused', userPaused);
    if (!svg) return;
    if (hidden || userPaused || reduce.matches) svg.pauseAnimations();
    else svg.unpauseAnimations();
    if (reduce.matches) svg.setCurrentTime(0);
  };

  onVisibilityChange(scene, (visible) => {
    onScreen = visible;
    render();
  });

  if (pauseButton) {
    bindPauseToggle(pauseButton, (paused) => {
      userPaused = paused;
      render();
    });
  }

  document.addEventListener('visibilitychange', render);
  reduce.addEventListener('change', render);
  render();
}

function initPet(scene: HTMLElement) {
  const button = scene.querySelector<HTMLButtonElement>('.lamp-cat__pet');
  const bubble = scene.querySelector<HTMLElement>('.lamp-cat__bubble');
  if (!button || !bubble) return;

  const reduce = prefersReducedMotion();
  let count = 0;
  let pop: Animation | undefined;

  button.addEventListener('click', () => {
    const day = currentTheme() === 'light';
    const head = scene.querySelector(day ? '.sleeper__head' : '.cat__head');
    if (!head) return;

    placeAbove(bubble, head, scene);
    const lines = day ? DAY_LINES : NIGHT_LINES;
    bubble.textContent = lines[count++ % lines.length];

    // Entra in fretta, resta il tempo di leggerlo, esce piano. Cliccando di nuovo riparte.
    pop?.cancel();
    scene.classList.add('is-talking');
    pop = popBubble(bubble, reduce.matches);
    pop.finished.then(() => scene.classList.remove('is-talking'), () => {});
  });
}

// Sopra la testa, nel punto in cui si trova adesso (anche a metà salto).
function placeAbove(bubble: HTMLElement, head: Element, scene: HTMLElement) {
  const box = scene.getBoundingClientRect();
  const h = head.getBoundingClientRect();
  bubble.style.setProperty('--x', `${h.left + h.width / 2 - box.left}px`);
  bubble.style.setProperty('--y', `${h.top - box.top - 10}px`);
}

function popBubble(bubble: HTMLElement, reduced: boolean): Animation {
  const lift = reduced ? '0px' : '6px';
  const from = reduced ? 'scale(1)' : 'scale(0.85)';
  return bubble.animate(
    [
      { opacity: 0, transform: `translateY(${lift}) ${from}`, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      { opacity: 1, transform: 'none', offset: 0.13 },
      { opacity: 1, transform: 'none', offset: 0.86, easing: 'ease-in' },
      { opacity: 0, transform: `translateY(-${lift})` },
    ],
    { duration: 1900 },
  );
}
