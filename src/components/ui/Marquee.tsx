import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  direction = "left",
  duration = 40,
  className,
  edgeColor = "var(--color-background)",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  edgeColor?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center gap-8",
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex items-center gap-8">{children}</div>
        <div className="flex items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16"
        style={{ background: `linear-gradient(to right, ${edgeColor}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16"
        style={{ background: `linear-gradient(to left, ${edgeColor}, transparent)` }}
      />
    </div>
  );
}
