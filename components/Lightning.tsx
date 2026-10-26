"use client";

import { motion } from "framer-motion";

const main =
  "M150 0 L118 130 L156 146 L84 290 L124 304 L46 470 L92 482 L30 640";
const branches = ["M156 146 L196 214 L172 226 L214 300", "M84 290 L40 340 L62 350 L20 410"];

/** Rayo que cae de forma intermitente detrás de la foto. */
export default function Lightning({ className = "" }: { className?: string }) {
  const flicker = {
    pathLength: [0, 1, 1, 1, 1],
    opacity: [0, 1, 0.25, 1, 0],
  };
  const timing = {
    duration: 1.3,
    times: [0, 0.18, 0.4, 0.55, 1],
    repeat: Infinity,
    repeatDelay: 3,
    ease: "easeOut" as const,
  };

  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-electric/40 blur-3xl"
        animate={{ opacity: [0, 0.9, 0.2, 0.7, 0] }}
        transition={timing}
      />
      <svg viewBox="0 0 240 650" className="relative h-full w-full overflow-visible">
        {[main, ...branches].map((d, i) => (
          <g key={d}>
            <motion.path
              d={d}
              fill="none"
              stroke="#3b8bff"
              strokeWidth={i === 0 ? 14 : 8}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ filter: "blur(10px)" }}
              animate={flicker}
              transition={timing}
            />
            <motion.path
              d={d}
              fill="none"
              stroke="#eaf5ff"
              strokeWidth={i === 0 ? 4 : 2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
              animate={flicker}
              transition={timing}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
