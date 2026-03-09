import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const audience = [
  {
    id: "rendem",
    content: <>Mulheres que sentem que <strong className="font-semibold text-foreground">nunca rendem</strong> o suficiente</>,
  },
  {
    id: "equilibrio",
    content: <>Empreendedoras e profissionais que querem mais <strong className="font-semibold text-foreground">equilíbrio</strong></>,
  },
  {
    id: "tentou",
    content: <>Quem já <strong className="font-semibold text-foreground">tentou</strong> várias técnicas de produtividade <strong className="font-semibold text-foreground">sem sucesso</strong></>,
  },
  {
    id: "entender",
    content: <>Mulheres que querem <strong className="font-semibold text-foreground">entender melhor</strong> seu próprio corpo</>,
  },
  {
    id: "ferramentas",
    content: <>Quem busca <strong className="font-semibold text-foreground">ferramentas naturais</strong> para bem-estar e foco</>,
  },
];


const ForWhoSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-destructive-foreground py-[80px]">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-10 text-foreground">
          Para quem é essa imersão
        </h2>
        <ul className="space-y-4 max-w-lg mx-auto">
          {audience.map((item, i) =>
          <li
            key={item.id}
            className="flex items-start gap-3 font-sans text-foreground/90 transition-all duration-500"
            style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)" }}>
            
              <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span>{item.content}</span>
            </li>
          )}
        </ul>
      </div>
    </section>);

};

export default ForWhoSection;