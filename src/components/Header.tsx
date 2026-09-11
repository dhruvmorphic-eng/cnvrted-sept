import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ResourcesDropdown } from "@/components/ResourcesDropdown";

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg transition-colors duration-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <span className="font-sans text-sm font-medium tracking-tight text-foreground">
            Cnvrted
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <ResourcesDropdown />
          </nav>
          <Button href="#cta" variant="primary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
