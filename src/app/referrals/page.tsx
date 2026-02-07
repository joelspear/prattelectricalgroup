"use client";

import { motion } from "framer-motion";
import {
  Gift,
  DollarSign,
  ArrowRight,
  Phone,
  CheckCircle,
  Share2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection } from "@/components/sections";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

const howItWorks = [
  {
    step: 1,
    icon: Share2,
    title: "Refer a Friend",
    description:
      "Tell your friends, family, or neighbours about Pratt Electrical. Give them our number or have them mention your name.",
  },
  {
    step: 2,
    icon: Zap,
    title: "They Book a Job",
    description:
      "When they book a job with us, make sure they mention your name as the referrer.",
  },
  {
    step: 3,
    icon: Gift,
    title: "You Get $300",
    description:
      "Once their job is complete, you receive $300. It's that simple — our way of saying thanks!",
  },
];

const referralFAQs = [
  {
    question: "How do I refer someone?",
    answer:
      "Simply give them our phone number (0474 320 534) or direct them to our website. Make sure they mention your name when booking.",
  },
  {
    question: "How do I receive my reward?",
    answer:
      "Your $300 is paid once your referral's job is complete. We'll be in touch to arrange payment.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer:
      "No limit! Refer as many people as you like. Every completed referral earns you $300.",
  },
  {
    question: "Can I refer a business?",
    answer:
      "Absolutely! Business referrals are welcome and qualify for the same $300 reward.",
  },
];

export default function ReferralsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-secondary-500 via-secondary-600 to-orange-600 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
              >
                <Gift className="h-4 w-4" />
                Referral Program
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6 text-white"
              >
                Refer a Friend, Get $300
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-orange-100 mb-8"
              >
                Know someone who needs an electrician? Refer them to us and
                you&apos;ll receive $300 once their job is complete. It&apos;s
                our way of saying thanks for spreading the word.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-secondary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call to Refer: {contactInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Contact Us Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reward Highlight */}
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 rounded-full mb-4">
                <DollarSign className="h-10 w-10 text-secondary-500" />
              </div>
              <p className="text-5xl font-bold text-secondary-500 mb-2">$300</p>
              <p className="text-lg text-gray-600">
                For every successful referral
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Referring friends and family is easy. Here&apos;s how to earn
                your $300.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <step.icon className="h-10 w-10 text-secondary-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-8">Program Terms</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3">
                  {[
                    "Referral must be a new customer who hasn't used our services before",
                    "Referral must mention your name when booking",
                    "$300 is paid after the referred job is complete",
                    "No limit on the number of referrals",
                    "Cannot be combined with other offers or promotions",
                    "Pratt Electrical reserves the right to modify the program",
                  ].map((term, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={referralFAQs}
          title="Referral Program FAQs"
          subtitle="Questions about our referral rewards."
          className="bg-gray-50"
        />

        {/* CTA */}
        <section className="section bg-charcoal text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-white mb-4">Start Referring Today</h2>
              <p className="text-gray-300 text-lg mb-8">
                Know someone who needs electrical work? Give them our number and
                earn $300 when their job is complete!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary-500 text-white rounded-lg font-medium hover:bg-secondary-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Spread the Word, Earn $300"
          subtitle="Thank you for recommending Pratt Electrical to your friends and family."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
