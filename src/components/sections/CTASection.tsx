"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/siteData";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}

export function CTASection({
  title = "Ready to Get Started?",
  subtitle = "Get your free quote today. No obligation, fast response.",
  variant = "primary",
  className,
}: CTASectionProps) {
  const variants = {
    primary: "bg-primary-500 text-white",
    secondary: "bg-secondary-500 text-white",
    dark: "bg-charcoal text-white",
  };

  return (
    <section className={cn("py-16 md:py-20", variants[variant], className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant={variant === "primary" ? "secondary" : "primary"}
              size="lg"
            >
              Get Free Quote
            </Button>
            <Button
              href={contactInfo.phoneTel}
              variant="outline"
              size="lg"
              leftIcon={<Phone className="h-5 w-5" />}
              className={cn(
                "border-white text-white hover:bg-white",
                variant === "primary" && "hover:text-primary-500",
                variant === "secondary" && "hover:text-secondary-500",
                variant === "dark" && "hover:text-charcoal"
              )}
              external
            >
              Call {contactInfo.phoneFormatted}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
