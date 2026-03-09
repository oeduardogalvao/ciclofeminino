import { Check, AlertTriangle, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import daiHero from "@/assets/dai-hero.png";

const WHATSAPP_GROUP_LINK =
  "https://chat.whatsapp.com/LZkxUevvF9O9wVO962fRnC?mode=gi_t";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-brown-dark relative overflow-x-hidden">
      {/* Background Image & Gradients (Desktop) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${daiHero})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(300 40% 10% / 0.95) 0%, hsl(300 35% 14% / 0.88) 35%, hsl(300 30% 18% / 0.7) 55%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, hsl(300 40% 10% / 0.8) 0%, transparent 30%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center w-[95vw] max-w-[800px] mx-auto px-0 py-12 md:w-full md:px-16 lg:px-24">
        
        {/* Progress Bar */}
        <div className="mb-10 w-full max-w-md">
          <div className="flex items-center justify-between text-xs md:text-sm font-sans mb-2.5 font-bold text-white/90">
            <span>Passo 2 de 2: Quase lá!</span>
            <span>80%</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-coral to-secondary rounded-full" style={{ width: "80%" }} />
          </div>
        </div>

        {/* Hero Text */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white mb-4">
            Parabéns! Sua vaga na Imersão está confirmada.
          </h1>
          <p className="text-lg md:text-xl text-coral font-bold font-sans leading-relaxed">
            Mas atenção, você AINDA NÃO terminou.
          </p>
        </div>

        {/* Explicação e Urgência */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-coral rounded-l-2xl" />
          
          <h2 className="font-sans font-bold text-white text-lg md:text-xl mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-coral shrink-0" />
            Aviso Importante
          </h2>
          
          <p className="font-sans text-base md:text-lg text-white/90 mb-6 leading-relaxed">
            O link de acesso à transmissão, lembretes e os <strong>materiais exclusivos</strong> da imersão serão enviados <strong>APENAS no grupo VIP do WhatsApp</strong>.
          </p>

          <div className="space-y-3 font-sans text-sm md:text-base text-white/80">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-coral/20 shrink-0">
                <Check className="h-3 w-3 text-coral" strokeWidth={3} />
              </span>
              <span>Link da transmissão da imersão</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-coral/20 shrink-0">
                <Check className="h-3 w-3 text-coral" strokeWidth={3} />
              </span>
              <span>Materiais e exercícios práticos</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-coral/20 shrink-0">
                <Check className="h-3 w-3 text-coral" strokeWidth={3} />
              </span>
              <span>Avisos e lembretes importantes</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-left w-full">
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full shadow-[0_8px_30px_-6px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_36px_-4px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Entrar no Grupo VIP
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-white/50 font-sans mt-4 tracking-wide">
            Entrar no grupo leva menos de 5 segundos.
          </p>
        </div>
      </div>

      {/* Mobile Background Image (Only visible on small screens below the content) */}
      <div className="md:hidden w-full relative -mt-20 z-0 opacity-80">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark via-transparent to-brown-dark z-10" />
        <img
          src={daiHero}
          alt="Daiane"
          className="w-full h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default ThankYou;
