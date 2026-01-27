"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  CreditCard,
  Clock,
  CheckCircle,
  ArrowRight,
  Calculator,
  Shield,
  Sun,
  Percent,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection } from "@/components/sections";
import { contactInfo } from "@/data/siteData";

const financeOptions = [
  {
    name: "Interest-Free Finance",
    provider: "Humm",
    description:
      "Spread the cost of your solar system or electrical work with interest-free payments.",
    features: [
      "0% interest",
      "6-60 month terms",
      "Instant approval",
      "No early payout fees",
    ],
    minAmount: "$1,000",
    maxAmount: "$30,000",
    highlight: true,
  },
  {
    name: "Green Loan",
    provider: "Various Banks",
    description:
      "Discounted interest rates for solar and energy-efficient upgrades.",
    features: [
      "Lower rates for green purchases",
      "Flexible terms",
      "Various lenders",
      "Up to $50,000+",
    ],
    minAmount: "$5,000",
    maxAmount: "$50,000+",
    highlight: false,
  },
  {
    name: "Personal Loan",
    provider: "Your Bank",
    description:
      "Use your existing bank relationship for competitive personal loan rates.",
    features: [
      "Competitive rates",
      "Fixed repayments",
      "Fast approval",
      "Flexible use",
    ],
    minAmount: "Varies",
    maxAmount: "Varies",
    highlight: false,
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Get Your Quote",
    description:
      "We provide a detailed quote for your solar or electrical project with all costs clearly outlined.",
    icon: Calculator,
  },
  {
    step: 2,
    title: "Choose Finance Option",
    description:
      "Select the finance option that works best for your budget. We'll help you understand your options.",
    icon: CreditCard,
  },
  {
    step: 3,
    title: "Quick Approval",
    description:
      "Apply online or in person. Most applications are approved within minutes to hours.",
    icon: Clock,
  },
  {
    step: 4,
    title: "Installation Complete",
    description:
      "We complete your installation while you enjoy manageable repayments over time.",
    icon: CheckCircle,
  },
];

const examplePayments = [
  {
    system: "6.6kW Solar System",
    totalCost: "$6,500",
    monthly: "$108/month",
    term: "60 months interest-free",
  },
  {
    system: "10kW Solar System",
    totalCost: "$9,500",
    monthly: "$158/month",
    term: "60 months interest-free",
  },
  {
    system: "Solar + Battery",
    totalCost: "$18,000",
    monthly: "$300/month",
    term: "60 months interest-free",
  },
  {
    system: "Switchboard Upgrade",
    totalCost: "$2,500",
    monthly: "$104/month",
    term: "24 months interest-free",
  },
];

const financeFAQs = [
  {
    question: "Is there a credit check for finance?",
    answer:
      "Yes, all finance providers conduct a credit check as part of the application process. This is typically a soft inquiry that doesn't impact your credit score.",
  },
  {
    question: "Can I pay off my finance early?",
    answer:
      "Yes, most of our finance options allow early repayment without penalty. This means you can pay off your balance whenever suits you without additional fees.",
  },
  {
    question: "What if my finance application is declined?",
    answer:
      "If one option doesn't work out, we can help you explore alternatives. We work with multiple finance providers to give you the best chance of approval.",
  },
  {
    question: "Do I need a deposit?",
    answer:
      "This depends on the finance option and amount. Some options require no deposit, while others may require a small upfront payment. We'll explain all requirements during your quote.",
  },
  {
    question: "Can I finance just the installation, not the equipment?",
    answer:
      "Yes, finance can be applied to any portion of your project. Whether it's the full amount or just part of it, we can work with you to find a solution.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Most interest-free finance applications are approved within minutes. Green loans and personal loans may take 1-3 business days depending on the lender.",
  },
];

export default function FinancePage() {
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
                <DollarSign className="h-4 w-4" />
                Finance Options
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Affordable Payment Options
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-100 mb-8"
              >
                Don&apos;t let upfront costs stop you from upgrading your home.
                Interest-free finance makes solar and electrical work affordable
                for everyone.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/solar-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  <Calculator className="h-4 w-4" />
                  Solar Calculator
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Finance Options */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Finance Options</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple ways to spread the cost of your solar or electrical
                project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {financeOptions.map((option, index) => (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl overflow-hidden border ${
                    option.highlight
                      ? "border-primary-200 shadow-lg"
                      : "border-gray-100"
                  }`}
                >
                  {option.highlight && (
                    <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <CreditCard className="h-4 w-4" />
                      {option.provider}
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3">
                      {option.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {option.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                      <span>
                        From <strong className="text-charcoal">{option.minAmount}</strong>
                      </span>
                      <span>
                        Up to <strong className="text-charcoal">{option.maxAmount}</strong>
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Payments */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Example Payment Plans</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how affordable solar and electrical upgrades can be with
                interest-free finance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {examplePayments.map((payment, index) => (
                <motion.div
                  key={payment.system}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h4 className="font-semibold text-charcoal mb-1">
                    {payment.system}
                  </h4>
                  <p className="text-3xl font-bold text-primary-500 mb-1">
                    {payment.monthly}
                  </p>
                  <p className="text-sm text-gray-500 mb-3">{payment.term}</p>
                  <p className="text-sm text-gray-600">
                    Total: {payment.totalCost}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              *Example only. Actual payments depend on finance approval, term
              length, and final project cost.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">How Finance Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Getting finance for your project is simple and straightforward.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                    <step.icon className="h-8 w-8 text-primary-500" />
                  </div>
                  <div className="text-sm font-medium text-primary-500 mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Finance Solar */}
        <section className="section bg-charcoal text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-primary-300 mb-4">
                  <Sun className="h-5 w-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">
                    Smart Investment
                  </span>
                </div>
                <h2 className="text-white mb-6">
                  Why Finance Your Solar System?
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  With interest-free finance, your solar savings often exceed
                  your monthly payments from day one. That means positive cash
                  flow immediately.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Percent className="h-6 w-6 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">0% Interest</span>
                      <p className="text-gray-400 text-sm">
                        Pay exactly what you owe, nothing more
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-6 w-6 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">
                        Positive Cash Flow
                      </span>
                      <p className="text-gray-400 text-sm">
                        Solar savings can exceed monthly payments
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">
                        Flexible Terms
                      </span>
                      <p className="text-gray-400 text-sm">
                        Choose 6-60 month payment periods
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">
                        Keep Your Savings
                      </span>
                      <p className="text-gray-400 text-sm">
                        Don&apos;t drain your savings account
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Example: 6.6kW Solar System
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-300">System Cost</span>
                    <span className="text-white font-bold">$6,500</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-300">
                      Monthly Payment (60 months)
                    </span>
                    <span className="text-white font-bold">$108</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-gray-300">Monthly Savings (avg)</span>
                    <span className="text-green-400 font-bold">$130+</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-white font-semibold">
                      Monthly Benefit
                    </span>
                    <span className="text-green-400 font-bold text-xl">
                      +$22/month
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-6">
                  *Based on average Adelaide household. Your actual savings may
                  vary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={financeFAQs}
          title="Finance FAQs"
          subtitle="Common questions about our payment options."
          className="bg-gray-50"
        />

        {/* CTA Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get a free quote and we&apos;ll explain all your finance options.
                No obligation, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Don't Wait to Start Saving"
          subtitle="Interest-free finance makes it easy to go solar today."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
