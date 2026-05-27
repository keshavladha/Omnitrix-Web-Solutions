"use client";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import { MatrixBackground } from "./matrix-background";

export function AmbientBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(18);
  
  // Track cursor with Premium Neon Tech Cyan brand radial gradient
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(64, 232, 255, 0.08), transparent 26rem)`;

  // Scroll tracking for parallax background movement
  const { scrollY } = useScroll();

  // Scroll mapping transforms for depth layers
  // Layer 1 (Tech grid): shifts at mechanical speed
  const yGrid = useTransform(scrollY, [0, 4000], [0, -350]);
  
  // Layer 2 (Orbs and rings): shifts at high speed, creating dramatic relative depth
  const yOrbLeft = useTransform(scrollY, [0, 4000], [0, -600]);
  const yOrbRight = useTransform(scrollY, [0, 4000], [0, -1000]);

  // Layer 3 (Foreground accent lines): slides dynamically
  const yAccents = useTransform(scrollY, [0, 4000], [0, -800]);

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
      
      {/* Dynamic interactive Canvas matrix background particles layer */}
      <MatrixBackground />
      
      {/* Parallax sliding futuristic tech grid */}
      <motion.div className="grid-mask absolute inset-0 opacity-80" style={{ y: yGrid }} />

      {/* Layer 2: Giant Ambient Glowing Spheres (Scroll-driven Parallax Orbs) */}
      <motion.div
        className="absolute left-[-15%] top-[20vh] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(64,232,255,0.05),transparent_70%)] blur-3xl animate-pulse"
        style={{ y: yOrbLeft }}
      />
      <motion.div
        className="absolute right-[-10%] top-[55vh] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(47,125,255,0.04),transparent_70%)] blur-3xl"
        style={{ y: yOrbRight }}
      />

      {/* Layer 3: High-tech linear accents that move at a different parallax rate */}
      <motion.div
        className="absolute left-[8%] top-[32%] h-px w-52 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        style={{ y: yAccents }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] h-64 w-px bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
        style={{ y: yAccents }}
      />
    </div>
  );
}
