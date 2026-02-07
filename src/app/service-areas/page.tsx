"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  CheckCircle,
  ArrowRight,
  Zap,
  Sun,
  Home,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

// Extended service area data with more detail
interface SuburbData {
  name: string;
  slug: string;
  postcode: string;
  region: "southern" | "central" | "northern" | "eastern" | "western";
  featured: boolean;
  description?: string;
}

const serviceAreasData: SuburbData[] = [
  // Southern Adelaide (Priority)
  {
    name: "Christies Beach",
    slug: "christies-beach",
    postcode: "5165",
    region: "southern",
    featured: true,
    description: "Our home base - fastest response times guaranteed.",
  },
  {
    name: "Flagstaff Hill",
    slug: "flagstaff-hill",
    postcode: "5159",
    region: "southern",
    featured: true,
    description: "Popular area for solar installations and switchboard upgrades.",
  },
  {
    name: "Hallett Cove",
    slug: "hallett-cove",
    postcode: "5158",
    region: "southern",
    featured: true,
    description: "Coastal homes with modern electrical needs.",
  },
  {
    name: "Happy Valley",
    slug: "happy-valley",
    postcode: "5159",
    region: "southern",
    featured: true,
    description: "Growing suburb with many new solar installations.",
  },
  {
    name: "Morphett Vale",
    slug: "morphett-vale",
    postcode: "5162",
    region: "southern",
    featured: true,
    description: "Large residential area we service regularly.",
  },
  {
    name: "Reynella",
    slug: "reynella",
    postcode: "5161",
    region: "southern",
    featured: true,
    description: "Mix of established homes and new developments.",
  },
  {
    name: "Aldinga Beach",
    slug: "aldinga-beach",
    postcode: "5173",
    region: "southern",
    featured: true,
    description: "Coastal growth area with high solar demand.",
  },
  {
    name: "Seaford",
    slug: "seaford",
    postcode: "5169",
    region: "southern",
    featured: true,
    description: "Beachside suburb with excellent solar conditions.",
  },
  // More Southern
  {
    name: "Noarlunga",
    slug: "noarlunga",
    postcode: "5168",
    region: "southern",
    featured: false,
  },
  {
    name: "Aberfoyle Park",
    slug: "aberfoyle-park",
    postcode: "5159",
    region: "southern",
    featured: false,
  },
  {
    name: "Woodcroft",
    slug: "woodcroft",
    postcode: "5162",
    region: "southern",
    featured: false,
  },
  {
    name: "McLaren Vale",
    slug: "mclaren-vale",
    postcode: "5171",
    region: "southern",
    featured: false,
  },
  {
    name: "Old Reynella",
    slug: "old-reynella",
    postcode: "5161",
    region: "southern",
    featured: false,
  },
  {
    name: "Port Noarlunga",
    slug: "port-noarlunga",
    postcode: "5167",
    region: "southern",
    featured: false,
  },
  {
    name: "Sheidow Park",
    slug: "sheidow-park",
    postcode: "5158",
    region: "southern",
    featured: false,
  },
  {
    name: "Trott Park",
    slug: "trott-park",
    postcode: "5158",
    region: "southern",
    featured: false,
  },
  // Eastern/Hills
  {
    name: "Blackwood",
    slug: "blackwood",
    postcode: "5051",
    region: "eastern",
    featured: false,
  },
  {
    name: "Belair",
    slug: "belair",
    postcode: "5052",
    region: "eastern",
    featured: false,
  },
  {
    name: "Stirling",
    slug: "stirling",
    postcode: "5152",
    region: "eastern",
    featured: false,
  },
  // Central
  {
    name: "Adelaide CBD",
    slug: "adelaide-cbd",
    postcode: "5000",
    region: "central",
    featured: false,
  },
  {
    name: "Glenelg",
    slug: "glenelg",
    postcode: "5045",
    region: "central",
    featured: false,
  },
  {
    name: "Unley",
    slug: "unley",
    postcode: "5061",
    region: "central",
    featured: false,
  },
  {
    name: "Norwood",
    slug: "norwood",
    postcode: "5067",
    region: "central",
    featured: false,
  },
];

const services = [
  { icon: Home, name: "Residential Electrical", href: "/residential" },
  { icon: Building2, name: "Commercial Electrical", href: "/commercial" },
  { icon: Sun, name: "Solar & Battery", href: "/solar" },
  { icon: Zap, name: "EV Chargers", href: "/ev-chargers" },
];

export default function ServiceAreasPage() {
  const featuredSuburbs = serviceAreasData.filter((s) => s.featured);
  const southernSuburbs = serviceAreasData.filter((s) => s.region === "southern");
  const otherSuburbs = serviceAreasData.filter((s) => s.region !== "southern");

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
                <MapPin className="h-4 w-4" />
                Service Areas
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Servicing All of South Australia
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-100 mb-8"
              >
                Based in Christies Beach, we provide fast, reliable electrical
                services all across South Australia.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary-200" />
                  <span>All across South Australia</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                  <Zap className="h-5 w-5 text-primary-200" />
                  <span>Residential & Commercial</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Suburbs Grid */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Primary Service Areas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These suburbs are our primary service area where we guarantee the
                fastest response times and most competitive pricing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredSuburbs.map((suburb, index) => (
                <motion.div
                  key={suburb.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/service-areas/${suburb.slug}`}
                    className="block bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <MapPin className="h-5 w-5 text-primary-500" />
                      </div>
                      <span className="text-xs text-gray-400">
                        {suburb.postcode}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-charcoal mb-2 group-hover:text-primary-500 transition-colors">
                      {suburb.name}
                    </h3>
                    {suburb.description && (
                      <p className="text-sm text-gray-500">{suburb.description}</p>
                    )}
                    <div className="flex items-center gap-1 mt-3 text-sm text-primary-500 font-medium">
                      View services
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services We Provide */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Services Available in All Areas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide the full range of electrical services throughout our
                service area.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
                    className="block bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all group"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 mb-4 group-hover:bg-primary-100 transition-colors">
                      <service.icon className="h-7 w-7 text-primary-500" />
                    </div>
                    <h3 className="font-semibold text-charcoal group-hover:text-primary-500 transition-colors">
                      {service.name}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Southern Suburbs */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Southern Adelaide */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">
                      Southern Adelaide
                    </h3>
                    <p className="text-sm text-gray-500">
                      Our core service area - fastest response
                    </p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 text-primary-700 mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Priority Response Area</span>
                  </div>
                  <p className="text-sm text-primary-600">
                    Same-day service often available. Quick response for our
                    core service area.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {southernSuburbs.map((suburb) => (
                    <Link
                      key={suburb.slug}
                      href={`/service-areas/${suburb.slug}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-primary-500"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{suburb.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Areas */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">
                      Greater Adelaide
                    </h3>
                    <p className="text-sm text-gray-500">
                      We also service these areas
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Extended Service Area</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Service available with advance booking across the greater
                    Adelaide area and beyond.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {otherSuburbs.map((suburb) => (
                    <Link
                      key={suburb.slug}
                      href={`/service-areas/${suburb.slug}`}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-gray-600 hover:text-primary-500"
                    >
                      <CheckCircle className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span>{suburb.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section bg-charcoal text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">Not Sure If We Service Your Area?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Give us a call and we&apos;ll let you know if we can help. We&apos;re
                always happy to discuss your electrical needs.
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

        {/* Final CTA */}
        <CTASection
          title="South Australia's Trusted Local Electricians"
          subtitle="Based in Christies Beach, servicing all of South Australia."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
