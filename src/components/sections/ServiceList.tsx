"use client";

import { motion } from "framer-motion";
import { CheckCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceListProps {
  title?: string;
  subtitle?: string;
  services: string[];
  icon?: LucideIcon;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function ServiceList({
  title = "Our Services",
  subtitle,
  services,
  icon: Icon = CheckCircle,
  className,
  columns = 3,
}: ServiceListProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("section", className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className={cn("grid gap-4", gridCols[columns])}>
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all"
            >
              <Icon className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
              <span className="text-charcoal font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceList;
