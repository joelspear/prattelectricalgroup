"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  CheckCircle,
  Clock,
  ArrowRight,
  Info,
  Phone,
  Sun,
  Home,
  Zap,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection } from "@/components/sections";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

const residentialPricing = [
  {
    service: "Power Point Installation",
    priceRange: "$150 - $250",
    description: "Standard single power point installed",
    includes: ["Labour", "Standard outlet", "Certificate of compliance"],
    note: "Price varies based on cable run distance",
  },
  {
    service: "Light Switch Installation",
    priceRange: "$100 - $180",
    description: "Replace or install new light switch",
    includes: ["Labour", "Standard switch", "Certificate of compliance"],
  },
  {
    service: "Ceiling Fan Installation",
    priceRange: "$150 - $300",
    description: "Install ceiling fan (fan not included)",
    includes: ["Labour", "Mounting hardware", "Wiring"],
    note: "Extra if new wiring required from switchboard",
  },
  {
    service: "Downlight Installation",
    priceRange: "$70 - $120 each",
    description: "LED downlight supply and install",
    includes: ["Quality LED downlight", "Labour", "Warranty"],
    note: "Discounts for 6+ lights",
  },
  {
    service: "Smoke Alarm Replacement",
    priceRange: "$120 - $180",
    description: "Replace with hardwired photoelectric alarm",
    includes: ["Quality smoke alarm", "Installation", "Testing"],
  },
  {
    service: "Safety Switch Installation",
    priceRange: "$250 - $350",
    description: "Install RCD safety switch to switchboard",
    includes: ["Safety switch", "Labour", "Testing", "Compliance certificate"],
  },
  {
    service: "Switchboard Upgrade",
    priceRange: "$1,200 - $2,500",
    description: "Full switchboard replacement with modern safety switches",
    includes: [
      "New switchboard",
      "Circuit breakers",
      "Safety switches",
      "Labelling",
    ],
    note: "Price depends on number of circuits",
  },
  {
    service: "Full House Rewire",
    priceRange: "$8,000 - $15,000",
    description: "Complete rewiring of 3-4 bedroom home",
    includes: ["All new wiring", "New switchboard", "Testing", "Compliance"],
    note: "Quote required - varies by home size",
  },
];

const solarPricing = [
  {
    service: "6.6kW Solar System",
    priceRange: "$5,500 - $7,500",
    description: "Entry-level system perfect for most homes",
    includes: [
      "Quality panels",
      "String inverter",
      "Full installation",
      "Grid connection",
    ],
    note: "After STC rebate",
  },
  {
    service: "10kW Solar System",
    priceRange: "$7,500 - $10,500",
    description: "Larger system for bigger homes or EVs",
    includes: [
      "Premium panels",
      "Quality inverter",
      "Full installation",
      "Grid connection",
    ],
    note: "After STC rebate",
  },
  {
    service: "13kW+ Solar System",
    priceRange: "$10,000 - $15,000+",
    description: "Large system for high usage homes",
    includes: [
      "Premium panels",
      "Three-phase compatible",
      "Full installation",
      "Grid connection",
    ],
    note: "After STC rebate, quote required",
  },
  {
    service: "Battery Storage (13.5kWh)",
    priceRange: "$12,000 - $15,000",
    description: "Tesla Powerwall or equivalent",
    includes: ["Battery system", "Installation", "Configuration", "Warranty"],
    note: "Can qualify for SA battery subsidy",
  },
  {
    service: "EV Charger Installation",
    priceRange: "$1,200 - $3,000",
    description: "Home EV charging solution",
    includes: ["Charger unit", "Installation", "Dedicated circuit"],
    note: "Price varies by charger type and cable run",
  },
];

const callOutRates = [
  {
    type: "Standard Call-Out",
    rate: "$80 - $100",
    description: "Business hours (Mon-Fri 8am-5pm)",
  },
  {
    type: "After Hours",
    rate: "$120 - $150",
    description: "Evenings and weekends",
  },
  {
    type: "Emergency 24/7",
    rate: "$150 - $200",
    description: "Urgent call-outs any time",
  },
  {
    type: "Hourly Labour Rate",
    rate: "$85 - $110/hr",
    description: "After call-out fee",
  },
];

const pricingFAQs = [
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we provide free quotes for all work. For simple jobs, we can often quote over the phone. For larger projects, we'll visit your property to provide an accurate fixed-price quote at no cost.",
  },
  {
    question: "Are these prices GST inclusive?",
    answer:
      "Yes, all prices shown include GST. Our quotes always show the total price with no hidden fees.",
  },
  {
    question: "Is the call-out fee waived if I proceed with work?",
    answer:
      "Yes, if you accept our quote and proceed with the work, the call-out fee is typically waived or applied to the job cost.",
  },
  {
    question: "Why is there a price range?",
    answer:
      "Prices vary based on factors like cable run distances, accessibility, existing wiring condition, and specific product choices. We provide exact pricing in our quote after assessing your specific situation.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer interest-free finance options for larger jobs including solar installations and switchboard upgrades. Terms from 6-60 months available.",
    link: { text: "Learn about finance", href: "/finance" },
  },
  {
    question: "What's included in your quotes?",
    answer:
      "Our quotes include all labour, materials, and a certificate of compliance for the work performed. There are no hidden charges - what we quote is what you pay.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-charcoal via-gray-800 to-charcoal text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
              >
                <DollarSign className="h-4 w-4" />
                Pricing Guide
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Transparent Pricing
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                We believe in upfront, honest pricing. Here&apos;s a guide to our
                common services. All quotes are free with no obligation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-6 bg-yellow-50 border-b border-yellow-200">
          <div className="container-custom">
            <div className="flex items-start gap-3 max-w-3xl mx-auto">
              <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> These prices are indicative guides only.
                Actual pricing depends on your specific requirements, site
                conditions, and material choices. We provide detailed fixed-price
                quotes before any work begins.
              </p>
            </div>
          </div>
        </section>

        {/* Call-Out Rates */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Call-Out & Labour Rates</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our standard rates for electrical service calls.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {callOutRates.map((rate, index) => (
                <motion.div
                  key={rate.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <Clock className="h-8 w-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-charcoal mb-1">
                    {rate.type}
                  </h3>
                  <p className="text-2xl font-bold text-primary-500 mb-2">
                    {rate.rate}
                  </p>
                  <p className="text-sm text-gray-500">{rate.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential Pricing */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Home className="h-6 w-6 text-primary-500" />
              </div>
              <h2 className="mb-0">Residential Electrical</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {residentialPricing.map((item, index) => (
                <motion.div
                  key={item.service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-charcoal">
                      {item.service}
                    </h3>
                    <span className="text-lg font-bold text-primary-500 whitespace-nowrap ml-4">
                      {item.priceRange}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.includes.map((inc) => (
                      <span
                        key={inc}
                        className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-1 rounded"
                      >
                        <CheckCircle className="h-3 w-3" />
                        {inc}
                      </span>
                    ))}
                  </div>
                  {item.note && (
                    <p className="text-xs text-gray-500 italic mt-2">
                      * {item.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/residential"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
              >
                Learn more about residential services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Solar Pricing */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-secondary-100 rounded-lg">
                <Sun className="h-6 w-6 text-secondary-500" />
              </div>
              <h2 className="mb-0">Solar & Battery</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {solarPricing.map((item, index) => (
                <motion.div
                  key={item.service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-charcoal">
                      {item.service}
                    </h3>
                    <span className="text-lg font-bold text-primary-600 whitespace-nowrap ml-4">
                      {item.priceRange}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.includes.map((inc) => (
                      <span
                        key={inc}
                        className="inline-flex items-center gap-1 text-xs text-primary-700 bg-white px-2 py-1 rounded"
                      >
                        <CheckCircle className="h-3 w-3" />
                        {inc}
                      </span>
                    ))}
                  </div>
                  {item.note && (
                    <p className="text-xs text-primary-600 font-medium mt-2">
                      * {item.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/solar-calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Calculate Your Savings
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-charcoal rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Learn About Solar
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Pricing Note */}
        <section className="section bg-red-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-xl flex-shrink-0">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    Emergency Electrical Services
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Electrical emergencies don&apos;t wait for business hours.
                    We&apos;re available 24/7 for urgent issues like power
                    outages, sparking outlets, and burning smells.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <span className="text-sm text-gray-500">
                        Emergency Call-Out
                      </span>
                      <p className="text-2xl font-bold text-red-600">
                        $150 - $200
                      </p>
                    </div>
                    <div className="flex items-center">
                      <a
                        href={getTelLink(contactInfo.phone)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
                      >
                        <Zap className="h-5 w-5" />
                        Call Now: {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={pricingFAQs}
          title="Pricing FAQs"
          subtitle="Common questions about our pricing and quotes."
          className="bg-white"
        />

        {/* Get Quote CTA */}
        <section className="section bg-charcoal text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">Get Your Free Quote</h2>
              <p className="text-gray-300 text-lg mb-8">
                Every job is unique. Contact us for an accurate quote tailored
                to your specific needs. No obligation, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Fair Prices, Quality Work"
          subtitle="Upfront pricing with no hidden fees. That's the Pratt promise."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
