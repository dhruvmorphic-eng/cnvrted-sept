import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const stats = [
  { value: "50,000+", label: "Tasks Automated" },
  { value: "99.9%", label: "Uptime" },
  { value: "1,200+", label: "Clients" },
  { value: "1.2s", label: "Response" },
];

export function StatsBand() {
  return (
    <section className="border-y border-border px-6 py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s, i) => (
          <RevealOnScroll
            key={s.label}
            effect="fade-in-up"
            delay={i * 0.1}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl font-medium tracking-tight text-foreground">
              {s.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
