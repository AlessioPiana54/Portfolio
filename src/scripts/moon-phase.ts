// Fase lunare reale di oggi, disegnata nel footer.
// Formula di Meeus ("Astronomical Algorithms", cap. 48): angolo di fase dalla posizione
// media di Sole e Luna più le correzioni principali dell'orbita lunare.
// Errore tipico sotto l'1% di illuminazione e qualche ora sulle fasi principali.

const J2000 = Date.UTC(2000, 0, 1, 12); // epoca J2000.0
const rad = (deg: number) => (deg * Math.PI) / 180;

const NAMES = [
  'New moon',
  'Waxing crescent',
  'First quarter',
  'Waxing gibbous',
  'Full moon',
  'Waning gibbous',
  'Last quarter',
  'Waning crescent',
];

export function moonPhase(date = new Date()) {
  const T = (date.getTime() - J2000) / 86_400_000 / 36_525; // secoli giuliani da J2000
  const D = 297.8501921 + 445267.1114034 * T; // elongazione media della Luna
  const M = 357.5291092 + 35999.0502909 * T; // anomalia media del Sole
  const Mp = 134.9633964 + 477198.8675055 * T; // anomalia media della Luna
  // Angolo di fase (gradi): 180 = luna nuova, 0 = piena.
  const i =
    180 -
    D -
    6.289 * Math.sin(rad(Mp)) +
    2.1 * Math.sin(rad(M)) -
    1.274 * Math.sin(rad(2 * D - Mp)) -
    0.658 * Math.sin(rad(2 * D)) -
    0.214 * Math.sin(rad(2 * Mp)) -
    0.11 * Math.sin(rad(D));
  // Elongazione vera 0..360 → fase 0..1 (0 = nuova, 0.5 = piena, < 0.5 crescente).
  const phase = ((((180 - i) % 360) + 360) % 360) / 360;
  const illumination = (1 + Math.cos(rad(i))) / 2;
  const name = NAMES[Math.round(phase * 8) % 8];
  return { phase, illumination, name };
}

// Path della parte illuminata in un cerchio r=10 centrato in (12,12).
export function litPath(phase: number): string {
  const k = Math.cos(2 * Math.PI * phase); // 1 = nuova, -1 = piena
  const rx = Math.abs(k) * 10;
  const waxing = phase < 0.5;
  const outerSweep = waxing ? 1 : 0;
  const innerSweep = waxing ? (k > 0 ? 0 : 1) : k > 0 ? 1 : 0;
  return `M12 2 A10 10 0 0 ${outerSweep} 12 22 A${rx.toFixed(2)} 10 0 0 ${innerSweep} 12 2 Z`;
}

export function initMoonPhase() {
  const el = document.getElementById('moonPhase');
  if (!el) return;
  const { phase, illumination, name } = moonPhase();
  el.querySelector('.moon-phase__lit')?.setAttribute('d', litPath(phase));
  const label = el.querySelector('span');
  if (label) label.textContent = `Moon tonight: ${name.toLowerCase()}, ${Math.round(illumination * 100)}%`;
  el.hidden = false;
}
