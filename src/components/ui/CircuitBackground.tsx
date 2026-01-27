"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircuitBackgroundProps {
  className?: string;
}

export function CircuitBackground({ className }: CircuitBackgroundProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Circuit paths - flowing smoothly from left to right
  const circuitPaths = [
    // Upper section
    { d: "M-50,60 L200,60 L240,30 L500,30 L540,60 L800,60", delay: 0, duration: 3 },
    { d: "M-50,120 L150,120 L190,80 L400,80 L440,120 L700,120", delay: 0.3, duration: 2.8 },

    // Middle section
    { d: "M-50,180 L250,180 L290,140 L480,140 L520,180 L800,180", delay: 0.5, duration: 3.2 },
    { d: "M-50,240 L180,240 L220,200 L420,200 L460,240 L750,240", delay: 0.7, duration: 3 },

    // Lower section
    { d: "M-50,300 L220,300 L260,260 L450,260 L490,300 L800,300", delay: 0.9, duration: 3.1 },
    { d: "M-50,360 L160,360 L200,320 L380,320 L420,360 L700,360", delay: 1.1, duration: 2.9 },

    // Bottom section
    { d: "M-50,420 L280,420 L320,380 L500,380 L540,420 L800,420", delay: 1.3, duration: 3 },
    { d: "M-50,480 L200,480 L240,440 L440,440 L480,480 L750,480", delay: 1.5, duration: 2.8 },

    // Vertical connectors (subtle)
    { d: "M240,30 L240,80", delay: 1.8, duration: 0.8 },
    { d: "M290,140 L290,200", delay: 2.0, duration: 0.8 },
    { d: "M260,260 L260,320", delay: 2.2, duration: 0.8 },
    { d: "M320,380 L320,440", delay: 2.4, duration: 0.8 },
  ];

  // Subtle end nodes
  const nodes = [
    { x: 800, y: 60, delay: 3.0 },
    { x: 700, y: 120, delay: 3.1 },
    { x: 800, y: 180, delay: 3.3 },
    { x: 750, y: 240, delay: 3.4 },
    { x: 800, y: 300, delay: 3.5 },
    { x: 700, y: 360, delay: 3.6 },
    { x: 800, y: 420, delay: 3.7 },
    { x: 750, y: 480, delay: 3.8 },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 550"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle glow filter */}
          <filter id="subtleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated circuit paths - very subtle */}
        {isVisible && circuitPaths.map((circuit, index) => (
          <g key={index}>
            {/* Soft glow layer - grey */}
            <motion.path
              d={circuit.d}
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#subtleGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: circuit.duration, delay: circuit.delay, ease: "linear" },
                opacity: { duration: 0.5, delay: circuit.delay },
              }}
            />
            {/* Main line - subtle grey */}
            <motion.path
              d={circuit.d}
              fill="none"
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: circuit.duration, delay: circuit.delay, ease: "linear" },
                opacity: { duration: 0.5, delay: circuit.delay },
              }}
            />
          </g>
        ))}

        {/* Subtle end nodes - grey */}
        {isVisible && nodes.map((node, index) => (
          <g key={`node-${index}`}>
            {/* Outer ring - very subtle grey */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: node.delay, ease: "easeOut" }}
            />
            {/* Center dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="rgba(255, 255, 255, 0.08)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: node.delay + 0.2, ease: "easeOut" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default CircuitBackground;
