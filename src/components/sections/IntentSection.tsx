"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { ShimmerText } from "@/components/ui/ShimmerText";
import { LeadsExplorer } from "@/components/sections/LeadsExplorer";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { EnrichmentPipeline } from "@/components/sections/EnrichmentPipeline";
import { HandWrittenTitle } from "@/components/ui/HandWrittenTitle";

export function IntentSection({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-20 md:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_0%,rgba(0,0,0,0.5)_40%,transparent_85%)]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative grid w-full min-w-0 items-start gap-x-10 gap-y-8 lg:grid-cols-[minmax(0,380px)_1fr]">
        {/* left: heading + copy, integrations below */}
        <div className="flex min-w-0 flex-col gap-8">
          <div className="max-w-md">
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-black md:text-5xl">
              {"What is Intent"}
              <ShimmerText
                className="relative top-[0.14em] align-baseline"
                duration={1.2}
                delay={1}
              >
                ?
              </ShimmerText>
            </h2>
            <p className="mt-5 font-heading text-lg font-semibold leading-snug">
              <span className="text-black/40">
                Intent isn&apos;t a score.
              </span>{" "}
              <span className="text-black">
                It&apos;s a person telling you, in public, that they&apos;re{" "}
                <span className="rounded-sm bg-black px-1 text-white">
                  ready to buy
                </span>{" "}
                — before they ever say it to you.
              </span>
            </p>
          </div>
          <IntegrationsGrid />
          <HandWrittenTitle title="Qualified Intent Lead" className="lg:hidden" />
        </div>

        {/* right: leads explorer, enrichment pipeline below */}
        <div className="flex min-w-0 flex-col items-center gap-8 lg:items-end">
          <LeadsExplorer />
          <EnrichmentPipeline />
        </div>

        <div className="pointer-events-none absolute top-[62%] left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <HandWrittenTitle title="Qualified Intent Lead" />
        </div>
      </div>
    </motion.section>
  );
}
