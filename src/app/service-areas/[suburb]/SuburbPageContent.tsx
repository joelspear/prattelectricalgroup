"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
  Zap,
  Sun,
  Home,
  Building2,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection, Testimonials } from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";
import type { SuburbInfo } from "@/data/suburbs";

const services = [
  {
    icon: Home,
    name: "Residential Electrical",
    description: "Switchboard upgrades, rewiring, lighting, power points, safety switches, and more.",
    href: "/residential",
  },
  {
    icon: Sun,
    name: "Solar & Battery",
    description: "SAA accredited solar installation with battery storage options.",
    href: "/solar",
  },
  {
    icon: Building2,
    name: "Commercial Electrical",
    description: "Office fit-outs, LED upgrades, data cabling, and commercial maintenance.",
    href: "/commercial",
  },
  {
    icon: Zap,
    name: "EV Chargers",
    description: "Professional EV charger installation for homes and businesses.",
    href: "/ev-chargers",
  },
];

const localFAQs = [
  {
    question: "How quickly can you get to my suburb?",
    answer:
      "We service all of South Australia. For non-urgent work, we can usually schedule an appointment within 1-2 business days.",
  },
  {
    question: "Do you charge a call-out fee?",
    answer:
      "Yes, there's a standard call-out fee which varies by location. However, this is waived if you proceed with the quoted work. We always provide upfront pricing before starting any job.",
  },
  {
    question: "Are you licensed to work in this area?",
    answer:
      "Yes, we're fully licensed electricians in South Australia, able to work anywhere in the state. We're also SAA accredited for solar installations.",
  },
  {
    question: "Can you give me a quote over the phone?",
    answer:
      "For straightforward jobs like power point installation, we can often provide a ballpark quote over the phone. For larger jobs, we prefer to visit first to give you an accurate fixed price.",
  },
];

interface SuburbPageContentProps {
  suburb: SuburbInfo;
}

export default function SuburbPageContent({ suburb }: SuburbPageContentProps) {
  return (
    <>
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Pratt Electrical Group",
            description: `Licensed electrician serving ${suburb.name}. Solar installation, electrical repairs, switchboard upgrades.`,
            address: {
              "@type": "PostalAddress",
              addressLocality: suburb.name,
              addressRegion: "SA",
              postalCode: suburb.postcode,
              addressCountry: "AU",
            },
            telephone: contactInfo.phone,
            url: `https://prattelectricalgroup.com/service-areas/${suburb.slug}`,
            areaServed: {
              "@type": "City",
              name: suburb.name,
            },
          }),
        }}
      />

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
                className="flex items-center gap-2 mb-4"
              >
                <Link
                  href="/service-areas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Service Areas
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-primary-400">{suburb.name}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full text-primary-300 text-sm font-medium mb-6"
              >
                <MapPin className="h-4 w-4" />
                {suburb.postcode} • {suburb.region}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Electrician in {suburb.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-300 mb-8"
              >
                {suburb.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features/Benefits */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Why Choose Us in {suburb.name}</h2>
                <div className="space-y-4">
                  {suburb.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-primary-600 mb-1">
                      <Shield className="h-5 w-5" />
                      <span className="font-semibold">Licensed</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Fully licensed SA electricians
                    </p>
                  </div>
                  <div className="bg-secondary-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-secondary-600 mb-1">
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
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-yellow-600 mb-1">
                      <Star className="h-5 w-5" />
                      <span className="font-semibold">5-Star Reviews</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Highly rated local service
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Quote Form */}
              <div>
                <QuoteForm
                  variant="compact"
                  preselectedService="residential"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Services in {suburb.name}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive electrical services to {suburb.name}{" "}
                residents and businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
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
                        {service.name}
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

        {/* Nearby Suburbs */}
        {suburb.nearbySuburbs && suburb.nearbySuburbs.length > 0 && (
          <section className="section bg-white">
            <div className="container-custom">
              <h2 className="text-center mb-8">We Also Service Nearby Areas</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {suburb.nearbySuburbs.map((nearby) => {
                  const slug = nearby.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link
                      key={nearby}
                      href={`/service-areas/${slug}`}
                      className="px-4 py-2 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-full text-gray-700 transition-colors"
                    >
                      {nearby}
                    </Link>
                  );
                })}
                <Link
                  href="/service-areas"
                  className="px-4 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                >
                  View All Areas
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FAQ
          items={localFAQs}
          title={`Electrician FAQs - ${suburb.name}`}
          subtitle="Common questions about our electrical services."
          className="bg-gray-50"
        />

        {/* Testimonials */}
        <Testimonials variant="slider" limit={3} />

        {/* Final CTA */}
        <CTASection
          title={`Need an Electrician in ${suburb.name}?`}
          subtitle="Call now for a free quote or to schedule a service visit."
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
