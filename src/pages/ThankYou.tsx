import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Heart, Sparkles, Users, Star } from "lucide-react";

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/SEU_LINK_AQUI";

const questions = [
  {
    id: "q1",
    icon: <Sparkles className="h-5 w-5 text-accent" />,
    question: "Qual dessas situações mais descreve sua rotina hoje?",
    options: [
      "Trabalho muito, mas sinto que minha energia oscila ao longo do mês",
      "Tenho dificuldade de manter constância na minha produtividade",
      "Me sinto frequentemente cansada ou sobrecarregada",
      "Já percebo que meu ciclo influencia minha energia, mas não sei como usar isso na prática",
      "Estou buscando mais equilíbrio emocional e qualidade de vida",
    ],
  },
  {
    id: "q2",
    icon: <Users className="h-5 w-5 text-accent" />,
    question: "Hoje, qual dessas opções melhor descreve sua situação profissional?",
    options: [
      "Sou empreendedora ou trabalho por conta própria",
      "Trabalho em empresa (CLT)",
      "Trabalho em casa ou cuido da família",
      "Estou em transição profissional",
      "Outro",
    ],
  },
  {
    id: "q3",
    icon: <Star className="h-5 w-5 text-accent" />,
    question:
      "Antes de comprar a imersão, quanto você já conhecia sobre o impacto do ciclo feminino na energia e produtividade?",
    options: [
      "Nunca tinha pensado nisso antes",
      "Já tinha ouvido falar, mas sei muito pouco",
      "Já percebi que meu ciclo influencia minha energia",
      "Já estudo esse tema e quero aprender a aplicar na prática",
    ],
  },
  {
    id: "q4",
    icon: <Heart className="h-5 w-5 text-accent" />,
    question:
      "Se essa imersão realmente te ajudar, qual seria a maior mudança na sua vida?",
    options: [
      "Ter mais energia e foco durante o mês",
      "Conseguir organizar melhor minha rotina",
      "Parar de me sentir culpada por não produzir todos os dias",
      "Entender melhor meu corpo e respeitar meu ritmo",
      "Ter mais equilíbrio emocional",
    ],
  },
];

const ThankYou = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [bonusAnswer, setBonusAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Survey answers:", { ...answers, bonus: bonusAnswer });
    setSubmitted(true);
    setTimeout(() => {
      window.open(WHATSAPP_GROUP_LINK, "_blank");
    }, 1200);
  };

  const allAnswered = questions.every((q) => answers[q.id]);

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

      {/* Survey */}
      {!submitted ? (
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

            <div className="space-y-8">
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/60"
                >
                  <div className="flex items-start gap-3 mb-5">
                    <span className="mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                      {q.icon}
                    </span>
                    <p className="font-sans-body font-semibold text-foreground text-base md:text-lg leading-snug">
                      <span className="text-accent font-bold mr-1">
                        {idx + 1}.
                      </span>
                      {q.question}
                    </p>
                  </div>
                  <RadioGroup
                    value={answers[q.id] || ""}
                    onValueChange={(val) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: val }))
                    }
                    className="space-y-3 pl-11"
                  >
                    {q.options.map((opt) => (
                      <Label
                        key={opt}
                        htmlFor={`${q.id}-${opt}`}
                        className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all duration-200 text-sm md:text-base font-sans-body ${
                          answers[q.id] === opt
                            ? "border-accent bg-accent/5 text-foreground"
                            : "border-border/50 hover:border-accent/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                        <span>{opt}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
              ))}

              {/* Bonus question */}
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/60">
                <div className="flex items-start gap-3 mb-5">
                  <span className="mt-0.5 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent/10">
                    <Sparkles className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <p className="font-sans-body font-semibold text-foreground text-base md:text-lg leading-snug">
                      <span className="text-accent font-bold mr-1">5.</span>
                      O que mais te motivou a entrar nessa imersão?
                    </p>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      Resposta opcional — mas ela nos ajuda muito a melhorar a
                      experiência.
                    </span>
                  </div>
                </div>
                <div className="pl-11">
                  <Textarea
                    value={bonusAnswer}
                    onChange={(e) => setBonusAnswer(e.target.value)}
                    placeholder="Escreva aqui sua resposta..."
                    className="resize-none rounded-xl bg-background border-border/50 focus:border-accent min-h-[80px]"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-10 text-center">
              <Button
                variant="cta"
                size="lg"
                disabled={!allAnswered}
                onClick={handleSubmit}
                className="px-8 py-6 text-base md:text-lg"
              >
                Enviar respostas e acessar o grupo VIP
              </Button>
              {!allAnswered && (
                <p className="text-xs text-muted-foreground mt-3 font-sans-body">
                  Responda as 4 perguntas acima para continuar
                </p>
              )}
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

            {/* Motivational */}
            <p className="text-center mt-10 text-sm md:text-base text-secondary font-sans-body italic max-w-lg mx-auto">
              "Estamos muito felizes de ter você nessa jornada de mais
              equilíbrio, energia e produtividade feminina."
            </p>
          </div>
        </section>
      ) : (
        /* Post-submit state */
        <section className="section-padding pt-0">
          <div className="container-narrow text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-accent/20">
              <span className="text-4xl block mb-4">✅</span>
              <h2 className="font-serif-display text-2xl md:text-3xl text-foreground mb-3">
                Respostas enviadas!
              </h2>
              <p className="text-muted-foreground font-sans-body mb-6">
                Você será redirecionada para o Grupo VIP do WhatsApp em
                instantes...
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.open(WHATSAPP_GROUP_LINK, "_blank")}
                className="px-8 py-6 text-base"
              >
                Acessar o Grupo VIP agora
              </Button>
            </div>

            <p className="mt-10 text-sm md:text-base text-secondary font-sans-body italic max-w-lg mx-auto">
              "Estamos muito felizes de ter você nessa jornada de mais
              equilíbrio, energia e produtividade feminina."
            </p>
          </div>
        </section>
      )}

      <footer className="py-8 text-center text-xs text-muted-foreground font-sans-body border-t border-border">
        © 2026 Mente, Corpo e Emoções · Todos os direitos reservados
      </footer>
    </main>
  );
};

export default ThankYou;
