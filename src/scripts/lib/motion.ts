// Aiuti condivisi dagli script animati: preferenza "riduci movimento" e visibilità a schermo.

/** La media query "riduci movimento": `.matches` per leggerla, `change` per seguirla. */
export function prefersReducedMotion(): MediaQueryList {
  return window.matchMedia('(prefers-reduced-motion: reduce)');
}

/**
 * Chiama `callback(true/false)` quando `el` entra o esce dallo schermo.
 * Senza IntersectionObserver non chiama mai: l'elemento resta considerato visibile.
 */
export function onVisibilityChange(
  el: Element,
  callback: (visible: boolean) => void,
  options?: IntersectionObserverInit,
): void {
  if (!('IntersectionObserver' in window)) return;
  new IntersectionObserver((entries) => callback(entries.some((e) => e.isIntersecting)), options).observe(el);
}

/**
 * Mette `.is-offscreen` su `el` quando non si vede: il CSS ci appende la pausa delle
 * animazioni infinite (onde del footer, nastro del carosello, nuvole dell'hero…).
 */
export function pauseWhenOffscreen(el: Element, options?: IntersectionObserverInit): void {
  onVisibilityChange(el, (visible) => el.classList.toggle('is-offscreen', !visible), options);
}

/**
 * Pulsante pausa: tiene lo stato e `aria-pressed` (premuto = in pausa); `onChange` aggiorna
 * la pagina. L'etichetta resta "Pause …": cambiarla in "Play …" insieme ad aria-pressed
 * farebbe annunciare "Play, premuto", che si contraddice. Usato dal carosello e dal gatto.
 */
export function bindPauseToggle(button: HTMLButtonElement, onChange: (paused: boolean) => void): void {
  let paused = false;
  button.addEventListener('click', () => {
    paused = !paused;
    button.setAttribute('aria-pressed', String(paused));
    onChange(paused);
  });
}
