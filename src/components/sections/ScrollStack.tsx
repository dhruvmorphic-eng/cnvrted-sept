"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { IntentSection } from "@/components/sections/IntentSection";

export function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <Hero scrollYProgress={scrollYProgress} />
      <IntentSection scrollYProgress={scrollYProgress} />
    </div>
  );
}
