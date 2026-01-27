"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
  title?: string;
  subtitle?: string;
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
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
    </div>
  );
}

export function FAQ({
  items,
  className,
  title = "Frequently Asked Questions",
  subtitle,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("section", className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary-500 mb-4">
            <HelpCircle className="h-5 w-5" />
            <span className="font-medium text-sm uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 px-6"
        >
          {items.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
