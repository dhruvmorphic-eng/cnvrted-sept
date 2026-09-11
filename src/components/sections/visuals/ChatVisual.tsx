export function ChatVisual() {
  return (
    <div className="w-full rounded-lg border border-border bg-card p-4">
      <div className="flex flex-col gap-3">
        <div className="ml-auto max-w-[75%] rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground">
          Summarize this week&apos;s support tickets and flag anything urgent.
        </div>
        <div className="mr-auto max-w-[80%] rounded-lg border border-border bg-popover px-3 py-2 text-sm text-foreground">
          Found 3 urgent tickets — 2 billing disputes and 1 outage report.
          Drafted replies and routed them to the on-call team.
        </div>
        <div className="mr-auto flex items-center gap-2 rounded-lg border border-border bg-popover px-3 py-2 text-xs text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ai-sparkle opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ai-sparkle" />
          </span>
          Agent is working…
        </div>
      </div>
    </div>
  );
}
