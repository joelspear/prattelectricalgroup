"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, AlertCircle } from "lucide-react";
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
  slug: string;
  showPowerBillField?: boolean;
  bookingSectionId?: string;
}

const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/jb2JO6vKj0fWUU2jvhfB/webhook-trigger/619b5785-1df4-46ac-ad21-f6472afbabda";

export function LandingForm({
  className,
  source,
  slug,
  showPowerBillField = false,
  bookingSectionId = "booking",
}: LandingFormProps) {
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LandingFormData>({
    resolver: zodResolver(baseLandingSchema),
  });

  const onSubmit = async (data: LandingFormData) => {
    setSubmitStatus("loading");

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
        router.push(`/ads/${slug}/thank-you?name=${encodeURIComponent(data.firstName)}`);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const inputClasses =
    "w-full px-3 py-2.5 border border-gray-300 rounded-lg text-charcoal placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm";

  const radioClasses =
    "flex items-center justify-center gap-2 p-2.5 rounded-lg border-2 border-gray-200 cursor-pointer transition-all hover:border-gray-300 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-700";

  return (
    <div id="quote-form" className={cn("scroll-mt-24", className)}>
      <AnimatePresence mode="wait">
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 p-5 md:p-6 rounded-xl bg-white shadow-lg"
        >
          <div className="mb-2 text-center">
            <h3 className="text-xl font-bold mb-0.5">Get Your Free Quote</h3>
            <p className="text-gray-600 text-xs">
              No obligation. We&apos;ll get back to you shortly.
            </p>
          </div>

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 p-2.5 bg-red-50 text-red-700 rounded-lg text-xs">
              <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
              Something went wrong. Please try again or call us on 0474 320 534.
            </div>
          )}

          {/* Row 1: First Name + Last Name */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="firstName" className="form-label text-xs">
                First Name
              </label>
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                placeholder="John"
                className={cn(inputClasses, errors.firstName && "border-red-500")}
              />
              {errors.firstName && (
                <p className="form-error text-xs">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="form-label text-xs">
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
                <p className="form-error text-xs">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="email" className="form-label text-xs">
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
                <p className="form-error text-xs">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="form-label text-xs">
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
                <p className="form-error text-xs">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Row 3: Street Address (full width) */}
          <div>
            <label htmlFor="address" className="form-label text-xs">
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

          {/* Row 4: Own Home + Existing Solar */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="form-label text-xs">Own your home?</label>
              <div className="grid grid-cols-2 gap-2 mt-0.5">
                <label className={radioClasses}>
                  <input {...register("ownHome")} type="radio" value="yes" className="sr-only" />
                  <span className="font-medium text-xs">Yes</span>
                </label>
                <label className={radioClasses}>
                  <input {...register("ownHome")} type="radio" value="no" className="sr-only" />
                  <span className="font-medium text-xs">No</span>
                </label>
              </div>
            </div>
            <div>
              <label className="form-label text-xs">Already have solar?</label>
              <div className="grid grid-cols-2 gap-2 mt-0.5">
                <label className={radioClasses}>
                  <input {...register("existingSolar")} type="radio" value="yes" className="sr-only" />
                  <span className="font-medium text-xs">Yes</span>
                </label>
                <label className={radioClasses}>
                  <input {...register("existingSolar")} type="radio" value="no" className="sr-only" />
                  <span className="font-medium text-xs">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Power Bill - conditional */}
          {showPowerBillField && (
            <div>
              <label htmlFor="powerBill" className="form-label text-xs">
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

          {/* Message */}
          <div>
            <label htmlFor="message" className="form-label text-xs">
              Message{" "}
              <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={2}
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

          <p className="text-center text-xs text-gray-500">
            Or book a call instead &rarr;{" "}
            <a
              href={`#${bookingSectionId}`}
              className="font-semibold text-primary-500 hover:underline"
            >
              Book a 10-Min Chat
            </a>
          </p>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}

export default LandingForm;
