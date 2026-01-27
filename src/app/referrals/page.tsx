"use client";

import { motion } from "framer-motion";
import {
  Gift,
  Users,
  DollarSign,
  ArrowRight,
  Phone,
  CheckCircle,
  Share2,
  Zap,
  Star,
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
      "When they book a job with us (minimum $200), make sure they mention your name as the referrer.",
  },
  {
    step: 3,
    icon: Gift,
    title: "You Both Get Rewarded",
    description:
      "Once their job is complete, you get $50 and they get $50 off their first job. Everyone wins!",
  },
];

const rewards = [
  {
    referrals: "1 Referral",
    reward: "$50",
    description: "Credit toward your next job",
  },
  {
    referrals: "3 Referrals",
    reward: "$150 + Bonus",
    description: "Plus a $25 gift card",
  },
  {
    referrals: "5 Referrals",
    reward: "$250 + Bonus",
    description: "Plus a $50 gift card",
  },
  {
    referrals: "10+ Referrals",
    reward: "VIP Status",
    description: "Priority service + ongoing rewards",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Flagstaff Hill",
    text: "I've referred three friends to Pratt Electrical and saved $150 on my solar system maintenance. Great service makes it easy to recommend!",
  },
  {
    name: "Mike T.",
    location: "Hallett Cove",
    text: "My neighbour recommended them for our switchboard upgrade. We both got the referral bonus and couldn't be happier with the work.",
  },
];

const referralFAQs = [
  {
    question: "How do I refer someone?",
    answer:
      "Simply give them our phone number (0406 494 941) or direct them to our website. Make sure they mention your name when booking. It's that simple!",
  },
  {
    question: "What's the minimum job value for the referral to count?",
    answer:
      "The job must be at least $200 (excluding GST) for the referral reward to apply. This covers most of our services except very minor repairs.",
  },
  {
    question: "How do I receive my reward?",
    answer:
      "Your $50 credit is applied to your account and can be used on your next job with us. We'll send you confirmation once your referral's job is complete.",
  },
  {
    question: "Is there a limit to how many people I can refer?",
    answer:
      "No limit! Refer as many people as you like. The more you refer, the more rewards you earn, including bonus gift cards for multiple referrals.",
  },
  {
    question: "Can I refer a business?",
    answer:
      "Absolutely! Business referrals are welcome. For commercial jobs over $1,000, the referral reward is increased to $100 for both parties.",
  },
  {
    question: "How long is my referral credit valid?",
    answer:
      "Your referral credits never expire. They stay on your account until you use them on a future job with us.",
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
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Refer a Friend, Get $50
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-orange-100 mb-8"
              >
                Know someone who needs an electrician? Refer them to us and
                you&apos;ll both receive $50. It&apos;s our way of saying thanks
                for spreading the word.
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
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-3">
                  <Users className="h-8 w-8 text-secondary-500" />
                </div>
                <p className="text-sm text-gray-500">Your Friend Gets</p>
                <p className="text-3xl font-bold text-secondary-500">$50 OFF</p>
              </div>
              <div className="hidden md:block text-4xl text-gray-300">+</div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-3">
                  <DollarSign className="h-8 w-8 text-primary-500" />
                </div>
                <p className="text-sm text-gray-500">You Get</p>
                <p className="text-3xl font-bold text-primary-500">$50 CREDIT</p>
              </div>
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
                your rewards.
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

        {/* Reward Tiers */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">The More You Refer, The More You Earn</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your rewards grow with every referral. Here&apos;s what you can
                earn.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {rewards.map((tier, index) => (
                <motion.div
                  key={tier.referrals}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-xl p-6 text-center border-2 ${
                    index === rewards.length - 1
                      ? "border-secondary-500 bg-secondary-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {index === rewards.length - 1 && (
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-secondary-600 bg-secondary-100 px-2 py-1 rounded-full mb-3">
                      <Star className="h-3 w-3" />
                      Best Value
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mb-1">{tier.referrals}</p>
                  <p className="text-3xl font-bold text-charcoal mb-2">
                    {tier.reward}
                  </p>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">What Our Referrers Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
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
                    "Minimum job value of $200 (exc. GST) required for reward",
                    "Referral must mention your name when booking",
                    "Credits are applied after the referred job is complete",
                    "Credits can be used on any future services",
                    "Cannot be combined with other offers or promotions",
                    "Commercial referrals over $1,000 qualify for $100 reward",
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
                you&apos;ll both benefit!
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
          title="Spread the Word, Earn Rewards"
          subtitle="Thank you for recommending Pratt Electrical to your friends and family."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
