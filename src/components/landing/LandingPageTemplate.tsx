"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Star,
  Phone,
  CheckCircle,
  Shield,
  Clock,
  MapPin,
  Zap,
  TrendingUp,
  BadgeDollarSign,
  Battery,
  ShieldCheck,
  Coins,
  Sun,
  Car,
  Building2,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { LandingForm } from "./LandingForm";
import { StickyBar } from "./StickyBar";
import type { LandingPageData } from "@/data/landingPages";
import { trustBadges, howItWorks } from "@/data/landingPages";

const LOGO_LIGHT =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/v1770464871/Pratt_Electrical_Group_Logo_copy_tr41ry.png";
const SAA_LOGO =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/f_auto,q_auto,h_40/SAA-Logo-Blue-White_wqwe6l.png";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  BadgeDollarSign: <BadgeDollarSign className="h-6 w-6" />,
  Battery: <Battery className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Coins: <Coins className="h-6 w-6" />,
  Sun: <Sun className="h-6 w-6" />,
  Car: <Car className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
  Building2: <Building2 className="h-6 w-6" />,
};

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-charcoal pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function LandingPageTemplate({ data }: { data: LandingPageData }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <>
      {/* ==================== HERO WITH NAV + FORM ==================== */}
      <section className="relative overflow-hidden min-h-[85vh] flex flex-col">
        {/* Background */}
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/15 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        </div>

        {/* Nav bar */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" aria-label="Pratt Electrical Group">
              <Image
                src={LOGO_LIGHT}
                alt="Pratt Electrical Group"
                width={200}
                height={50}
                className="h-8 sm:h-10 w-auto object-contain"
                priority
              />
            </Link>
            <a
              href="tel:+61474320534"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">0474 320 534</span>
              <span className="sm:hidden">Call Us</span>
            </a>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left — text content */}
              <div>
                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-3 mb-6"
                >
                  {[
                    { icon: Shield, text: "CEC Accredited" },
                    { icon: Clock, text: "Fast Response" },
                    { icon: MapPin, text: "Local Adelaide Team" },
                  ].map((badge, index) => (
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

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                  {data.hero.headline}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
                >
                  {data.hero.subheadline}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4 mb-6"
                >
                  <Button href="#booking" size="lg">
                    <Phone className="h-5 w-5" />
                    Book a Free 10-Min Chat
                  </Button>
                  <Button
                    href="#quote-form"
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-charcoal"
                  >
                    Get a Free Quote
                  </Button>
                </motion.div>

                {/* SAA Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <img
                    src={SAA_LOGO}
                    alt="SAA Accredited Installer"
                    className="h-10 w-auto"
                  />
                </motion.div>
              </div>

              {/* Right — form (desktop) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:block"
              >
                <LandingForm
                  source={data.formSource}
                  showPowerBillField={data.showPowerBillField}
                  showExistingSolarField={data.showExistingSolarField}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile form (below hero, same as homepage pattern) */}
      <div className="lg:hidden py-8 px-4 bg-charcoal">
        <div className="max-w-md mx-auto">
          <LandingForm
            source={data.formSource}
            showPowerBillField={data.showPowerBillField}
            showExistingSolarField={data.showExistingSolarField}
          />
        </div>
      </div>

      {/* ==================== TRUST BADGES BAR ==================== */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Three simple steps to get started.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-500 text-white font-bold text-xl mb-4">
                  {step.step}
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-0.5 bg-primary-200" />
                )}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL PROOF / TESTIMONIALS ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Trusted by Adelaide Homeowners
            </h2>
            <p className="text-gray-600">
              See what our customers have to say.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 md:p-8"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM / AGITATION ==================== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {data.painPoints.heading}
            </h2>
          </motion.div>
          <div className="space-y-4">
            {data.painPoints.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOLUTION / WHAT WE DO ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {data.solution.heading}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {data.solution.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {data.solution.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 md:p-8 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-500 mb-4">
                  {iconMap[benefit.icon] || <Zap className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BOOKING EMBED ==================== */}
      <section
        id="booking"
        className="py-16 md:py-20 bg-gray-50 scroll-mt-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Free 10-Minute Discovery Call
            </h2>
            <p className="text-gray-600 mb-8">
              Pick a time that suits you. No obligation, no pressure.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            <iframe
              src="https://api.leadconnectorhq.com/widget/bookings/10min-discovery-call"
              className="w-full border-0"
              style={{ height: "700px" }}
              title="Book a Discovery Call"
            />
          </div>

          <p className="text-gray-500">
            Prefer to call? Ring us on{" "}
            <a
              href="tel:+61474320534"
              className="font-semibold text-primary-500 hover:underline"
            >
              0474 320 534
            </a>
          </p>
        </div>
      </section>

      {/* ==================== FAQ (at the bottom) ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 px-6"
          >
            {data.faqs.map((faq, i) => (
              <FAQItem
                key={i}
                item={faq}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-16 md:py-20 bg-primary-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Join hundreds of Adelaide homeowners who&apos;ve already made the
            switch. Get your free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="#booking"
              size="lg"
              className="bg-white text-primary-500 hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              Book a Call
            </Button>
            <Button
              href="#quote-form"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Get a Free Quote
            </Button>
          </div>
          <p className="mt-6 text-primary-200 text-sm flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" />
            No obligation &bull; No pressure &bull; 100% free
          </p>
        </div>
      </section>

      {/* Sticky Bar */}
      <StickyBar />

      {/* Bottom padding for sticky bar on mobile */}
      <div className="h-16 sm:h-0" />
    </>
  );
}

export default LandingPageTemplate;
