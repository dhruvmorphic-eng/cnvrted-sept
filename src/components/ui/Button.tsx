import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors duration-100 disabled:opacity-50";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
    ghost: "bg-transparent text-foreground hover:bg-accent",
  };
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}
