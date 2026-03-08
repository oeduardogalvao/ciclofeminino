import { Check } from "lucide-react";

const audience = [
  "Mulheres que sentem que nunca rendem o suficiente",
  "Empreendedoras e profissionais que querem mais equilíbrio",
  "Quem já tentou várias técnicas de produtividade sem sucesso",
  "Mulheres que querem entender melhor seu próprio corpo",
  "Quem busca ferramentas naturais para bem-estar e foco",
];

const ForWhoSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-10 text-foreground">
          Para quem é essa imersão
        </h2>
        <ul className="space-y-4 max-w-lg mx-auto">
          {audience.map((a) => (
            <li key={a} className="flex items-start gap-3 font-sans-body text-foreground/90">
              <Check className="w-5 h-5 text-olive mt-0.5 shrink-0" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ForWhoSection;
