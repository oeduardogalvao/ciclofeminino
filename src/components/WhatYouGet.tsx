import { Check } from "lucide-react";

const items = [
  "Acesso à imersão ao vivo completa",
  "Material de apoio em PDF",
  "Guia prático dos ciclos femininos",
  "Protocolo de óleos essenciais por fase",
  "Acesso à gravação por 7 dias",
  "Certificado de participação",
];

const WhatYouGet = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-10 text-foreground">
          O que você vai receber
        </h2>
        <ul className="space-y-4 max-w-lg mx-auto">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 font-sans-body text-foreground/90">
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
