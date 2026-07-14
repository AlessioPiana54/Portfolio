// Effetto parallax per la scena hero (colline, nuvole, luna).
function initParallax() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  const hill1 = document.getElementById('hill1');
  const hill2 = document.getElementById('hill2');
  const hill3 = document.getElementById('hill3');
  const moon = document.getElementById('moon');
  const cloud1 = document.getElementById('cloud1');
  const cloud2 = document.getElementById('cloud2');
  const cloud3 = document.getElementById('cloud3');

  function onScroll() {
    const y = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const progress = Math.min(y / heroHeight, 1);

    hill1.style.transform = `translateY(${y * 0.15}px)`;
    hill2.style.transform = `translateY(${y * 0.28}px)`;
    hill3.style.transform = `translateY(${y * 0.42}px)`;
    cloud1.style.transform = `translateX(${y * 0.25}px)`;
    cloud2.style.transform = `translateX(${-y * 0.18}px)`;
    cloud3.style.transform = `translateX(${y * 0.1}px)`;
    moon.style.transform = `translateY(${y * 0.2}px)`;
    moon.style.opacity = String(1 - progress * 0.5);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', initParallax);
