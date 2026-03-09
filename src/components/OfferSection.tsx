import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const OfferSection = () => {
  const { ref, visible } = useScrollReveal();
  const transformationItems = [
    {
      id: "energia",
      content: <>Entender <strong className="font-semibold text-foreground">por que sua energia muda</strong> ao longo do mês</>,
    },
    {
      id: "culpa",
      content: <>Parar de <strong className="font-semibold text-foreground">se culpar</strong> por não conseguir manter o mesmo ritmo todos os dias</>,
    },
    {
      id: "fase",
      content: <>Identificar em <strong className="font-semibold text-foreground">qual fase do seu ciclo</strong> você está</>,
    },
    {
      id: "rotina",
      content: <><strong className="font-semibold text-foreground">Adaptar sua rotina</strong> ao momento do seu corpo</>,
    },
    {
      id: "foco",
      content: <>Aproveitar seus <strong className="font-semibold text-foreground">períodos de maior foco</strong> e criatividade</>,
    },
    {
      id: "exaustao",
      content: <><strong className="font-semibold text-foreground">Reduzir a exaustão</strong> ao respeitar seu próprio ritmo</>,
    },
    {
      id: "oleos",
      content: <>Usar <strong className="font-semibold text-foreground">óleos essenciais</strong> como suporte para foco, energia e equilíbrio emocional</>,
    },
  ];

  return (
    <section id="oferta" ref={ref} className={`section-padding bg-brown-dark transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-narrow">
        <div
          className="bg-card border border-border rounded-[2rem] p-8 md:p-12 text-center shadow-[0_24px_80px_-28px_rgba(45,14,40,0.45)] max-w-2xl mx-auto relative overflow-hidden transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.95)" }}
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-coral/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-10 h-28 w-28 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-4 font-sans">
            <Sparkles className="h-3.5 w-3.5" />
            Valor especial de primeiro lote
          </div>

          <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground font-sans mb-3">
            Investimento especial — Lote 1
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground leading-tight">
            Imersão Ciclo Feminino & Produtividade
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground font-sans leading-relaxed mb-8">
            Uma experiência prática para você entender seu ritmo, respeitar seu corpo e construir uma rotina mais leve e produtiva.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bloco de transformação */}
          <div className="mb-8 text-left rounded-[1.5rem] border border-border/80 bg-background/70 p-5 md:p-7 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-sans mb-3 text-center">
              O que muda na pratica
            </p>
            <h3 className="text-xl md:text-2xl font-serif text-foreground mb-2 text-center">
              Depois da imersão, você será capaz de:
            </h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed text-center max-w-lg mx-auto mb-6">
              Sair com clareza sobre as fases do seu ciclo e com ferramentas simples para aplicar isso no seu dia a dia.
            </p>
            <ul className="space-y-3 max-w-xl mx-auto">
              {transformationItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-2.5 font-sans text-sm md:text-[15px] text-foreground/85"
                >
                  <span className="text-primary mt-0.5 shrink-0">•</span>
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloco de valor */}
          <div className="mb-8 max-w-lg mx-auto rounded-[1.5rem] border border-primary/10 bg-primary/[0.03] px-6 py-5 text-center">
            <p className="text-sm font-sans text-foreground/80 italic leading-relaxed">
              Em poucas horas você pode entender algo que <strong className="font-semibold text-foreground">muitas mulheres levam anos</strong> para perceber.
            </p>
          </div>

          <div className="mb-2">
            <span className="text-sm text-muted-foreground line-through font-sans">De R$97,00</span>
          </div>
          <div className="mb-3">
            <span className="text-5xl md:text-6xl font-serif font-bold text-primary">R$19,90</span>
          </div>
          <p className="text-sm text-muted-foreground font-sans mb-8">
            Pagamento unico para participar da imersao ao vivo.
          </p>

          <Button variant="cta" size="lg" className="px-12 py-6 text-lg w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <a href="https://pay.hotmart.com/B104628606K?off=ajvkspu0&checkoutMode=10&utm_source=site&utm_medium=cta&utm_campaign=imersao&utm_content=oferta" target="_blank" rel="noopener noreferrer">
              Garantir minha vaga
            </a>
          </Button>

          {/* Micro-elemento de decisão fácil */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {[
              "Conteúdo prático e direto ao ponto",
              "Ideal para quem nunca estudou ciclo feminino",
            ].map((item) => (
              <p key={item} className="text-xs text-muted-foreground font-sans flex items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-2">
                <span className="text-accent">✔</span>
                <span>{item}</span>
              </p>
            ))}
          </div>

          {/* Micro-elemento de escassez */}
          <p className="text-xs font-sans text-destructive mt-4 font-medium">
            Primeiro lote já começou a preencher
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
