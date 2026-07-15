// Carica un singolo partial senza bloccare gli altri in caso di errore.
async function loadPartial(url, target) {
  if (!target) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${url} responded with ${res.status}`);
    target.innerHTML = await res.text();
  } catch (err) {
    console.warn(`Could not load partial: ${url}`, err);
  }
}

// Inietta header e footer condivisi in ogni pagina.
async function includePartials() {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  await Promise.all([
    loadPartial('/partials/header.html', header),
    loadPartial('/partials/footer.html', footer),
  ]);

  document.dispatchEvent(new CustomEvent('partials:loaded'));
}

document.addEventListener('DOMContentLoaded', includePartials);
