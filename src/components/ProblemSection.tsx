import { useScrollReveal } from "@/hooks/useScrollReveal";

const pains = [
  {
    id: "cobrança",
    content: <>Você <strong className="font-semibold text-foreground">se cobra</strong> por não render igual todos os dias</>,
  },
  {
    id: "culpa",
    content: <>Sente <strong className="font-semibold text-foreground">culpa</strong> quando precisa desacelerar</>,
  },
  {
    id: "tecnicas",
    content: <>Já tentou várias técnicas de produtividade e <strong className="font-semibold text-foreground">nenhuma funcionou de verdade</strong></>,
  },
  {
    id: "entende",
    content: <>Não <strong className="font-semibold text-foreground">entende por que</strong> em certas semanas tudo flui e em outras nada acontece</>,
  },
  {
    id: "ritmo",
    content: <>Se sente exausta tentando acompanhar um ritmo que <strong className="font-semibold text-foreground">não é seu</strong></>,
  },
];


const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-destructive-foreground py-[70px]">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-4 text-foreground">
          A produtividade feminina funciona diferente
        </h2>
        <p className="text-center text-muted-foreground font-sans-body mb-10 max-w-xl mx-auto">
          Você não é improdutiva. Você só está tentando seguir um modelo que <strong className="font-semibold text-foreground">não foi feito para o seu corpo</strong>.
        </p>
        <ul className="space-y-4 max-w-lg mx-auto">
          {pains.map((pain, i) =>
          <li
            key={pain.id}
            className="flex items-start gap-3 font-sans-body text-foreground/85 transition-all duration-500"
            style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)" }}>
            
              <span className="text-primary mt-0.5 shrink-0">✕</span>
              <span>{pain.content}</span>
            </li>
          )}
        </ul>
      </div>
    </section>);

};

export default ProblemSection;