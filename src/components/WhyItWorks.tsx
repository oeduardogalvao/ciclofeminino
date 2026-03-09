import { Eye, Lightbulb, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    icon: Eye,
    title: "Clareza sobre o seu próprio corpo",
    desc: <>Entenda seus <strong className="font-semibold text-foreground">padrões naturais</strong> de energia e disposição ao longo do mês.</>,
  },
  {
    icon: Lightbulb,
    title: "Estratégias simples de aplicar",
    desc: <>Métodos práticos que <strong className="font-semibold text-foreground">encaixam na sua rotina</strong> sem complicação.</>,
  },
  {
    icon: Leaf,
    title: "Ferramentas naturais de apoio",
    desc: <>Óleos essenciais como <strong className="font-semibold text-foreground">aliados do seu bem-estar</strong> e produtividade.</>,
  },
];

const WhyItWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-wide">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-12 text-foreground">
          Por que esse método funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
            >
              <div className="w-14 h-14 rounded-full bg-coral/20 flex items-center justify-center mx-auto mb-5">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-3 text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-sans-body leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
