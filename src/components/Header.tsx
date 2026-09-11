import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-lg transition-colors duration-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cnvrted-logo.png"
            alt="CNVRTED"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            priority
          />
          <span className="font-mono text-sm font-medium tracking-tight text-foreground">
            cnvrted
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button href="#cta" variant="primary">
          Get Started
        </Button>
      </div>
    </header>
  );
}
