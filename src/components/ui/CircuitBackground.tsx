"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircuitBackgroundProps {
  className?: string;
  variant?: "dark" | "light";
}

export function CircuitBackground({ className, variant = "dark" }: CircuitBackgroundProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const strokeColor = variant === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.06)";
  const nodeColor = variant === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)";
  const glowColor = variant === "dark" ? "rgba(0, 180, 216, 0.3)" : "rgba(0, 180, 216, 0.2)";

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Glow filter for the animated pulse */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static circuit lines */}
        <g className="circuit-lines">
          {/* Horizontal lines */}
          <line x1="0" y1="20%" x2="15%" y2="20%" stroke={strokeColor} strokeWidth="1" />
          <line x1="10%" y1="20%" x2="10%" y2="35%" stroke={strokeColor} strokeWidth="1" />
          <line x1="10%" y1="35%" x2="25%" y2="35%" stroke={strokeColor} strokeWidth="1" />

          <line x1="85%" y1="15%" x2="100%" y2="15%" stroke={strokeColor} strokeWidth="1" />
          <line x1="90%" y1="15%" x2="90%" y2="30%" stroke={strokeColor} strokeWidth="1" />
          <line x1="75%" y1="30%" x2="90%" y2="30%" stroke={strokeColor} strokeWidth="1" />

          <line x1="0" y1="70%" x2="12%" y2="70%" stroke={strokeColor} strokeWidth="1" />
          <line x1="8%" y1="70%" x2="8%" y2="85%" stroke={strokeColor} strokeWidth="1" />
          <line x1="8%" y1="85%" x2="20%" y2="85%" stroke={strokeColor} strokeWidth="1" />

          <line x1="88%" y1="75%" x2="100%" y2="75%" stroke={strokeColor} strokeWidth="1" />
          <line x1="92%" y1="60%" x2="92%" y2="75%" stroke={strokeColor} strokeWidth="1" />
          <line x1="80%" y1="60%" x2="92%" y2="60%" stroke={strokeColor} strokeWidth="1" />

          {/* Center area circuits */}
          <line x1="30%" y1="45%" x2="45%" y2="45%" stroke={strokeColor} strokeWidth="1" />
          <line x1="40%" y1="45%" x2="40%" y2="55%" stroke={strokeColor} strokeWidth="1" />
          <line x1="40%" y1="55%" x2="55%" y2="55%" stroke={strokeColor} strokeWidth="1" />

          <line x1="55%" y1="40%" x2="70%" y2="40%" stroke={strokeColor} strokeWidth="1" />
          <line x1="60%" y1="40%" x2="60%" y2="52%" stroke={strokeColor} strokeWidth="1" />
          <line x1="60%" y1="52%" x2="72%" y2="52%" stroke={strokeColor} strokeWidth="1" />

          {/* Additional decorative circuits */}
          <line x1="20%" y1="50%" x2="28%" y2="50%" stroke={strokeColor} strokeWidth="1" />
          <line x1="24%" y1="50%" x2="24%" y2="62%" stroke={strokeColor} strokeWidth="1" />

          <line x1="72%" y1="48%" x2="80%" y2="48%" stroke={strokeColor} strokeWidth="1" />
          <line x1="76%" y1="42%" x2="76%" y2="48%" stroke={strokeColor} strokeWidth="1" />
        </g>

        {/* Animated circuit traces */}
        {isVisible && (
          <g className="animated-circuits">
            {/* Top left animated path */}
            <motion.path
              d="M 0,100 L 80,100 L 80,60 L 150,60"
              fill="none"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 80,100 L 80,180 L 200,180"
              fill="none"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />

            {/* Top right animated path */}
            <motion.line
              x1="100%"
              y1="80"
              x2="85%"
              y2="80"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M 85%,80 L 85%,140 L 75%,140"
              fill="none"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.3, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Bottom left animated path */}
            <motion.path
              d="M 0,75% L 100,75% L 100,85% L 180,85%"
              fill="none"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Bottom right animated path */}
            <motion.path
              d="M 100%,70% L 90%,70% L 90%,80% L 82%,80%"
              fill="none"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
            />

            {/* Center animated paths */}
            <motion.path
              d="M 35%,45% L 45%,45% L 45%,55% L 55%,55%"
              fill="none"
              stroke={glowColor}
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
            />
          </g>
        )}

        {/* Circuit nodes (connection points) */}
        <g className="circuit-nodes">
          {/* Static nodes */}
          <circle cx="10%" cy="20%" r="3" fill={nodeColor} />
          <circle cx="10%" cy="35%" r="3" fill={nodeColor} />
          <circle cx="25%" cy="35%" r="2" fill={nodeColor} />

          <circle cx="90%" cy="15%" r="3" fill={nodeColor} />
          <circle cx="90%" cy="30%" r="3" fill={nodeColor} />
          <circle cx="75%" cy="30%" r="2" fill={nodeColor} />

          <circle cx="8%" cy="70%" r="3" fill={nodeColor} />
          <circle cx="8%" cy="85%" r="3" fill={nodeColor} />
          <circle cx="20%" cy="85%" r="2" fill={nodeColor} />

          <circle cx="92%" cy="60%" r="3" fill={nodeColor} />
          <circle cx="92%" cy="75%" r="3" fill={nodeColor} />
          <circle cx="80%" cy="60%" r="2" fill={nodeColor} />

          <circle cx="40%" cy="45%" r="3" fill={nodeColor} />
          <circle cx="40%" cy="55%" r="3" fill={nodeColor} />
          <circle cx="60%" cy="40%" r="3" fill={nodeColor} />
          <circle cx="60%" cy="52%" r="3" fill={nodeColor} />

          {/* Animated glowing nodes */}
          {isVisible && (
            <>
              <motion.circle
                cx="80"
                cy="100"
                r="4"
                fill={glowColor}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              />
              <motion.circle
                cx="150"
                cy="60"
                r="4"
                fill={glowColor}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              />
              <motion.circle
                cx="200"
                cy="180"
                r="4"
                fill={glowColor}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              />
              <motion.circle
                cx="85%"
                cy="80"
                r="4"
                fill={glowColor}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              />
              <motion.circle
                cx="85%"
                cy="140"
                r="4"
                fill={glowColor}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.4 }}
              />
            </>
          )}
        </g>

        {/* Pulsing energy dots that travel along circuits */}
        {isVisible && (
          <g className="energy-pulses">
            <motion.circle
              r="2"
              fill="rgba(0, 180, 216, 0.8)"
              filter="url(#glow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 3,
                delay: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
              }}
              style={{
                offsetPath: "path('M 0,100 L 80,100 L 80,60 L 150,60')",
              }}
            />
            <motion.circle
              r="2"
              fill="rgba(0, 180, 216, 0.8)"
              filter="url(#glow)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 2.5,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
              style={{
                offsetPath: "path('M 80,100 L 80,180 L 200,180')",
              }}
            />
          </g>
        )}
      </svg>
    </div>
  );
}

export default CircuitBackground;
