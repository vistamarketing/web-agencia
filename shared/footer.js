(function () {
  const el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML = `
  <footer class="bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div class="mb-5"><img src="/logos/vista-logo.png" alt="Vista Consulting" class="h-8 w-auto brightness-0 invert" /></div>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">Consultora especializada en IA y automatización para negocios que quieren crecer sin ampliar su equipo.</p>
          <div class="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" class="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-500 hover:text-white transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          </div>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Servicios</h3>
          <ul class="space-y-3">
            <li><a href="/servicios/webs-con-ia/" class="text-sm text-slate-400 hover:text-white transition-colors">Webs con IA Integrada</a></li>
            <li><a href="/servicios/sistemas-de-ventas/" class="text-sm text-slate-400 hover:text-white transition-colors">Sistemas de Ventas</a></li>
            <li><a href="/servicios/atencion-al-cliente-ai/" class="text-sm text-slate-400 hover:text-white transition-colors">Atención al Cliente AI</a></li>
            <li><a href="/servicios/automatizacion-de-procesos/" class="text-sm text-slate-400 hover:text-white transition-colors">Automatización de Procesos</a></li>
            <li><a href="/servicios/programas-de-fidelizacion/" class="text-sm text-slate-400 hover:text-white transition-colors">Programas de Fidelización</a></li>
            <li><a href="/servicios/ecommerce-growth/" class="text-sm text-slate-400 hover:text-white transition-colors">Ecommerce Growth</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Empresa</h3>
          <ul class="space-y-3">
            <li><a href="/#casos" class="text-sm text-slate-400 hover:text-white transition-colors">Casos de Éxito</a></li>
            <li><a href="/#sectores" class="text-sm text-slate-400 hover:text-white transition-colors">Sectores</a></li>
            <li><a href="/#testimonios" class="text-sm text-slate-400 hover:text-white transition-colors">Testimonios</a></li>
            <li><a href="/politica-de-privacidad/" class="text-sm text-slate-400 hover:text-white transition-colors">Política de Privacidad</a></li>
            <li><a href="/terminos-de-servicio/" class="text-sm text-slate-400 hover:text-white transition-colors">Términos de Servicio</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Contacto</h3>
          <p class="text-sm text-slate-400 mb-2">¿Tienes un proyecto en mente?</p>
          <a href="mailto:hola@vistaconsulting.com" class="text-sm text-slate-300 hover:text-white transition-colors block mb-6">hola@vistaconsulting.com</a>
          <a href="/reservar/" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">Agendar Llamada<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg></a>
        </div>
      </div>
    </div>
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-sm text-slate-500">&copy; ${new Date().getFullYear()} Vista Consulting. Todos los derechos reservados.</p>
        <div class="flex gap-6 text-sm text-slate-500"><a href="/politica-de-privacidad/" class="hover:text-slate-300 transition-colors">Política de Privacidad</a><a href="/terminos-de-servicio/" class="hover:text-slate-300 transition-colors">Términos de Servicio</a></div>
      </div>
    </div>
  </footer>`;
})();
