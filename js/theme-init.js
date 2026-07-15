// Applica subito il tema salvato, prima che la pagina finisca di renderizzare,
// per evitare un flash del tema sbagliato. Va caricato in <head>, prima dei CSS.
(function () {
  var stored = localStorage.getItem('theme');
  var theme = stored === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
})();
