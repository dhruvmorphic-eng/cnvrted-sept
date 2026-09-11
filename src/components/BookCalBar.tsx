import { ArrowRight } from "lucide-react";

export function BookCalBar() {
  return (
    <a
      href="https://cal.com/cnvrted"
      className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-primary pl-4 pr-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      Book a call
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
    </a>
  );
}
