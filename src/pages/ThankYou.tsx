import { Check, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const WHATSAPP_GROUP_LINK =
  "https://chat.whatsapp.com/LZkxUevvF9O9wVO962fRnC?mode=gi_t";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Progress Bar */}
      <section className="px-5 pt-8 pb-4 md:px-8">
        <div className="container-narrow">
          <div className="flex items-center gap-3 text-sm font-sans-body text-foreground mb-1">
            <span>
              Passo 1 de 2 concluído <span className="text-accent">✔</span>
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="font-semibold">Passo 2: entrar no grupo VIP</span>
          </div>
          <Progress value={50} className="h-2.5 bg-muted" />
          <p className="text-xs text-muted-foreground font-sans-body mt-2">
            Falta apenas um passo para receber todas as informações da imersão.
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding pb-8 text-center">
        <div className="container-narrow">
          <span className="text-5xl md:text-6xl block mb-5">🎉</span>
          <h1 className="font-serif-display text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Sua vaga na Imersão está confirmada!
          </h1>
          <p className="text-lg md:text-xl text-secondary font-sans-body max-w-2xl mx-auto">
            Agora falta apenas um passo rápido para garantir que você receba
            todas as informações da imersão.
          </p>
        </div>
      </section>

      {/* Explicação */}
      <section className="px-5 pb-12 md:px-8">
        <div className="container-narrow">
          <div className="bg-card rounded-2xl p-6 md:p-10 border border-border/60 shadow-sm">
            <h2 className="font-serif-display text-xl md:text-2xl text-foreground mb-4">
              Entre agora no Grupo VIP da Imersão
            </h2>
            <p className="font-sans-body text-muted-foreground mb-4">
              É dentro do grupo que você vai receber:
            </p>
            <ul className="space-y-2.5 font-sans-body text-foreground">
              {[
                "Link da transmissão da imersão",
                "Materiais exclusivos do evento",
                "Lembretes importantes",
                "Orientações antes do início",
                "Possíveis bônus para participantes",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Urgência */}
      <section className="px-5 pb-12 md:px-8">
        <div className="container-narrow">
          <div className="bg-destructive/5 border border-destructive/15 rounded-2xl p-6 md:p-8">
            <p className="font-sans-body font-bold text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
              Importante
            </p>
            <p className="font-sans-body text-foreground mb-3">
              O link da transmissão e todas as informações da imersão serão
              enviadas{" "}
              <strong className="text-foreground">apenas no grupo VIP.</strong>
            </p>
            <p className="font-sans-body text-muted-foreground mb-2">
              Se você não entrar no grupo, pode perder:
            </p>
            <ul className="space-y-1.5 font-sans-body text-muted-foreground text-sm list-disc list-inside pl-1">
              <li>O acesso rápido ao evento</li>
              <li>Materiais importantes</li>
              <li>Atualizações da imersão</li>
            </ul>
            <p className="font-sans-body text-foreground font-medium mt-4">
              Por isso recomendamos entrar agora.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-6 md:px-8 text-center">
        <div className="container-narrow">
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Entrar no Grupo VIP da Imersão
          </a>
          <p className="text-sm text-muted-foreground font-sans-body mt-4">
            Entrar no grupo leva menos de 5 segundos.
          </p>
        </div>
      </section>

      {/* Seção final */}
      <section className="section-padding pt-8 text-center">
        <div className="container-narrow">
          <p className="text-sm md:text-base text-secondary font-sans-body italic max-w-lg mx-auto mb-2">
            "Estamos felizes de ter você nessa jornada de mais equilíbrio,
            energia e produtividade feminina."
          </p>
          <p className="text-xs text-muted-foreground font-sans-body font-semibold">
            Equipe Mente, Corpo e Emoções
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
