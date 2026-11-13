import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ogni progetto è un file Markdown in src/content/projects/.
// Il nome del file diventa l'URL: soup.md -> /projects/soup/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.string(),
      year: z.number().int(),
      summary: z.string(),
      // Ordine di apparizione (1 = primo).
      order: z.number().int(),
      cover: image(),
      coverAlt: z.string(),
      // Inquadratura dell'immagine nella card (valori CSS di background-size / -position).
      coverSize: z.string().default('cover'),
      coverPosition: z.string().default('center'),
      // In evidenza nella home.
      featured: z.boolean().default(false),
      // Il mio ruolo nel progetto (utile per i lavori di gruppo o i fork).
      role: z.string().optional(),
      // Tecnologie principali, mostrate come etichette.
      stack: z.array(z.string()).default([]),
      // Link esterni: repository, demo, documentazione.
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

export const collections = { projects };
