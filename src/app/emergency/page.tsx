"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Flame,
  Power,
  AlertTriangle,
  Clock,
  Shield,
  Phone,
  CheckCircle,
  MapPin,
  CloudLightning,
} from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

const emergencyTypes = [
  {
    icon: Flame,
    title: "Burning Smell",
    description:
      "If you smell burning from outlets or switchboard, turn off power and call immediately.",
    urgent: true,
  },
  {
    icon: Zap,
    title: "Sparking Outlets",
    description:
      "Sparking when plugging in appliances indicates dangerous wiring issues.",
    urgent: true,
  },
  {
    icon: Power,
    title: "Complete Power Loss",
    description: "No power to your home? We'll diagnose and fix the issue fast.",
    urgent: false,
  },
  {
    icon: AlertTriangle,
    title: "Partial Power Out",
    description:
      "Some circuits not working? Could indicate serious electrical fault.",
    urgent: false,
  },
  {
    icon: Zap,
    title: "Safety Switch Tripping",
    description:
      "Repeated tripping indicates a fault that needs urgent attention.",
    urgent: false,
  },
  {
    icon: CloudLightning,
    title: "Storm Damage",
    description: "Lightning strike or storm damage to electrical systems.",
    urgent: true,
  },
];

const safetySteps = [
  "Turn off power at the switchboard if safe to do so",
  "Don't touch any damaged wires or outlets",
  "Keep family and pets away from affected areas",
  "Don't use water near electrical faults",
  "Call us on 0406 494 941",
];

const whyChooseUs = [
  { icon: Clock, text: "24/7 availability — nights, weekends, holidays" },
  { icon: Zap, text: "Fast response — typically under 1 hour in Adelaide metro" },
  { icon: Shield, text: "Licensed electricians — fully qualified and insured" },
  { icon: CheckCircle, text: "Upfront pricing — we quote before starting work" },
  { icon: CheckCircle, text: "Permanent fixes — not just temporary patches" },
];

export default function EmergencyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Optimized for PANIC */}
        <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12 md:py-20">
          {/* Animated background pulse */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-red-500 opacity-20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <div className="container-custom relative">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <Zap className="h-10 w-10 text-yellow-300" />
                <h1 className="text-3xl md:text-4xl font-bold">
                  ELECTRICAL EMERGENCY?
                </h1>
              </motion.div>

              {/* Giant Phone Number */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl mb-6"
              >
                <p className="text-red-600 font-semibold mb-2 text-lg">
                  CALL NOW
                </p>
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="block text-4xl md:text-6xl font-bold text-charcoal hover:text-red-600 transition-colors"
                >
                  {contactInfo.phone}
                </a>
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center justify-center gap-2 mt-4 px-8 py-4 bg-red-600 text-white text-xl font-semibold rounded-xl hover:bg-red-700 transition-colors w-full md:w-auto"
                >
                  <Phone className="h-6 w-6" />
                  TAP TO CALL
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
              >
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-300" />
                  Available 24/7
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-300" />
                  Adelaide Metro
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-300" />
                  Under 1 hour response
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* We Handle These Emergencies */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-center mb-8">We Handle These Emergencies</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyTypes.map((emergency, index) => (
                <motion.div
                  key={emergency.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`card p-6 ${
                    emergency.urgent
                      ? "border-red-200 bg-red-50"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                      emergency.urgent
                        ? "bg-red-100 text-red-600"
                        : "bg-primary-100 text-primary-600"
                    }`}
                  >
                    <emergency.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{emergency.title}</h3>
                  <p className="text-gray-600 text-sm">{emergency.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What To Do Right Now */}
        <section className="section bg-charcoal text-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-white text-center mb-8">
                What To Do Right Now
              </h2>

              <div className="space-y-4">
                {safetySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/10 rounded-lg p-4"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>

              {/* Prominent call button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 text-white text-xl font-semibold rounded-xl hover:bg-red-600 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  Call {contactInfo.phone}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Call Pratt */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="text-center mb-8">Why Call Pratt for Emergencies</h2>

            <div className="max-w-2xl mx-auto space-y-4">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4">Emergency Service Areas</h2>
              <p className="text-gray-600 mb-6">
                We respond to emergencies across all Adelaide metro suburbs, with
                fastest response times in southern Adelaide including Christie&apos;s
                Beach, Flagstaff Hill, Hallett Cove, Happy Valley, and surrounding
                areas.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                {[
                  "Christie's Beach",
                  "Flagstaff Hill",
                  "Hallett Cove",
                  "Happy Valley",
                  "Morphett Vale",
                  "Reynella",
                  "Aldinga Beach",
                  "Seaford",
                  "Adelaide CBD",
                ].map((suburb) => (
                  <span
                    key={suburb}
                    className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Sticky on Mobile */}
        <section className="bg-red-600 py-6">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <p className="text-white text-xl font-semibold">
                Don&apos;t wait — electrical emergencies can be dangerous
              </p>
              <a
                href={getTelLink(contactInfo.phone)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-red-600 p-4 z-50 shadow-lg">
        <a
          href={getTelLink(contactInfo.phone)}
          className="flex items-center justify-center gap-2 w-full py-3 bg-white text-red-600 font-bold rounded-xl"
        >
          <Zap className="h-5 w-5" />
          CALL {contactInfo.phone} NOW
        </a>
      </div>
    </>
  );
}
