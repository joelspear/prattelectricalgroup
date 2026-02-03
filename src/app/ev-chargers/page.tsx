"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Car,
  Sun,
  Clock,
  DollarSign,
  Shield,
  Leaf,
  Home,
  Building2,
  CheckCircle,
  ArrowRight,
  Gauge,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection, Testimonials } from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

const evBenefits = [
  {
    icon: Clock,
    title: "Charge While You Sleep",
    description:
      "Wake up to a full charge every morning. No more trips to public chargers or range anxiety.",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description:
      "Home charging costs 50-70% less than public charging. Even more savings when paired with solar.",
  },
  {
    icon: Sun,
    title: "Solar Integration",
    description:
      "Charge your EV with free solar power. We can integrate your charger with your solar system.",
  },
  {
    icon: Gauge,
    title: "Faster Than a Wall Outlet",
    description:
      "A dedicated Level 2 charger is 4-8x faster than a standard power point. Full charge in 4-8 hours.",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description:
      "Professional installation ensures your home's electrical system can handle the load safely.",
  },
  {
    icon: Leaf,
    title: "Reduce Emissions",
    description:
      "Lower your carbon footprint further by charging with renewable energy.",
  },
];

const installationSteps = [
  {
    step: 1,
    title: "Free Assessment",
    description:
      "We assess your switchboard capacity, cable run length, and recommend the best charger for your needs.",
  },
  {
    step: 2,
    title: "Fixed Quote",
    description:
      "You receive a detailed quote covering charger, installation, and any required switchboard upgrades.",
  },
  {
    step: 3,
    title: "Professional Installation",
    description:
      "Our licensed electricians install your charger, typically completed in half a day.",
  },
  {
    step: 4,
    title: "Testing & Handover",
    description:
      "We test everything thoroughly and show you how to use your new charger, including app setup.",
  },
];

const evFAQs = [
  {
    question: "Do I need to upgrade my switchboard for an EV charger?",
    answer:
      "Many Adelaide homes, especially those built before 2000, may need a switchboard upgrade to safely handle EV charging. We'll assess this during our free site visit and include any necessary upgrades in your quote.",
  },
  {
    question: "What's the difference between Level 1 and Level 2 charging?",
    answer:
      "Level 1 uses a standard power point (10A) and adds about 10-15km of range per hour. Level 2 uses a dedicated circuit (typically 32A) and adds 40-70km per hour - perfect for overnight charging.",
  },
  {
    question: "Can I charge my EV with solar power?",
    answer:
      "Yes! We can integrate your EV charger with your solar system to maximise free charging from the sun. Smart chargers can be programmed to charge when solar production is highest.",
  },
  {
    question: "How long does EV charger installation take?",
    answer:
      "Most installations are completed in 3-4 hours. If a switchboard upgrade is needed, it may take a full day. We'll confirm the timeframe in your quote.",
  },
  {
    question: "Will my EV charger work with any electric vehicle?",
    answer:
      "Most modern EV chargers use a Type 2 connector, which is compatible with nearly all EVs sold in Australia. We'll recommend the right charger for your vehicle.",
  },
  {
    question: "Is three-phase power better for EV charging?",
    answer:
      "Three-phase allows faster charging (up to 22kW vs 7.4kW single-phase), but it's only worthwhile if you need very fast home charging or have a large battery EV. Most owners are perfectly happy with single-phase.",
  },
];

export default function EVChargersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-charcoal via-gray-800 to-charcoal text-white py-16 md:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
          </div>

          <div className="container-custom relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-6">
                  <Car className="h-4 w-4" />
                  EV Charger Installation
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Charge Your EV at Home
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Professional EV charger installation for Adelaide homes and
                  businesses. Wake up to a full charge every day, and save money
                  with home charging.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={getTelLink(contactInfo.phone)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    <Zap className="h-4 w-4" />
                    Call {contactInfo.phone}
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary-400" />
                    Licensed Electricians
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary-400" />
                    All Brands Installed
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary-400" />
                    Solar Integration
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80"
                    alt="EV charger installation"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Stats overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Gauge className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-charcoal">4-8x</p>
                      <p className="text-sm text-gray-500">Faster than wall outlet</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Install a Home EV Charger?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Home charging is the most convenient and cost-effective way to
                keep your electric vehicle ready to go.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 mb-4">
                    <benefit.icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Installation Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From quote to charging in as little as a week. Here&apos;s what to
                expect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index < installationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200" />
                  )}
                  <div className="relative bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential & Commercial */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Residential */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 mb-6">
                  <Home className="h-7 w-7 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Home EV Charging</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for homeowners who want the convenience of charging
                  overnight. Single and three-phase options available.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Garage, carport, or driveway installation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Solar integration available
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    All EV brands supported
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
                >
                  Get Home Charger Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Commercial */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary-50 mb-6">
                  <Building2 className="h-7 w-7 text-secondary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Commercial EV Charging</h3>
                <p className="text-gray-600 mb-6">
                  Solutions for businesses, strata properties, and commercial
                  buildings. Fleet charging and public access options.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Workplace and staff charging
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Strata and apartment buildings
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Fleet vehicle charging
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Load management systems
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-secondary-500 hover:text-secondary-600 font-medium"
                >
                  Get Commercial Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          items={evFAQs}
          title="EV Charger FAQs"
          subtitle="Common questions about home EV charger installation in Adelaide."
          className="bg-gray-50"
        />

        {/* Testimonials */}
        <Testimonials variant="slider" limit={3} className="bg-white" />

        {/* Quote Form Section */}
        <section className="section bg-charcoal">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-white mb-4">Get Your EV Charger Quote</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Ready to charge at home? Fill out the form and we&apos;ll get back
                  to you with a free quote for your EV charger installation.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Free site assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Fixed price installation quote
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    All EV brands supported
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Solar integration advice
                  </li>
                </ul>
              </div>
              <QuoteForm variant="default" preselectedService="residential" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Ready to Charge at Home?"
          subtitle="Join the thousands of Australians enjoying the convenience of home EV charging."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
