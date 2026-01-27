"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CircuitBackground } from "@/components/ui/CircuitBackground";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/data/siteData";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showTrustBadges?: boolean;
  showQuoteForm?: boolean;
  backgroundImage?: string;
  variant?: "home" | "service" | "about";
  children?: React.ReactNode;
}

const trustBadges = [
  { icon: Shield, text: "CEC Accredited" },
  { icon: Clock, text: "24/7 Service" },
  { icon: MapPin, text: "Adelaide Based" },
];

export function Hero({
  headline,
  subheadline,
  primaryCta = { text: "Get Free Quote", href: "/contact" },
  secondaryCta,
  showTrustBadges = true,
  backgroundImage = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
  variant = "home",
  children,
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        isHome ? "min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-28" : "py-32 md:py-40"
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
      </div>

      {/* Circuit Background Animation */}
      <CircuitBackground variant="dark" />

      {/* Content */}
      <div className="relative container-custom">
        <div className={cn("grid gap-12", isHome ? "lg:grid-cols-2 items-center" : "")}>
          {/* Text Content */}
          <div className={cn(isHome ? "" : "max-w-3xl mx-auto text-center")}>
            {/* Trust badges */}
            {showTrustBadges && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={cn(
                  "flex flex-wrap gap-3 mb-8",
                  !isHome && "justify-center"
                )}
              >
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="trust-badge"
                  >
                    <badge.icon className="h-4 w-4 text-primary-500" />
                    <span>{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={cn(
                "font-bold text-white mb-6",
                isHome
                  ? "text-4xl sm:text-5xl lg:text-6xl"
                  : "text-3xl sm:text-4xl lg:text-5xl"
              )}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "text-lg md:text-xl text-gray-300 mb-8 leading-relaxed",
                isHome ? "max-w-xl" : "max-w-2xl mx-auto"
              )}
            >
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn(
                "flex flex-wrap gap-4",
                !isHome && "justify-center"
              )}
            >
              <Button href={primaryCta.href} size="lg">
                {primaryCta.text}
              </Button>
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.text}
                </Button>
              ) : (
                <Button
                  href={contactInfo.phoneTel}
                  variant="outline"
                  size="lg"
                  leftIcon={<Phone className="h-5 w-5" />}
                  external
                >
                  {contactInfo.phoneFormatted}
                </Button>
              )}
            </motion.div>
          </div>

          {/* Right side content (for home variant) */}
          {isHome && children}
        </div>
      </div>
    </section>
  );
}

export default Hero;
