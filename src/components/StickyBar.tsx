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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-3 px-5 rounded-t-xl animate-fade-in">
      <div className="container-wide flex items-center justify-between gap-4">
        <p className="hidden sm:block text-sm font-sans-body text-foreground">
          Garanta sua vaga no <strong className="font-serif">Lote 1</strong>
        </p>
        <Button variant="cta" className="px-6 py-5 shrink-0 text-sm animate-[pulse-subtle_8s_ease-in-out_infinite]" asChild>
          <a href="#oferta">Entrar na imersão — R$19,90</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
