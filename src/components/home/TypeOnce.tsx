"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypeOnceProps {
  text: string;
  className?: string;
  speedMs?: number;
}

export function TypeOnce({ text, className, speedMs = 18 }: TypeOnceProps) {
  const reduce = useReducedMotion();
  const [out, setOut] = useState(reduce ? text : "");
  const [done, setDone] = useState(Boolean(reduce));

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, speedMs, reduce]);

  return (
    <p
      className={className}
      style={{ minHeight: "1.5em" }}
      aria-label={text}
    >
      <span aria-hidden>{out}</span>
      {!done && (
        <span
          aria-hidden
          className="ml-0.5 inline-block w-[0.55em] -mb-px"
          style={{
            backgroundColor: "currentColor",
            height: "1em",
            verticalAlign: "-0.1em",
            animation: "blinkCaret 900ms steps(1, end) infinite",
          }}
        />
      )}
    </p>
  );
}
