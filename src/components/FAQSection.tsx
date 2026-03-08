import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Preciso ter conhecimento sobre ciclo feminino?", a: "Não! A imersão é tanto para iniciantes quanto para quem já estuda sobre o tema. Vamos explicar tudo do zero, de forma simples até a prática para cada fase do ciclo." },
  { q: "Preciso usar óleos essenciais para participar?", a: "Não é obrigatório. Vamos ensinar sobre óleos, mas você pode aplicar as estratégias de produtividade mesmo sem eles." },
  { q: "A imersão é ao vivo ou gravada?", a: "A imersão será ao vivo, mas você poderá adquirir a gravação e os materiais de apoio até o dia da Imersão, para ter uma experiência completa e poder assistir quantas vezes quiser." },
  { q: "Serve para quem usa anticoncepcional?", a: "Sim! Vamos abordar adaptações para diferentes contextos hormonais." },
  { q: "Quanto tempo dura a imersão?", a: "A imersão tem duração aproximada de 2 horas, com conteúdo direto e prático." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do valor." },
];

const FAQSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding bg-secondary/50 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-narrow">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-10 text-foreground">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-sans-body text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans-body">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
