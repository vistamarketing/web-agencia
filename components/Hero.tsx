import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: {
      x: number; 
      y: number; 
      vx: number; 
      vy: number; 
      size: number; 
      color: string;
      alpha: number;
    }[] = [];

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      const width = rect.width;
      const height = rect.height;

      particles = [];
      const density = 6000; // Lower density for a cleaner look
      const particleCount = Math.floor((width * height) / density);
      const maxParticles = 80;
      const finalCount = Math.min(particleCount, maxParticles);

      // Brand palette for particles
      const colorPalette = [
        { r: 131, g: 83, b: 193 },  // Vista Purple #8353C1
        { r: 155, g: 109, b: 215 }, // Vista Violet #9B6DD7
        { r: 232, g: 115, b: 74 },  // Vista Coral #E8734A
      ];

      for (let i = 0; i < finalCount; i++) {
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // Extremely subtle, slow movement
          vx: (Math.random() - 0.5) * 0.15, 
          vy: (Math.random() - 0.5) * 0.15, 
          size: Math.random() * 2 + 0.5, // 0.5px to 2.5px
          // Store color prefix for performance
          color: `rgba(${color.r}, ${color.g}, ${color.b},`,
          // Lower opacity for subtlety
          alpha: Math.random() * 0.2 + 0.05 
        });
      }
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around logic to keep particles within the section bounds
        if (p.x < -p.size) p.x = width + p.size;
        if (p.x > width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = height + p.size;
        if (p.y > height + p.size) p.y = -p.size;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Construct rgba string dynamically
        ctx.fillStyle = `${p.color}${p.alpha})`; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-20 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-coral-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Particles Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Consultora especializada en IA & Automatización
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
          Escala tu negocio con <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-coral-400">
            Sistemas Inteligentes
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Implementamos ecosistemas de IA para automatizar ventas, atención al cliente y operaciones. Elimina el trabajo manual hoy mismo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-all bg-brand-600 rounded-xl hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/20"
          >
            Agendar Llamada
            <ArrowRight size={18} />
          </a>
          <a 
            href="#casos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300"
          >
            Ver Casos de Éxito
          </a>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-100 pt-12">
          {[
            { label: 'Reducción de Costes', value: '40%+' },
            { label: 'Tiempo Ahorrado', value: '1,200h/año' },
            { label: 'Aumento de Conversión', value: '3.5x' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</span>
              <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};