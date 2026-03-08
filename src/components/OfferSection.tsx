import { Button } from "@/components/ui/button";

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding bg-brown-dark">
      <div className="container-narrow">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-xl max-w-xl mx-auto relative overflow-hidden">
          {/* Badge de urgência */}
          <div className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 font-sans-body">
            Valor especial de primeiro lote
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-sans-body mb-2">
            Investimento especial — Lote 1
          </p>
          <h2 className="text-2xl md:text-3xl font-serif mb-6 text-foreground">
            Imersão Ciclos Femininos & Produtividade
          </h2>

          <div className="mb-2">
            <span className="text-sm text-muted-foreground line-through font-sans-body">De R$47,00</span>
          </div>
          <div className="mb-8">
            <span className="text-5xl md:text-6xl font-serif font-bold text-primary">R$19,90</span>
          </div>

          <Button variant="cta" size="lg" className="px-12 py-6 text-lg w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/85" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Garantir minha vaga
            </a>
          </Button>

          <p className="text-xs text-muted-foreground mt-4 font-sans-body">
            Pagamento seguro · Acesso imediato após a confirmação
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
