"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const baseLandingSchema = z.object({
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number")
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number"),
  address: z.string().optional(),
  ownHome: z.enum(["yes", "no"]).optional(),
  powerBill: z.string().optional(),
  existingSolar: z.enum(["yes", "no"]).optional(),
  message: z.string().max(1000, "Message too long").optional(),
});

type LandingFormData = z.infer<typeof baseLandingSchema>;

interface LandingFormProps {
  className?: string;
  source: string;
  showPowerBillField?: boolean;
  showExistingSolarField?: boolean;
  bookingSectionId?: string;
}

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/jb2JO6vKj0fWUU2jvhfB/webhook-trigger/619b5785-1df4-46ac-ad21-f6472afbabda";

export function LandingForm({
  className,
  source,
  showPowerBillField = false,
  showExistingSolarField = false,
  bookingSectionId = "booking",
}: LandingFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LandingFormData>({
    resolver: zodResolver(baseLandingSchema),
  });

  const onSubmit = async (data: LandingFormData) => {
    setSubmitStatus("loading");
    setSubmittedName(data.firstName);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          address: data.address || "",
          ownHome: data.ownHome || "",
          powerBill: data.powerBill || "",
          existingSolar: data.existingSolar || "",
          message: data.message || "",
          source,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          reset();
          setSubmitStatus("idle");
        }, 8000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base";

  return (
    <div id="quote-form" className={cn("scroll-mt-24", className)}>
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
            <h3 className="text-xl font-semibold mb-2">
              Thanks {submittedName}!
            </h3>
            <p className="text-gray-600 mb-4">
              We&apos;ll be in touch shortly.
            </p>
            <p className="text-gray-600">
              Want to chat sooner? Call us on{" "}
              <a
                href="tel:+61474320534"
                className="font-semibold text-primary-500 hover:underline"
              >
                0474 320 534
              </a>
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
            <div className="mb-4 text-center">
              <h3 className="text-2xl font-bold mb-1">Get Your Free Quote</h3>
              <p className="text-gray-600 text-sm">
                No obligation. We&apos;ll get back to you shortly.
              </p>
            </div>

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                Something went wrong. Please try again or call us on 0474 320
                534.
              </div>
            )}

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
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
                  className={cn(
                    inputClasses,
                    errors.lastName && "border-red-500"
                  )}
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

            {/* Street Address */}
            <div>
              <label htmlFor="address" className="form-label">
                Street Address{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                {...register("address")}
                type="text"
                id="address"
                placeholder="123 Main St, Adelaide"
                className={inputClasses}
              />
            </div>

            {/* Own Home */}
            <div>
              <label className="form-label">Do you own your home?</label>
              <div className="grid grid-cols-2 gap-3 mt-1">
                <label className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-gray-300 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700">
                  <input
                    {...register("ownHome")}
                    type="radio"
                    value="yes"
                    className="sr-only"
                  />
                  <span className="font-medium text-sm">Yes</span>
                </label>
                <label className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-gray-300 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700">
                  <input
                    {...register("ownHome")}
                    type="radio"
                    value="no"
                    className="sr-only"
                  />
                  <span className="font-medium text-sm">No</span>
                </label>
              </div>
            </div>

            {/* Power Bill - conditional */}
            {showPowerBillField && (
              <div>
                <label htmlFor="powerBill" className="form-label">
                  Average quarterly power bill
                </label>
                <select
                  {...register("powerBill")}
                  id="powerBill"
                  className={cn(inputClasses, "appearance-none")}
                >
                  <option value="">Select...</option>
                  <option value="under_500">Under $500</option>
                  <option value="500_850">$500 – $850</option>
                  <option value="over_850">Over $850</option>
                </select>
              </div>
            )}

            {/* Existing Solar - conditional */}
            {showExistingSolarField && (
              <div>
                <label className="form-label">
                  Do you already have solar?
                </label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <label className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-gray-300 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700">
                    <input
                      {...register("existingSolar")}
                      type="radio"
                      value="yes"
                      className="sr-only"
                    />
                    <span className="font-medium text-sm">Yes</span>
                  </label>
                  <label className="flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-gray-300 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700">
                    <input
                      {...register("existingSolar")}
                      type="radio"
                      value="no"
                      className="sr-only"
                    />
                    <span className="font-medium text-sm">No</span>
                  </label>
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="form-label">
                Message{" "}
                <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={3}
                placeholder="Tell us about your project..."
                className={cn(inputClasses, "resize-none")}
              />
            </div>

            {/* Hidden source field */}
            <input type="hidden" name="source" value={source} />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={submitStatus === "loading"}
              rightIcon={
                submitStatus !== "loading" ? (
                  <Send className="h-4 w-4" />
                ) : undefined
              }
            >
              {submitStatus === "loading" ? "Sending..." : "Get My Free Quote"}
            </Button>

            <p className="text-center text-sm text-gray-500">
              Or book a call instead &rarr;{" "}
              <a
                href={`#${bookingSectionId}`}
                className="font-semibold text-primary-500 hover:underline"
              >
                Book a 10-Min Chat
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingForm;
