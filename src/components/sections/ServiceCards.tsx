"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Building2, Sun, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/data/siteData";

interface ServiceCardsProps {
  className?: string;
  showTitle?: boolean;
}

const serviceIcons = {
  residential: Home,
  commercial: Building2,
  solar: Sun,
};

const serviceColors = {
  residential: "group-hover:text-primary-500",
  commercial: "group-hover:text-primary-500",
  solar: "group-hover:text-primary-500",
};

export function ServiceCards({ className, showTitle = true }: ServiceCardsProps) {
  const serviceList = Object.entries(services);

  return (
    <section className={cn("section", className)}>
      <div className="container-custom">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From residential repairs to commercial fit-outs and solar
              installation, we&apos;ve got your electrical needs covered.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {serviceList.map(([key, service], index) => {
            const Icon = serviceIcons[key as keyof typeof serviceIcons];
            const colorClass = serviceColors[key as keyof typeof serviceColors];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/${service.slug}`}
                  className="group card-hover block p-8 h-full"
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-100 mb-6 transition-colors duration-300",
                      "group-hover:bg-primary-50"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-7 w-7 text-gray-600 transition-colors duration-300",
                        colorClass
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>

                  {/* Services preview */}
                  <ul className="space-y-2 mb-6">
                    {service.services.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-500 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        {item}
                      </li>
                    ))}
                    {service.services.length > 4 && (
                      <li className="text-sm text-gray-400 italic">
                        +{service.services.length - 4} more services
                      </li>
                    )}
                  </ul>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-primary-500 font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceCards;
