"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const faqs = [
  {
    q: "How long does it take to deploy an agent?",
    a: "Most teams have their first agent live in under an hour — connect a data source, describe the task, and deploy.",
  },
  {
    q: "Can agents work with our existing tools?",
    a: "Yes. Intellune integrates with your CRM, helpdesk, and internal APIs out of the box, plus custom webhooks.",
  },
  {
    q: "What models power the agents?",
    a: "You can choose from GPT-4o, Claude, Gemini, Mistral, Grok, or DeepSeek per-agent, or let Intellune route automatically.",
  },
  {
    q: "Is my data used to train models?",
    a: "No. Your data stays isolated per workspace and is never used for third-party model training.",
  },
];

export function FaqAccordion() {
  return (
    <section id="faq" className="px-6 py-20 md:py-28">
      <RevealOnScroll effect="fade-in-up" className="mx-auto max-w-2xl">
        <h2 className="font-heading text-center text-3xl font-medium tracking-tight text-foreground">
          Frequently asked questions
        </h2>
        <Accordion.Root type="single" collapsible className="mt-10 flex flex-col">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.q}
              value={faq.q}
              className="border-b border-border"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-muted-foreground [&[data-state=open]>span]:rotate-45">
                  {faq.q}
                  <span className="ml-4 text-lg text-muted-foreground transition-transform">
                    +
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="pb-4">{faq.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </RevealOnScroll>
    </section>
  );
}
