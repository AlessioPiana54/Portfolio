// Carosello orizzontale con scroll-snap: pulsanti prev/next e frecce da tastiera.
function setupCarousel(carousel) {
  const track = carousel.querySelector('.carousel__track');
  const prevBtn = carousel.querySelector('.carousel__btn--prev');
  const nextBtn = carousel.querySelector('.carousel__btn--next');
  const item = track.querySelector('.carousel__item');
  if (!track || !item) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function scrollByItem(direction) {
    track.scrollBy({
      left: direction * item.offsetWidth,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }

  prevBtn?.addEventListener('click', () => scrollByItem(-1));
  nextBtn?.addEventListener('click', () => scrollByItem(1));

  track.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollByItem(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollByItem(-1);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(setupCarousel);
});
