import React from 'react';

export const Clients: React.FC = () => {
  const clients = [
    { 
      name: "The Orb", 
      logo: "/logos/the-orb.png" 
    },
    { 
      name: "Tu Mente En Línea", 
      logo: "/logos/tu-mente-en-linea.png" 
    },
    { 
      name: "Wide Knowledge", 
      logo: "/logos/wide-knowledge.png" 
    },
    { 
      name: "Hihn Leandro", 
      logo: "/logos/hihn-leandro.png" 
    },
    { 
      name: "Atenas", 
      logo: "https://ucarecdn.com/6c2d1b5a-1b5e-4903-81e0-c8e434440c49/" 
    },
    { 
      name: "CM Abogadas", 
      logo: "https://ucarecdn.com/e5f22e83-fd2b-4e11-bdc9-20165a2cc945/" 
    },
    {
      name: "Fuegos",
      logo: "/logos/fuegos.png" 
    },
    {
      name: "HBH Sportswear",
      logo: "https://ucarecdn.com/15f3366c-d227-448f-8d26-7b4476023308/" 
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-12 uppercase tracking-widest">
          Empresas innovadoras que confían en nosotros
        </p>
        
        {/* Improved Grid Layout for better alignment */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="w-full flex items-center justify-center p-4 group transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};