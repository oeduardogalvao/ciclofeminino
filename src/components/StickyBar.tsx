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
    <div className="fixed bottom-3 left-1/2 z-50 w-[95vw] max-w-[95vw] -translate-x-1/2 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md animate-fade-in sm:bottom-0 sm:left-0 sm:right-0 sm:w-auto sm:max-w-none sm:translate-x-0 sm:rounded-t-xl sm:rounded-b-none sm:border-x-0 sm:border-b-0 sm:px-5 sm:shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="container-wide flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
        <p className="text-sm font-sans text-foreground text-center">
          Garanta sua vaga no <strong className="font-serif">Lote 1</strong>
        </p>
        <Button variant="cta" className="w-full px-6 py-5 shrink-0 text-sm bg-accent text-accent-foreground hover:bg-accent/85 sm:w-auto" asChild>
          <a href={appendUTM("https://pay.hotmart.com/B104628606K?off=ajvkspu0&checkoutMode=10")} target="_blank" rel="noopener noreferrer">Entrar na imersão — R$19,90</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
