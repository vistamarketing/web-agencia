import React from 'react';

interface CaseStudy {
  client: string;
  logo: string;
  sector: string;
  result: string;
  metric: string;
  description: string;
  tags: string[];
}

const cases: CaseStudy[] = [
  {
    client: "Tam Dental",
    logo: "/logos/tam-dental.png",
    sector: "Clínica Dental",
    result: "90% Citas Confirmadas",
    metric: "Atención 24/7",
    description: "Implementación de bot en WhatsApp para agendar, reagendar y confirmar citas automáticamente, reduciendo el ausentismo y liberando al equipo de recepción.",
    tags: ["WhatsApp Bot", "Automatización", "CRM"]
  },
  {
    client: "CM Abogadas",
    logo: "/logos/cm-abogadas.png",
    sector: "Despacho de Abogadas",
    result: "3x Más Consultas",
    metric: "Web con IA Integrada",
    description: "Diseño y desarrollo de su página web con chatbot inteligente integrado que cualifica visitantes, responde dudas legales frecuentes y agenda consultas automáticamente.",
    tags: ["Web con IA", "Chatbot", "Agendamiento"]
  },
  {
    client: "HBH Sportswear",
    logo: "/logos/hbh-sportswear.png",
    sector: "Ecommerce",
    result: "+35% Recuperación",
    metric: "ROAS x4",
    description: "Sistema de recuperación de carritos abandonados con email marketing hiper-personalizado que analiza el comportamiento de navegación para enviar ofertas únicas.",
    tags: ["Email Marketing", "IA", "Ecommerce"]
  },
  {
    client: "Tu Mente En Línea",
    logo: "/logos/tu-mente-en-linea.png",
    sector: "Psicología Online",
    result: "+40 Nuevos Pacientes/mes",
    metric: "Crecimiento Automático",
    description: "Campaña conectada a un asistente virtual que evalúa automáticamente a cada interesado y agenda la sesión de valoración gratuita sin intervención humana.",
    tags: ["Publicidad Digital", "Chatbot", "Agendamiento"]
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
              className="flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={study.logo}
                      alt={`${study.client} logo`}
                      className="max-h-8 max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{study.client}</h3>
                    <span className="text-sm text-slate-500">{study.sector}</span>
                  </div>
                </div>
                <div className="bg-white px-3 py-1 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 whitespace-nowrap ml-2">
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

        <div className="text-center mt-12">
          <a
            href="/reservar/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            Conocer más casos de éxito
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
