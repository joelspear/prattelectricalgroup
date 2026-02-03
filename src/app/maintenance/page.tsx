"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CheckCircle,
  Clock,
  ArrowRight,
  Phone,
  Zap,
  AlertTriangle,
  Home,
  Building2,
  Star,
  Wrench,
  X,
  Send,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection } from "@/components/sections";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/jb2JO6vKj0fWUU2jvhfB/webhook-trigger/02d048a7-7aa7-4ba7-83db-0c0f11a8eb2c";

const maintenancePlans = [
  {
    id: "home-essential",
    name: "Home Essential",
    price: "$199",
    period: "per year",
    description: "Annual safety check for peace of mind",
    features: [
      "Annual electrical safety inspection",
      "Smoke alarm testing & battery replacement",
      "Safety switch (RCD) testing",
      "Switchboard inspection",
      "Written safety report",
      "10% discount on repairs",
      "Priority booking",
    ],
    bestFor: "Homeowners wanting annual peace of mind",
    highlight: false,
    type: "subscription" as const,
  },
  {
    id: "home-premium",
    name: "Home Premium",
    price: "$349",
    period: "per year",
    description: "Comprehensive cover with priority service",
    features: [
      "Everything in Home Essential, plus:",
      "Bi-annual inspections (twice yearly)",
      "Thermal imaging of switchboard",
      "Power point & switch inspection",
      "Minor repairs included (up to $100)",
      "15% discount on additional work",
      "Priority response times",
      "Extended warranty on our work",
    ],
    bestFor: "Families & larger homes",
    highlight: true,
    type: "subscription" as const,
  },
  {
    id: "commercial",
    name: "Commercial",
    price: "Custom",
    period: "pricing",
    description: "Tailored maintenance for businesses",
    features: [
      "Scheduled maintenance visits",
      "Exit & safety lighting testing",
      "RCD & circuit breaker testing",
      "Compliance documentation",
      "Priority response",
      "Dedicated account manager",
      "Flexible scheduling (after hours)",
      "Full compliance reporting",
    ],
    bestFor: "Businesses requiring compliance",
    highlight: false,
    type: "quote" as const,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Regular inspections catch potential hazards before they become dangerous or costly.",
  },
  {
    icon: Clock,
    title: "Priority Service",
    description:
      "Jump the queue when you need us. Plan members get priority booking for all work.",
  },
  {
    icon: Zap,
    title: "Prevent Breakdowns",
    description:
      "Proactive maintenance prevents unexpected failures and costly repairs.",
  },
  {
    icon: AlertTriangle,
    title: "Stay Compliant",
    description:
      "Meet insurance and regulatory requirements with documented maintenance records.",
  },
];

const whatWeCheck = [
  {
    category: "Switchboard",
    items: [
      "Circuit breaker condition",
      "Safety switch operation",
      "Wiring connections",
      "Thermal scanning for hot spots",
      "Labelling accuracy",
    ],
  },
  {
    category: "Safety Systems",
    items: [
      "Smoke alarm testing",
      "Battery replacement",
      "RCD trip testing",
      "Earth fault testing",
      "Safety lighting (commercial)",
    ],
  },
  {
    category: "General Electrical",
    items: [
      "Power point condition",
      "Light switch operation",
      "Outdoor electrical",
      "Pool/spa equipment (if applicable)",
    ],
  },
];

const maintenanceFAQs = [
  {
    question: "How often should I have my electrical system checked?",
    answer:
      "We recommend annual inspections for most homes. Older homes (25+ years) or homes with pools, solar systems, or heavy electrical usage may benefit from more frequent checks.",
  },
  {
    question: "What's the difference between an inspection and a compliance check?",
    answer:
      "Our maintenance inspections are proactive safety checks to identify potential issues. A compliance check is a formal inspection required when selling a home or for insurance purposes, which we can also provide.",
  },
  {
    question: "Can I cancel my maintenance plan?",
    answer:
      "Yes, you can cancel at any time. If you cancel within the first year, we'll refund the unused portion of your plan. We believe in earning your business, not locking you in.",
  },
  {
    question: "What happens if you find a problem during inspection?",
    answer:
      "We'll provide a detailed report of any issues found, along with recommendations and quotes for repairs. Plan members receive discounts on all repair work.",
  },
  {
    question: "Do maintenance plans include repairs?",
    answer:
      "The Home Premium plan includes minor repairs up to $100 per visit. For larger repairs, plan members receive discounted rates.",
  },
  {
    question: "Is the maintenance plan tax deductible for rental properties?",
    answer:
      "Yes, maintenance costs for rental properties are typically tax deductible. We provide detailed invoices for your records. Consult your accountant for specific advice.",
  },
];

// Form schemas
const subscriptionSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your address"),
});

const commercialQuoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  businessName: z.string().min(2, "Please enter your business name"),
  message: z.string().optional(),
});

type SubscriptionData = z.infer<typeof subscriptionSchema>;
type CommercialQuoteData = z.infer<typeof commercialQuoteSchema>;

// Subscription Sign-Up Modal
function SubscriptionModal({
  plan,
  onClose,
}: {
  plan: (typeof maintenancePlans)[0];
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionData>({
    resolver: zodResolver(subscriptionSchema),
  });

  const onSubmit = async (data: SubscriptionData) => {
    setStatus("loading");
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.name.split(" ")[0],
          lastName: data.name.split(" ").slice(1).join(" ") || "",
          email: data.email,
          phone: data.phone,
          customField: {
            address: data.address,
            maintenancePlan: plan.name,
            planPrice: plan.price,
            planPeriod: plan.period,
          },
          source: "Website Maintenance Subscription",
          tags: ["Website Lead", "Maintenance Plan", plan.id],
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {status === "success" ? (
          <div className="p-8 text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-2">You&apos;re All Set!</h3>
            <p className="text-gray-600 mb-2">
              Thanks for signing up for the <strong>{plan.name}</strong> plan.
            </p>
            <p className="text-gray-600 mb-6">
              We&apos;ll be in touch within 1 business day to confirm your subscription and schedule your first inspection.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-charcoal">
                  Sign Up: {plan.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {plan.price} {plan.period}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              {status === "error" && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  Something went wrong. Please try again or call us on{" "}
                  {contactInfo.phoneFormatted}.
                </div>
              )}

              <div>
                <label htmlFor="sub-name" className="block text-sm font-medium text-charcoal mb-1">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  id="sub-name"
                  type="text"
                  placeholder="John Smith"
                  className={`${inputClasses} ${errors.name ? "border-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="sub-email" className="block text-sm font-medium text-charcoal mb-1">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  id="sub-email"
                  type="email"
                  placeholder="john@example.com"
                  className={`${inputClasses} ${errors.email ? "border-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="sub-phone" className="block text-sm font-medium text-charcoal mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  id="sub-phone"
                  type="tel"
                  placeholder="0412 345 678"
                  className={`${inputClasses} ${errors.phone ? "border-red-400" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="sub-address" className="block text-sm font-medium text-charcoal mb-1">
                  Property Address
                </label>
                <input
                  {...register("address")}
                  id="sub-address"
                  type="text"
                  placeholder="123 Main St, Adelaide SA 5000"
                  className={`${inputClasses} ${errors.address ? "border-red-400" : ""}`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-charcoal">{plan.name}</span>
                  <span className="font-bold text-charcoal">
                    {plan.price} {plan.period}
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  We&apos;ll contact you to confirm and arrange payment. No charges until confirmed.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Sign Up for {plan.name}
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-primary-500">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// Commercial Quote Modal
function CommercialQuoteModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommercialQuoteData>({
    resolver: zodResolver(commercialQuoteSchema),
  });

  const onSubmit = async (data: CommercialQuoteData) => {
    setStatus("loading");
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.name.split(" ")[0],
          lastName: data.name.split(" ").slice(1).join(" ") || "",
          email: data.email,
          phone: data.phone,
          customField: {
            businessName: data.businessName,
            message: data.message || "",
            maintenancePlan: "Commercial Maintenance",
          },
          source: "Website Commercial Maintenance Quote",
          tags: ["Website Lead", "Commercial Maintenance", "Quote Request"],
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {status === "success" ? (
          <div className="p-8 text-center">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
            <p className="text-gray-600 mb-6">
              We&apos;ll review your requirements and get back to you within 1 business day with a tailored maintenance plan and quote.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-charcoal">
                  Commercial Maintenance Quote
                </h3>
                <p className="text-sm text-gray-500">
                  Tell us about your business and we&apos;ll provide a tailored plan
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
              {status === "error" && (
                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  Something went wrong. Please try again or call us on{" "}
                  {contactInfo.phoneFormatted}.
                </div>
              )}

              <div>
                <label htmlFor="comm-name" className="block text-sm font-medium text-charcoal mb-1">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  id="comm-name"
                  type="text"
                  placeholder="John Smith"
                  className={`${inputClasses} ${errors.name ? "border-red-400" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="comm-business" className="block text-sm font-medium text-charcoal mb-1">
                  Business Name
                </label>
                <input
                  {...register("businessName")}
                  id="comm-business"
                  type="text"
                  placeholder="ABC Company Pty Ltd"
                  className={`${inputClasses} ${errors.businessName ? "border-red-400" : ""}`}
                />
                {errors.businessName && (
                  <p className="text-red-500 text-xs mt-1">{errors.businessName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="comm-email" className="block text-sm font-medium text-charcoal mb-1">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  id="comm-email"
                  type="email"
                  placeholder="john@company.com.au"
                  className={`${inputClasses} ${errors.email ? "border-red-400" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="comm-phone" className="block text-sm font-medium text-charcoal mb-1">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  id="comm-phone"
                  type="tel"
                  placeholder="0412 345 678"
                  className={`${inputClasses} ${errors.phone ? "border-red-400" : ""}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="comm-message" className="block text-sm font-medium text-charcoal mb-1">
                  Tell us about your needs{" "}
                  <span className="font-normal text-gray-500">(optional)</span>
                </label>
                <textarea
                  {...register("message")}
                  id="comm-message"
                  rows={3}
                  placeholder="Number of sites, specific requirements, compliance needs..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Request a Quote
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500">
                By submitting, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-primary-500">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function MaintenancePage() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof maintenancePlans)[0] | null>(null);
  const [showCommercialQuote, setShowCommercialQuote] = useState(false);

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
                <Shield className="h-4 w-4" />
                Maintenance Plans
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Protect Your Home with Regular Maintenance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-100 mb-8"
              >
                Prevent electrical problems before they happen. Our maintenance
                plans keep your home safe and your electrical system running
                smoothly.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="#plans"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  View Plans
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={getTelLink(contactInfo.phone)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Choose a Maintenance Plan?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Regular maintenance is the best way to keep your family safe and
                avoid costly unexpected repairs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 mb-4">
                    <benefit.icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section id="plans" className="section bg-gray-50 scroll-mt-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Maintenance Plans</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the plan that&apos;s right for your home or business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {maintenancePlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden ${
                    plan.highlight
                      ? "border-2 border-primary-500 shadow-xl"
                      : "border border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.highlight && (
                    <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                      <Star className="h-4 w-4 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {plan.type === "subscription" ? (
                        <Home className="h-5 w-5 text-primary-500" />
                      ) : (
                        <Building2 className="h-5 w-5 text-primary-500" />
                      )}
                      <h3 className="font-bold text-xl text-charcoal">
                        {plan.name}
                      </h3>
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-charcoal">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-gray-500 mb-4">
                      Best for: {plan.bestFor}
                    </p>

                    <button
                      onClick={() => {
                        if (plan.type === "quote") {
                          setShowCommercialQuote(true);
                        } else {
                          setSelectedPlan(plan);
                        }
                      }}
                      className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                        plan.highlight
                          ? "bg-primary-500 text-white hover:bg-primary-600"
                          : "bg-gray-100 text-charcoal hover:bg-gray-200"
                      }`}
                    >
                      {plan.type === "quote" ? "Get Quote" : "Sign Up"}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Check */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">What&apos;s Included in an Inspection</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive inspections cover all critical areas of your
                electrical system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whatWeCheck.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <Wrench className="h-5 w-5 text-primary-500" />
                    </div>
                    <h3 className="font-bold text-lg text-charcoal">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={maintenanceFAQs}
          title="Maintenance Plan FAQs"
          subtitle="Common questions about our maintenance services."
          className="bg-gray-50"
        />

        {/* Final CTA */}
        <CTASection
          title="Prevent Problems Before They Start"
          subtitle="Regular maintenance keeps your home safe and saves money in the long run."
          variant="primary"
        />
      </main>
      <Footer />

      {/* Modals */}
      <AnimatePresence>
        {selectedPlan && (
          <SubscriptionModal
            plan={selectedPlan}
            onClose={() => setSelectedPlan(null)}
          />
        )}
        {showCommercialQuote && (
          <CommercialQuoteModal
            onClose={() => setShowCommercialQuote(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
