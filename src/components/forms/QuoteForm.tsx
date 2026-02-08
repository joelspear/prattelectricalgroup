"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/data/siteData";

// Validation schema
const quoteFormSchema = z.object({
  customerType: z.enum(["residential", "commercial"], {
    message: "Please select if this is residential or commercial",
  }),
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  suburb: z.string().min(2, "Please enter your suburb"),
  message: z.string().max(500, "Message too long").optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const serviceOptions = [
  { value: "residential-electrical", label: "Residential Electrical" },
  { value: "commercial-electrical", label: "Commercial Electrical" },
  { value: "solar", label: "Solar Installation" },
  { value: "battery", label: "Battery Storage" },
  { value: "ev-charger", label: "EV Charger" },
  { value: "switchboard", label: "Switchboard Upgrade" },
  { value: "lighting", label: "Lighting" },
  { value: "smoke-alarms", label: "Smoke Alarms" },
  { value: "ceiling-fans", label: "Ceiling Fans" },
  { value: "safety-inspection", label: "Safety Inspection" },
  { value: "data-network", label: "Data & Network" },
  { value: "other", label: "Other" },
];

interface QuoteFormProps {
  className?: string;
  variant?: "default" | "compact" | "dark";
  showTitle?: boolean;
  preselectedService?: string;
  preselectedCustomerType?: "residential" | "commercial";
}

export function QuoteForm({
  className,
  variant = "default",
  showTitle = true,
  preselectedService,
  preselectedCustomerType,
}: QuoteFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      customerType: preselectedCustomerType,
      services: preselectedService ? [preselectedService] : [],
    },
  });

  const selectedCustomerType = watch("customerType");

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitStatus("loading");
    setSubmittedName(data.name.split(" ")[0]);

    try {
      // Submit to GoHighLevel webhook
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/jb2JO6vKj0fWUU2jvhfB/webhook-trigger/36a7724f-4ec3-4adb-92f4-1ed4b39f1b62",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: data.name,
            email: data.email,
            phone: data.phone,
            customerType: data.customerType,
            service: data.services.join(", "),
            suburb: data.suburb,
            message: data.message || "",
            source: "Website Quote Form",
            submittedAt: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          reset();
          setSubmitStatus("idle");
        }, 5000);
      } else {
        console.error("Form submission failed:", response.statusText);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    }

  };

  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  const inputClasses = cn(
    "form-input",
    isDark && "bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-primary-400"
  );

  const labelClasses = cn(
    "form-label",
    isDark && "text-white"
  );

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={cn(
              "p-8 rounded-xl text-center",
              isDark ? "bg-white/10" : "bg-success/10"
            )}
          >
            <CheckCircle className={cn("h-16 w-16 mx-auto mb-4", isDark ? "text-success" : "text-success")} />
            <h3 className={cn("text-xl font-semibold mb-2", isDark && "text-white")}>
              Thanks {submittedName}!
            </h3>
            <p className={cn("text-gray-600", isDark && "text-gray-300")}>
              We&apos;ve received your request and will call you within 2 business hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
              "space-y-3",
              !isCompact && "p-5 md:p-6 rounded-xl",
              !isCompact && (isDark ? "bg-white/5 backdrop-blur-sm" : "bg-white shadow-lg")
            )}
          >
            {showTitle && (
              <div className="mb-3">
                <h3 className={cn("text-lg font-semibold mb-0.5", isDark && "text-white")}>
                  Get Your Free Quote
                </h3>
                <p className={cn("text-sm text-gray-600", isDark && "text-gray-400")}>
                  No obligation, fast response
                </p>
              </div>
            )}

            {/* Customer Type Selection */}
            <div>
              <div className="grid grid-cols-2 gap-2">
                <label
                  className={cn(
                    "relative flex items-center justify-center gap-2 p-2.5 rounded-lg border-2 cursor-pointer transition-all",
                    selectedCustomerType === "residential"
                      ? "border-primary-500 bg-primary-50 text-primary-700"
                      : isDark
                      ? "border-white/20 text-white hover:border-white/40"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  )}
                >
                  <input
                    {...register("customerType")}
                    type="radio"
                    value="residential"
                    className="sr-only"
                  />
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-medium text-sm">Residential</span>
                </label>
                <label
                  className={cn(
                    "relative flex items-center justify-center gap-2 p-2.5 rounded-lg border-2 cursor-pointer transition-all",
                    selectedCustomerType === "commercial"
                      ? "border-primary-500 bg-primary-50 text-primary-700"
                      : isDark
                      ? "border-white/20 text-white hover:border-white/40"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  )}
                >
                  <input
                    {...register("customerType")}
                    type="radio"
                    value="commercial"
                    className="sr-only"
                  />
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium text-sm">Commercial</span>
                </label>
              </div>
              {errors.customerType && (
                <p className="form-error">{errors.customerType.message}</p>
              )}
            </div>

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 p-3 bg-secondary-50 text-secondary-700 rounded-lg text-sm">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again or call us directly at{" "}
                <a href={contactInfo.phoneTel} className="font-semibold underline">
                  {contactInfo.phoneFormatted}
                </a>
              </div>
            )}

            {/* Name & Email - side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  className={cn(inputClasses, errors.name && "border-secondary-500")}
                />
                {errors.name && (
                  <p className="form-error">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className={cn(inputClasses, errors.email && "border-secondary-500")}
                />
                {errors.email && (
                  <p className="form-error">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone & Suburb - side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  placeholder="0412 345 678"
                  className={cn(inputClasses, errors.phone && "border-secondary-500")}
                />
                {errors.phone && (
                  <p className="form-error">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="suburb" className={labelClasses}>
                  Suburb
                </label>
                <input
                  {...register("suburb")}
                  type="text"
                  id="suburb"
                  placeholder="e.g., Flagstaff Hill"
                  className={cn(inputClasses, errors.suburb && "border-secondary-500")}
                />
                {errors.suburb && (
                  <p className="form-error">{errors.suburb.message}</p>
                )}
              </div>
            </div>

            {/* Services - Multi-select checkboxes */}
            <div>
              <label className={labelClasses}>
                What do you need?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {serviceOptions.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-all text-sm",
                      watch("services")?.includes(option.value)
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : isDark
                        ? "border-white/20 text-white hover:border-white/40"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    )}
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      {...register("services")}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center transition-all",
                        watch("services")?.includes(option.value)
                          ? "border-primary-500 bg-primary-500"
                          : isDark
                          ? "border-white/40"
                          : "border-gray-300"
                      )}
                    >
                      {watch("services")?.includes(option.value) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.services && (
                <p className="form-error">{errors.services.message}</p>
              )}
            </div>

            {/* Message (optional) - only on non-compact */}
            {!isCompact && !isDark && (
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Brief description{" "}
                  <span className="font-normal text-gray-500">
                    (optional)
                  </span>
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={2}
                  placeholder="Tell us about your project..."
                  className={cn(inputClasses, "resize-none")}
                />
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={submitStatus === "loading"}
              rightIcon={submitStatus !== "loading" ? <Send className="h-4 w-4" /> : undefined}
            >
              {submitStatus === "loading" ? "Sending..." : "Get Free Quote"}
            </Button>

            <p className={cn("text-xs text-center", isDark ? "text-gray-400" : "text-gray-500")}>
              By submitting, you agree to our{" "}
              <a href="/privacy-policy" className="underline hover:text-primary-500">
                Privacy Policy
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuoteForm;
