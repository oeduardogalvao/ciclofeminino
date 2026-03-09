import { Moon, Sun, Flower2, Snowflake, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const phases = [
  { icon: Flower2, title: "Fase Folicular", desc: "Energia crescente — ideal para planejar, começar projetos e criar." },
  { icon: Sun, title: "Fase Ovulatória", desc: "Pico de energia — momento de liderar, comunicar e executar." },
  { icon: Moon, title: "Fase Lútea", desc: "Energia decrescente — hora de revisar, organizar e finalizar." },
  { icon: Snowflake, title: "Fase Menstrual", desc: "Recolhimento — tempo de descansar, refletir e renovar." },
];

const tags = [
  "Organizar sua rotina respeitando sua energia",
  "Usar óleos essenciais em cada fase do ciclo",
  "Planejar trabalho, descanso e autocuidado",
  "Identificar seus padrões naturais de energia",
  "Reduzir culpa, exaustão e sobrecarga",
  "Ter mais clareza mental e foco no dia a dia",
];

const WhatYouLearn = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding bg-brown-dark transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-wide">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-4 text-primary-foreground">
          O que você vai aprender
        </h2>

        <p className="text-center text-sm md:text-base text-white/60 font-sans-body leading-relaxed max-w-2xl mx-auto mb-12">
          Conheça e aprenda a identificar cada fase do seu ciclo — e como ajustar sua rotina, energia e foco em cada momento do mês.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, i) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-2xl p-6 hover:border-terracotta/40 transition-all duration-500 bg-white/5"
              style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)" }}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-coral" />
              </div>
              <h3 className="font-serif text-base mb-2 text-primary-foreground">{item.title}</h3>
              <p className="text-sm text-white/60 font-sans-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Subtítulo */}
        <h3 className="text-lg md:text-2xl font-serif text-center text-primary-foreground mt-16 mb-8">
          Além disso, você vai aprender na prática:
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 font-sans-body transition-all duration-500"
              style={{ transitionDelay: visible ? `${600 + i * 80}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-coral shrink-0" />
              {tag}
            </span>
          ))}
        </div>

        {/* Reforço de transformação */}
        <p className="text-center text-sm text-coral/80 font-sans-body mt-10 tracking-wide">
          Resultado: mais equilíbrio, produtividade e leveza ao longo do mês.
        </p>
      </div>
    </section>
  );
};

export default WhatYouLearn;
