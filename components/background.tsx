"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(18);
  
  // Track cursor with Google Blue brand radial gradient
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(66, 133, 244, 0.15), transparent 24rem)`;

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 100);
      mouseY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ background }} />
      <div className="grid-mask absolute inset-0 opacity-80" />
      
      {/* Google Material-style floating geometry */}
      <motion.div
        className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full border border-blue-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full border border-dashed border-green-500/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[8%] top-[32%] h-px w-52 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        animate={{ x: [0, 48, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] h-64 w-px bg-gradient-to-b from-transparent via-red-400/20 to-transparent"
        animate={{ y: [0, 48, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
