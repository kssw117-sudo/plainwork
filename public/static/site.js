(function () {
  // Показать почту по клику на иконку (адрес берётся из атрибута data-email)
  document.querySelectorAll('[data-email]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var mail = btn.getAttribute('data-email');
      var a = document.createElement('a');
      a.href = 'mailto:' + mail;
      a.className = 'reveal-email';
      a.textContent = mail;
      btn.replaceWith(a);
    });
  });

  // Кнопка помощи со звуком
  var helpBtn = document.getElementById('help-btn');
  var helpPop = document.getElementById('help-pop');
  function pop(opening) {
    try {
      var ctx = new (window.AudioContext || window.webkitAudioContext)();
      var osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(opening ? 520 : 380, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(opening ? 780 : 260, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  }
  if (helpBtn && helpPop) {
    helpBtn.addEventListener('click', function () {
      var open = !helpPop.classList.contains('open');
      pop(open);
      helpPop.classList.toggle('open', open);
      helpBtn.textContent = open ? '✕' : '?';
    });
  }

  // Карта (только если на странице есть #map), грузится, когда до неё доскроллили
  var mapEl = document.getElementById('map');
  if (mapEl) {
    var started = false;
    function startMap() {
      if (started) return; started = true;
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.css';
      document.head.appendChild(link);
      var s = document.createElement('script');
      s.src = 'https://unpkg.com/maplibre-gl@5/dist/maplibre-gl.js';
      s.onload = function () {
        var map = new window.maplibregl.Map({
          container: mapEl,
          style: 'https://tiles.openfreemap.org/styles/liberty',
          center: [-35, 15], zoom: 3.3, attributionControl: false,
        });
        map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), 'top-right');
        map.addControl(new window.maplibregl.AttributionControl({ compact: true }));
      };
      document.body.appendChild(s);
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { startMap(); io.disconnect(); } }, { rootMargin: '400px' });
      io.observe(mapEl);
    } else { startMap(); }
  }
})();
