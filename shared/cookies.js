(function () {
  var STORAGE_KEY = 'vista_cookie_consent';
  var el = document.getElementById('cookie-banner');
  if (!el) return;

  // Check if consent already given
  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved && !window.__openCookieSettings) {
    return;
  }

  var analyticsOn = false;
  var marketingOn = false;
  var showSettings = false;

  function render(forceShow) {
    if (!forceShow && saved) { el.innerHTML = ''; return; }

    el.innerHTML = '\
    <div id="cb-overlay" class="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity ' + (showSettings ? '' : 'hidden') + '"></div>\
    <div id="cb-banner" class="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">\
      <div class="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-6">\
        <!-- Main banner -->\
        <div id="cb-main" class="' + (showSettings ? 'hidden' : '') + '">\
          <div class="flex flex-col md:flex-row md:items-center gap-4">\
            <div class="flex-1">\
              <h3 class="text-base font-semibold text-slate-900 mb-1">Utilizamos cookies</h3>\
              <p class="text-sm text-slate-600">Usamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Puedes elegir qué cookies aceptar. <a href="/politica-de-privacidad/" class="text-brand-600 hover:text-brand-700 underline">Más información</a></p>\
            </div>\
            <div class="flex flex-col sm:flex-row gap-2 sm:flex-shrink-0">\
              <button id="cb-settings-btn" class="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">Configurar</button>\
              <button id="cb-reject-btn" class="px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">Rechazar opcionales</button>\
              <button id="cb-accept-btn" class="px-4 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">Aceptar todas</button>\
            </div>\
          </div>\
        </div>\
        <!-- Settings panel -->\
        <div id="cb-settings" class="' + (showSettings ? '' : 'hidden') + '">\
          <div class="flex items-center justify-between mb-4">\
            <h3 class="text-base font-semibold text-slate-900">Configurar cookies</h3>\
            <button id="cb-back-btn" class="text-sm text-slate-500 hover:text-slate-700 transition-colors">&larr; Volver</button>\
          </div>\
          <div class="space-y-4 mb-6">\
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl">\
              <div>\
                <h4 class="text-sm font-semibold text-slate-900">Necesarias</h4>\
                <p class="text-xs text-slate-500 mt-0.5">Imprescindibles para el funcionamiento del sitio web.</p>\
              </div>\
              <div class="relative">\
                <div class="w-10 h-6 bg-brand-500 rounded-full opacity-60 cursor-not-allowed"></div>\
                <div class="absolute top-0.5 left-4.5 w-5 h-5 bg-white rounded-full shadow cursor-not-allowed" style="left:18px"></div>\
              </div>\
            </div>\
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl">\
              <div>\
                <h4 class="text-sm font-semibold text-slate-900">Analíticas</h4>\
                <p class="text-xs text-slate-500 mt-0.5">Nos ayudan a entender cómo usas el sitio para mejorarlo.</p>\
              </div>\
              <button id="cb-toggle-analytics" class="relative w-10 h-6 rounded-full transition-colors ' + (analyticsOn ? 'bg-brand-500' : 'bg-slate-300') + '">\
                <span class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ' + (analyticsOn ? 'translate-x-4' : 'translate-x-0.5') + '"></span>\
              </button>\
            </div>\
            <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl">\
              <div>\
                <h4 class="text-sm font-semibold text-slate-900">Marketing</h4>\
                <p class="text-xs text-slate-500 mt-0.5">Permiten mostrar anuncios y contenido relevante para ti.</p>\
              </div>\
              <button id="cb-toggle-marketing" class="relative w-10 h-6 rounded-full transition-colors ' + (marketingOn ? 'bg-brand-500' : 'bg-slate-300') + '">\
                <span class="absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ' + (marketingOn ? 'translate-x-4' : 'translate-x-0.5') + '"></span>\
              </button>\
            </div>\
          </div>\
          <button id="cb-save-btn" class="w-full py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">Guardar preferencias</button>\
        </div>\
      </div>\
    </div>';

    // Bind events
    var acceptBtn = document.getElementById('cb-accept-btn');
    var rejectBtn = document.getElementById('cb-reject-btn');
    var settingsBtn = document.getElementById('cb-settings-btn');
    var backBtn = document.getElementById('cb-back-btn');
    var saveBtn = document.getElementById('cb-save-btn');
    var toggleAnalytics = document.getElementById('cb-toggle-analytics');
    var toggleMarketing = document.getElementById('cb-toggle-marketing');
    var overlay = document.getElementById('cb-overlay');

    if (acceptBtn) acceptBtn.addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: true, marketing: true });
    });

    if (rejectBtn) rejectBtn.addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: false, marketing: false });
    });

    if (settingsBtn) settingsBtn.addEventListener('click', function () {
      showSettings = true;
      render(true);
    });

    if (backBtn) backBtn.addEventListener('click', function () {
      showSettings = false;
      render(true);
    });

    if (overlay) overlay.addEventListener('click', function () {
      showSettings = false;
      render(true);
    });

    if (toggleAnalytics) toggleAnalytics.addEventListener('click', function () {
      analyticsOn = !analyticsOn;
      render(true);
    });

    if (toggleMarketing) toggleMarketing.addEventListener('click', function () {
      marketingOn = !marketingOn;
      render(true);
    });

    if (saveBtn) saveBtn.addEventListener('click', function () {
      saveConsent({ necessary: true, analytics: analyticsOn, marketing: marketingOn });
    });
  }

  function saveConsent(prefs) {
    var data = {
      necessary: prefs.necessary,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    saved = JSON.stringify(data);
    showSettings = false;
    el.innerHTML = '';
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: data }));
  }

  // Global function to re-open settings from footer
  window.openCookieSettings = function () {
    saved = null;
    // Load existing preferences into toggles
    var existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      try {
        var parsed = JSON.parse(existing);
        analyticsOn = parsed.analytics || false;
        marketingOn = parsed.marketing || false;
      } catch (e) {}
    }
    showSettings = true;
    render(true);
  };

  render(false);
})();
