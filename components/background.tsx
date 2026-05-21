"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(18);
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(64, 232, 255, 0.18), transparent 22rem)`;

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
      <motion.div
        className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full border border-cyan-200/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-[8%] top-[32%] h-px w-52 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
        animate={{ x: [0, 38, 0], opacity: [0.22, 0.55, 0.22] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] h-64 w-px bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
        animate={{ y: [0, 42, 0], opacity: [0.18, 0.5, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
