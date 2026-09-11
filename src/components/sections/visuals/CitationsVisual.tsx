const sources = [
  { title: "Q3-support-playbook.pdf", page: "p. 4" },
  { title: "billing-policy.md", page: "p. 1" },
  { title: "incident-runbook.md", page: "p. 12" },
];

export function CitationsVisual() {
  return (
    <div className="w-full rounded-lg border border-border bg-card p-4">
      <p className="text-sm leading-relaxed text-foreground">
        Refunds over $200 require manager approval{" "}
        <sup className="rounded bg-secondary px-1 text-[10px] text-ai-sparkle">1</sup>{" "}
        and must be logged within 24 hours of the ticket being closed{" "}
        <sup className="rounded bg-secondary px-1 text-[10px] text-ai-sparkle">2</sup>.
      </p>
      <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
        {sources.map((s, i) => (
          <div
            key={s.title}
            className="flex items-center justify-between rounded-md border border-border bg-popover px-3 py-2 text-xs"
          >
            <span className="flex items-center gap-2 text-foreground">
              <span className="rounded bg-secondary px-1 text-ai-sparkle">{i + 1}</span>
              {s.title}
            </span>
            <span className="text-muted-foreground">{s.page}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
