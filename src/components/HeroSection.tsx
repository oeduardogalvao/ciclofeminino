import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const bullets = [
  "Como cada fase do ciclo influencia energia e foco",
  "Como organizar tarefas conforme seu ritmo hormonal",
  "Como reduzir exaustão e autocobrança",
  "Como usar óleos essenciais para equilíbrio emocional",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container-narrow text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-sans-body">
          Imersão Online
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-foreground">
          Acabe com a culpa e a exaustão de não conseguir manter o mesmo ritmo todos os dias.
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 font-sans-body leading-relaxed">
          Descubra como cada fase do ciclo feminino afeta sua produtividade — e como usar óleos essenciais como ferramenta prática para cada momento do mês.
        </p>

        <ul className="space-y-3 mb-10 max-w-lg mx-auto text-left">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-foreground/90 font-sans-body">
              <Check className="w-5 h-5 text-olive mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <Button variant="cta" size="lg" className="px-10 py-6 text-lg" asChild>
          <a href="#oferta">Garantir minha vaga</a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
