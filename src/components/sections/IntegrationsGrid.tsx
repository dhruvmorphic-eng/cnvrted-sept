"use client";

import Image from "next/image";

type TileData = {
  row: number;
  col: number;
  logo?: {
    src: string;
    alt: string;
  };
};

// Real logo files live in /public.
const tiles: TileData[] = [
  // Row 0
  { row: 0, col: 1 }, // empty
  { row: 0, col: 3, logo: { src: "/instantly-logo.png", alt: "Instantly" } },

  // Row 1
  { row: 1, col: 0 }, // empty
  { row: 1, col: 2, logo: { src: "/gmail-logo.svg", alt: "Gmail" } },
  { row: 1, col: 4, logo: { src: "/slack-logo-color.svg", alt: "Slack" } },

  // Row 2
  { row: 2, col: 1, logo: { src: "/hubspot-logo.svg", alt: "HubSpot" } },
  { row: 2, col: 3, logo: { src: "/heyreach-logo.png", alt: "HeyReach" } },

  // Row 3
  { row: 3, col: 0, logo: { src: "/outreach-logo.png", alt: "Outreach" } },
  { row: 3, col: 2, logo: { src: "/zapier-logo-color.svg", alt: "Zapier" } },
  {
    row: 3,
    col: 4,
    logo: { src: "/salesforce-logo-color.svg", alt: "Salesforce" },
  },

  // Row 4
  { row: 4, col: 1, logo: { src: "/apollo-logo.svg", alt: "Apollo" } },
  { row: 4, col: 3, logo: { src: "/salesloft-logo.png", alt: "Salesloft" } },
];

const CELL = 44;

export function IntegrationsGrid() {
  return (
    <div className="max-w-md">
      <h3 className="inline-block rounded-sm bg-black px-2 py-0.5 font-heading text-xl font-extrabold tracking-tight text-white">
        Seamless Integration
      </h3>
      <p className="mt-3 max-w-[260px] text-sm leading-6 text-black/50">
        Works with the tools you already run outreach through — no
        migration, no re-training.
      </p>

      <div
        className="[mask-image:radial-gradient(ellipse_at_center,black,black,transparent)] relative mx-auto mt-5"
        style={{ width: CELL * 5, height: CELL * 5 }}
      >
        {tiles.map((tile) => (
          <IntegrationTile key={`${tile.row}_${tile.col}`} {...tile} />
        ))}
      </div>
    </div>
  );
}

function IntegrationTile({ row, col, logo }: TileData) {
  return (
    <div
      className={
        logo
          ? "absolute flex items-center justify-center rounded-md border border-black/15 bg-white shadow-sm"
          : "absolute flex items-center justify-center rounded-md border border-black/[0.06] bg-black/[0.02]"
      }
      style={{
        left: col * CELL,
        top: row * CELL,
        width: CELL - 6,
        height: CELL - 6,
      }}
    >
      {logo && (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={28}
          height={28}
          className="pointer-events-none size-5 select-none object-contain"
        />
      )}
    </div>
  );
}
