"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  strength?: number;
}

export function MagneticLink({
  href,
  children,
  className,
  external,
  strength = 18,
}: MagneticLinkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set((dx / rect.width) * strength);
    y.set((dy / rect.height) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="inline-block"
    >
      <motion.span
        style={{ x: sx, y: sy, display: "inline-block" }}
      >
        <Link
          href={href}
          {...linkProps}
          className={cn(
            "group inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-[11px] tracking-mono uppercase text-ink transition-colors",
            "hover:bg-ink hover:text-bg",
            className
          )}
        >
          {children}
        </Link>
      </motion.span>
    </div>
  );
}
