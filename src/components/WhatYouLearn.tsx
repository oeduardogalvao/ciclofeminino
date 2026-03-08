import { Moon, Sun, Flower2, Snowflake } from "lucide-react";

const items = [
  { icon: Flower2, title: "Fase Folicular", desc: "Energia crescente — ideal para planejar, começar projetos e criar." },
  { icon: Sun, title: "Fase Ovulatória", desc: "Pico de energia — momento de liderar, comunicar e executar." },
  { icon: Moon, title: "Fase Lútea", desc: "Energia decrescente — hora de revisar, organizar e finalizar." },
  { icon: Snowflake, title: "Fase Menstrual", desc: "Recolhimento — tempo de descansar, refletir e renovar." },
];

const WhatYouLearn = () => {
  return (
    <section className="section-padding bg-brown-dark">
      <div className="container-wide">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-12 text-primary-foreground">
          O que você vai aprender
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-2xl p-6 hover:border-terracotta/40 transition-colors duration-300 bg-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-coral" />
              </div>
              <h3 className="font-serif text-base mb-2 text-primary-foreground">{item.title}</h3>
              <p className="text-sm text-white/60 font-sans-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
