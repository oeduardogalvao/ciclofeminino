import { useScrollReveal } from "@/hooks/useScrollReveal";

const pains = [
  "Você se cobra por não render igual todos os dias",
  "Sente culpa quando precisa desacelerar",
  "Já tentou várias técnicas de produtividade e nenhuma funcionou de verdade",
  "Não entende por que em certas semanas tudo flui e em outras nada acontece",
  "Se sente exausta tentando acompanhar um ritmo que não é seu",
];

const ProblemSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding bg-secondary/50 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-4 text-foreground">
          A produtividade feminina funciona diferente
        </h2>
        <p className="text-center text-muted-foreground font-sans-body mb-10 max-w-xl mx-auto">
          Você não é improdutiva. Você só está tentando seguir um modelo que não foi feito para o seu corpo.
        </p>
        <ul className="space-y-4 max-w-lg mx-auto">
          {pains.map((p, i) => (
            <li
              key={p}
              className="flex items-start gap-3 font-sans-body text-foreground/85 transition-all duration-500"
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)" }}
            >
              <span className="text-primary mt-0.5 shrink-0">✕</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProblemSection;
