import React from 'react';

export const TechStack: React.FC = () => {
  const tools = [
    { name: "n8n", color: "text-[#ff6584]" },
    { name: "Gemini", color: "text-[#4b91f1]" },
    { name: "ChatGPT", color: "text-[#10a37f]" },
    { name: "Claude", color: "text-[#d97757]" },
    { name: "Lovable", color: "text-[#6366f1]" },
    { name: "GoHighLevel", color: "text-[#1577eb]" },
  ];

  return (
    <section className="py-10 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Potenciamos tu negocio con tecnología de punta
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale hover:grayscale-0 transition-all duration-500">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center gap-2 group cursor-default">
              <span className={`text-xl md:text-2xl font-bold ${tool.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};