import { Button } from "@/components/ui/button";
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
          className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-xl max-w-xl mx-auto relative overflow-hidden transition-all duration-700 delay-200"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.95)" }}
        >
          <div className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 font-sans-body">
            Valor especial de primeiro lote
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans-body mb-2">
            Investimento especial — Lote 1
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">
            Imersão Ciclo Feminino & Produtividade
          </h2>

          {/* Bloco de transformação */}
          <div className="mb-8 text-left">
            <h3 className="text-lg md:text-xl font-serif text-foreground mb-4 text-center">
              Depois da imersão, você será capaz de:
            </h3>
            <ul className="space-y-2.5 max-w-md mx-auto">
              {transformationItems.map((item) => (
                <li key={item.id} className="flex items-start gap-2.5 font-sans-body text-sm text-foreground/85">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloco de valor */}
          <div className="mb-8 max-w-md mx-auto text-center space-y-3">
            <p className="text-sm font-sans-body text-foreground/80 italic">
              Em poucas horas você pode entender algo que <strong className="font-semibold text-foreground">muitas mulheres levam anos</strong> para perceber.
            </p>
          </div>

          <div className="mb-2">
            <span className="text-sm text-muted-foreground line-through font-sans-body">De R$97,00</span>
          </div>
          <div className="mb-8">
            <span className="text-5xl md:text-6xl font-serif font-bold text-primary">R$19,90</span>
          </div>

          <Button variant="cta" size="lg" className="px-12 py-6 text-lg w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <a href="https://pay.hotmart.com/B104628606K?off=ajvkspu0&checkoutMode=10&utm_source=site&utm_medium=cta&utm_campaign=imersao&utm_content=oferta" target="_blank" rel="noopener noreferrer">
              Garantir minha vaga
            </a>
          </Button>

          {/* Micro-elemento de decisão fácil */}
          <div className="mt-5 space-y-1.5 text-center">
            {[
              "Conteúdo prático e direto ao ponto",
              "Ideal para quem nunca estudou ciclo feminino",
            ].map((item) => (
              <p key={item} className="text-xs text-muted-foreground font-sans-body flex items-center justify-center gap-1.5">
                <span className="text-accent">✔</span>
                <span>{item}</span>
              </p>
            ))}
          </div>

          {/* Micro-elemento de escassez */}
          <p className="text-xs font-sans-body text-destructive mt-4 font-medium">
            Primeiro lote já começou a preencher
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
