// Inietta header e footer condivisi in ogni pagina.
async function includePartials() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  const [headerHtml, footerHtml] = await Promise.all([
    fetch('/partials/header.html').then((res) => res.text()),
    fetch('/partials/footer.html').then((res) => res.text()),
  ]);

  if (header) header.innerHTML = headerHtml;
  if (footer) footer.innerHTML = footerHtml;

  document.dispatchEvent(new CustomEvent('partials:loaded'));
}

document.addEventListener('DOMContentLoaded', includePartials);
