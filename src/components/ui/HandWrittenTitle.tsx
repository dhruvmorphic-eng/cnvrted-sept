"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function HandWrittenTitle({
  title = "Hand Written",
  subtitle,
  className = "",
}: HandWrittenTitleProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] },
        opacity: { duration: 0.4 },
      },
    },
  };

  return (
    <div className={`relative max-w-xs py-6 ${className}`}>
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 600 260"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="h-full w-full"
        >
          <motion.path
            d="M 475 45
               C 625 150, 525 240, 300 260
               C 125 260, 75 240, 75 150
               C 75 60, 175 40, 300 40
               C 425 40, 475 90, 475 90"
            fill="none"
            strokeWidth="7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={draw}
            className="text-black opacity-90"
          />
        </motion.svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.h3
          className="font-heading text-2xl font-extrabold tracking-tight text-black"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {title}
        </motion.h3>
        {subtitle && (
          <motion.p
            className="mt-1 text-sm text-black/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
