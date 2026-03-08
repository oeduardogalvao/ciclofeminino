import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import dep1 from "@/assets/depoimento-1.png";
import dep2 from "@/assets/depoimento-2.png";
import dep3 from "@/assets/depoimento-3.png";
import dep4 from "@/assets/depoimento-4.png";
import dep5 from "@/assets/depoimento-5.png";
import dep6 from "@/assets/depoimento-6.png";
import dep7 from "@/assets/depoimento-7.png";

const images = [dep1, dep2, dep3, dep4, dep5, dep6, dep7];

const SocialProofSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-padding bg-card transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="container-wide">
        <h2 className="text-2xl md:text-4xl font-serif text-center mb-3 text-foreground">
          O que outras mulheres estão percebendo
        </h2>
        <p className="text-sm text-muted-foreground font-sans-body text-center mb-10 max-w-xl mx-auto">
          Depoimentos reais de mulheres que começaram a observar seu ciclo e sua energia ao longo do mês.
        </p>

        <div className="px-8 md:px-12">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {placeholders.map((n) => (
                <CarouselItem key={n} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="aspect-square rounded-2xl bg-muted border border-border shadow-sm flex flex-col items-center justify-center gap-3 p-6">
                    <p className="text-sm font-bold text-muted-foreground tracking-widest uppercase">Depoimento</p>
                    <p className="text-xs text-muted-foreground font-sans-body">(Imagem será adicionada)</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
