import React from 'react';
import { Bot, Globe, LayoutDashboard, Workflow, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Webs con IA Integrada",
    description: "No solo diseñamos webs bonitas. Creamos activos digitales que capturan leads, entienden a tu usuario y adaptan el contenido en tiempo real.",
    icon: Globe,
    features: [
      "Chatbots entrenados con tu data",
      "Personalización de contenido dinámica",
      "SEO Técnico automatizado",
      "Lead Magnets interactivos"
    ]
  },
  {
    title: "Sistemas de Ventas",
    description: "Automatiza la prospección y el cierre. Transformamos curiosos en clientes mediante embudos inteligentes que funcionan 24/7.",
    icon: LayoutDashboard,
    features: [
      "Calificación de leads (Lead Scoring)",
      "Seguimiento por Email & WhatsApp",
      "CRM automatizado (GoHighLevel)",
      "Recuperación de carritos con IA"
    ]
  },
  {
    title: "Atención al Cliente AI",
    description: "Ofrece soporte instantáneo y humano sin aumentar tu plantilla. Resolvemos el 80% de las dudas automáticamente.",
    icon: Bot,
    features: [
      "Respuestas instantáneas 24/7",
      "Agendamiento de citas automático",
      "Integración con Gemini & Claude",
      "Escalado a humano inteligente"
    ]
  },
  {
    title: "Automatización de Procesos",
    description: "Conectamos tus herramientas (n8n) para eliminar el trabajo manual repetitivo y reducir errores operativos.",
    icon: Workflow,
    features: [
      "Sincronización de bases de datos",
      "Generación de reportes automáticos",
      "Onboarding de clientes",
      "Gestión de facturación automática"
    ]
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-600 uppercase bg-brand-50 rounded-full">
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Soluciones que escalan <br className="hidden md:block" />
            contigo y tu negocio
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Combinamos diseño premium con la ingeniería de datos más avanzada para crear sistemas que generan dinero mientras duermes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features?.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="text-brand-500 shrink-0 mt-1" size={18} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action */}
                <div className="flex items-center text-brand-600 font-semibold group/btn cursor-pointer">
                  <span className="mr-2">Saber más</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};