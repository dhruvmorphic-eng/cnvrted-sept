const badges = [
  { flag: "🇺🇸", label: "us-east — 12ms", top: "20%", left: "18%" },
  { flag: "🇬🇧", label: "eu-west — 24ms", top: "12%", left: "48%" },
  { flag: "🇸🇬", label: "ap-south — 31ms", top: "55%", left: "72%" },
  { flag: "🇧🇷", label: "sa-east — 40ms", top: "68%", left: "30%" },
];

export function GlobalMapVisual() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-card p-4">
      <svg
        viewBox="0 0 400 240"
        className="h-full w-full opacity-40"
        fill="none"
      >
        <g stroke="var(--color-border)" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 34} y1="0" x2={i * 34} y2="240" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} />
          ))}
        </g>
      </svg>
      {badges.map((b) => (
        <div
          key={b.label}
          className="absolute flex items-center gap-1.5 rounded-md border border-border bg-popover px-2 py-1 text-xs text-muted-foreground shadow-sm"
          style={{ top: b.top, left: b.left }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ai-sparkle opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ai-sparkle" />
          </span>
          <span>{b.flag}</span>
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}
