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
    <section className="relative overflow-hidden">
      {/* ===== DESKTOP: original layout ===== */}
      <div className="hidden md:flex relative h-screen items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${daiHero})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(300 40% 10% / 0.95) 0%, hsl(300 35% 14% / 0.88) 25%, hsl(300 30% 18% / 0.55) 45%, transparent 66%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, hsl(300 40% 10% / 0.5) 0%, transparent 20%)",
          }}
        />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-12 py-6">
          <p className="text-base font-sans-body tracking-wide text-white/90 font-bold">
            ✦ Imersão Ciclo Feminino & Produtividade
          </p>
          <div className="flex items-center gap-2 text-base text-white/80 font-sans-body">
            <Calendar className="w-4 h-4" />
            <span>23 de Março · 19h às 23h</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-12 lg:px-16 w-full">
          <div className="max-w-xl">
            <h1 className="text-3xl lg:text-4xl font-serif leading-tight mb-4 text-white">
              Acabe com a culpa e a exaustão
              <br />
              de não conseguir manter
              <br />
              o mesmo ritmo todos os dias.
            </h1>
            <p className="text-base text-white/70 max-w-md mb-6 font-sans-body leading-relaxed">
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
            <div className="flex items-center gap-4 mb-5">
              <Button size="lg" className="px-8 py-5 text-base bg-accent text-accent-foreground hover:bg-accent/85 shadow-lg hover:shadow-xl transition-all duration-300 font-bold tracking-wide rounded-full" asChild>
                <a href="#oferta">Garantir minha vaga</a>
              </Button>
              <div className="text-white/60 font-sans-body text-sm">
                <span className="line-through mr-2">R$97,00</span>
                <span className="text-white font-bold text-lg">R$19,90</span>
              </div>
            </div>
            <div className="max-w-sm">
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-coral to-secondary rounded-full transition-all duration-1000" style={{ width: "23%" }} />
              </div>
              <p className="text-xs text-white/50 mt-1.5 font-sans-body">
                🔥 Lote 1 — 23% das vagas já preenchidas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE: stacked layout ===== */}
      <div className="md:hidden flex flex-col">
        {/* Top bar */}
        <div className="bg-brown-dark px-6 pt-5 pb-4 border-b border-white/10">
          <p className="text-xs font-sans-body tracking-wide text-white/90 font-bold">
            ✦ Imersão Ciclo Feminino & Produtividade
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/60 font-sans-body mt-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>23 de Março · 19h às 23h</span>
          </div>
        </div>

        {/* Text block with brown background */}
        <div className="bg-brown-dark px-6 pt-8 pb-8 relative z-10">
          <h1 className="text-[1.6rem] font-serif leading-snug mb-4 text-white">
            Acabe com a culpa e a exaustão de não conseguir manter o mesmo ritmo todos os dias.
          </h1>

          <p className="text-sm text-white/70 mb-5 font-sans-body leading-relaxed">
            Descubra como cada fase do ciclo feminino afeta sua produtividade — e como usar óleos essenciais para cada momento do mês.
          </p>

          <ul className="space-y-2 mb-6">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-white/85 font-sans-body text-xs">
                <Check className="w-3.5 h-3.5 text-coral mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 mb-5">
            <Button size="lg" className="px-8 py-5 text-sm bg-accent text-accent-foreground hover:bg-accent/85 shadow-lg font-bold tracking-wide rounded-full" asChild>
              <a href="#oferta">Garantir minha vaga</a>
            </Button>
            <div className="text-white/60 font-sans-body text-sm">
              <span className="line-through mr-2">R$97,00</span>
              <span className="text-white font-bold text-lg">R$19,90</span>
            </div>
          </div>

          <div className="max-w-xs">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-coral to-gold rounded-full" style={{ width: "23%" }} />
            </div>
            <p className="text-xs text-white/50 mt-1.5 font-sans-body">
              🔥 Lote 1 — 23% das vagas já preenchidas
            </p>
          </div>
        </div>

        {/* Photo */}
        <div>
          <img
            src={daiHero}
            alt="Daiane Alaniz"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
