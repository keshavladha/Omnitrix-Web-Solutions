"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(18);
  
  // Track cursor with Google Blue brand radial gradient
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(66, 133, 244, 0.15), transparent 24rem)`;

  // Scroll tracking for parallax background movement
  const { scrollY } = useScroll();

  // Scroll mapping transforms for depth layers
  // Layer 1 (Tech grid): shifts very slowly
  const yGrid = useTransform(scrollY, [0, 4000], [0, -180]);
  
  // Layer 2 (Orbs and rings): shifts at medium speed, creating relative movement
  const yOrbLeft = useTransform(scrollY, [0, 4000], [0, -320]);
  const yOrbRight = useTransform(scrollY, [0, 4000], [0, -640]);
  const rotateOrbs = useTransform(scrollY, [0, 4000], [0, 120]);

  // Layer 3 (Foreground accent lines): moves opposite/faster
  const yAccents = useTransform(scrollY, [0, 4000], [0, -450]);

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
      {/* Live mouse tracking background */}
      <motion.div className="absolute inset-0" style={{ background }} />
      
      {/* Parallax sliding futuristic tech grid */}
      <motion.div className="grid-mask absolute inset-0 opacity-80" style={{ y: yGrid }} />

      {/* Layer 2: Giant Ambient Glowing Spheres (Scroll-driven Parallax Orbs) */}
      <motion.div
        className="absolute left-[-15%] top-[20vh] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(66,133,244,0.06),transparent_70%)] blur-2xl"
        style={{ y: yOrbLeft }}
      />
      <motion.div
        className="absolute right-[-10%] top-[55vh] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.04),transparent_70%)] blur-2xl"
        style={{ y: yOrbRight }}
      />

      {/* Layer 3: High-tech linear accents that move at a different parallax rate */}
      <motion.div
        className="absolute left-[8%] top-[32%] h-px w-52 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        style={{ y: yAccents }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] h-64 w-px bg-gradient-to-b from-transparent via-red-400/20 to-transparent"
        style={{ y: yAccents }}
      />
    </div>
  );
}
