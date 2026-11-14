// Foto per il carosello "Hobbies & side projects" nella pagina About.
//
// Per aggiungere una foto:
//   1. mettila in src/assets/img/hobbies/ (jpg, png o webp)
//   2. importala qui sotto e aggiungi una voce con `image`, `title` e `alt`.
//
//   import climbing from '../assets/img/hobbies/climbing.jpg';
//   { title: 'Climbing', image: climbing, alt: 'Me on a climbing wall' },
//
// Se la lista è vuota, la pagina mostra sei riquadri illustrati con le fasi lunari.
import type { ImageMetadata } from 'astro';
import anime from '../assets/img/hobbies/anime.png';
import drawing from '../assets/img/hobbies/drawing.png';
import cats from '../assets/img/hobbies/cats.png';
import stars from '../assets/img/hobbies/stars.png';
import football from '../assets/img/hobbies/football.png';
import games from '../assets/img/hobbies/games.png';

export interface Hobby {
  title: string;
  image: ImageMetadata;
  alt: string;
}

// Illustrazioni originali disegnate per il sito (stesso stile delle copertine dei progetti).
export const hobbies: Hobby[] = [
  {
    title: 'Anime',
    image: anime,
    alt: 'A pirate ship inspired by One Piece: skull-and-crossbones flag and sail, sailing a night sea under a full moon toward a palm island with a glowing treasure chest.',
  },
  {
    title: 'Drawing',
    image: drawing,
    alt: 'An open spiral sketchbook with pencil sketches of a sun, rolling hills and a sun-and-moon yin-yang, a pencil resting on the page.',
  },
  {
    title: 'Cats',
    image: cats,
    alt: 'A black cat sleeping curled up on a lavender cushion next to a pink ball of yarn.',
  },
  {
    title: 'Stargazing',
    image: stars,
    alt: 'A telescope on a dark hill pointing at a glowing constellation, with the Milky Way and a shooting star.',
  },
  {
    title: 'Football',
    image: football,
    alt: 'A football rolling across striped grass in front of a white goal on a sunny day.',
  },
  {
    title: 'Video games',
    image: games,
    alt: 'A white game controller under three pixel hearts and a glowing pixel star.',
  },
];
