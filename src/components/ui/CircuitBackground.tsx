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
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Circuit paths - flowing from left to right with angular branches
  const circuitPaths = [
    // Main horizontal lines with angular branches - upper section
    { d: "M-50,80 L120,80 L160,40 L320,40", delay: 0, duration: 1.8 },
    { d: "M320,40 L360,80 L520,80 L560,40 L750,40", delay: 1.0, duration: 1.6 },
    { d: "M-50,140 L80,140 L120,100 L240,100", delay: 0.15, duration: 1.5 },
    { d: "M240,100 L280,140 L400,140 L440,100 L600,100", delay: 0.9, duration: 1.7 },

    // Middle section circuits
    { d: "M-50,200 L150,200 L190,160 L350,160", delay: 0.25, duration: 1.6 },
    { d: "M350,160 L390,200 L500,200 L540,160 L700,160", delay: 1.1, duration: 1.5 },
    { d: "M-50,260 L100,260 L140,220 L280,220", delay: 0.35, duration: 1.4 },
    { d: "M280,220 L320,260 L450,260 L490,220 L650,220", delay: 1.0, duration: 1.6 },

    // Lower section circuits
    { d: "M-50,320 L180,320 L220,280 L380,280", delay: 0.45, duration: 1.7 },
    { d: "M380,280 L420,320 L550,320 L590,280 L750,280", delay: 1.2, duration: 1.5 },
    { d: "M-50,380 L130,380 L170,340 L300,340", delay: 0.55, duration: 1.5 },
    { d: "M300,340 L340,380 L480,380 L520,340 L680,340", delay: 1.15, duration: 1.6 },

    // Bottom circuits
    { d: "M-50,440 L200,440 L240,400 L400,400", delay: 0.65, duration: 1.6 },
    { d: "M400,400 L440,440 L580,440 L620,400 L750,400", delay: 1.3, duration: 1.4 },
    { d: "M-50,500 L160,500 L200,460 L340,460", delay: 0.75, duration: 1.5 },
    { d: "M340,460 L380,500 L520,500 L560,460 L720,460", delay: 1.25, duration: 1.5 },

    // Vertical connectors
    { d: "M160,40 L160,100", delay: 0.8, duration: 0.6 },
    { d: "M320,40 L320,100", delay: 0.9, duration: 0.6 },
    { d: "M190,160 L190,220", delay: 1.0, duration: 0.6 },
    { d: "M350,160 L350,220", delay: 1.1, duration: 0.6 },
    { d: "M220,280 L220,340", delay: 1.2, duration: 0.6 },
    { d: "M380,280 L380,340", delay: 1.3, duration: 0.6 },
    { d: "M240,400 L240,460", delay: 1.4, duration: 0.6 },
    { d: "M400,400 L400,460", delay: 1.5, duration: 0.6 },
  ];

  // Node positions (circuit endpoints with rings)
  const endNodes = [
    { x: 750, y: 40, delay: 2.6 },
    { x: 600, y: 100, delay: 2.6 },
    { x: 700, y: 160, delay: 2.6 },
    { x: 650, y: 220, delay: 2.6 },
    { x: 750, y: 280, delay: 2.7 },
    { x: 680, y: 340, delay: 2.7 },
    { x: 750, y: 400, delay: 2.8 },
    { x: 720, y: 460, delay: 2.8 },
  ];

  // Junction nodes (where circuits meet/branch)
  const junctionNodes = [
    { x: 160, y: 40, delay: 1.8 },
    { x: 320, y: 40, delay: 1.9 },
    { x: 120, y: 100, delay: 1.6 },
    { x: 240, y: 100, delay: 1.8 },
    { x: 190, y: 160, delay: 1.9 },
    { x: 350, y: 160, delay: 2.1 },
    { x: 140, y: 220, delay: 1.8 },
    { x: 280, y: 220, delay: 2.0 },
    { x: 220, y: 280, delay: 2.1 },
    { x: 380, y: 280, delay: 2.3 },
    { x: 170, y: 340, delay: 2.0 },
    { x: 300, y: 340, delay: 2.2 },
    { x: 240, y: 400, delay: 2.3 },
    { x: 400, y: 400, delay: 2.5 },
    { x: 200, y: 460, delay: 2.2 },
    { x: 340, y: 460, delay: 2.4 },
  ];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 550"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Strong glow filter for neon effect */}
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Extra strong glow for nodes */}
          <filter id="nodeGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur2" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated circuit paths */}
        {isVisible && circuitPaths.map((circuit, index) => (
          <g key={index}>
            {/* Outer glow layer */}
            <motion.path
              d={circuit.d}
              fill="none"
              stroke="rgba(0, 180, 216, 0.4)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#strongGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: circuit.duration, delay: circuit.delay, ease: "easeOut" },
                opacity: { duration: 0.2, delay: circuit.delay },
              }}
            />
            {/* Main bright line */}
            <motion.path
              d={circuit.d}
              fill="none"
              stroke="rgba(0, 200, 255, 0.9)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: circuit.duration, delay: circuit.delay, ease: "easeOut" },
                opacity: { duration: 0.2, delay: circuit.delay },
              }}
            />
            {/* Bright core */}
            <motion.path
              d={circuit.d}
              fill="none"
              stroke="rgba(200, 240, 255, 0.95)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: circuit.duration, delay: circuit.delay, ease: "easeOut" },
                opacity: { duration: 0.2, delay: circuit.delay },
              }}
            />
          </g>
        ))}

        {/* End nodes with rings */}
        {isVisible && endNodes.map((node, index) => (
          <g key={`end-${index}`}>
            {/* Outer ring glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="none"
              stroke="rgba(0, 180, 216, 0.5)"
              strokeWidth="2"
              filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: node.delay, ease: "easeOut" }}
            />
            {/* Inner ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="none"
              stroke="rgba(0, 200, 255, 0.8)"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: node.delay + 0.1, ease: "easeOut" }}
            />
            {/* Center dot */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="rgba(200, 240, 255, 1)"
              filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: node.delay + 0.2, ease: "easeOut" }}
            />
          </g>
        ))}

        {/* Junction nodes (smaller, filled circles) */}
        {isVisible && junctionNodes.map((node, index) => (
          <g key={`junction-${index}`}>
            {/* Glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="5"
              fill="rgba(0, 180, 216, 0.6)"
              filter="url(#strongGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: node.delay, ease: "easeOut" }}
            />
            {/* Bright center */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2.5"
              fill="rgba(200, 240, 255, 1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: node.delay + 0.1, ease: "easeOut" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default CircuitBackground;
