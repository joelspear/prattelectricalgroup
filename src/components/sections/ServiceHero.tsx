"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Clock, MapPin, Home, Building2, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/siteData";

// Map icon names to components
const iconMap = {
  Home,
  Building2,
  Sun,
  Shield,
  Clock,
  MapPin,
} as const;

type IconName = keyof typeof iconMap;

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  iconName?: IconName;
  features?: string[];
  backgroundImage?: string;
}

const trustBadges = [
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Clock, text: "Fast Response" },
  { icon: MapPin, text: "Adelaide Metro" },
];

export function ServiceHero({
  title,
  subtitle,
  iconName,
  features,
  backgroundImage,
}: ServiceHeroProps) {
  const Icon = iconName ? iconMap[iconName] : null;
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero">
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative container-custom">
        <div className="max-w-3xl">
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="trust-badge"
              >
                <badge.icon className="h-4 w-4 text-primary-500" />
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Icon */}
          {Icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-500/20 mb-6"
            >
              <Icon className="h-8 w-8 text-primary-400" />
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Features list */}
          {features && features.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid sm:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary-400" />
                  {feature}
                </li>
              ))}
            </motion.ul>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/contact" size="lg">
              Get Free Quote
            </Button>
            <Button
              href={contactInfo.phoneTel}
              variant="outline"
              size="lg"
              leftIcon={<Phone className="h-5 w-5" />}
              className="border-white text-white hover:bg-white hover:text-charcoal"
              external
            >
              {contactInfo.phoneFormatted}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
