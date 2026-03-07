import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  { label: 'Webs con IA Integrada', href: '/servicios/webs-con-ia/' },
  { label: 'Sistemas de Ventas', href: '/servicios/sistemas-de-ventas/' },
  { label: 'Atención al Cliente AI', href: '/servicios/atencion-al-cliente-ai/' },
  { label: 'Automatización de Procesos', href: '/servicios/automatizacion-de-procesos/' },
  { label: 'Programas de Fidelización', href: '/servicios/programas-de-fidelizacion/' },
  { label: 'Ecommerce Growth', href: '/servicios/ecommerce-growth/' },
];

const company = [
  { label: 'Casos de Éxito', href: '/#casos' },
  { label: 'Sectores', href: '/#sectores' },
  { label: 'Testimonios', href: '/#testimonios' },
  { label: 'Política de Privacidad', href: '/politica-de-privacidad/' },
  { label: 'Términos de Servicio', href: '/terminos-de-servicio/' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-5">
              <img src="/logos/vista-logo.png" alt="Vista Consulting" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Consultora especializada en IA y automatización para negocios que quieren crecer sin ampliar su equipo.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-500 hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Servicios</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-sm text-slate-400 hover:text-white transition-colors">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Empresa</h3>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <a href={c.href} className="text-sm text-slate-400 hover:text-white transition-colors">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">Contacto</h3>
            <p className="text-sm text-slate-400 mb-2">¿Tienes un proyecto en mente?</p>
            <a href="mailto:hola@vistaconsulting.com" className="text-sm text-slate-300 hover:text-white transition-colors block mb-6">
              hola@vistaconsulting.com
            </a>
            <a href="/reservar/" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-colors">
              Agendar Llamada
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Vista Consulting. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="/politica-de-privacidad/" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
            <a href="/terminos-de-servicio/" className="hover:text-slate-300 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
