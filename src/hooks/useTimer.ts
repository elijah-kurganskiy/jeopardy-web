import { useEffect, useState } from "react";

export function useTimer(interval: number) {
  const [, updateState] = useState();
  useEffect(() => {
    const id = setInterval(() => updateState({}), interval);
    return () => clearInterval(id);
  });
}
