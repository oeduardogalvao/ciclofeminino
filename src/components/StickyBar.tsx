import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border py-3 px-5 animate-fade-in">
      <div className="container-wide flex items-center justify-between gap-4">
        <p className="hidden sm:block text-sm font-sans-body text-foreground">
          Garanta sua vaga na <strong className="font-serif">Imersão Ciclos Femininos & Produtividade</strong>
        </p>
        <Button variant="cta" className="px-6 py-5 shrink-0 text-sm" asChild>
          <a href="#oferta">Participar agora — R$19,90</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
