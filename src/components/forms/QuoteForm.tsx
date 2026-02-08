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
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  suburb: z.string().min(2, "Please enter your suburb"),
  message: z.string().max(500, "Message too long").optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const serviceOptions = [
  { value: "", label: "What do you need?" },
  { value: "residential", label: "Residential Electrical" },
  { value: "commercial", label: "Commercial Electrical" },
  { value: "solar", label: "Solar Installation" },
  { value: "battery", label: "Battery Storage" },
  { value: "emergency", label: "Emergency/Urgent" },
  { value: "other", label: "Other" },
];

interface QuoteFormProps {
  className?: string;
  variant?: "default" | "compact" | "dark";
  showTitle?: boolean;
  preselectedService?: string;
}

export function QuoteForm({
  className,
  variant = "default",
  showTitle = true,
  preselectedService,
}: QuoteFormProps) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      service: preselectedService || "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitStatus("loading");
    setSubmittedName(data.name.split(" ")[0]);

    try {
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
            service: data.service,
            suburb: data.suburb,
            message: data.message || "",
            source: "Website Quote Form",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");

      // Reset form after delay
      setTimeout(() => {
        reset();
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    }
  };

  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  const inputClasses = cn(
    "form-input",
    isDark && "bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-primary-400",
    errors && "border-red-500 focus:ring-red-500"
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
              "space-y-4",
              !isCompact && "p-6 md:p-8 rounded-xl",
              !isCompact && (isDark ? "bg-white/5 backdrop-blur-sm" : "bg-white shadow-lg")
            )}
          >
            {showTitle && (
              <div className="mb-6">
                <h3 className={cn("text-xl font-semibold mb-1", isDark && "text-white")}>
                  Get Your Free Quote
                </h3>
                <p className={cn("text-sm text-gray-600", isDark && "text-gray-400")}>
                  No obligation, fast response
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again or call us directly at{" "}
                <a href={contactInfo.phoneTel} className="font-semibold underline">
                  {contactInfo.phoneFormatted}
                </a>
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="John Smith"
                className={cn(inputClasses, errors.name && "border-red-500")}
              />
              {errors.name && (
                <p className="form-error">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="john@example.com"
                className={cn(inputClasses, errors.email && "border-red-500")}
              />
              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                placeholder="0412 345 678"
                className={cn(inputClasses, errors.phone && "border-red-500")}
              />
              {errors.phone && (
                <p className="form-error">{errors.phone.message}</p>
              )}
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className={labelClasses}>
                What do you need?
              </label>
              <select
                {...register("service")}
                id="service"
                className={cn(inputClasses, errors.service && "border-red-500", "appearance-none")}
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="form-error">{errors.service.message}</p>
              )}
            </div>

            {/* Suburb */}
            <div>
              <label htmlFor="suburb" className={labelClasses}>
                Suburb
              </label>
              <input
                {...register("suburb")}
                type="text"
                id="suburb"
                placeholder="e.g., Flagstaff Hill"
                className={cn(inputClasses, errors.suburb && "border-red-500")}
              />
              {errors.suburb && (
                <p className="form-error">{errors.suburb.message}</p>
              )}
            </div>

            {/* Message (optional) */}
            {!isCompact && (
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Brief description{" "}
                  <span className={cn("font-normal", isDark ? "text-gray-400" : "text-gray-500")}>
                    (optional)
                  </span>
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={3}
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
