"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { BookCalBar } from "@/components/BookCalBar";

export function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 flex h-screen items-center overflow-hidden bg-background px-6"
    >
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_0%,rgba(0,0,0,0.5)_40%,transparent_85%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[clamp(1.375rem,6.5vw,4.25rem)] font-bold leading-[1.15] tracking-tighter text-foreground"
        >
          <span className="block text-foreground">Find high-intent leads</span>
          <span className="block text-foreground/40">
            matching your ICP, precisely
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <BookCalBar />
        </motion.div>
      </div>
    </motion.section>
  );
}
