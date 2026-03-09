import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUTM } from "@/hooks/useUTM";

const StickyBar = () => {
  const [visible, setVisible] = useState(false);
  const { appendUTM } = useUTM();

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
      <div className="container-wide flex items-center justify-center sm:justify-between gap-4">
        <p className="hidden sm:block text-sm font-sans text-foreground">
          Garanta sua vaga no <strong className="font-serif">Lote 1</strong>
        </p>
        <Button variant="cta" className="px-6 py-5 shrink-0 text-sm bg-accent text-accent-foreground hover:bg-accent/85" asChild>
          <a href="https://pay.hotmart.com/B104628606K?off=ajvkspu0&checkoutMode=10&utm_source=site&utm_medium=cta&utm_campaign=imersao&utm_content=sticky_bar" target="_blank" rel="noopener noreferrer">Entrar na imersão — R$19,90</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
