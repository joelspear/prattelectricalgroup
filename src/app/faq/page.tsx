"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ArrowRight,
  Sun,
  Home,
  Building2,
  DollarSign,
  AlertTriangle,
  Info,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { CTASection } from "@/components/sections";
import { cn } from "@/lib/utils";
import {
  faqCategories,
  allFAQsList,
  solarFAQs,
  residentialFAQs,
  commercialFAQs,
  pricingFAQs,
  emergencyFAQs,
  generalFAQs,
} from "@/data/faqs";
import type { FAQItem } from "@/components/sections/FAQ";
import { contactInfo } from "@/data/siteData";

// Category icons mapping
const categoryIcons: Record<string, React.ElementType> = {
  all: HelpCircle,
  solar: Sun,
  residential: Home,
  commercial: Building2,
  pricing: DollarSign,
  emergency: AlertTriangle,
  general: Info,
};

// FAQ Accordion Item Component
function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-charcoal pr-4">{item.question}</span>
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
            <p className="pb-3 text-gray-600 leading-relaxed">{item.answer}</p>
            {item.link && (
              <Link
                href={item.link.href}
                className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium text-sm pb-5 transition-colors"
              >
                {item.link.text}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {!item.link && <div className="pb-2" />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Generate FAQPage Schema
function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Get FAQs based on active category
  const categoryFAQs = useMemo(() => {
    switch (activeCategory) {
      case "solar":
        return solarFAQs;
      case "residential":
        return residentialFAQs;
      case "commercial":
        return commercialFAQs;
      case "pricing":
        return pricingFAQs;
      case "emergency":
        return emergencyFAQs;
      case "general":
        return generalFAQs;
      default:
        return allFAQsList;
    }
  }, [activeCategory]);

  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) return categoryFAQs;

    const query = searchQuery.toLowerCase();
    return categoryFAQs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
  }, [categoryFAQs, searchQuery]);

  // Reset open index when category or search changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenIndex(0);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setOpenIndex(0);
  };

  // Categories with general added
  const allCategories = [
    ...faqCategories,
    { id: "general", name: "General", faqs: generalFAQs },
  ];

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(allFAQsList)),
        }}
      />

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
                <HelpCircle className="h-4 w-4" />
                Frequently Asked Questions
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                How Can We Help?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-100 mb-8"
              >
                Find answers to common questions about our electrical services,
                solar installations, pricing, and more.
              </motion.p>

              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-xl mx-auto"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-charcoal placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter & FAQ Content */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <h3 className="font-semibold text-charcoal mb-4 px-2">
                    Categories
                  </h3>
                  <nav className="space-y-1">
                    {allCategories.map((category) => {
                      const Icon = categoryIcons[category.id] || HelpCircle;
                      return (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors",
                            activeCategory === category.id
                              ? "bg-primary-50 text-primary-600"
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <span className="font-medium text-sm">
                            {category.name}
                          </span>
                          {category.id !== "all" && (
                            <span className="ml-auto text-xs text-gray-400">
                              {category.faqs.length}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>

                  {/* Quick Contact */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-3 px-2">
                      Can&apos;t find an answer?
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 px-3 py-2.5 bg-primary-500 text-white rounded-lg font-medium text-sm hover:bg-primary-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Call {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-charcoal">
                      {activeCategory === "all"
                        ? "All Questions"
                        : allCategories.find((c) => c.id === activeCategory)
                            ?.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {filteredFAQs.length} question
                      {filteredFAQs.length !== 1 ? "s" : ""}
                      {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                  </div>
                </div>

                {/* FAQ List */}
                {filteredFAQs.length > 0 ? (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6">
                    {filteredFAQs.map((faq, index) => (
                      <FAQAccordionItem
                        key={`${activeCategory}-${index}`}
                        item={faq}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="font-semibold text-charcoal mb-2">
                      No results found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      We couldn&apos;t find any questions matching &quot;{searchQuery}
                      &quot;
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="text-primary-500 hover:text-primary-600 font-medium"
                    >
                      Clear search
                    </button>
                  </div>
                )}

                {/* Popular Topics */}
                {!searchQuery && activeCategory === "all" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                  >
                    <h3 className="font-semibold text-charcoal mb-4">
                      Popular Topics
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <Link
                        href="/solar-calculator"
                        className="bg-white rounded-lg p-4 border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all group"
                      >
                        <Sun className="h-8 w-8 text-secondary-500 mb-2" />
                        <h4 className="font-medium text-charcoal group-hover:text-primary-500 transition-colors">
                          Solar Savings Calculator
                        </h4>
                        <p className="text-sm text-gray-500">
                          Estimate your savings
                        </p>
                      </Link>
                      <Link
                        href="/emergency"
                        className="bg-white rounded-lg p-4 border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all group"
                      >
                        <AlertTriangle className="h-8 w-8 text-red-500 mb-2" />
                        <h4 className="font-medium text-charcoal group-hover:text-primary-500 transition-colors">
                          Emergency Services
                        </h4>
                        <p className="text-sm text-gray-500">24/7 availability</p>
                      </Link>
                      <Link
                        href="/contact"
                        className="bg-white rounded-lg p-4 border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all group"
                      >
                        <Phone className="h-8 w-8 text-primary-500 mb-2" />
                        <h4 className="font-medium text-charcoal group-hover:text-primary-500 transition-colors">
                          Get a Free Quote
                        </h4>
                        <p className="text-sm text-gray-500">
                          Contact us today
                        </p>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team is here to help. Get in touch and we&apos;ll answer any
                questions you have about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
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
          title="Ready to Get Started?"
          subtitle="From solar installations to emergency repairs, we're here to help."
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
