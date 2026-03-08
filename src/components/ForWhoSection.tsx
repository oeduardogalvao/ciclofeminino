import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const audience = [
  "Mulheres que sentem que nunca rendem o suficiente",
  "Empreendedoras e profissionais que querem mais equilíbrio",
  "Quem já tentou várias técnicas de produtividade sem sucesso",
  "Mulheres que querem entender melhor seu próprio corpo",
  "Quem busca ferramentas naturais para bem-estar e foco",
];

const ForWhoSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding bg-muted transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-10 text-foreground">
          Para quem é essa imersão
        </h2>
        <ul className="space-y-4 max-w-lg mx-auto">
          {audience.map((a, i) => (
            <li
              key={a}
              className="flex items-start gap-3 font-sans-body text-foreground/90 transition-all duration-500"
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)" }}
            >
              <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ForWhoSection;
