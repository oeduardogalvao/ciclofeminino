import { Moon, Sun, Flower2, Snowflake } from "lucide-react";
import SectionCTA from "@/components/SectionCTA";

const items = [
  { icon: Flower2, title: "Fase Folicular", desc: "Energia crescente — ideal para planejar, começar projetos e criar." },
  { icon: Sun, title: "Fase Ovulatória", desc: "Pico de energia — momento de liderar, comunicar e executar." },
  { icon: Moon, title: "Fase Lútea", desc: "Energia decrescente — hora de revisar, organizar e finalizar." },
  { icon: Snowflake, title: "Fase Menstrual", desc: "Recolhimento — tempo de descansar, refletir e renovar." },
];

const WhatYouLearn = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-12 text-foreground">
          O que você vai aprender
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-2xl p-6 hover:border-terracotta/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-terracotta" />
              </div>
              <h3 className="font-serif text-base mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-sans-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <SectionCTA text="Quero garantir minha vaga" />
      </div>
    </section>
  );
};

export default WhatYouLearn;
