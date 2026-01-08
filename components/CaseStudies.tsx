import React from 'react';
import { CaseStudyItem } from '../types';
import { TrendingUp, Clock, Users } from 'lucide-react';

const cases: CaseStudyItem[] = [
  {
    client: "Dental Premium",
    sector: "Clínica Dental",
    result: "90% Citas Confirmadas",
    metric: "Atención 24/7",
    description: "Implementación de bot en WhatsApp para agendar, reagendar y confirmar citas automáticamente, reduciendo el ausentismo.",
    tags: ["GoHighLevel", "n8n"]
  },
  {
    client: "Moda Urbana",
    sector: "Ecommerce",
    result: "+35% Recuperación",
    metric: "ROAS x4",
    description: "Sistema de email marketing hiper-personalizado que analiza comportamiento de navegación para enviar ofertas únicas.",
    tags: ["Klaviyo", "Gemini"]
  },
  {
    client: "García & Asoc.",
    sector: "Estudio de Abogados",
    result: "15h Ahorro/Semana",
    metric: "Automatización Documental",
    description: "Automatización de redacción de contratos y triaje de nuevos clientes potenciales mediante formularios inteligentes.",
    tags: ["n8n", "ChatGPT"]
  },
  {
    client: "Harmony Wellness",
    sector: "Centro de Wellness",
    result: "+50 Nuevos Leads/mes",
    metric: "Captación Automática",
    description: "Campaña de Ads conectada a un asistente virtual que califica y agenda la sesión de valoración gratuita.",
    tags: ["Facebook Ads", "Lovable"]
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="casos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Resultados Reales</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">
            Casos de Éxito
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((study, idx) => (
            <div 
              key={idx} 
              className="flex flex-col p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                  <span className="text-sm text-slate-500">{study.sector}</span>
                </div>
                <div className="bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700">
                  {study.metric}
                </div>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold text-brand-600 mb-2">{study.result}</p>
                <p className="text-slate-600 leading-relaxed">{study.description}</p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-200/50 text-slate-600 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};