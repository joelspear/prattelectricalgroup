"use client";

import { motion } from "framer-motion";
import { Phone, Shield, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
  variant?: "home" | "service" | "about";
  children?: React.ReactNode;
}

const trustBadges = [
  { icon: Shield, text: "SAA Accredited" },
  { icon: Clock, text: "Fast Response" },
  { icon: MapPin, text: "Adelaide Based" },
];

export function Hero({
  headline,
  subheadline,
  primaryCta = { text: "Get Free Quote", href: "/contact" },
  secondaryCta,
  showTrustBadges = true,
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
      <div className="absolute inset-0 bg-charcoal">
        {/* Video background */}
        <div className="absolute inset-0 opacity-40">
          <iframe
            src="https://player.vimeo.com/video/1162816682?background=1&autoplay=1&loop=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full"
            style={{ aspectRatio: '16/9' }}
            allow="autoplay; fullscreen"
            title="Banner video"
          />
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
      </div>

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
