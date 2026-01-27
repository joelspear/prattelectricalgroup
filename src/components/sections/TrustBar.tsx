"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { trustStats } from "@/data/siteData";

interface TrustBarProps {
  className?: string;
  variant?: "default" | "dark" | "light";
}

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: string;
  suffix?: string;
  duration?: number;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Check if value is a number
    const numericValue = parseInt(value.replace(/\D/g, ""));

    if (isNaN(numericValue)) {
      // Not a number, just set the value directly
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * numericValue);

      setDisplayValue(currentValue.toString());

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function TrustBar({ className, variant = "default" }: TrustBarProps) {
  const variants = {
    default: "bg-white border-y border-gray-100",
    dark: "bg-charcoal text-white",
    light: "bg-primary-50",
  };

  return (
    <section className={cn("py-8 md:py-12", variants[variant], className)}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={cn(
                  "text-3xl md:text-4xl font-bold mb-2",
                  variant === "dark" ? "text-primary-400" : "text-primary-500"
                )}
              >
                <AnimatedCounter value={stat.value} />
              </div>
              <div
                className={cn(
                  "text-sm md:text-base font-medium",
                  variant === "dark" ? "text-gray-400" : "text-gray-600"
                )}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
