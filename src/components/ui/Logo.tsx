"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "text";
  theme?: "light" | "dark";
}

export function Logo({ className, variant = "full", theme = "dark" }: LogoProps) {
  const primaryColor = "#00aeef"; // Cyan from logo
  const textColor = theme === "dark" ? "#E5E7EB" : "#1F2937";
  const subTextColor = primaryColor;

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 80 100"
        className={cn("h-10 w-auto", className)}
        aria-label="Pratt Electrical Group"
      >
        {/* Lightbulb Icon */}
        <g fill="none" stroke={primaryColor} strokeWidth="4">
          {/* Outer bulb shape */}
          <path d="M40 8 C18 8 8 28 8 45 C8 55 15 62 20 68 L20 78 C20 82 24 86 28 86 L52 86 C56 86 60 82 60 78 L60 68 C65 62 72 55 72 45 C72 28 62 8 40 8 Z" />
          {/* Inner bulb lines */}
          <path d="M40 18 C26 18 18 32 18 45 C18 52 22 58 26 62" />
          <path d="M40 28 C32 28 28 36 28 45 C28 50 30 54 33 57" />
          {/* Bulb base lines */}
          <line x1="24" y1="90" x2="56" y2="90" strokeLinecap="round" />
          <line x1="28" y1="94" x2="52" y2="94" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  if (variant === "text") {
    return (
      <div className={cn("flex flex-col", className)}>
        <span
          className="text-2xl font-bold tracking-wider"
          style={{ color: textColor }}
        >
          PRATT
        </span>
        <span
          className="text-xs font-medium tracking-[0.3em]"
          style={{ color: subTextColor }}
        >
          ELECTRICAL GROUP
        </span>
      </div>
    );
  }

  // Full logo
  return (
    <svg
      viewBox="0 0 400 100"
      className={cn("h-12 w-auto", className)}
      aria-label="Pratt Electrical Group"
    >
      {/* Lightbulb Icon */}
      <g fill="none" stroke={primaryColor} strokeWidth="3.5" transform="translate(0, 5)">
        {/* Outer bulb shape */}
        <path d="M35 5 C17 5 8 22 8 36 C8 44 14 50 18 55 L18 63 C18 66 21 69 24 69 L46 69 C49 69 52 66 52 63 L52 55 C56 50 62 44 62 36 C62 22 53 5 35 5 Z" />
        {/* Inner bulb lines */}
        <path d="M35 13 C23 13 17 24 17 36 C17 42 20 47 24 50" />
        <path d="M35 21 C28 21 24 28 24 36 C24 40 26 44 28 46" />
        {/* Bulb base lines */}
        <line x1="22" y1="73" x2="48" y2="73" strokeLinecap="round" />
        <line x1="25" y1="77" x2="45" y2="77" strokeLinecap="round" />
      </g>

      {/* Vertical separator line */}
      <line
        x1="80"
        y1="15"
        x2="80"
        y2="85"
        stroke={primaryColor}
        strokeWidth="1"
        opacity="0.5"
      />

      {/* PRATT text */}
      <text
        x="100"
        y="55"
        fill={textColor}
        fontSize="48"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        PRATT
      </text>

      {/* ELECTRICAL GROUP text */}
      <text
        x="100"
        y="80"
        fill={subTextColor}
        fontSize="16"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="500"
        letterSpacing="0.25em"
      >
        ELECTRICAL GROUP
      </text>
    </svg>
  );
}

// Simplified logo for mobile/small spaces
export function LogoMobile({ className, theme = "dark" }: Omit<LogoProps, "variant">) {
  const primaryColor = "#00aeef";
  const textColor = theme === "dark" ? "#E5E7EB" : "#1F2937";

  return (
    <svg
      viewBox="0 0 200 50"
      className={cn("h-8 w-auto", className)}
      aria-label="Pratt Electrical Group"
    >
      {/* Simplified lightbulb icon */}
      <g fill="none" stroke={primaryColor} strokeWidth="2.5" transform="translate(0, 3)">
        <path d="M18 3 C9 3 4 12 4 19 C4 24 7 27 10 30 L10 34 C10 36 12 38 14 38 L22 38 C24 38 26 36 26 34 L26 30 C29 27 32 24 32 19 C32 12 27 3 18 3 Z" />
        <path d="M18 8 C12 8 9 13 9 19 C9 22 11 25 13 27" />
        <line x1="12" y1="41" x2="24" y2="41" strokeLinecap="round" />
      </g>

      {/* Separator */}
      <line x1="42" y1="8" x2="42" y2="42" stroke={primaryColor} strokeWidth="1" opacity="0.5" />

      {/* PRATT text */}
      <text
        x="52"
        y="32"
        fill={textColor}
        fontSize="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        PRATT
      </text>
    </svg>
  );
}

export default Logo;
