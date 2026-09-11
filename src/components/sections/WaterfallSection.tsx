"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const providers = [
  {
    name: "Provider A",
    result: "No match",
    detail: "Queried first — no verified contact record found for this lead.",
  },
  {
    name: "Provider B",
    result: "No match",
    detail: "Queried next — still no verified phone or email on file.",
  },
  {
    name: "Provider C",
    result: "Match found",
    detail: "Queried last — returned a verified phone number and email.",
  },
];

export function WaterfallSection() {
  return (
    <section className="flex min-h-screen items-center bg-white px-6 py-20 md:px-12">
      <div className="mx-auto w-full max-w-2xl">
        <RevealOnScroll effect="fade-in-up">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-black md:text-4xl">
            Waterfall enrichment
          </h2>
          <p className="mt-4 max-w-xl text-base text-black/60">
            We query multiple data providers in sequence, one after another, until a verified phone number and email are found.
          </p>
        </RevealOnScroll>

        <RevealOnScroll effect="fade-in-up" delay={0.1} className="mt-10">
          <div className="rounded-lg border border-black/10 bg-white p-4">
            <p className="text-xs font-medium text-black/40">Lead</p>
            <p className="mt-1 font-heading text-sm font-medium text-black">
              Piyush Singhal
            </p>
            <p className="mt-2 text-xs text-black/40">Phone — not found</p>
            <p className="text-xs text-black/40">Email — not found</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll effect="fade-in-up" delay={0.2} className="mt-4">
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="Provider C"
            className="overflow-hidden rounded-lg border border-black/10"
          >
            {providers.map((provider, i) => (
              <Accordion.Item
                key={provider.name}
                value={provider.name}
                className={i !== 0 ? "border-t border-black/10" : ""}
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={`group flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-black/[0.02] ${
                      provider.result === "Match found"
                        ? "bg-ai-sparkle/5"
                        : "bg-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-heading text-sm font-medium text-black">
                        {provider.name}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          provider.result === "Match found"
                            ? "text-ai-sparkle"
                            : "text-black/40"
                        }`}
                      >
                        {provider.result}
                      </span>
                    </span>
                    <span className="shrink-0 text-lg text-black/40 transition-transform group-data-[state=open]:rotate-45">
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-black/60 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-4 pb-4">{provider.detail}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </RevealOnScroll>

        <RevealOnScroll effect="fade-in-up" delay={0.3} className="mt-4">
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="enriched"
            className="overflow-hidden rounded-lg border border-ai-sparkle/30"
          >
            <Accordion.Item value="enriched">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between bg-ai-sparkle/5 px-4 py-3 text-left transition-colors hover:bg-ai-sparkle/10">
                  <span className="text-xs font-medium text-ai-sparkle">
                    Enriched
                  </span>
                  <span className="shrink-0 text-lg text-ai-sparkle/60 transition-transform group-data-[state=open]:rotate-45">
                    +
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden bg-ai-sparkle/5 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-4 pb-4">
                  <p className="font-heading text-sm font-medium text-black">
                    Piyush Singhal
                  </p>
                  <p className="mt-2 text-xs text-black/70">+1 (555) 204-8831</p>
                  <p className="text-xs text-black/70">piyush@buildup.io</p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </RevealOnScroll>
      </div>
    </section>
  );
}
