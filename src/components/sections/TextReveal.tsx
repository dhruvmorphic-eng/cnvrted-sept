"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
}

export function TextReveal({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const words = quote.split(" ");

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 mx-auto flex h-screen max-w-4xl flex-col items-center justify-center px-6">
        <div className="mx-4">
          <p className="flex flex-wrap justify-center text-2xl font-normal leading-relaxed tracking-tight md:text-4xl">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
          <div className="mt-10 flex flex-col items-center gap-0.5 text-center">
            <span className="text-sm font-semibold text-foreground">{author}</span>
            <span className="text-xs text-muted-foreground">{role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
