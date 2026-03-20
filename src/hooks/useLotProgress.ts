import { useState, useEffect } from "react";

// Lote 5: progresso dinâmico de 10% a 100%
const LOT_START = new Date("2026-03-20T09:00:00-03:00").getTime();
const LOT_END = new Date("2026-03-23T19:00:00-03:00").getTime();
const MIN_PERCENT = 10;
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
