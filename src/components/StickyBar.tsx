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
    <div className="fixed bottom-20 left-1/2 z-50 w-[92vw] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-border bg-card/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md animate-fade-in sm:bottom-0 sm:left-0 sm:right-0 sm:w-auto sm:max-w-none sm:translate-x-0 sm:rounded-t-xl sm:rounded-b-none sm:border-x-0 sm:border-b-0 sm:px-5 sm:py-3 sm:shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between sm:gap-4">
        <p className="text-xs sm:text-sm font-sans text-foreground text-center">
          Garanta sua vaga no <strong className="font-serif">Lote 2</strong>
        </p>
        <Button variant="cta" className="w-full px-5 py-4 shrink-0 text-[13px] bg-accent text-accent-foreground hover:bg-accent/85 sm:w-auto sm:px-6 sm:py-5 sm:text-sm" asChild>
          <a href={appendUTM("https://pay.hotmart.com/B104628606K?off=ajvkspu0&checkoutMode=10")} target="_blank" rel="noopener noreferrer">Entrar na imersão — R$24,90</a>
        </Button>
      </div>
    </div>
  );
};

export default StickyBar;
