import daianeImg from "@/assets/daiane-about.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div
              className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl transition-all duration-700"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.9)" }}
            >
              <img
                src={daianeImg}
                alt="Daiane Alaniz — Especialista em ciclos femininos e óleos essenciais"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            className="transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(24px)" }}
          >
            <h2 className="text-2xl md:text-4xl font-serif mb-6 text-foreground">
              Sobre Daiane Alaniz
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans-body leading-relaxed">
              <p>
                Daiane é especialista em saúde feminina integrativa, com formação em aromaterapia clínica e anos de experiência ajudando mulheres a reconectarem com seus ciclos naturais.
              </p>
              <p>
                Criadora do projeto <strong className="text-foreground">Mente, Corpo e Emoções</strong>, ela combina ciência e práticas naturais para ajudar mulheres a viverem com mais equilíbrio, produtividade e autocuidado.
              </p>
              <p>
                Já impactou milhares de mulheres através de suas formações, mentorias e conteúdos sobre ciclos femininos e óleos essenciais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
