"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Zap,
  AlertTriangle,
  Home,
  Building2,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection } from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

const maintenancePlans = [
  {
    name: "Home Essential",
    price: "$199",
    period: "per year",
    description: "Annual safety check for peace of mind",
    features: [
      "Annual electrical safety inspection",
      "Smoke alarm testing & battery replacement",
      "Safety switch (RCD) testing",
      "Switchboard inspection",
      "Written safety report",
      "10% discount on repairs",
      "Priority booking",
    ],
    bestFor: "Homeowners wanting annual peace of mind",
    highlight: false,
  },
  {
    name: "Home Premium",
    price: "$349",
    period: "per year",
    description: "Comprehensive cover with priority service",
    features: [
      "Everything in Home Essential, plus:",
      "Bi-annual inspections (twice yearly)",
      "Thermal imaging of switchboard",
      "Power point & switch inspection",
      "Minor repairs included (up to $100)",
      "15% discount on additional work",
      "Same-day emergency response",
      "Extended warranty on our work",
    ],
    bestFor: "Families & larger homes",
    highlight: true,
  },
  {
    name: "Commercial",
    price: "Custom",
    period: "pricing",
    description: "Tailored maintenance for businesses",
    features: [
      "Scheduled maintenance visits",
      "Exit & emergency lighting testing",
      "RCD & circuit breaker testing",
      "Compliance documentation",
      "Priority emergency response",
      "Dedicated account manager",
      "Flexible scheduling (after hours)",
      "Full compliance reporting",
    ],
    bestFor: "Businesses requiring compliance",
    highlight: false,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Regular inspections catch potential hazards before they become dangerous or costly.",
  },
  {
    icon: Clock,
    title: "Priority Service",
    description:
      "Jump the queue when you need us. Plan members get priority booking for all work.",
  },
  {
    icon: Zap,
    title: "Prevent Breakdowns",
    description:
      "Proactive maintenance prevents unexpected failures and emergency call-outs.",
  },
  {
    icon: AlertTriangle,
    title: "Stay Compliant",
    description:
      "Meet insurance and regulatory requirements with documented maintenance records.",
  },
];

const whatWeCheck = [
  {
    category: "Switchboard",
    items: [
      "Circuit breaker condition",
      "Safety switch operation",
      "Wiring connections",
      "Thermal scanning for hot spots",
      "Labelling accuracy",
    ],
  },
  {
    category: "Safety Systems",
    items: [
      "Smoke alarm testing",
      "Battery replacement",
      "RCD trip testing",
      "Earth fault testing",
      "Emergency lighting (commercial)",
    ],
  },
  {
    category: "General Electrical",
    items: [
      "Power point condition",
      "Light switch operation",
      "Ceiling fan checks",
      "Outdoor electrical",
      "Pool/spa equipment (if applicable)",
    ],
  },
];

const maintenanceFAQs = [
  {
    question: "How often should I have my electrical system checked?",
    answer:
      "We recommend annual inspections for most homes. Older homes (25+ years) or homes with pools, solar systems, or heavy electrical usage may benefit from more frequent checks.",
  },
  {
    question: "What's the difference between an inspection and a compliance check?",
    answer:
      "Our maintenance inspections are proactive safety checks to identify potential issues. A compliance check is a formal inspection required when selling a home or for insurance purposes, which we can also provide.",
  },
  {
    question: "Can I cancel my maintenance plan?",
    answer:
      "Yes, you can cancel at any time. If you cancel within the first year, we'll refund the unused portion of your plan. We believe in earning your business, not locking you in.",
  },
  {
    question: "What happens if you find a problem during inspection?",
    answer:
      "We'll provide a detailed report of any issues found, along with recommendations and quotes for repairs. Plan members receive discounts on all repair work.",
  },
  {
    question: "Do maintenance plans cover emergency call-outs?",
    answer:
      "Emergency call-outs are not included in the plan cost, but plan members receive priority response and discounted emergency rates.",
  },
  {
    question: "Is the maintenance plan tax deductible for rental properties?",
    answer:
      "Yes, maintenance costs for rental properties are typically tax deductible. We provide detailed invoices for your records. Consult your accountant for specific advice.",
  },
];

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
              >
                <Shield className="h-4 w-4" />
                Maintenance Plans
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Protect Your Home with Regular Maintenance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-100 mb-8"
              >
                Prevent electrical problems before they happen. Our maintenance
                plans keep your home safe and your electrical system running
                smoothly.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="#plans"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  View Plans
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

        {/* Benefits */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose a Maintenance Plan?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Regular maintenance is the best way to keep your family safe and
                avoid costly emergency repairs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 mb-4">
                    <benefit.icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section id="plans" className="section bg-gray-50 scroll-mt-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Maintenance Plans</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the plan that&apos;s right for your home or business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden ${
                    plan.highlight
                      ? "border-2 border-primary-500 shadow-xl"
                      : "border border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.highlight && (
                    <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                      <Star className="h-4 w-4 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {plan.name.includes("Home") ? (
                        <Home className="h-5 w-5 text-primary-500" />
                      ) : (
                        <Building2 className="h-5 w-5 text-primary-500" />
                      )}
                      <h3 className="font-bold text-xl text-charcoal">
                        {plan.name}
                      </h3>
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-charcoal">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-500 mb-4">
                      Best for: {plan.bestFor}
                    </p>

                    <Link
                      href="/contact"
                      className={`block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.highlight
                          ? "bg-primary-500 text-white hover:bg-primary-600"
                          : "bg-gray-100 text-charcoal hover:bg-gray-200"
                      }`}
                    >
                      {plan.price === "Custom" ? "Get Quote" : "Sign Up"}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">What&apos;s Included in an Inspection</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive inspections cover all critical areas of your
                electrical system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whatWeCheck.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Wrench className="h-5 w-5 text-primary-500" />
                    </div>
                    <h3 className="font-bold text-lg text-charcoal">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={maintenanceFAQs}
          title="Maintenance Plan FAQs"
          subtitle="Common questions about our maintenance services."
          className="bg-gray-50"
        />

        {/* Quote Form Section */}
        <section className="section bg-charcoal">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-white mb-4">Ready to Protect Your Home?</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Sign up for a maintenance plan today, or contact us to discuss
                  your specific needs.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Annual safety inspections
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Priority booking & response
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Discounts on repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Peace of mind
                  </li>
                </ul>
              </div>
              <QuoteForm variant="default" preselectedService="residential" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Prevent Problems Before They Start"
          subtitle="Regular maintenance keeps your home safe and saves money in the long run."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
