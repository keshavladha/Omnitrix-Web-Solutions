"use client";

import { MagneticButton } from "@/components/motion";
import { ArchitectureEngine } from "@/components/architecture-engine";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Animated count-up hook ──
function useCountUp(target: number, duration: number = 1.5, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, inView]);

  return count;
}

// ── Cinematic Masked Typography Reveal ──
function MaskedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="font-display max-w-2xl text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] align-top py-1">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 2 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4 + i * 0.08,
              ease: [0.16, 1, 0.3, 1], // Expansive Apple-style easing
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

// ── Trust Metric ──
function TrustMetric({ value, suffix, label, inView, delay }: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCountUp(value, 2, inView);
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
      animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="font-display text-2xl font-semibold text-white">
        {count}{suffix}
      </div>
      <div className="mt-1 text-xs font-medium text-slate-400">{label}</div>
    </motion.div>
  );
}

export function Hero() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: "-40px" });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-24 pt-32">
      <div className="container relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] z-10">
        
        {/* ── Left Column: Copy ── */}
        <div>
          {/* Eyebrow */}
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-400">
                Web Solutions Studio
              </span>
            </motion.div>
          </div>

          {/* Headline */}
          <MaskedHeadline text="We engineer websites that grow businesses." />

          {/* Supporting paragraph */}
          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-slate-400/90"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium design, conversion strategy, and full-stack development for companies that need a serious digital presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="/contact">Start a Project</MagneticButton>
            <MagneticButton href="/#projects" variant="secondary">View Our Work</MagneticButton>
          </motion.div>

          {/* Trust Metrics */}
          <div ref={metricsRef} className="mt-14 flex gap-10">
            <TrustMetric value={50} suffix="+" label="Projects Delivered" inView={metricsInView} delay={1.2} />
            <div className="w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <TrustMetric value={99} suffix="%" label="Lighthouse Score" inView={metricsInView} delay={1.3} />
            <div className="w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <TrustMetric value={5} suffix=" day" label="Avg. Delivery" inView={metricsInView} delay={1.4} />
          </div>
        </div>

        {/* ── Right Column: Architecture Engine ── */}
        <motion.div
          className="relative mx-auto flex items-center justify-center lg:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArchitectureEngine />
        </motion.div>
      </div>
    </section>
  );
}
