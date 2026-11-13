// Dati condivisi del sito: modifica qui nome, email e link social.
// I link con `href` vuoto non vengono mostrati, così non pubblichi link morti.

export const site = {
  name: 'Alessio Pianaroli',
  title: 'Alessio Pianaroli — Portfolio',
  description:
    'Portfolio of Alessio Pianaroli: full stack web development, design and illustration.',
  email: 'alessiopianaroli.it@gmail.com',
  // Metti il PDF in /public (es. public/cv.pdf) e scrivi qui 'cv.pdf'.
  cv: '',
};

export const socials: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/AlessioPiana54' },
  { label: 'LinkedIn', href: '' },
  { label: 'Instagram', href: '' },
  { label: 'Behance', href: '' },
];

export const visibleSocials = socials.filter((s) => s.href);

export const nav = [
  { label: 'Home', path: '' },
  { label: 'Projects', path: 'projects/' },
  { label: 'About', path: 'about/' },
];
