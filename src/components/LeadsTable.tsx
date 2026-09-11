"use client";

import { useMemo, useState } from "react";
import { Search, Bookmark, SquarePen } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/**
 * LeadsTable
 * ----------
 * A light, dense leads table with:
 *  - Top tab bar ("Company Leads" / "Intent Leads" / "Cold Leads" / "Target List")
 *  - Row count + "awaiting contact" summary
 *  - "Find Contacts" primary action
 *  - Row checkboxes, Stated Intent copy, Role, LinkedIn contact link, Save/Edit actions
 *
 * Drop into `components/leads-table.tsx` and render with
 * `<LeadsTable tabs={tabs} activeTab={activeTab} leads={leads} />`.
 */

export type LeadTab = "Company Leads" | "Intent Leads" | "Cold Leads" | "Target List";

export interface Lead {
  id: string;
  company: string;
  statedIntent: string;
  role?: string; // "—" when unknown
  contactName: string;
  linkedinUrl: string;
  saved?: boolean;
}

const TABS: LeadTab[] = ["Intent Leads"];

export default function LeadsTable({
  leads,
  activeTab = "Intent Leads",
  onTabChange,
  onFindContacts,
  onSave,
  onEdit,
}: {
  leads: Lead[];
  activeTab?: LeadTab;
  onTabChange?: (tab: LeadTab) => void;
  onFindContacts?: () => void;
  onSave?: (leadId: string) => void;
  onEdit?: (leadId: string) => void;
}) {
  const [tab, setTab] = useState<LeadTab>(activeTab);

  const awaitingCount = useMemo(() => leads.length, [leads]); // swap for real "awaiting contact" count

  function changeTab(t: LeadTab) {
    setTab(t);
    onTabChange?.(t);
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white font-sans text-xs text-gray-900">
      {/* Tabs */}
      <div className="flex items-center border-b border-gray-200 px-2.5">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => changeTab(t)}
            className={`font-heading relative px-2.5 py-2 text-xs font-medium transition-colors ${
              tab === t ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t}
            {tab === t && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-600" />
            )}
          </button>
        ))}
      </div>

      {/* Summary bar */}
      <div className="flex items-center justify-between px-2.5 py-2">
        <div className="text-[11px] text-gray-500">
          <span className="font-medium text-gray-900">{leads.length} leads</span>
          <span className="mx-1">·</span>
          {awaitingCount} awaiting contact
        </div>
        <button
          onClick={onFindContacts}
          className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[11px] font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
        >
          <Search className="h-3 w-3" />
          Find Contacts
        </button>
      </div>

      {/* Table */}
      <div className="max-h-80 overflow-y-auto overflow-x-auto">
        <table className="w-full min-w-[600px] table-fixed border-collapse text-left text-xs">
          <thead className="sticky top-0 z-10">
            <tr className="font-heading bg-gray-100 text-[10px] text-gray-500">
              <th className="w-6 border border-gray-200 px-1.5 py-1.5 font-normal">No.</th>
              <th className="w-32 border border-gray-200 px-1.5 py-1.5 font-normal">Company</th>
              <th className="border border-gray-200 px-1.5 py-1.5 font-normal">Stated Intent</th>
              <th className="w-14 border border-gray-200 px-1.5 py-1.5 font-normal">Role</th>
              <th className="w-28 border border-gray-200 px-1.5 py-1.5 font-normal">Contact</th>
              <th className="w-24 border border-gray-200 px-1.5 py-1.5 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, i) => (
              <tr
                key={lead.id}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-200 px-1.5 py-1.5 text-gray-400">{i + 1}</td>
                <td className="truncate border border-gray-200 px-1.5 py-1.5 font-medium text-gray-900">
                  {lead.company}
                </td>
                <td className="truncate border border-gray-200 px-1.5 py-1.5 text-gray-600">
                  {lead.statedIntent}
                </td>
                <td className="border border-gray-200 px-1.5 py-1.5 text-gray-400">
                  {lead.role || "—"}
                </td>
                <td className="truncate border border-gray-200 px-1.5 py-1.5">
                  <a
                    href={lead.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <LinkedinIcon className="h-3 w-3 shrink-0 rounded bg-blue-600 p-0.5 text-white" />
                    <span className="truncate">{lead.contactName}</span>
                  </a>
                </td>
                <td className="border border-gray-200 px-1.5 py-1.5">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSave?.(lead.id)}
                      className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-[10px] font-medium text-white hover:bg-blue-700"
                    >
                      <Bookmark className="h-2.5 w-2.5" />
                      Save
                    </button>
                    <button
                      onClick={() => onEdit?.(lead.id)}
                      className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700"
                      aria-label="Edit lead"
                    >
                      <SquarePen className="h-2.5 w-2.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
