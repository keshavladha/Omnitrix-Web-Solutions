"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PropsWithChildren } from "react";

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

  return (
    <motion.a
      href={href}
      className={
        variant === "primary"
          ? "inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 cursor-pointer"
          : "inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/40 px-6 text-sm font-semibold text-slate-700 backdrop-blur transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
      }
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
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
  const rotateX = useTransform(my, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-6, 6]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width - 0.5);
        my.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
