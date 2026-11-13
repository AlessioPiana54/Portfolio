// Foto per il carosello "Hobbies & side projects" nella pagina About.
//
// Per aggiungere una foto:
//   1. mettila in src/assets/img/hobbies/ (jpg, png o webp)
//   2. importala qui sotto e aggiungi una voce con `image`, `title` e `alt`.
//
//   import climbing from '../assets/img/hobbies/climbing.jpg';
//   { title: 'Climbing', image: climbing, alt: 'Me on a climbing wall' },
//
// Finché la lista è vuota, la pagina mostra sei riquadri illustrati con le fasi lunari.
import type { ImageMetadata } from 'astro';

export interface Hobby {
  title: string;
  image: ImageMetadata;
  alt: string;
}

export const hobbies: Hobby[] = [];
