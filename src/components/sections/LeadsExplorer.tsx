"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type TabId = "company" | "intent" | "cold" | "target";

const TABS: { id: TabId; label: string }[] = [
  { id: "company", label: "Company Leads" },
  { id: "intent", label: "Intent Leads" },
  { id: "cold", label: "Cold Leads" },
  { id: "target", label: "Target List" },
];

// Fabricated placeholder data — for visual/demo purposes only.
const INTEGRATIONS = [
  { name: "HeyReach", src: "/heyreach-logo.png" },
  { name: "Instantly", src: "/instantly-logo.png" },
  { name: "HubSpot", src: "/hubspot-logo.svg" },
];

function ScorePill({ value }: { value: number }) {
  const tone =
    value >= 90
      ? "bg-black text-white border-black"
      : value >= 70
        ? "border-black/40 text-black"
        : "border-black/15 text-black/40";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm border px-2 py-0.5 font-mono text-xs font-semibold ${tone}`}
    >
      {value}
    </span>
  );
}

function Blur({ children }: { children: React.ReactNode }) {
  return (
    <span className="select-none blur-[4px]" aria-hidden="true">
      {children}
    </span>
  );
}

const companyLeads = [
  {
    company: "Nyra Labs",
    score: 94,
    trigger: "Raised Series B",
    reasoning: "High-growth fintech infra, hiring aggressively",
    role: "Head of Eng",
    contact: "Maya",
  },
  {
    company: "Fenwick AI",
    score: 91,
    trigger: "Hiring 3 roles",
    reasoning: "Fits ICP: seed-funded, dev tooling",
    role: "Founder / CTO",
    contact: "Theo",
  },
  {
    company: "Corela",
    score: 88,
    trigger: "Recently funded",
    reasoning: "Signals rapid team expansion",
    role: "Director of Eng",
    contact: "Ren",
  },
  {
    company: "Halcyon Data",
    score: 82,
    trigger: "Product-led growth",
    reasoning: "Strong usage-based buying signal",
    role: "VP Engineering",
    contact: "Sasha",
  },
  {
    company: "Verdant Systems",
    score: 78,
    trigger: "New CTO hired",
    reasoning: "Leadership change opens buying window",
    role: "Head of Product",
    contact: "Iris",
  },
  {
    company: "Quillow",
    score: 74,
    trigger: "Job posts spike",
    reasoning: "Team scaling fast this quarter",
    role: "Eng Manager",
    contact: "Nolan",
  },
  {
    company: "Brightloop",
    score: 68,
    trigger: "Traffic surge",
    reasoning: "Early signal, still low confidence",
    role: "Growth Lead",
    contact: "Priya",
  },
] as const;

const intentLeads = [
  {
    company: "Marrow Analytics",
    intent: "Looking for a way to route inbound leads faster...",
    role: "Head of RevOps",
    contact: "Owen",
  },
  {
    company: "Fablehouse",
    intent: "We need better outbound infra for our SDR team...",
    role: "Founder",
    contact: "Lena",
  },
  {
    company: "Driftwell",
    intent: "Exploring tools to enrich cold lists automatically...",
    role: "Ops Lead",
    contact: "Idris",
  },
  {
    company: "Larkspur AI",
    intent: "Our current stack can't handle intent signals...",
    role: "CTO",
    contact: "Zara",
  },
  {
    company: "Novarim",
    intent: "Evaluating vendors for lead scoring...",
    role: "VP Sales",
    contact: "Mateo",
  },
  {
    company: "Pallet Systems",
    intent: "Need a waterfall enrichment solution...",
    role: "Head of Growth",
    contact: "Faye",
  },
  {
    company: "Thistle Labs",
    intent: "Searching for an alternative to manual list building...",
    role: "Founder / CEO",
    contact: "Rowan",
  },
] as const;

const coldLeads = [
  {
    company: "Greymatter Ops",
    contact: "Ines",
    title: "CEO",
    industry: "Software",
    founded: "2021",
    revenue: "4.2M",
  },
  {
    company: "Solace Robotics",
    contact: "Dev",
    title: "Co-Founder",
    industry: "Robotics",
    founded: "2019",
    revenue: "12M",
  },
  {
    company: "Kindling AI",
    contact: "Talia",
    title: "Head of Product",
    industry: "Artificial Intelligence",
    founded: "2022",
    revenue: "—",
  },
  {
    company: "Ashgrove",
    contact: "Kai",
    title: "Founder",
    industry: "Fintech",
    founded: "2020",
    revenue: "8.5M",
  },
  {
    company: "Fable Metrics",
    contact: "Owen",
    title: "CTO",
    industry: "Data Infra",
    founded: "2018",
    revenue: "21M",
  },
  {
    company: "Orbital Reach",
    contact: "Maya",
    title: "Co-Founder & CEO",
    industry: "Aerospace",
    founded: "2023",
    revenue: "—",
  },
  {
    company: "Cambium Labs",
    contact: "Theo",
    title: "VP Engineering",
    industry: "Biotech",
    founded: "2017",
    revenue: "34M",
  },
] as const;

const targetList = [
  {
    company: "Nyra Labs",
    website: "nyralabs.io",
    why: "precision match: Series B, dev tooling",
    contact: "Maya",
    designation: "Staff Engineer",
    email: "m***@nyralabs.io",
  },
  {
    company: "Fenwick AI",
    website: "fenwick.ai",
    why: "precision match: seed, AI infra",
    contact: "Theo",
    designation: "Founder",
    email: "t***@fenwick.ai",
  },
  {
    company: "Corela",
    website: "corela.co",
    why: "precision match: recently funded",
    contact: "Ren",
    designation: "Director of Eng",
    email: "r***@corela.co",
  },
  {
    company: "Halcyon Data",
    website: "halcyondata.com",
    why: "precision match: PLG, usage signal",
    contact: "Sasha",
    designation: "VP Engineering",
    email: "s***@halcyondata.com",
  },
  {
    company: "Verdant Systems",
    website: "verdantsys.com",
    why: "precision match: leadership change",
    contact: "Iris",
    designation: "Head of Product",
    email: "i***@verdantsys.com",
  },
  {
    company: "Quillow",
    website: "quillow.app",
    why: "precision match: hiring spike",
    contact: "Nolan",
    designation: "Eng Manager",
    email: "n***@quillow.app",
  },
  {
    company: "Brightloop",
    website: "brightloop.io",
    why: "precision match: traffic surge",
    contact: "Priya",
    designation: "Growth Lead",
    email: "p***@brightloop.io",
  },
] as const;

const th = "px-3 py-2 text-left text-[11px] font-medium text-black/40";
const td = "px-3 py-2.5 text-sm text-black whitespace-nowrap";
const row = "border-t border-black/10 hover:bg-black/[0.03] transition-colors";

function CompanyTable() {
  return (
    <table className="w-full min-w-[560px] border-collapse">
      <thead>
        <tr>
          <th className={th}>No.</th>
          <th className={th}>Company</th>
          <th className={th}>Score</th>
          <th className={th}>Trigger</th>
          <th className={th}>Reasoning</th>
          <th className={th}>Role</th>
          <th className={th}>Contact</th>
        </tr>
      </thead>
      <tbody>
        {companyLeads.map((lead, i) => (
          <tr key={lead.company} className={row}>
            <td className={`${td} text-black/40`}>{i + 1}</td>
            <td className={`${td} font-medium`}>{lead.company}</td>
            <td className={td}>
              <ScorePill value={lead.score} />
            </td>
            <td className={td}>
              <Blur>{lead.trigger}</Blur>
            </td>
            <td className={`${td} max-w-[180px] overflow-hidden text-ellipsis`}>
              <Blur>{lead.reasoning}</Blur>
            </td>
            <td className={`${td} text-black/40`}>{lead.role}</td>
            <td className={td}>{lead.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function IntentTable() {
  return (
    <table className="w-full min-w-[480px] border-collapse">
      <thead>
        <tr>
          <th className={th}>No.</th>
          <th className={th}>Company</th>
          <th className={th}>Stated Intent</th>
          <th className={th}>Role</th>
          <th className={th}>Contact</th>
        </tr>
      </thead>
      <tbody>
        {intentLeads.map((lead, i) => (
          <tr key={lead.company} className={row}>
            <td className={`${td} text-black/40`}>{i + 1}</td>
            <td className={`${td} font-medium`}>{lead.company}</td>
            <td className={`${td} max-w-[220px] overflow-hidden text-ellipsis`}>
              <Blur>{lead.intent}</Blur>
            </td>
            <td className={`${td} text-black/40`}>{lead.role}</td>
            <td className={td}>{lead.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ColdTable() {
  return (
    <table className="w-full min-w-[560px] border-collapse">
      <thead>
        <tr>
          <th className={th}>No.</th>
          <th className={th}>Company</th>
          <th className={th}>Contact</th>
          <th className={th}>Title</th>
          <th className={th}>Industry</th>
          <th className={th}>Founded</th>
          <th className={th}>Revenue</th>
        </tr>
      </thead>
      <tbody>
        {coldLeads.map((lead, i) => (
          <tr key={lead.company} className={row}>
            <td className={`${td} text-black/40`}>{i + 1}</td>
            <td className={`${td} font-medium`}>{lead.company}</td>
            <td className={td}>{lead.contact}</td>
            <td className={`${td} text-black/40`}>{lead.title}</td>
            <td className={`${td} text-black/40`}>{lead.industry}</td>
            <td className={`${td} text-black/40`}>{lead.founded}</td>
            <td className={`${td} font-mono text-xs text-black/40`}>
              {lead.revenue}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TargetTable() {
  return (
    <table className="w-full min-w-[600px] border-collapse">
      <thead>
        <tr>
          <th className={th}>No.</th>
          <th className={th}>Company</th>
          <th className={th}>Website</th>
          <th className={th}>Why in ICP</th>
          <th className={th}>Contact</th>
          <th className={th}>Designation</th>
          <th className={th}>Email</th>
        </tr>
      </thead>
      <tbody>
        {targetList.map((lead, i) => (
          <tr key={lead.company} className={row}>
            <td className={`${td} text-black/40`}>{i + 1}</td>
            <td className={`${td} font-medium`}>{lead.company}</td>
            <td className={`${td} text-black/70 underline decoration-black/20 underline-offset-2`}>
              {lead.website}
            </td>
            <td className={`${td} max-w-[180px] overflow-hidden text-ellipsis text-black/40`}>
              {lead.why}
            </td>
            <td className={td}>{lead.contact}</td>
            <td className={`${td} text-black/40`}>{lead.designation}</td>
            <td className={`${td} font-mono text-xs text-black/40`}>
              {lead.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const TABLES: Record<TabId, React.FC> = {
  company: CompanyTable,
  intent: IntentTable,
  cold: ColdTable,
  target: TargetTable,
};

// Auto-cycle sequence on load: walk through all four tabs once, then
// settle on "Intent Leads" and wait for user interaction.
const AUTO_SEQUENCE: TabId[] = ["company", "intent", "cold", "target", "intent"];

export function LeadsExplorer() {
  const [active, setActive] = useState<TabId>("company");
  const [userInteracted, setUserInteracted] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotionRef.current) {
      setActive("intent");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (i >= AUTO_SEQUENCE.length) {
        clearInterval(interval);
        return;
      }
      setUserInteracted((interacted) => {
        if (!interacted) setActive(AUTO_SEQUENCE[i]);
        return interacted;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  function selectTab(id: TabId) {
    setUserInteracted(true);
    setActive(id);
  }

  const Table = TABLES[active];
  const instant = reducedMotionRef.current;

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-black/15 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)]">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-black/10 bg-white px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-black/25" />
          <span className="h-2.5 w-2.5 rounded-full border border-black/25" />
          <span className="h-2.5 w-2.5 rounded-full border border-black/25" />
        </div>
        <div className="flex items-center gap-1.5">
          {INTEGRATIONS.map((integration) => (
            <span
              key={integration.name}
              className="flex h-6 w-6 items-center justify-center rounded-sm border border-black/15"
              title={integration.name}
            >
              <Image
                src={integration.src}
                alt={integration.name}
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />
            </span>
          ))}
        </div>
      </div>

      {/* tab bar */}
      <div className="leads-scroll flex items-center gap-1 overflow-x-auto border-b border-black/10 bg-white px-3 py-2">
        {TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => selectTab(tab.id)}
              className={`shrink-0 rounded-sm px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
                isActive
                  ? "bg-black text-white"
                  : "text-black/40 hover:bg-black/[0.05] hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* table */}
      <div className="leads-scroll max-h-[240px] overflow-auto">
        {instant ? (
          <Table />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <Table />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <style jsx global>{`
        .leads-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.06);
        }
        .leads-scroll::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .leads-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.06);
        }
        .leads-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 0;
        }
        .leads-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.45);
        }
        .leads-scroll::-webkit-scrollbar-corner {
          background: rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </div>
  );
}
