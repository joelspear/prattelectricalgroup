"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

// Validation schema
const ghlFormSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  suburb: z.string().min(2, "Please enter your suburb"),
  message: z.string().max(1000, "Message too long").optional(),
});

type GHLFormData = z.infer<typeof ghlFormSchema>;

const serviceOptions = [
  { value: "", label: "What do you need help with?" },
  { value: "residential_electrical", label: "Residential Electrical" },
  { value: "commercial_electrical", label: "Commercial Electrical" },
  { value: "solar_installation", label: "Solar Installation" },
  { value: "battery_storage", label: "Battery Storage" },
  { value: "emergency_service", label: "Emergency Service" },
  { value: "ev_charger", label: "EV Charger Installation" },
  { value: "other", label: "Other / General Enquiry" },
];

interface GoHighLevelFormProps {
  className?: string;
  // Go High Level configuration
  ghlFormId?: string;
  ghlLocationId?: string;
  // Optional webhook URL for Go High Level
  webhookUrl?: string;
}

export function GoHighLevelForm({
  className,
  ghlFormId = "YOUR_GHL_FORM_ID",
  ghlLocationId = "YOUR_GHL_LOCATION_ID",
  webhookUrl,
}: GoHighLevelFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GHLFormData>({
    resolver: zodResolver(ghlFormSchema),
  });

  const onSubmit = async (data: GHLFormData) => {
    setSubmitStatus("loading");
    setSubmittedName(data.firstName);

    try {
      // If webhook URL is provided, send data to Go High Level
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Map form fields to GHL contact fields
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            customField: {
              service: data.service,
              suburb: data.suburb,
              message: data.message || "",
            },
            // Source tracking
            source: "Website Landing Page",
            tags: ["Website Lead", data.service],
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
      } else {
        // Demo mode - log to console
        console.log("Go High Level Form Submission:", {
          ghlFormId,
          ghlLocationId,
          data,
        });
        // Simulate API delay for demo
        await new Promise((resolve) => setTimeout(resolve, 1500));
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

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  return (
    <div className={cn("relative", className)}>
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-8 rounded-xl bg-success/10 text-center"
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-success" />
            <h3 className="text-xl font-semibold mb-2">Thanks {submittedName}!</h3>
            <p className="text-gray-600">
              We&apos;ve received your enquiry and will be in touch within 2 business
              hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 p-6 md:p-8 rounded-xl bg-white shadow-lg"
          >
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Get Your Free Quote</h3>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 2 hours.
              </p>
            </div>

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className={cn(
                    inputClasses,
                    errors.firstName && "border-red-500"
                  )}
                />
                {errors.firstName && (
                  <p className="form-error">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="lastName"
                  placeholder="Smith"
                  className={cn(inputClasses, errors.lastName && "border-red-500")}
                />
                {errors.lastName && (
                  <p className="form-error">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label">
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
              <label htmlFor="phone" className="form-label">
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
              <label htmlFor="service" className="form-label">
                Service Required
              </label>
              <select
                {...register("service")}
                id="service"
                className={cn(
                  inputClasses,
                  "appearance-none",
                  errors.service && "border-red-500"
                )}
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
              <label htmlFor="suburb" className="form-label">
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

            {/* Message */}
            <div>
              <label htmlFor="message" className="form-label">
                Tell us about your project{" "}
                <span className="font-normal text-gray-500">(optional)</span>
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                placeholder="Describe your electrical needs..."
                className={cn(inputClasses, "resize-none")}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={submitStatus === "loading"}
              rightIcon={
                submitStatus !== "loading" ? <Send className="h-4 w-4" /> : undefined
              }
            >
              {submitStatus === "loading" ? "Sending..." : "Get My Free Quote"}
            </Button>

            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="underline hover:text-primary-500"
              >
                Privacy Policy
              </a>
            </p>

            {/* Hidden fields for Go High Level tracking */}
            <input type="hidden" name="ghl_form_id" value={ghlFormId} />
            <input type="hidden" name="ghl_location_id" value={ghlLocationId} />
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GoHighLevelForm;
