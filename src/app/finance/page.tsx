"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  DollarSign,
  CreditCard,
  Clock,
  CheckCircle,
  ArrowRight,
  Send,
  AlertCircle,
} from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { FAQ, CTASection } from "@/components/sections";
import { contactInfo } from "@/data/siteData";
import { cn } from "@/lib/utils";

const howItWorks = [
  {
    step: 1,
    title: "Get Your Quote",
    description:
      "We provide a detailed quote for your solar or electrical project with all costs clearly outlined.",
    icon: DollarSign,
  },
  {
    step: 2,
    title: "Choose Finance Option",
    description:
      "Select the finance option that works best for your budget. We'll help you understand your options.",
    icon: CreditCard,
  },
  {
    step: 3,
    title: "Quick Approval",
    description:
      "Apply online or in person. Most applications are approved within minutes to hours.",
    icon: Clock,
  },
  {
    step: 4,
    title: "Installation Complete",
    description:
      "We complete your installation while you enjoy manageable repayments over time.",
    icon: CheckCircle,
  },
];

const financeFAQs = [
  {
    question: "Is there a credit check for finance?",
    answer:
      "Yes, all finance providers conduct a credit check as part of the application process. This is typically a soft inquiry that doesn't impact your credit score.",
  },
  {
    question: "Can I pay off my finance early?",
    answer:
      "Yes, most of our finance options allow early repayment without penalty. This means you can pay off your balance whenever suits you without additional fees.",
  },
  {
    question: "What if my finance application is declined?",
    answer:
      "If one option doesn't work out, we can help you explore alternatives. We work with multiple finance providers to give you the best chance of approval.",
  },
  {
    question: "Do I need a deposit?",
    answer:
      "This depends on the finance option and amount. Some options require no deposit, while others may require a small upfront payment. We'll explain all requirements during your quote.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Most interest-free finance applications are approved within minutes. Other loan types may take 1-3 business days depending on the lender.",
  },
];

// Finance enquiry form schema
const financeFormSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().max(500, "Message too long").optional(),
});

type FinanceFormData = z.infer<typeof financeFormSchema>;

const projectOptions = [
  { value: "", label: "What type of project?" },
  { value: "solar", label: "Solar Installation" },
  { value: "battery", label: "Battery Storage" },
  { value: "solar-battery", label: "Solar + Battery" },
  { value: "electrical", label: "Electrical Work" },
  { value: "ev-charger", label: "EV Charger" },
  { value: "other", label: "Other" },
];

const projectToTags: Record<string, string> = {
  solar: "solar install",
  battery: "battery",
  "solar-battery": "solar install, battery",
  electrical: "residential electrical",
  "ev-charger": "ev charger",
};

export default function FinancePage() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FinanceFormData>({
    resolver: zodResolver(financeFormSchema),
  });

  const onSubmit = async (data: FinanceFormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/jb2JO6vKj0fWUU2jvhfB/webhook-trigger/36a7724f-4ec3-4adb-92f4-1ed4b39f1b62",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            email: data.email,
            service: data.projectType,
            message: data.message || "",
            source: "Website Finance Enquiry",
            tags: ["finance_enquiry", projectToTags[data.projectType]].filter(Boolean).join(", "),
            submittedAt: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        (window as any).fbq?.("track", "Lead");
        setTimeout(() => {
          reset();
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

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
                <DollarSign className="h-4 w-4" />
                Finance Options
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Affordable Payment Options
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-primary-100 mb-8"
              >
                Don&apos;t let upfront costs stop you from upgrading your home.
                We offer flexible finance options to make solar and electrical
                work affordable for everyone.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#finance-form"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Enquire About Finance
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">How Finance Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Getting finance for your project is simple and straightforward.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                    <step.icon className="h-8 w-8 text-primary-500" />
                  </div>
                  <div className="text-sm font-medium text-primary-500 mb-2">
                    Step {step.step}
                  </div>
                  <h3 className="font-bold text-lg text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Enquiry Form */}
        <section id="finance-form" className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="mb-4">Enquire About Finance</h2>
                <p className="text-lg text-gray-600">
                  Fill in your details below and we&apos;ll get back to you with
                  finance options tailored to your project.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
              >
                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-charcoal mb-2">
                      Enquiry Received!
                    </h3>
                    <p className="text-gray-600">
                      Thanks for your interest in finance options. We&apos;ll be in
                      touch shortly to discuss your options.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          First Name *
                        </label>
                        <input
                          {...register("firstName")}
                          type="text"
                          placeholder="John"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
                            errors.firstName ? "border-red-300" : "border-gray-200"
                          )}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Last Name *
                        </label>
                        <input
                          {...register("lastName")}
                          type="text"
                          placeholder="Smith"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
                            errors.lastName ? "border-red-300" : "border-gray-200"
                          )}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Phone *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="Your phone number"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
                            errors.phone
                              ? "border-red-300"
                              : "border-gray-200"
                          )}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Email *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Your email"
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
                            errors.email
                              ? "border-red-300"
                              : "border-gray-200"
                          )}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Project Type *
                      </label>
                      <select
                        {...register("projectType")}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-white text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500",
                          errors.projectType
                            ? "border-red-300"
                            : "border-gray-200"
                        )}
                      >
                        {projectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">
                        Tell us about your project{" "}
                        <span className="text-gray-400">(optional)</span>
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Any details about your project or finance needs..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                      />
                    </div>

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-lg p-3">
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm">
                          Something went wrong. Please try again or call us on{" "}
                          {contactInfo.phoneFormatted}.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitStatus === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Finance Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={financeFAQs}
          title="Finance FAQs"
          subtitle="Common questions about our payment options."
          className="bg-white"
        />

        {/* Final CTA */}
        <CTASection
          title="Ready to Get Started?"
          subtitle="Get a free quote and we'll explain all your finance options. No obligation, no pressure."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
