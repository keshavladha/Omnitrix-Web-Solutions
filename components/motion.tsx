"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll, useReducedMotion } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionA = motion.a;
export const MotionButton = motion.button;

/**
 * Reveal — Viewport-triggered fade-in with upward motion.
 * Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: PropsWithChildren<{ delay?: number; className?: string }>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0.3 : 1.2, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * MagneticButton — Premium CTA with magnetic cursor attraction.
 * Disables magnetic effect if prefers-reduced-motion is true.
 */
export function MagneticButton({
  children,
  href,
  variant = "primary",
}: PropsWithChildren<{ href: string; variant?: "primary" | "secondary" }>) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 190, damping: 18 });
  const springY = useSpring(y, { stiffness: 190, damping: 18 });
  const rectRef = useRef<DOMRect | null>(null);

  return (
    <motion.a
      href={href}
      className={
        variant === "primary"
          ? "inline-flex min-h-[52px] items-center justify-center rounded-full px-8 text-sm font-bold cursor-pointer relative overflow-hidden"
          : "inline-flex min-h-[52px] items-center justify-center rounded-full px-8 text-sm font-semibold text-white cursor-pointer relative overflow-hidden"
      }
      style={{ 
        x: shouldReduceMotion ? 0 : springX, 
        y: shouldReduceMotion ? 0 : springY, 
        color: variant === "primary" ? "#050608" : undefined,
        // Material properties
        background: variant === "primary" 
          ? "linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        boxShadow: variant === "primary"
          ? "inset 0 1px 0 rgba(255,255,255,1), 0 8px 24px -8px rgba(59,130,246,0.5), 0 0 0 1px rgba(255,255,255,0.8)"
          : "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
        backdropFilter: variant === "primary" ? "none" : "blur(12px)",
      }}
      onMouseEnter={(event) => {
        if (shouldReduceMotion) return;
        rectRef.current = event.currentTarget.getBoundingClientRect();
      }}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;
        let rect = rectRef.current;
        if (!rect) {
          rect = event.currentTarget.getBoundingClientRect();
          rectRef.current = rect;
        }
        x.set((event.clientX - rect.left - rect.width / 2) * 0.15);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.15);
      }}
      onMouseLeave={() => {
        if (shouldReduceMotion) return;
        rectRef.current = null;
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
    >
      {children}
    </motion.a>
  );
}

/**
 * TiltCard — Subtle 3D perspective tilt on hover.
 * Disables tilt if prefers-reduced-motion is true.
 */
export function TiltCard({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const shouldReduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springMx = useSpring(mx, { stiffness: 150, damping: 20 });
  const springMy = useSpring(my, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springMy, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springMx, [-0.5, 0.5], [-3, 3]);

  const rectRef = useRef<DOMRect | null>(null);

  return (
    <motion.div
      className={className}
      style={{ 
        rotateX: shouldReduceMotion ? 0 : rotateX, 
        rotateY: shouldReduceMotion ? 0 : rotateY, 
        transformStyle: shouldReduceMotion ? "flat" : "preserve-3d",
        // Glass materiality
        background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.02), 0 20px 40px -10px rgba(0,0,0,0.5)",
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={(event) => {
        if (shouldReduceMotion) return;
        rectRef.current = event.currentTarget.getBoundingClientRect();
      }}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;
        let rect = rectRef.current;
        if (!rect) {
          rect = event.currentTarget.getBoundingClientRect();
          rectRef.current = rect;
        }
        mx.set((event.clientX - rect.left) / rect.width - 0.5);
        my.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        if (shouldReduceMotion) return;
        rectRef.current = null;
        mx.set(0);
        my.set(0);
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ThreeDReveal — Scroll-driven 3D perspective entrance.
 * Disables 3D effects and falls back to simple fade if prefers-reduced-motion is true.
 */
export function ThreeDReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.35], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.35], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 85, damping: 18 });
  const smoothScale = useSpring(scale, { stiffness: 85, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 85, damping: 18 });
  const smoothOpacity = useSpring(opacity, { stiffness: 85, damping: 18 });

  if (shouldReduceMotion) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.3, delay: 0 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className={className}
      style={{
        perspective: 1200,
        rotateX: smoothRotateX,
        scale: smoothScale,
        y: smoothY,
        opacity: smoothOpacity,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
