import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Implementar el sistema de citas automático ha liberado completamente a mi equipo de recepción. Ahora se enfocan en la atención al paciente, no en el teléfono.",
    author: "Dra. Elena Ruiz",
    role: "Directora Médica",
    company: "VitalDental"
  },
  {
    quote: "El sistema de recuperación de carritos con IA superó todas nuestras expectativas. El retorno de inversión fue positivo desde la primera semana de implementación.",
    author: "Marc Soler",
    role: "CEO",
    company: "Moda Urbana"
  },
  {
    quote: "La automatización de documentos legales redujo nuestros tiempos de entrega a la mitad. Una ventaja competitiva brutal en nuestro sector.",
    author: "Carlos García",
    role: "Socio",
    company: "García & Asoc."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Resultados tangibles y transformación real para negocios que apuestan por la innovación.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col justify-between p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
              <div>
                <Quote className="text-brand-600 mb-6 opacity-30" size={32} />
                <p className="text-lg font-medium text-slate-800 mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-tight">{t.author}</h4>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};