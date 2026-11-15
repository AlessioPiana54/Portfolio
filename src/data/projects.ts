// Accesso ai progetti (src/content/projects/): le pagine chiedono "i progetti" o "quelli in
// evidenza" senza sapere come sono salvati né in che ordine vanno mostrati.
import { getImage } from 'astro:assets';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

const byOrder = (a: Project, b: Project) => a.data.order - b.data.order;

/** Tutti i progetti, nell'ordine scelto nel frontmatter (`order`). */
export async function getProjects(): Promise<Project[]> {
  return (await getCollection('projects')).sort(byOrder);
}

/**
 * Copertina della card, ottimizzata in WebP. È usata come sfondo CSS (per tenere l'inquadratura
 * scelta a mano), quindi non passa da <Image>: la ottimizziamo qui, una volta per tutti.
 */
export async function getCoverUrl(project: Project): Promise<string> {
  return (await getImage({ src: project.data.cover, width: 1200, format: 'webp' })).src;
}

/** I progetti con `featured: true`, per la home (che ne mostra tre). */
export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.featured).slice(0, limit);
}
