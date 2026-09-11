import { Marquee } from "@/components/ui/Marquee";

const models = [
  { code: "OA", name: "GPT-4o" },
  { code: "AN", name: "Claude" },
  { code: "GO", name: "Gemini" },
  { code: "MI", name: "Mistral" },
  { code: "GR", name: "Grok" },
  { code: "DS", name: "DeepSeek" },
];

export function ModelPickerVisual() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-card p-6">
      <Marquee duration={20} className="py-2">
        {models.map((m) => (
          <div
            key={m.code}
            className="flex items-center gap-2 rounded-md border border-border bg-popover px-3 py-2"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded bg-secondary font-mono text-[10px] font-medium text-secondary-foreground">
              {m.code}
            </span>
            <span className="text-sm text-foreground">{m.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
