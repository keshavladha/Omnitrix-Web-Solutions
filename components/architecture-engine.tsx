"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  Search, LayoutGrid, Palette, Server,
  Database, Plug, Rocket, Activity,
} from "lucide-react";

/**
 * Omnitrix Architecture Engine
 * 
 * The signature visual identity — an interactive system architecture
 * visualization representing software being engineered in real time.
 * 
 * 8 stages: Discovery → Architecture → UI Design → Backend →
 *           Database → API → Deployment → Monitoring
 * 
 * Each node pulses gently. SVG connections carry animated particles.
 * Hovering a node reveals its detail panel.
 */

const stages = [
  {
    id: "discovery",
    label: "Discovery",
    icon: Search,
    color: "#3b82f6",
    description: "Requirements analysis & technical blueprint",
    deliverables: ["Architecture Blueprint", "Tech Stack Config"],
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: LayoutGrid,
    color: "#6366f1",
    description: "System design & infrastructure planning",
    deliverables: ["Component Map", "Data Flow Diagram"],
  },
  {
    id: "design",
    label: "UI Design",
    icon: Palette,
    color: "#8b5cf6",
    description: "Interface design & interaction prototyping",
    deliverables: ["Design System", "Interactive Prototype"],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    color: "#6366f1",
    description: "Server logic & business rules implementation",
    deliverables: ["API Layer", "Auth System"],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    color: "#3b82f6",
    description: "Data modeling & query optimization",
    deliverables: ["Schema Design", "Index Strategy"],
  },
  {
    id: "api",
    label: "API",
    icon: Plug,
    color: "#6366f1",
    description: "Endpoint architecture & integration layer",
    deliverables: ["REST Endpoints", "Webhook System"],
  },
  {
    id: "deployment",
    label: "Deploy",
    icon: Rocket,
    color: "#8b5cf6",
    description: "Production deployment & SSL configuration",
    deliverables: ["CI/CD Pipeline", "DNS Routing"],
  },
  {
    id: "monitoring",
    label: "Monitor",
    icon: Activity,
    color: "#3b82f6",
    description: "Performance tracking & health monitoring",
    deliverables: ["Analytics Setup", "Uptime Alerts"],
  },
];

// ── Node positions (relative to a 400×520 canvas) ──
// Arranged in a flowing S-curve for visual interest
const nodePositions = [
  { x: 80, y: 20 },
  { x: 280, y: 65 },
  { x: 100, y: 130 },
  { x: 290, y: 190 },
  { x: 70, y: 260 },
  { x: 280, y: 310 },
  { x: 90, y: 380 },
  { x: 270, y: 440 },
];

// ── Connection Paths ──
function getConnectionPath(from: { x: number; y: number }, to: { x: number; y: number }) {
  const midY = (from.y + to.y) / 2;
  return `M ${from.x + 50} ${from.y + 24} C ${from.x + 50} ${midY}, ${to.x + 50} ${midY}, ${to.x + 50} ${to.y + 24}`;
}

// ── Animated Particle along a path ──
function FlowParticle({ path, delay, duration, color }: { path: string; delay: number; duration: number; color: string }) {
  return (
    <motion.circle
      r="2"
      fill={color}
      opacity={0.6}
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 1,
      }}
      style={{
        offsetPath: `path('${path}')`,
        offsetRotate: "0deg",
      } as React.CSSProperties}
    />
  );
}

// ── Single Node ──
function EngineNode({
  stage,
  position,
  index,
  isHovered,
  onHover,
  onLeave,
  staggerDelay,
}: {
  stage: typeof stages[0];
  position: { x: number; y: number };
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  staggerDelay: number;
}) {
  const Icon = stage.icon;
  const [isPoweredOn, setIsPoweredOn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPoweredOn(true);
    }, staggerDelay * 1000 + 400); // 400ms base boot delay
    return () => clearTimeout(timer);
  }, [staggerDelay]);

  return (
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: staggerDelay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Node background */}
      <motion.foreignObject
        x={position.x}
        y={position.y}
        width={100}
        height={48}
        style={{ overflow: "visible" }}
      >
        <motion.div
          className="cursor-pointer select-none"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          animate={{
            scale: isHovered ? 1.05 : 1,
            // Glass materials shift when hovered
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Main node */}
          <div
            className="relative flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 transition-all duration-700"
            style={{
              background: isHovered
                ? `rgba(${parseInt(stage.color.slice(1, 3), 16)}, ${parseInt(stage.color.slice(3, 5), 16)}, ${parseInt(stage.color.slice(5, 7), 16)}, 0.15)`
                : isPoweredOn 
                  ? "rgba(255, 255, 255, 0.04)"
                  : "rgba(0, 0, 0, 0.2)",
              border: `1px solid ${
                isHovered 
                  ? stage.color + "40" 
                  : isPoweredOn
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.02)"
              }`,
              boxShadow: isHovered
                ? `0 0 20px ${stage.color}15, 0 4px 12px rgba(0,0,0,0.2)`
                : isPoweredOn
                  ? "0 1px 3px rgba(0,0,0,0.15)"
                  : "none",
            }}
          >
            {/* Pulse dot */}
            {isPoweredOn && (
              <motion.div
                className="absolute -right-1 -top-1 h-2 w-2 rounded-full"
                style={{ background: stage.color }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.3, 1, 0.3], scale: 1 }}
                transition={{ 
                  scale: { duration: 0.5, ease: "backOut" },
                  opacity: { duration: 2.5 + index * 0.3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            )}

            <Icon
              size={16}
              style={{ 
                color: isHovered ? stage.color : isPoweredOn ? "#94a3b8" : "#334155", 
                transition: "color 0.7s ease-out" 
              }}
            />
            <span
              className="text-xs font-medium transition-colors duration-700 ease-out"
              style={{ color: isHovered ? "#f8fafc" : isPoweredOn ? "#94a3b8" : "#334155" }}
            >
              {stage.label}
            </span>
          </div>

          {/* Detail panel on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl p-3.5"
                style={{
                  background: "rgba(10, 13, 18, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)`,
                }}
              >
                <p className="text-[11px] font-medium text-slate-300 leading-relaxed">
                  {stage.description}
                </p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {stage.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-md px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        background: stage.color + "15",
                        color: stage.color,
                        border: `1px solid ${stage.color}25`,
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.foreignObject>
    </motion.g>
  );
}

// ── Main Engine Component ──
export function ArchitectureEngine({ compact = false }: { compact?: boolean; activeStage?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [1.5, -1.5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-1.5, 1.5]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  }, [mouseX, mouseY]);

  const scale = compact ? 0.7 : 1;
  const width = 400;
  const height = 520;

  // Build connection paths
  const connections = stages.slice(0, -1).map((_, i) => ({
    path: getConnectionPath(nodePositions[i], nodePositions[i + 1]),
    color: stages[i].color,
  }));

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{
        perspective: 1200,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial glow behind the engine */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "120%",
          height: "120%",
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.06), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width * scale}
        height={height * scale}
        className="overflow-visible"
        aria-label="Software architecture visualization showing the development lifecycle"
        role="img"
      >
        {/* Connection lines */}
        {connections.map((conn, i) => (
          <g key={`conn-${i}`}>
            {/* Base line */}
            <motion.path
              d={conn.path}
              fill="none"
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: "easeOut" }}
            />
            {/* Animated particle flow */}
            <FlowParticle
              path={conn.path}
              delay={1.4 + i * 0.4}
              duration={2.5 + i * 0.2}
              color={conn.color}
            />
          </g>
        ))}

        {/* Nodes */}
        {stages.map((stage, i) => (
          <EngineNode
            key={stage.id}
            stage={stage}
            position={nodePositions[i]}
            index={i}
            isHovered={hoveredIndex === i}
            onHover={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
            staggerDelay={0.6 + i * 0.08}
          />
        ))}
      </svg>
    </motion.div>
  );
}
