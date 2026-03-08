import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/SEU_LINK_AQUI";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero / Confirmation */}
      <section className="section-padding text-center">
        <div className="container-narrow">
          <span className="text-5xl md:text-6xl block mb-6">🎉</span>
          <h1 className="font-serif-display text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Sua vaga na Imersão está garantida!
          </h1>
          <p className="text-lg md:text-xl text-secondary font-sans-body max-w-2xl mx-auto mb-3">
            Agora falta apenas um passo rápido para você receber todas as
            informações e aproveitar melhor a experiência.
          </p>
          <p className="text-sm md:text-base text-muted-foreground font-sans-body max-w-xl mx-auto">
            Leve menos de 30 segundos para responder essas perguntas.
            <br />
            Suas respostas vão nos ajudar a adaptar melhor a imersão para você.
          </p>
        </div>
      </section>

      {/* Google Forms Survey */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-serif-display text-2xl md:text-3xl text-foreground mb-2">
              Queremos te conhecer melhor
            </h2>
            <p className="text-muted-foreground font-sans-body text-sm md:text-base">
              Responda rapidamente para que possamos tornar essa imersão ainda
              mais útil para você.
            </p>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfW2ctzctppWXGjA5oB7IoIDTyL62-F2l5Pc3e_TeXSdApZsA/viewform?embedded=true"
              width="640"
              height="1689"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-[640px] rounded-2xl border border-border/60"
            >
              Carregando…
            </iframe>
          </div>

          {/* Important notice */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
            <p className="font-sans-body font-bold text-foreground mb-3 flex items-center gap-2">
              ⚠️ Importante:
            </p>
            <p className="text-sm text-muted-foreground font-sans-body mb-3">
              Entre no grupo VIP para receber:
            </p>
            <ul className="space-y-2 text-sm font-sans-body text-foreground">
              {[
                "Link da transmissão da imersão",
                "Materiais exclusivos",
                "Lembretes do evento",
                "Bônus especiais para participantes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 text-center">
            <Button
              variant="cta"
              size="lg"
              onClick={() => window.open(WHATSAPP_GROUP_LINK, "_blank")}
              className="px-8 py-6 text-base md:text-lg"
            >
              Acessar o Grupo VIP no WhatsApp
            </Button>
          </div>

          {/* Motivational */}
          <p className="text-center mt-10 text-sm md:text-base text-secondary font-sans-body italic max-w-lg mx-auto">
            "Estamos muito felizes de ter você nessa jornada de mais
            equilíbrio, energia e produtividade feminina."
          </p>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground font-sans-body border-t border-border">
        © 2026 Mente, Corpo e Emoções · Todos os direitos reservados
      </footer>
    </main>
  );
};

export default ThankYou;
