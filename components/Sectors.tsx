import React from 'react';
import { Scissors, Activity, PawPrint, Briefcase, ShoppingBag, BookOpen, UtensilsCrossed, Wrench, Home } from 'lucide-react';
import { SectorItem } from '../types';

const sectors: SectorItem[] = [
  {
    title: "Clínicas y Centros de Estética",
    description: "Automatizamos la agenda, confirmación de citas y seguimiento post-tratamiento para centros estéticos y clínicas de medicina estética.",
    icon: Scissors,
    href: "/sectores/clinicas-y-centros-de-estetica/",
  },
  {
    title: "Wellness y Actividad Física",
    description: "Gimnasios, centros de yoga y entrenadores personales. Recordatorios de clase, fidelización automática y reactivación de miembros inactivos.",
    icon: Activity,
    href: "/sectores/wellness-y-actividad-fisica/",
  },
  {
    title: "Clínicas Veterinarias y Petcare",
    description: "Recuperación de pacientes inactivos, recordatorios de vacunación y desparasitación, y gestión de citas para clínicas veterinarias y centros de cuidado animal.",
    icon: PawPrint,
    href: "/sectores/clinicas-veterinarias-y-petcare/",
  },
  {
    title: "Servicios Profesionales",
    description: "Abogados, psicólogos y consultores. Calificación automática de nuevos contactos, onboarding de clientes y automatización documental.",
    icon: Briefcase,
    href: "/sectores/servicios-profesionales/",
  },
  {
    title: "Ecommerce",
    description: "Recuperación de carritos abandonados, email marketing personalizado con IA y soporte post-venta automatizado.",
    icon: ShoppingBag,
    href: "/sectores/ecommerce/",
  },
  {
    title: "Educación y Formación Online",
    description: "Academias, coaches y formadores. Atracción de alumnos, inscripciones automáticas y seguimiento personalizado del estudiante.",
    icon: BookOpen,
    href: "/sectores/educacion-y-formacion-online/",
  },
  {
    title: "Restaurantes y Hostelería",
    description: "Reservas automatizadas, recordatorios de visita, reactivación de clientes y gestión de reseñas con IA.",
    icon: UtensilsCrossed,
    href: "/sectores/restaurantes-y-hosteleria/",
  },
  {
    title: "Talleres y Automoción",
    description: "Gestión automática de citas para revisiones y reparaciones, recordatorios de mantenimiento periódico y reactivación de clientes sin visita reciente.",
    icon: Wrench,
    href: "/sectores/talleres-y-automocion/",
  },
  {
    title: "Inmobiliarias y Seguros",
    description: "Calificación automática de interesados, seguimiento personalizado por WhatsApp y email, y automatización de la gestión documental.",
    icon: Home,
    href: "/sectores/inmobiliarias-y-seguros/",
  },
];

export const Sectors: React.FC = () => {
  return (
    <section id="sectores" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Adaptado a tu Industria
          </h2>
          <p className="text-lg text-slate-600">
            Entendemos las necesidades específicas de cada nicho para implementar la solución exacta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <a key={idx} href={sector.href} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 block">
              <div className="mb-4 text-brand-600">
                <sector.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{sector.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
