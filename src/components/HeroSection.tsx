import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import daiHero from "@/assets/dai-hero.png";

const bullets = [
  "Como cada fase do ciclo influencia energia e foco",
  "Como organizar tarefas conforme seu ritmo hormonal",
  "Como reduzir exaustão e autocobrança",
  "Como usar óleos essenciais para equilíbrio emocional",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${daiHero})` }}
      />

      {/* Blur gradient overlay from left to right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--background) / 0.95) 0%, hsl(var(--background) / 0.85) 35%, hsl(var(--background) / 0.5) 55%, transparent 75%)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          maskImage: "linear-gradient(to right, black 0%, black 40%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black 40%, transparent 70%)",
        }}
      />

      {/* Shadow gradient for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--foreground) / 0.15) 0%, transparent 50%), linear-gradient(to top, hsl(var(--background) / 0.6) 0%, transparent 30%)",
        }}
      />

      {/* Content - left aligned */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 font-sans-body">
            Imersão Online
          </p>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-foreground">
            Acabe com a culpa e a exaustão de não conseguir manter o mesmo ritmo todos os dias.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 font-sans-body leading-relaxed">
            Descubra como cada fase do ciclo feminino afeta sua produtividade — e como usar óleos essenciais como ferramenta prática para cada momento do mês.
          </p>

          <ul className="space-y-3 mb-8 max-w-lg text-left">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-foreground/90 font-sans-body">
                <Check className="w-5 h-5 text-olive mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Lot bar inline */}
          <div className="mb-8 max-w-md">
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-2 font-sans-body">
              🔥 Lote 1 quase esgotando
            </p>
            <div className="w-full h-3 bg-nude rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-coral rounded-full transition-all duration-1000"
                style={{ width: "23%" }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1.5 font-sans-body">
              23% das vagas já preenchidas
            </p>
          </div>

          <Button variant="cta" size="lg" className="px-10 py-6 text-lg" asChild>
            <a href="#oferta">Garantir minha vaga</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
