import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const testimonials = [
  {
    quote: "Intellune cut our manual triage time by 80% in the first month.",
    author: "Sarah Chen",
    role: "Head of Ops · Fintra",
  },
  {
    quote: "The agents just work. Setup took an afternoon, not a quarter.",
    author: "Marcus Rodriguez",
    role: "CTO · Northwind",
  },
  {
    quote: "Finally an AI platform that our support team actually trusts.",
    author: "Alex Kim",
    role: "VP Support · Loopline",
  },
  {
    quote: "We deployed five agents across teams without adding headcount.",
    author: "Emily Watson",
    role: "COO · Bramble",
  },
];

export function TestimonialGrid() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <RevealOnScroll
            key={t.author}
            effect="fade-in-up"
            delay={i * 0.1}
            className="rounded-lg border border-border bg-card p-6"
          >
            <p className="text-sm leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-4 flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-foreground">
                {t.author}
              </span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
