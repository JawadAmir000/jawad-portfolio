"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="font-mono text-[11px] tracking-mono text-ink-faint uppercase">
        [ light · dark ]
      </span>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group font-mono text-[11px] tracking-mono uppercase text-ink-muted hover:text-ink transition-colors"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="opacity-50">[ </span>
      <span className={isDark ? "opacity-50" : "text-accent"}>light</span>
      <span className="opacity-50"> · </span>
      <span className={isDark ? "text-accent" : "opacity-50"}>dark</span>
      <span className="opacity-50"> ]</span>
    </button>
  );
}
