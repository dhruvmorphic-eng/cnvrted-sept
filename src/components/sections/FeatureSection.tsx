import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function FeatureSection({
  eyebrow,
  title,
  description,
  visual,
  reverse = false,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className="px-6 py-20 md:py-28">
      <div
        className={cn(
          "mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row",
          reverse && "md:flex-row-reverse"
        )}
      >
        <RevealOnScroll effect="fade-in-up" className="flex-1">
          <span className="text-xs font-medium uppercase tracking-wide text-ai-sparkle">
            {eyebrow}
          </span>
          <h2 className="font-heading mt-3 max-w-md text-3xl font-medium tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            {description}
          </p>
        </RevealOnScroll>
        <RevealOnScroll effect="slide-in-x" delay={0.1} className="flex-1">
          {visual}
        </RevealOnScroll>
      </div>
    </section>
  );
}
