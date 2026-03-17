import { useLotProgress } from "@/hooks/useLotProgress";

const LotBar = () => {
  const percent = useLotProgress();
  return (
    <section className="px-[2.5vw] py-8 md:px-8 bg-secondary overflow-hidden">
      <div className="container-narrow text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary mb-3 font-sans">
          🔥 Lote 4 aberto
        </p>
        <div className="w-full max-w-md mx-auto h-3 bg-nude rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-coral rounded-full transition-all duration-1000"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-sans">
          {percent}% das vagas já preenchidas
        </p>
      </div>
    </section>
  );
};

export default LotBar;
