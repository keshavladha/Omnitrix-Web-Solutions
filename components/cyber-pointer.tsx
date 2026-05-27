"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CyberPointer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isTouch, setIsTouch] = useState(true);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physical spring settings for outer circle
  const springConfig = { stiffness: 220, damping: 24, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect if screen supports hover (desktop) or is touch only
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsTouch(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouch(!e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Scalable Hover Delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest("a, button, [data-hover-glow], [role='button'], input[type='submit']");
      
      if (hoverEl) {
        setIsHovered(true);
        const text = hoverEl.getAttribute("data-hover-text");
        setHoverText(text || "");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest("a, button, [data-hover-glow], [role='button'], input[type='submit']");
      
      if (hoverEl) {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible, isTouch]);

  // Bypass on touch screens
  if (isTouch) return null;

  return (
    <>
      {/* 1. Precise Center Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible ? 1 : 0,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 30 }}
      />

      {/* 2. Physics-Elastic Custom Outer Cyber Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          width: isHovered ? (hoverText ? 72 : 44) : 26,
          height: isHovered ? (hoverText ? 72 : 44) : 26,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovered ? "rgba(47, 125, 255, 0.6)" : "rgba(64, 232, 255, 0.4)",
          backgroundColor: isHovered ? "rgba(47, 125, 255, 0.08)" : "rgba(64, 232, 255, 0.03)",
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        {/* Dynamic Micro-Label Inside the Expanded Hover Ring */}
        {isHovered && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-black uppercase tracking-widest text-cyan-300 font-display"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
