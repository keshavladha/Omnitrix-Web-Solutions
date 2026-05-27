"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, type PropsWithChildren } from "react";

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionA = motion.a;
export const MotionButton = motion.button;

export function Reveal({
  children,
  delay = 0,
  className,
}: PropsWithChildren<{ delay?: number; className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  href,
  variant = "primary",
}: PropsWithChildren<{ href: string; variant?: "primary" | "secondary" }>) {
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
          ? "inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-obsidian-lowest shadow-[0_0_36px_rgba(64,232,255,0.28)] transition hover:brightness-110 cursor-pointer"
          : "inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-white/5 px-8 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10 hover:border-cyan-200/40 cursor-pointer"
      }
      style={{ x: springX, y: springY, color: variant === "primary" ? "#02040a" : undefined }}
      onMouseEnter={(event) => {
        rectRef.current = event.currentTarget.getBoundingClientRect();
      }}
      onMouseMove={(event) => {
        let rect = rectRef.current;
        if (!rect) {
          rect = event.currentTarget.getBoundingClientRect();
          rectRef.current = rect;
        }
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        rectRef.current = null;
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

export function TiltCard({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  
  // Use springs to smooth out the tilt values and prevent abrupt jumps
  const springMx = useSpring(mx, { stiffness: 150, damping: 20 });
  const springMy = useSpring(my, { stiffness: 150, damping: 20 });
  
  // Transform from the smooth spring motion values
  const rotateX = useTransform(springMy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springMx, [-0.5, 0.5], [-6, 6]);
  
  const rectRef = useRef<DOMRect | null>(null);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseEnter={(event) => {
        rectRef.current = event.currentTarget.getBoundingClientRect();
      }}
      onMouseMove={(event) => {
        let rect = rectRef.current;
        if (!rect) {
          rect = event.currentTarget.getBoundingClientRect();
          rectRef.current = rect;
        }
        mx.set((event.clientX - rect.left) / rect.width - 0.5);
        my.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        rectRef.current = null;
        mx.set(0);
        my.set(0);
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export function ThreeDReveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Beautiful, futuristic 3D rotation and rise effect during scroll entry
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.22], [0, 1]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 85, damping: 18 });
  const smoothScale = useSpring(scale, { stiffness: 85, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 85, damping: 18 });
  const smoothOpacity = useSpring(opacity, { stiffness: 85, damping: 18 });

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
