const pains = [
  "Você se cobra por não render igual todos os dias",
  "Sente culpa quando precisa desacelerar",
  "Já tentou várias técnicas de produtividade e nenhuma funcionou de verdade",
  "Não entende por que em certas semanas tudo flui e em outras nada acontece",
  "Se sente exausta tentando acompanhar um ritmo que não é seu",
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-4 text-foreground">
          A produtividade feminina funciona diferente
        </h2>
        <p className="text-center text-muted-foreground font-sans-body mb-10 max-w-xl mx-auto">
          Você não é improdutiva. Você só está tentando seguir um modelo que não foi feito para o seu corpo.
        </p>
        <ul className="space-y-4 max-w-lg mx-auto">
          {pains.map((p) => (
            <li key={p} className="flex items-start gap-3 font-sans-body text-foreground/85">
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
