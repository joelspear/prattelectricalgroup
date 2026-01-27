"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Clock, ShieldCheck, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { whyChooseUs } from "@/data/siteData";

interface WhyChooseUsProps {
  className?: string;
  variant?: "default" | "dark";
}

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Award,
  Clock,
  ShieldCheck,
};

export function WhyChooseUs({ className, variant = "default" }: WhyChooseUsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "section",
        isDark ? "bg-charcoal text-white" : "bg-neutral-light",
        className
      )}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={cn("mb-4", isDark && "text-white")}>
            Why Choose Pratt Electrical?
          </h2>
          <p
            className={cn(
              "text-lg max-w-2xl mx-auto",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Adelaide&apos;s fastest-growing electrical team, built on quality
            workmanship and genuine customer care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || Award;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "text-center p-6 rounded-xl transition-all duration-300",
                  isDark
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-white shadow-sm hover:shadow-md"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={cn(
                    "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4",
                    isDark ? "bg-primary-500/20" : "bg-primary-50"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-8 w-8",
                      isDark ? "text-primary-400" : "text-primary-500"
                    )}
                  />
                </motion.div>
                <h4
                  className={cn(
                    "text-lg font-semibold mb-2",
                    isDark && "text-white"
                  )}
                >
                  {item.title}
                </h4>
                <p
                  className={cn(
                    "text-sm",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
