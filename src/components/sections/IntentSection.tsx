import LeadsTable from "@/components/LeadsTable";
import { sampleLeads } from "@/components/leads-sample-data";
import { ToolsMarquee } from "@/components/sections/ToolsMarquee";

export function IntentSection() {
  return (
    <section className="flex min-h-screen items-start bg-white px-6 pt-16 pb-16 md:px-12">
      <div className="w-full">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div>
            <h2 className="font-heading text-3xl font-medium tracking-tight text-black md:text-4xl">
              What is intent?
            </h2>
            <p className="mt-4 max-w-xl text-base text-black/60">
              Intent is the signal that a company is actively researching a solution like yours, right now.
            </p>
          </div>
          <LeadsTable leads={sampleLeads} activeTab="Intent Leads" />
        </div>
        <div className="max-w-[320px]">
          <ToolsMarquee />
        </div>
      </div>
    </section>
  );
}
