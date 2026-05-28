"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

/**
 * Next.js App Router Special Template Component
 * 
 * Injected automatically on every navigation transition. Remounts on route changes,
 * creating a gorgeous, seamless grid-fade entrance animation (y: 10 -> 0, opacity: 0 -> 1)
 * across services, pricing, about, case studies, and payments subpages.
 */
export default function Template({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
