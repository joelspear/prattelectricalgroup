"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageSquare,
  Bot,
  Clock,
  Shield,
  UserCheck,
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  HelpCircle,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const chatbotFeatures = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Never miss a lead. The AI chatbot answers customer questions any time of day or night, even when you're on a job or asleep.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description:
      "Customers get immediate answers to common questions about services, pricing, availability, and more. No waiting for callbacks.",
  },
  {
    icon: UserCheck,
    title: "Lead Capture",
    description:
      "Collects name and email before answering questions, building your customer database for follow-up marketing.",
  },
  {
    icon: Shield,
    title: "Professional & Safe",
    description:
      "Maintains a friendly, professional tone at all times. Automatically filters inappropriate language and keeps conversations on-topic.",
  },
];

const whatItKnows = [
  "All your electrical services (residential, commercial, solar)",
  "Service areas across Adelaide",
  "Pricing guides and quote processes",
  "Emergency service availability",
  "CEC accreditation and qualifications",
  "Solar rebates and government incentives",
  "Battery storage options",
  "Safety switch requirements",
  "Booking and availability",
  "Payment methods accepted",
  "Warranty information",
  "Contact details and business hours",
];

const sampleQuestions = [
  {
    question: "Do you install solar panels?",
    answer:
      "Absolutely! We're CEC accredited solar installers, which means we meet the highest standards for solar installation in Australia. We install residential and commercial solar systems, plus battery storage. Would you like me to arrange a free solar assessment for your property?",
  },
  {
    question: "How much does an electrician cost?",
    answer:
      "Great question! Our callout fee is typically $80-$120, with hourly rates between $80-$100. Simple jobs like a new power point might be $150-$250, while larger jobs like switchboard upgrades range from $1,500-$4,000. We always provide a free, no-obligation quote upfront so there are no surprises. Would you like me to arrange a quote for your specific job?",
  },
  {
    question: "Do you do emergency work?",
    answer:
      "Yes, we offer 24/7 emergency electrical services across Adelaide. For urgent issues, we aim to respond within 1 hour in the metro area. If you have an electrical emergency right now, I'd recommend calling James directly on 0406 494 941. Is this an emergency situation?",
  },
];

const benefits = [
  {
    title: "Convert More Visitors",
    description:
      "Website visitors with questions are hot leads. The chatbot engages them instantly before they leave to find a competitor.",
    stat: "Up to 3x",
    statLabel: "more leads captured",
  },
  {
    title: "Save Time",
    description:
      "Stop answering the same questions over and over. The AI handles FAQs while you focus on jobs that need a human touch.",
    stat: "10+ hrs",
    statLabel: "saved per week",
  },
  {
    title: "Professional Image",
    description:
      "An AI chatbot signals that you're a modern, professional business that invests in customer service.",
    stat: "24/7",
    statLabel: "availability",
  },
];

export default function AIChatbotPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Optional Add-On Feature</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              AI Customer Service Chatbot
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              A smart AI assistant that knows everything about Pratt Electrical Group,
              answers customer questions 24/7, and captures leads while you sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="secondary" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Discuss This Feature
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How The Chatbot Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A seamless experience that captures leads and answers questions professionally.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Chat Demo */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-primary-500 text-white px-6 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Pratt Electrical Assistant</h3>
                  <p className="text-sm text-primary-100">Online now</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 bg-gray-50">
                {/* Bot Welcome */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-md">
                    <p className="text-gray-700">
                      G&apos;day! I&apos;m the Pratt Electrical assistant. I can help you with questions about our electrical and solar services across Adelaide.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Before we chat, could I grab your name and email? This helps us follow up if needed.
                    </p>
                  </div>
                </div>

                {/* User Response */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-md">
                    <p>Sure! I&apos;m Sarah, email is sarah@email.com</p>
                  </div>
                </div>

                {/* Bot Acknowledgment */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-md">
                    <p className="text-gray-700">
                      Thanks Sarah! Great to meet you. How can I help you today? Feel free to ask about:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                      <li className="flex items-center gap-2">
                        <Zap className="h-3 w-3 text-primary-500" />
                        Residential or commercial electrical
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-3 w-3 text-primary-500" />
                        Solar panels & battery storage
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-3 w-3 text-primary-500" />
                        Pricing & quotes
                      </li>
                      <li className="flex items-center gap-2">
                        <Zap className="h-3 w-3 text-primary-500" />
                        Emergency services
                      </li>
                    </ul>
                  </div>
                </div>

                {/* User Question */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary-500 text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-md">
                    <p>How much would a 6.6kW solar system cost?</p>
                  </div>
                </div>

                {/* Bot Answer */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm max-w-md">
                    <p className="text-gray-700">
                      Great question! A 6.6kW solar system in Adelaide typically costs between $4,000-$8,000 after the federal STC rebate, which we handle for you.
                    </p>
                    <p className="text-gray-700 mt-2">
                      The exact price depends on your roof type, panel brand, and inverter choice. We install premium brands like Jinko, Trina, and Fronius.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Would you like me to arrange a free solar assessment? James can visit your property, assess your roof, and provide an exact quote with expected savings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="px-6 py-4 bg-white border-t">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                    disabled
                  />
                  <button className="bg-primary-500 text-white px-6 py-2 rounded-full">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for trade businesses like yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chatbotFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-4">
                  <feature.icon className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Knows */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Trained on Your Business
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                The AI chatbot is trained specifically on Pratt Electrical Group&apos;s services,
                pricing, service areas, and policies. It answers questions accurately and
                consistently, just like you would.
              </p>
              <p className="text-gray-300">
                We&apos;ll work with you to ensure the chatbot has all the information it needs
                to represent your business professionally.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary-400" />
                The AI Knows About:
              </h3>
              <div className="grid gap-3">
                {whatItKnows.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tone of Voice */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Friendly & Professional</h2>
              <p className="text-lg text-gray-600">
                The chatbot maintains a consistent tone that represents your brand well.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">What It Does</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    Uses friendly, conversational Australian English
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    Provides helpful, accurate information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    Guides customers toward booking or calling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    Escalates complex queries to human contact
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    Collects lead information professionally
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">What It Won&apos;t Tolerate</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Swearing or offensive language
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Inappropriate or off-topic conversations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Attempts to extract sensitive information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Spam or abusive behaviour
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    Questions outside electrical/solar services
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-amber-800 text-center">
                <strong>Polite Redirection:</strong> When users send inappropriate messages,
                the chatbot politely redirects: &quot;I&apos;m here to help with electrical and solar questions.
                Is there something I can help you with regarding our services?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Q&A */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample Conversations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here&apos;s how the chatbot handles common customer questions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {sampleQuestions.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-gray-600">C</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Customer asks:</p>
                    <p className="font-medium text-gray-800">&quot;{item.question}&quot;</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 ml-12">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">AI responds:</p>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Add a Chatbot?</h2>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              Real benefits for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-white mb-1">{benefit.stat}</div>
                <div className="text-primary-200 text-sm mb-4">{benefit.statLabel}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-primary-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Integration */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrated Lead Capture</h2>
              <p className="text-lg text-gray-600">
                Every conversation is a potential lead, captured and sent to your CRM.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">What Gets Captured</h3>
                    <p className="text-gray-600">Automatically sent to Go High Level CRM</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <UserCheck className="h-5 w-5 text-primary-500" />
                      <span>Customer name</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-primary-500" />
                      <span>Email address</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-5 w-5 text-primary-500" />
                      <span>Phone (if provided)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-primary-500" />
                      <span>Full conversation transcript</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <HelpCircle className="h-5 w-5 text-primary-500" />
                      <span>Service interested in</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary-500" />
                      <span>Date & time of inquiry</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-On Pricing</h2>
            <p className="text-lg text-gray-600 mb-12">
              Simple, transparent pricing for the AI chatbot feature.
            </p>

            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="text-primary-500 font-medium mb-2">AI Chatbot Add-On</div>
                <div className="text-5xl font-bold text-charcoal mb-2">$500</div>
                <div className="text-gray-500 mb-8">One-time setup + $50/month</div>

                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>Custom AI training on your business</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>Lead capture & CRM integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>24/7 automated responses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>Professional content moderation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>Monthly usage included (up to 500 conversations)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>Updates as your services change</span>
                  </li>
                </ul>

                <Button variant="primary" size="lg" className="w-full">
                  Add to Website Package
                </Button>
              </div>
            </div>

            <p className="text-gray-500 mt-6 text-sm">
              Can be added during initial build or anytime after launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Interested in the AI Chatbot?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how an AI chatbot can help capture more leads and save you time
            answering common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pitch/next-steps">
              <Button variant="secondary" size="lg">
                Continue to Next Steps
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link href="/pitch/investment">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-charcoal">
                View Investment Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
