import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import daiHero from "@/assets/dai-hero.png";

const bullets = [
  "Como cada fase do ciclo influencia energia e foco",
  "Como organizar tarefas conforme seu ritmo hormonal",
  "Como reduzir exaustão e autocobrança",
  "Como usar óleos essenciais para equilíbrio emocional",
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${daiHero})` }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsl(15 40% 10% / 0.95) 0%, hsl(15 40% 12% / 0.88) 30%, hsl(15 40% 14% / 0.6) 55%, hsl(15 40% 14% / 0.3) 75%, transparent 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, hsl(15 40% 10% / 0.8) 0%, transparent 25%)",
        }}
      />

      {/* Top bar with event name and date */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
        <p className="text-sm md:text-base font-sans-body tracking-wide text-white/90 font-bold">
          ✦ Imersão Ciclos Femininos & Produtividade
        </p>
        <div className="flex items-center gap-2 text-sm md:text-base text-white/80 font-sans-body">
          <Calendar className="w-4 h-4" />
          <span>23 de Março</span>
        </div>
      </div>

      {/* Content - left aligned */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4 font-sans-body">
            Imersão Online
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-4 text-white">
            Acabe com a culpa e a exaustão de não conseguir manter o mesmo ritmo todos os dias.
          </h1>

          <p className="text-sm md:text-base text-white/70 max-w-md mb-6 font-sans-body leading-relaxed">
            Descubra como cada fase do ciclo feminino afeta sua produtividade — e como usar óleos essenciais como ferramenta prática para cada momento do mês.
          </p>

          <ul className="space-y-2 mb-6 text-left">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-white/85 font-sans-body text-sm">
                <Check className="w-4 h-4 text-coral mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
            <Button variant="cta" size="lg" className="px-8 py-5 text-base" asChild>
              <a href="#oferta">Garantir minha vaga</a>
            </Button>
            <div className="text-white/60 font-sans-body text-sm">
              <span className="line-through mr-2">R$49,90</span>
              <span className="text-white font-bold text-lg">R$19,90</span>
            </div>
          </div>

          {/* Lot bar inline */}
          <div className="max-w-sm">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-coral to-gold rounded-full transition-all duration-1000"
                style={{ width: "23%" }}
              />
            </div>
            <p className="text-xs text-white/50 mt-1.5 font-sans-body">
              🔥 Lote 1 — 23% das vagas já preenchidas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
