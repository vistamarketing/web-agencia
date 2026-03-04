import React from 'react';

export const Clients: React.FC = () => {
  interface Client {
    name: string;
    logo: string;
    className?: string;
  }

  const clients: Client[] = [
    {
      name: "Silver Peaks",
      logo: "/logos/silver-peaks.png"
    },
    {
      name: "Hihn Leandro Wildlife",
      logo: "/logos/hihn-leandro.png",
      className: "!max-h-14"
    },
    {
      name: "Tam Dental",
      logo: "/logos/tam-dental.png"
    },
    {
      name: "CM Abogadas",
      logo: "/logos/cm-abogadas.png"
    },
    {
      name: "The Orb",
      logo: "/logos/the-orb.png",
      className: "!max-h-14"
    },
    {
      name: "Tu Mente En Línea",
      logo: "/logos/tu-mente-en-linea.png"
    },
    {
      name: "Atom Capital",
      logo: "/logos/atom-capital.png",
      className: "!max-h-[8rem]"
    },
    {
      name: "HBH Sportswear",
      logo: "/logos/hbh-sportswear.png",
      className: "!max-h-[84px]"
    },
    {
      name: "Atenas",
      logo: "/logos/atenas.png",
      className: "!max-h-14"
    },
    {
      name: "Wide Knowledge",
      logo: "/logos/wide-knowledge.png",
      className: "!max-h-14"
    },
    {
      name: "Fuegos",
      logo: "/logos/fuegos.png",
      className: "!max-h-14"
    },
    {
      name: "Kusta Barber",
      logo: "/logos/kusta-barber.png",
      className: "!max-h-[8rem]"
    },
    {
      name: "Grozni",
      logo: "/logos/grozni.jpg",
      className: "!max-h-[8rem]"
    },
    {
      name: "Trimurti Yoga Studio",
      logo: "/logos/trimurti-yoga-studio.jpg",
      className: "!max-h-[18rem]"
    },
    {
      name: "Mood Brunch",
      logo: "/logos/mood-brunch.png"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-12 uppercase tracking-widest">
          Empresas innovadoras que confían en nosotros
        </p>

        {/* Improved Grid Layout for better alignment */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="w-full h-20 flex items-center justify-center group transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={`max-h-10 w-auto max-w-[140px] object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${client.className || ''}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};