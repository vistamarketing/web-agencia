import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Webs con IA Integrada', href: '/servicios/webs-con-ia/' },
  { label: 'Sistemas de Ventas', href: '/servicios/sistemas-de-ventas/' },
  { label: 'Atención al Cliente AI', href: '/servicios/atencion-al-cliente-ai/' },
  { label: 'Automatización de Procesos', href: '/servicios/automatizacion-de-procesos/' },
  { label: 'Programas de Fidelización', href: '/servicios/programas-de-fidelizacion/' },
  { label: 'Ecommerce Growth', href: '/servicios/ecommerce-growth/' },
];

const sectores = [
  { label: 'Clínicas y Centros de Estética', href: '/sectores/clinicas-y-centros-de-estetica/' },
  { label: 'Wellness y Actividad Física', href: '/sectores/wellness-y-actividad-fisica/' },
  { label: 'Clínicas Veterinarias y Petcare', href: '/sectores/clinicas-veterinarias-y-petcare/' },
  { label: 'Servicios Profesionales', href: '/sectores/servicios-profesionales/' },
  { label: 'Ecommerce', href: '/sectores/ecommerce/' },
  { label: 'Educación y Formación Online', href: '/sectores/educacion-y-formacion-online/' },
  { label: 'Restaurantes y Hostelería', href: '/sectores/restaurantes-y-hosteleria/' },
  { label: 'Turismo y Viajes', href: '/sectores/turismo-y-viajes/' },
  { label: 'Clínicas Dentales', href: '/sectores/clinicas-dentales/' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSectoresOpen, setIsSectoresOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSectoresOpen, setIsMobileSectoresOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-600 text-white p-1.5 rounded-lg">
            <Compass size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Vista Consulting
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Servicios dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              Servicios
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-10">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 w-64">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sectores dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSectoresOpen(true)}
            onMouseLeave={() => setIsSectoresOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              Sectores
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isSectoresOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isSectoresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-10">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 w-72">
                  {sectores.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a href="#casos" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
            Casos de Éxito
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300"
          >
            Acceso Clientes
          </a>
          <a
            href="/reservar/"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-brand-600 rounded-xl hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5"
          >
            Agendar Llamada
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {/* Servicios accordion */}
            <button
              className="flex items-center justify-between w-full text-base font-medium text-slate-700 hover:text-brand-600 py-1"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Servicios
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isMobileServicesOpen && (
              <div className="pl-4 pb-1">
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block text-sm text-slate-600 hover:text-brand-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}

            {/* Sectores accordion */}
            <button
              className="flex items-center justify-between w-full text-base font-medium text-slate-700 hover:text-brand-600 py-1"
              onClick={() => setIsMobileSectoresOpen(!isMobileSectoresOpen)}
            >
              Sectores
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileSectoresOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isMobileSectoresOpen && (
              <div className="pl-4 pb-1">
                {sectores.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="block text-sm text-slate-600 hover:text-brand-600 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
            <a
              href="#casos"
              className="text-base font-medium text-slate-700 hover:text-brand-600 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Casos de Éxito
            </a>
            <a
              href="#"
              className="mt-2 w-full text-center px-5 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Acceso Clientes
            </a>
            <a
              href="/reservar/"
              className="w-full text-center px-5 py-3 text-sm font-semibold text-white bg-brand-600 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Llamada
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
