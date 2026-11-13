// Costruisce un URL interno rispettando il `base` di Astro (/Portfolio/ su GitHub Pages).
// Esempio: url('projects/') -> '/Portfolio/projects/'
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

// Confronta il percorso corrente con una voce di menu (Home attiva solo sulla home).
export function isActive(current: string, path: string): boolean {
  const target = url(path);
  const here = current.endsWith('/') ? current : `${current}/`;
  if (path === '') return here === target;
  return here.startsWith(target);
}
