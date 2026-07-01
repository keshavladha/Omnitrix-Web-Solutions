"use client";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";

/**
 * Cinematic Environment Layer (Brahmastra V5)
 * 
 * Physical Lighting & Depth:
 * - Layer 0: The Deep Void (Obsidian base)
 * - Layer 1: Distant Parallax Stars (Slow)
 * - Layer 2: Midground Parallax Grid (Perspective tilt)
 * - Layer 3: Volumetric Spotlights (Scroll-linked to illuminate sections)
 * - Layer 4: Interactive Dust (Mouse-repellent)
 * - Layer 5: Machined Vignette & Optical Noise
 */

// ── Multi-Layer Parallax Dust/Stars ──
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; opacity: number; size: number; layer: number }[]>([]);
  const animationRef = useRef<number>(0);
  const scrollYRef = useRef(0);
  const mouseRef = useRef({ x: 500, y: 500 });

  const initParticles = useCallback((width: number, height: number) => {
    const particles = [];
    // Distant stars (Layer 1)
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: -0.05,
        opacity: 0.1 + Math.random() * 0.2,
        size: 0.5 + Math.random() * 1,
        layer: 1,
      });
    }
    // Midground dust (Layer 2)
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: -0.1 + (Math.random() - 0.5) * 0.1,
        opacity: 0.2 + Math.random() * 0.3,
        size: 1 + Math.random() * 1.5,
        layer: 2,
      });
    }
    // Foreground interactive dust (Layer 3)
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -0.2 + (Math.random() - 0.5) * 0.2,
        opacity: 0.4 + Math.random() * 0.4,
        size: 2 + Math.random() * 2,
        layer: 3,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const onScroll = () => { scrollYRef.current = window.scrollY; };
    const onMove = (e: MouseEvent) => { 
      mouseRef.current = { x: e.clientX, y: e.clientY }; 
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let lastScrollY = scrollYRef.current;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollDelta = scrollYRef.current - lastScrollY;
      lastScrollY = scrollYRef.current;

      for (const p of particlesRef.current) {
        // Base movement
        p.x += p.vx;
        p.y += p.vy;
        
        // Scroll Parallax (Foreground moves faster)
        p.y -= scrollDelta * (p.layer * 0.15);

        // Interactive repel for foreground dust
        if (p.layer === 3) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.x -= (dx / dist) * 1.5;
            p.y -= (dy / dist) * 1.5;
          }
        }

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Add subtle bloom to foreground particles
        if (p.layer === 3) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(59, 130, 246, ${p.opacity})`;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      }
      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  );
}

export function AmbientBackground() {
  const { scrollY, scrollYProgress } = useScroll();
  
  // Smooth the scroll progress for lighting transitions
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  // Dynamic Volumetric Lighting (Short Film Pacing)
  // Hero (0): Bright & central. About/Services (0.15-0.3): Dark valley. Projects/Process (0.5-0.8): Intense flare.
  const lightY = useTransform(smoothProgress, [0, 1], ["-20%", "120%"]);
  const lightScale = useTransform(smoothProgress, [0, 0.15, 0.5, 1], [1.2, 0.5, 1.5, 0.8]);
  const lightOpacity = useTransform(smoothProgress, [0, 0.15, 0.3, 0.5, 0.8, 1], [0.35, 0.05, 0.05, 0.25, 0.25, 0.1]);

  // Secondary ambient wash that moves in opposition
  const ambientY = useTransform(smoothProgress, [0, 1], ["120%", "-20%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030305]">
      
      {/* ── Midground Perspective Grid ── */}
      <div 
        className="absolute left-0 right-0 top-[20%] h-[120vh] opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) scale(2.5)',
          transformOrigin: 'top center',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />

      {/* ── Volumetric Light Sources (Screen Blending for physical light addition) ── */}
      <motion.div
        className="absolute left-[10%] right-[10%] aspect-square rounded-full mix-blend-screen"
        style={{
          y: lightY,
          scale: lightScale,
          opacity: lightOpacity,
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.3) 30%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <motion.div
        className="absolute -left-[20%] -right-[20%] aspect-square rounded-full mix-blend-screen"
        style={{
          y: ambientY,
          opacity: 0.1,
          background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.6) 0%, transparent 60%)",
          filter: "blur(140px)",
        }}
      />

      {/* ── Interactive & Parallax Dust ── */}
      <ParticleField />

      {/* ── Optical Noise & Vignette (Simulates camera sensor) ── */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(2, 3, 5, 0.8) 100%)",
        }}
      />
    </div>
  );
}
