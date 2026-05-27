"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  borderRadius?: number;
  glowColor?: string;
  duration?: number;
}

export function GlowBorder({
  children,
  className = "",
  borderRadius = 16,
  glowColor = "#40e8ff",
  duration = 2.2,
}: GlowBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (!entries || !entries[0]) return;
      const { width, height } = entries[0].target.getBoundingClientRect();
      setDimensions({ width, height });
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const { width, height } = dimensions;
  const r = borderRadius;

  // Exact rounded rectangle SVG path based on dynamic container dimensions
  const pathData = width && height 
    ? `M ${r} 0 
       L ${width - r} 0 
       A ${r} ${r} 0 0 1 ${width} ${r} 
       L ${width} ${height - r} 
       A ${r} ${r} 0 0 1 ${width - r} ${height} 
       L ${r} ${height} 
       A ${r} ${r} 0 0 1 0 ${height - r} 
       L 0 ${r} 
       A ${r} ${r} 0 0 1 ${r} 0 
       Z`
    : "";

  const perimeter = 2 * (width + height);

  return (
    <div
      ref={containerRef}
      className={`relative group/glow ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Trace Glow Path Layer */}
      {width > 0 && height > 0 && (
        <svg
          className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
          style={{ mixBlendMode: "screen" }}
        >
          <defs>
            <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={glowColor} stopOpacity={0.8} />
              <stop offset="40%" stopColor="#2f7dff" stopOpacity={0.9} />
              <stop offset="70%" stopColor="#cbd5e1" stopOpacity={0.2} />
              <stop offset="100%" stopColor={glowColor} stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Persistent Border Overlay at Low Opacity */}
          <path
            d={pathData}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="1.2"
          />

          {/* Interactive Laser Trail that traces container on hover */}
          <motion.path
            d={pathData}
            fill="transparent"
            stroke="url(#glow-gradient)"
            strokeWidth="1.6"
            strokeDasharray={perimeter}
            initial={{ strokeDashoffset: perimeter }}
            animate={{
              strokeDashoffset: isHovered ? 0 : perimeter,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              opacity: { duration: 0.22 },
            }}
          />
        </svg>
      )}

      {/* Embedded Component */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
