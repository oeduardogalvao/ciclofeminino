import { Eye, Lightbulb, Leaf } from "lucide-react";

const cards = [
  { icon: Eye, title: "Clareza sobre o seu próprio corpo", desc: "Entenda seus padrões naturais de energia e disposição ao longo do mês." },
  { icon: Lightbulb, title: "Estratégias simples de aplicar", desc: "Métodos práticos que se encaixam na sua rotina sem complicação." },
  { icon: Leaf, title: "Ferramentas naturais de apoio", desc: "Óleos essenciais como aliados do seu bem-estar e produtividade." },
];

const WhyItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-12 text-foreground">
          Por que esse método funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                <c.icon className="w-6 h-6 text-olive" />
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
