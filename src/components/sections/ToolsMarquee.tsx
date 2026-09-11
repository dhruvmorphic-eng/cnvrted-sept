import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";

const tools = [
  { name: "HubSpot", src: "/hubspot-logo.svg", height: 28 },
  { name: "HeyReach", src: "/heyreach-logo.png", height: 32 },
  { name: "Instantly.ai", src: "/instantly-logo.png", height: 32 },
];

export function ToolsMarquee() {
  return (
    <div className="mt-12">
      <span className="text-xs font-medium uppercase tracking-wide text-black/40">
        Tools we work with
      </span>
      <Marquee duration={18} edgeColor="#ffffff" className="mt-4">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center gap-2">
            <Image
              src={tool.src}
              alt={tool.name}
              width={tool.height}
              height={tool.height}
              style={{ height: tool.height, width: "auto" }}
            />
            <span className="font-heading text-sm font-medium text-black/70">
              {tool.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
