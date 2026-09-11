"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = [
  "Company match",
  "Email found",
  "Phone verified",
  "LinkedIn matched",
  "Signal confirmed",
];

const STEP_STAGGER_MS = 450;
const STEP_LEAD_MS = 300; // delay before the first step lights up
const HOLD_MS = 2000;
const FADE_MS = 400;

export function EnrichmentPipeline() {
  const [cycle, setCycle] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion.current) {
      setActiveCount(STEPS.length);
      return;
    }

    function clearAll() {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    }

    clearAll();
    setVisible(true);
    setActiveCount(0);

    STEPS.forEach((_, i) => {
      timers.current.push(
        setTimeout(
          () => setActiveCount(i + 1),
          STEP_LEAD_MS + i * STEP_STAGGER_MS,
        ),
      );
    });

    const lastStepAt = STEP_LEAD_MS + (STEPS.length - 1) * STEP_STAGGER_MS;
    const holdUntil = lastStepAt + HOLD_MS;

    timers.current.push(setTimeout(() => setVisible(false), holdUntil));
    timers.current.push(
      setTimeout(() => setCycle((c) => c + 1), holdUntil + FADE_MS),
    );

    return clearAll;
  }, [cycle]);

  const complete = activeCount >= STEPS.length;
  const instant = reducedMotion.current;

  return (
    <div className="w-full max-w-xs rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={cycle}
            initial={instant ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={instant ? undefined : { opacity: 0 }}
            transition={{ duration: FADE_MS / 1000, ease: "easeOut" }}
          >
            {/* header */}
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/30 font-heading text-sm font-bold text-black">
                N
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-black">
                  Nyra Labs
                </p>
                <p className="text-xs text-black/40">
                  {complete ? "Enriched" : "Enriching..."}
                </p>
              </div>
            </div>

            {/* waterfall steps */}
            <div className="mt-4">
              {STEPS.map((label, i) => {
                const active = i < activeCount;
                const isLast = i === STEPS.length - 1;
                return (
                  <div key={label}>
                    <div className="flex items-center gap-3 py-1.5">
                      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                        <motion.span
                          className="absolute inset-0 rounded-full border-2"
                          animate={{
                            borderColor: active
                              ? "#000000"
                              : "rgba(0,0,0,0.2)",
                            backgroundColor: active
                              ? "#000000"
                              : "rgba(0,0,0,0)",
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                        <AnimatePresence>
                          {active && (
                            <motion.span
                              initial={
                                instant ? false : { scale: 0, opacity: 0 }
                              }
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                duration: 0.28,
                                ease: [0.34, 1.56, 0.64, 1],
                              }}
                              className="relative"
                            >
                              <Check
                                className="h-3 w-3 text-white"
                                strokeWidth={3}
                              />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </span>
                      <motion.span
                        className="text-sm"
                        animate={{
                          color: active ? "#000000" : "rgba(0,0,0,0.4)",
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        {label}
                      </motion.span>
                    </div>
                    {!isLast && (
                      <div className="ml-[9px] h-3 w-px overflow-hidden bg-black/10">
                        <motion.div
                          className="h-full w-full bg-black"
                          initial={false}
                          animate={{ scaleY: active ? 1 : 0 }}
                          style={{ originY: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* completion state */}
            <AnimatePresence>
              {complete && (
                <motion.div
                  initial={instant ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-4 border-t border-black/10 pt-3"
                >
                  <p className="font-mono text-xs text-black">
                    5/5 enriched
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
