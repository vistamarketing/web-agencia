import React from 'react';
import { Bot, Globe, LayoutDashboard, Workflow, CheckCircle2, ArrowRight, Gift, TrendingUp } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Webs con IA Integrada",
    description: "No solo diseñamos webs bonitas. Creamos activos digitales que atraen clientes, entienden a tu usuario y adaptan el contenido en tiempo real.",
    icon: Globe,
    href: "/servicios/webs-con-ia/",
    features: [
      "Chatbots entrenados con tu información",
      "Personalización de contenido dinámica",
      "SEO Técnico automatizado",
      "Recursos de alto valor interactivos"
    ]
  },
  {
    title: "Sistemas de Ventas",
    description: "Automatiza la prospección y el cierre. Transformamos curiosos en clientes mediante embudos inteligentes que funcionan 24/7.",
    icon: LayoutDashboard,
    href: "/servicios/sistemas-de-ventas/",
    features: [
      "Calificación automática de contactos",
      "Seguimiento por Email & WhatsApp",
      "CRM automatizado",
      "Recuperación de carritos con IA"
    ]
  },
  {
    title: "Atención al Cliente AI",
    description: "Ofrece soporte instantáneo y humano sin aumentar tu plantilla. Resolvemos el 80% de las dudas automáticamente.",
    icon: Bot,
    href: "/servicios/atencion-al-cliente-ai/",
    features: [
      "Respuestas instantáneas 24/7",
      "Agendamiento de citas automático",
      "Modelos de IA avanzados integrados",
      "Escalado a humano inteligente"
    ]
  },
  {
    title: "Automatización de Procesos",
    description: "Conectamos tus herramientas para eliminar el trabajo manual repetitivo y reducir errores operativos.",
    icon: Workflow,
    href: "/servicios/automatizacion-de-procesos/",
    features: [
      "Sincronización de bases de datos",
      "Generación de reportes automáticos",
      "Onboarding de clientes",
      "Gestión de facturación automática"
    ]
  },
  {
    title: "Programas de Fidelización",
    description: "Convierte clientes puntuales en clientes de por vida. Diseñamos sistemas automatizados que mantienen tu marca presente y aumentan el valor medio por cliente.",
    icon: Gift,
    href: "/servicios/programas-de-fidelizacion/",
    features: [
      "Flujos de reactivación de clientes inactivos",
      "Campañas de aniversario y cumpleaños",
      "Encuestas NPS y seguimiento de satisfacción",
      "Programas de referidos automatizados"
    ]
  },
  {
    title: "Ecommerce Growth",
    description: "Maximizamos el rendimiento de tu tienda online con sistemas inteligentes que aumentan la conversión, el ticket medio y la repetición de compra.",
    icon: TrendingUp,
    href: "/servicios/ecommerce-growth/",
    features: [
      "Recuperación de carritos abandonados",
      "Email marketing hiper-personalizado",
      "Upselling y cross-selling automático",
      "Análisis de comportamiento de compra"
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
              className="group relative bg-white rounded-xl border border-slate-100 p-8 md:p-10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Content */}
                <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                  <service.icon size={22} strokeWidth={1.5} className="text-brand-600 shrink-0" />
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
                <a href={service.href ?? '#servicios'} className="flex items-center text-brand-600 font-semibold group/btn">
                  <span className="mr-2">Saber más</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
