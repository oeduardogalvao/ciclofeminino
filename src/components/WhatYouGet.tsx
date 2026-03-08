import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  "Acesso à imersão ao vivo completa",
  "Material de apoio em PDF",
  "Guia prático dos ciclos femininos",
  "Protocolo de óleos essenciais por fase",
];

const WhatYouGet = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding bg-secondary/50 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-10 text-foreground">
          O que você vai receber
        </h2>
        <ul className="space-y-4 max-w-lg mx-auto">
          {items.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-3 font-sans-body text-foreground/90 transition-all duration-500"
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms", opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-16px)" }}
            >
              <div className="w-6 h-6 rounded-full bg-olive/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-olive" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatYouGet;
