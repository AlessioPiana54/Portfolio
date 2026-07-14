// Inietta header e footer condivisi in ogni pagina.
async function includePartials() {
  const slots = document.querySelectorAll('[data-include]');
  for (const slot of slots) {
    const path = slot.getAttribute('data-include');
    const res = await fetch(path);
    slot.innerHTML = await res.text();
  }
}

document.addEventListener('DOMContentLoaded', includePartials);
