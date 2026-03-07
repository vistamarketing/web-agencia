(function () {
  const el = document.getElementById('site-header');
  if (!el) return;

  el.innerHTML = `
  <header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <a href="/">
        <img src="/logos/vista-logo.png" alt="Vista Consulting" class="h-14 w-auto" />
      </a>
      <nav class="hidden md:flex items-center gap-8">
        <div class="relative group">
          <button class="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
            Servicios
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="transition-transform duration-200 group-hover:rotate-180"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:block z-10">
            <div class="bg-white rounded-xl shadow-xl border border-slate-100 p-3 w-64">
              <a href="/servicios/webs-con-ia/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Webs con IA Integrada</a>
              <a href="/servicios/sistemas-de-ventas/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Sistemas de Ventas</a>
              <a href="/servicios/atencion-al-cliente-ai/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Atención al Cliente AI</a>
              <a href="/servicios/automatizacion-de-procesos/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Automatización de Procesos</a>
              <a href="/servicios/programas-de-fidelizacion/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Programas de Fidelización</a>
              <a href="/servicios/ecommerce-growth/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Ecommerce Growth</a>
            </div>
          </div>
        </div>
        <div class="relative group">
          <button class="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
            Sectores
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="transition-transform duration-200 group-hover:rotate-180"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:block z-10">
            <div class="bg-white rounded-xl shadow-xl border border-slate-100 p-3 w-72">
              <a href="/sectores/clinicas-y-centros-de-estetica/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Clínicas y Centros de Estética</a>
              <a href="/sectores/wellness-y-actividad-fisica/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Wellness y Actividad Física</a>
              <a href="/sectores/clinicas-veterinarias-y-petcare/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Clínicas Veterinarias y Petcare</a>
              <a href="/sectores/servicios-profesionales/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Servicios Profesionales</a>
              <a href="/sectores/ecommerce/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Ecommerce</a>
              <a href="/sectores/educacion-y-formacion-online/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Educación y Formación Online</a>
              <a href="/sectores/restaurantes-y-hosteleria/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Restaurantes y Hostelería</a>
              <a href="/sectores/turismo-y-viajes/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Turismo y Viajes</a>
              <a href="/sectores/clinicas-dentales/" class="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Clínicas Dentales</a>
            </div>
          </div>
        </div>
        <a href="/#casos" class="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Casos de Éxito</a>
      </nav>
      <div class="hidden md:flex items-center gap-3">
        <a href="#" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300">Acceso Clientes</a>
        <a href="/reservar/" class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-brand-600 rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5">Agendar Llamada</a>
      </div>
      <button id="burger-btn" class="md:hidden p-2 text-slate-600">
        <svg id="icon-menu" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <svg id="icon-close" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="hidden"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 shadow-xl">
      <nav class="flex flex-col gap-2">
        <button id="mobile-services-btn" class="flex items-center justify-between w-full text-base font-medium text-slate-700 hover:text-brand-600 py-1">
          Servicios
          <svg id="services-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="transition-transform duration-200"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
        </button>
        <div id="mobile-services-list" class="hidden pl-4 pb-1">
          <a href="/servicios/webs-con-ia/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Webs con IA Integrada</a>
          <a href="/servicios/sistemas-de-ventas/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Sistemas de Ventas</a>
          <a href="/servicios/atencion-al-cliente-ai/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Atención al Cliente AI</a>
          <a href="/servicios/automatizacion-de-procesos/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Automatización de Procesos</a>
          <a href="/servicios/programas-de-fidelizacion/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Programas de Fidelización</a>
          <a href="/servicios/ecommerce-growth/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Ecommerce Growth</a>
        </div>
        <button id="mobile-sectores-btn" class="flex items-center justify-between w-full text-base font-medium text-slate-700 hover:text-brand-600 py-1">
          Sectores
          <svg id="sectores-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="transition-transform duration-200"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
        </button>
        <div id="mobile-sectores-list" class="hidden pl-4 pb-1">
          <a href="/sectores/clinicas-y-centros-de-estetica/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Clínicas y Centros de Estética</a>
          <a href="/sectores/wellness-y-actividad-fisica/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Wellness y Actividad Física</a>
          <a href="/sectores/clinicas-veterinarias-y-petcare/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Clínicas Veterinarias y Petcare</a>
          <a href="/sectores/servicios-profesionales/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Servicios Profesionales</a>
          <a href="/sectores/ecommerce/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Ecommerce</a>
          <a href="/sectores/educacion-y-formacion-online/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Educación y Formación Online</a>
          <a href="/sectores/restaurantes-y-hosteleria/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Restaurantes y Hostelería</a>
          <a href="/sectores/turismo-y-viajes/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Turismo y Viajes</a>
          <a href="/sectores/clinicas-dentales/" class="block text-sm text-slate-600 hover:text-brand-600 py-1">Clínicas Dentales</a>
        </div>
        <a href="/#casos" class="text-base font-medium text-slate-700 hover:text-brand-600 py-1">Casos de Éxito</a>
        <a href="#" class="mt-2 w-full text-center px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg">Acceso Clientes</a>
        <a href="/reservar/" class="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-brand-600 rounded-lg">Agendar Llamada</a>
      </nav>
    </div>
  </header>`;

  // Glassmorphism on scroll
  const h = document.getElementById('main-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) { h.classList.remove('py-6'); h.classList.add('py-4'); }
    else { h.classList.remove('py-4'); h.classList.add('py-6'); }
  });

  // Mobile menu toggle
  const bb = document.getElementById('burger-btn');
  const mm = document.getElementById('mobile-menu');
  const im = document.getElementById('icon-menu');
  const ic = document.getElementById('icon-close');
  bb.addEventListener('click', function () {
    const o = !mm.classList.contains('hidden');
    mm.classList.toggle('hidden', o);
    im.classList.toggle('hidden', !o);
    ic.classList.toggle('hidden', o);
  });

  // Mobile services accordion
  const msb = document.getElementById('mobile-services-btn');
  const msl = document.getElementById('mobile-services-list');
  const sc = document.getElementById('services-chevron');
  msb.addEventListener('click', function () {
    const isOpen = !msl.classList.contains('hidden');
    msl.classList.toggle('hidden', isOpen);
    sc.style.transform = isOpen ? '' : 'rotate(180deg)';
  });

  // Mobile sectores accordion
  const mseb = document.getElementById('mobile-sectores-btn');
  const msel = document.getElementById('mobile-sectores-list');
  const sec = document.getElementById('sectores-chevron');
  mseb.addEventListener('click', function () {
    const isOpen = !msel.classList.contains('hidden');
    msel.classList.toggle('hidden', isOpen);
    sec.style.transform = isOpen ? '' : 'rotate(180deg)';
  });
})();
