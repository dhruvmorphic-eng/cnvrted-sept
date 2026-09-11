import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FinalCta() {
  return (
    <section id="cta" className="px-6 py-20 md:py-28">
      <RevealOnScroll
        effect="fade-in-up"
        className="mx-auto flex max-w-2xl flex-col items-center rounded-xl border border-border bg-card px-8 py-16 text-center"
      >
        <h2 className="font-heading text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Deploy Your First AI Agent Today
        </h2>
        <p className="mt-4 max-w-md text-base text-muted-foreground">
          Join 1,200+ teams automating their workflows with Intellune.
        </p>
        <Button href="#" variant="primary" className="mt-8">
          Deploy Your Agent
        </Button>
      </RevealOnScroll>
    </section>
  );
}
