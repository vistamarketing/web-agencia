import React from 'react';
import { ShoppingBag, Store, Briefcase } from 'lucide-react';
import { SectorItem } from '../types';

const sectors: SectorItem[] = [
  {
    title: "Ecommerce",
    description: "Recuperación de carritos, soporte post-venta y recomendaciones de productos personalizadas.",
    icon: ShoppingBag,
  },
  {
    title: "Negocios Físicos",
    description: "Clínicas, centros de estética y wellness. Automatizamos la agenda y confirmación de citas.",
    icon: Store,
  },
  {
    title: "Servicios Profesionales",
    description: "Abogados, psicólogos y consultores. Calificación de leads y onboarding de clientes automatizado.",
    icon: Briefcase,
  },
];

export const Sectors: React.FC = () => {
  return (
    <section id="sectores" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Adaptado a tu Industria
            </h2>
            <p className="text-lg text-slate-600">
              Entendemos las necesidades específicas de cada nicho para implementar la solución exacta.
            </p>
          </div>
          <div className="hidden md:block">
            <button className="text-brand-600 font-semibold hover:text-brand-700 transition-colors">
              Ver todas las integraciones &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="mb-4 text-slate-900">
                <sector.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};