import { X } from "lucide-react";

const painPoints = [
  { text: "Alguns dias você consegue produzir muito", pair: "Em outros dias parece impossível manter foco" },
  { text: "Você já tentou várias técnicas de produtividade", pair: "Mas nenhuma parece funcionar por muito tempo" },
  { text: "Em certos períodos você se sente cheia de energia", pair: "Em outros tudo parece exigir esforço dobrado" },
];

const IdentificationSection = () => {
  return (
    <section className="section-padding bg-beige">
      <div className="container-narrow text-center">
        <h2 className="text-2xl md:text-4xl font-serif mb-3 text-foreground">
          Talvez você se reconheça nisso…
        </h2>
        <p className="text-sm text-muted-foreground font-sans-body mb-10">
          Muitas mulheres vivem esse padrão sem perceber.
        </p>

        <div className="max-w-lg mx-auto space-y-6 text-left">
          {painPoints.map((point, i) => (
            <div key={i} className="space-y-2">
              <div className="flex items-start gap-3 font-sans-body text-foreground/90">
                <X className="w-4 h-4 text-coral mt-1 shrink-0" />
                <span>{point.text}</span>
              </div>
              <div className="flex items-start gap-3 font-sans-body text-foreground/90">
                <X className="w-4 h-4 text-coral mt-1 shrink-0" />
                <span>{point.pair}</span>
              </div>
            </div>
          ))}

          <div className="space-y-2 pt-2">
            <div className="flex items-start gap-3 font-sans-body text-foreground/90">
              <X className="w-4 h-4 text-coral mt-1 shrink-0" />
              <span>E muitas vezes a conclusão parece ser sempre a mesma:</span>
            </div>
            <p className="text-center font-serif text-lg text-foreground italic mt-2">
              "O problema sou eu."
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-md mx-auto">
          <p className="font-serif text-lg md:text-xl text-foreground leading-relaxed">
            Mas na maioria das vezes o problema <strong>não é você.</strong>
          </p>
          <p className="text-sm text-muted-foreground font-sans-body mt-3 leading-relaxed">
            É tentar viver em um modelo de produtividade que ignora o ciclo feminino.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
