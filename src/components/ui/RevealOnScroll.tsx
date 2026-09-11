"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Effect = "fade-in" | "fade-in-up" | "scale-in" | "slide-in-x";

const variants: Record<Effect, { hidden: object; show: object }> = {
  "fade-in": { hidden: { opacity: 0 }, show: { opacity: 1 } },
  "fade-in-up": { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } },
  "scale-in": { hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1 } },
  "slide-in-x": { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } },
};

export function RevealOnScroll({
  children,
  effect = "fade-in-up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: {
  children: ReactNode;
  effect?: Effect;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const v = variants[effect];
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.3 }}
      variants={v}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
