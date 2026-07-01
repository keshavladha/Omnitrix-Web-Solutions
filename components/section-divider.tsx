"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * SectionDivider — PeachWeb-inspired scroll-animated expanding line.
 * Expands from center outward as the user scrolls into view,
 * with a subtle glow at the center point.
 */
export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="py-4">
      <div className="container relative flex items-center justify-center">
        <motion.div
          className="h-px w-full origin-center"
          style={{
            scaleX,
            opacity,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 20%, rgba(59,130,246,0.3) 50%, rgba(255,255,255,0.06) 80%, transparent 100%)",
          }}
        />
        {/* Center glow dot */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-1 rounded-full"
          style={{
            opacity,
            background: "#3b82f6",
            boxShadow: "0 0 12px 4px rgba(59,130,246,0.4)",
          }}
        />
      </div>
    </div>
  );
}
