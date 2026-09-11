"use client";

import { motion } from "framer-motion";
import { BookCalBar } from "@/components/BookCalBar";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background px-6">
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_0%,rgba(0,0,0,0.5)_40%,transparent_85%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl font-normal tracking-tighter text-foreground md:text-6xl"
        >
          Find high-intent leads matching your ICP, precisely
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
    </section>
  );
}
