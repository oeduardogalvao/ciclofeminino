import { useState, useEffect } from "react";

// Lote 2: progresso dinâmico de 10% a 100%
// Início: 10 de março de 2026 às 00h
// Fim: 13 de março de 2026 às 09h
const LOT_START = new Date("2026-03-13T00:00:00-03:00").getTime();
const LOT_END = new Date("2026-03-14T09:00:00-03:00").getTime();
const MIN_PERCENT = 86;
const MAX_PERCENT = 100;

export function useLotProgress() {
  const calc = () => {
    const now = Date.now();
    if (now <= LOT_START) return MIN_PERCENT;
    if (now >= LOT_END) return MAX_PERCENT;
    const ratio = (now - LOT_START) / (LOT_END - LOT_START);
    return Math.round(MIN_PERCENT + ratio * (MAX_PERCENT - MIN_PERCENT));
  };

  const [percent, setPercent] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setPercent(calc()), 60_000);
    return () => clearInterval(id);
  }, []);

  return percent;
}
