import { Check, AlertTriangle, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const WHATSAPP_GROUP_LINK =
  "https://chat.whatsapp.com/LZkxUevvF9O9wVO962fRnC?mode=gi_t";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Progress Bar */}
      <section className="px-5 pt-10 pb-2 md:px-8">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm font-sans-body mb-2.5">
            <span className="inline-flex items-center gap-1.5 text-accent font-semibold">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
                ✓
              </span>
              Passo 1: Inscrição
            </span>
            <ArrowRight className="h-3 w-3 text-muted-foreground hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 text-foreground font-bold">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                2
              </span>
              Entrar no grupo VIP
            </span>
          </div>
          <Progress value={50} className="h-2 rounded-full bg-border" />
          <p className="text-[11px] md:text-xs text-muted-foreground font-sans-body mt-2 tracking-wide">
            Falta apenas um passo para receber todas as informações da imersão.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="px-5 pt-10 pb-6 md:px-8 md:pt-16 md:pb-10 text-center">
        <div className="container-narrow">
          <div className="inline-flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-accent/10 mb-6">
            <span className="text-4xl md:text-5xl">🎉</span>
          </div>
          <h1 className="font-serif-display text-3xl md:text-[3.25rem] md:leading-[1.15] text-foreground mb-5">
            Sua vaga na Imersão
            <br className="hidden md:block" /> está confirmada!
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-sans-body max-w-xl mx-auto leading-relaxed">
            Agora falta apenas um passo rápido para garantir que você receba
            todas as informações da imersão.
          </p>
        </div>
      </section>

      {/* Separador sutil */}
      <div className="container-narrow px-5 md:px-8">
        <div className="h-px bg-border/60" />
      </div>

      {/* Explicação */}
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="container-narrow">
          <div className="bg-card rounded-3xl p-7 md:p-10 border border-border/50 shadow-[0_4px_24px_-6px_hsl(var(--primary)/0.06)]">
            <h2 className="font-serif-display text-xl md:text-2xl text-foreground mb-2">
              Entre agora no Grupo VIP
            </h2>
            <p className="font-sans-body text-sm text-muted-foreground mb-5">
              É dentro do grupo que você vai receber:
            </p>
            <ul className="space-y-3 font-sans-body text-[15px] text-foreground">
              {[
                "Link da transmissão da imersão",
                "Materiais exclusivos do evento",
                "Lembretes importantes",
                "Orientações antes do início",
                "Possíveis bônus para participantes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-accent/15 shrink-0">
                    <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA principal */}
      <section className="px-5 pb-4 md:px-8 text-center">
        <div className="container-narrow">
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base md:text-lg px-10 md:px-14 py-4 md:py-5 rounded-full shadow-[0_8px_30px_-6px_hsl(var(--accent)/0.4)] hover:shadow-[0_12px_36px_-4px_hsl(var(--accent)/0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 md:h-6 md:w-6 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Entrar no Grupo VIP da Imersão
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-muted-foreground font-sans-body mt-3.5 tracking-wide">
            Entrar no grupo leva menos de 5 segundos.
          </p>
        </div>
      </section>

      {/* Urgência */}
      <section className="px-5 py-10 md:px-8 md:py-12">
        <div className="container-narrow">
          <div className="relative bg-primary/[0.04] border border-primary/10 rounded-2xl p-6 md:p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary rounded-l-2xl" />
            <p className="font-sans-body font-bold text-foreground mb-2 flex items-center gap-2 text-sm md:text-base">
              <AlertTriangle className="h-4 w-4 text-secondary shrink-0" />
              Importante
            </p>
            <p className="font-sans-body text-sm text-foreground/90 mb-3 leading-relaxed">
              O link da transmissão e todas as informações da imersão serão
              enviadas{" "}
              <strong>apenas no grupo VIP.</strong>
            </p>
            <p className="font-sans-body text-xs text-muted-foreground mb-2">
              Se você não entrar no grupo, pode perder:
            </p>
            <ul className="space-y-1 font-sans-body text-xs text-muted-foreground pl-4">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                O acesso rápido ao evento
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                Materiais importantes
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                Atualizações da imersão
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção final */}
      <section className="px-5 pb-12 md:px-8 text-center">
        <div className="container-narrow">
          <div className="h-px bg-border/60 max-w-xs mx-auto mb-8" />
          <p className="text-sm md:text-base text-muted-foreground font-sans-body italic max-w-md mx-auto mb-1.5 leading-relaxed">
            "Estamos felizes de ter você nessa jornada de mais equilíbrio,
            energia e produtividade feminina."
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-secondary font-sans-body font-semibold">
            Equipe Mente, Corpo e Emoções
          </p>
        </div>
      </section>

      <footer className="py-6 text-center text-[11px] text-muted-foreground font-sans-body border-t border-border/50">
        © 2026 Mente, Corpo e Emoções · Todos os direitos reservados
      </footer>
    </main>
  );
};

export default ThankYou;
