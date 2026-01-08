import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sectores', href: '#sectores' },
    { name: 'Casos de Éxito', href: '#casos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-600 text-white p-1.5 rounded-lg">
            <Sparkles size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            NovaScale
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#contacto"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
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
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base font-medium text-slate-700 hover:text-brand-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contacto"
              className="mt-2 w-full text-center px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg"
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