"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  Sun,
  Clock,
  Star,
  Home,
  Building2,
  Zap,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { QuoteForm } from "@/components/forms";
import { Breadcrumbs, FAQSchema } from "@/components/seo";
import { Testimonials } from "@/components/sections";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";
import type { SuburbLandingData } from "@/data/suburbLandingPages";

const serviceLinks = [
  {
    icon: Home,
    name: "Residential Electrical",
    description:
      "Switchboard upgrades, rewiring, lighting, power points, safety switches, and more.",
    href: "/residential",
  },
  {
    icon: Sun,
    name: "Solar & Battery",
    description:
      "SAA accredited solar installation with battery storage options.",
    href: "/solar",
  },
  {
    icon: Building2,
    name: "Commercial Electrical",
    description:
      "Office fit-outs, LED upgrades, data cabling, and commercial maintenance.",
    href: "/commercial",
  },
  {
    icon: Zap,
    name: "EV Chargers",
    description:
      "Professional EV charger installation for homes and businesses.",
    href: "/ev-chargers",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-charcoal pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

interface SuburbLandingTemplateProps {
  data: SuburbLandingData;
}

export default function SuburbLandingTemplate({
  data,
}: SuburbLandingTemplateProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <>
      <FAQSchema faqs={data.faqs} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-charcoal via-gray-800 to-charcoal text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="container-custom relative">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-6"
              >
                <MapPin className="h-4 w-4" />
                {data.postcode} &bull; {data.region}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6 text-white"
              >
                Electrician {data.name} | Trusted Local Electrical &amp; Solar
                Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                Licensed electrician and SAA accredited solar installer serving{" "}
                {data.name}. Quality workmanship, free quotes, and fast response
                times for all your electrical needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
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
                  <Phone className="h-5 w-5" />
                  Call {contactInfo.phone}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section bg-white">
          <div className="container-custom">
            <Breadcrumbs
              items={[
                { name: "Service Areas", href: "/service-areas" },
                {
                  name: data.name,
                  href: `/electrician-${data.slug}`,
                },
              ]}
              className="mb-8"
            />
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6">
                Your Local Electrician in {data.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {data.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Services in Suburb */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="mb-6">
                Electrical Services in {data.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {data.servicesContent}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {serviceLinks.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
                  >
                    <div className="p-3 bg-primary-50 rounded-xl group-hover:bg-primary-100 transition-colors">
                      <service.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-charcoal group-hover:text-primary-500 transition-colors mb-2">
                        {service.name} in {data.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary-500 font-medium">
                        Learn more
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="mb-6">
                  Why Choose Pratt Electrical in {data.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {data.whyChooseContent}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary-600 mb-1">
                      <Shield className="h-5 w-5" />
                      <span className="font-semibold">Licensed</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Fully licensed SA electricians
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-yellow-600 mb-1">
                      <Sun className="h-5 w-5" />
                      <span className="font-semibold">SAA Accredited</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Solar installation certified
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">Fast Response</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Quick, reliable service
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-orange-600 mb-1">
                      <Star className="h-5 w-5" />
                      <span className="font-semibold">4.9 Star Rating</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Highly rated on Google
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    "Free, no-obligation quotes",
                    "Upfront, transparent pricing",
                    "Quality workmanship guaranteed",
                    "All work to Australian Standards",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <QuoteForm variant="compact" preselectedService="residential" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-8">
                Electrician FAQs &mdash; {data.name}
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                {data.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onToggle={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Nearby Suburbs */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-center mb-8">We Also Service Nearby Areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.neighbouringNames.map((name, index) => (
                <Link
                  key={name}
                  href={`/electrician-${data.neighbouringSlugs[index]}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-gray-700 transition-colors"
                >
                  Electrician {name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="px-4 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
              >
                View All Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-charcoal text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">
                Need an Electrician in {data.name}?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Call now for a free quote or fill out our online form. Fast
                response, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call {contactInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
