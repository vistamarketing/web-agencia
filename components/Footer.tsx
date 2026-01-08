import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="bg-slate-100 text-slate-900 p-1.5 rounded-lg">
            <Sparkles size={16} />
          </div>
          <span className="font-bold text-slate-900 text-lg">NovaScale</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-brand-600 transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-brand-600 transition-colors">Términos de Servicio</a>
          <a href="#" className="hover:text-brand-600 transition-colors">LinkedIn</a>
        </div>

        <div className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} NovaScale AI Agency.
        </div>
      </div>
    </footer>
  );
};