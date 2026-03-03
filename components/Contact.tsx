import React from 'react';
import { Calendar, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          ¿Listo para automatizar tu negocio?
        </h2>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Agenda una sesión estratégica gratuita de 30 minutos. Analizamos tus procesos y te mostramos dónde la IA puede ahorrarte tiempo y hacer crecer tu negocio.
        </p>

        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-600/20 rounded-lg text-brand-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sesión de Estrategia</h4>
                  <p className="text-slate-400 text-sm">30 Minutos · Google Meet · Sin coste</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-600/20 rounded-lg text-brand-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email Directo</h4>
                  <p className="text-slate-400 text-sm">hola@vistaconsulting.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/reservar/"
                className="w-full py-4 px-6 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-center"
              >
                Agendar Llamada
              </a>
              <p className="text-xs text-slate-500">
                Sin compromiso de compra. Solo valor real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
