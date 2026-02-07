"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
}: QuoteFormProps) {
  const isDark = variant === "dark";
  const isCompact = variant === "compact";

  return (
    <div className={cn("relative", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn(
          !isCompact && "p-6 md:p-8 rounded-xl",
          !isCompact && (isDark ? "bg-white/5 backdrop-blur-sm" : "bg-white shadow-lg")
        )}
      >
        {showTitle && (
          <div className="mb-4">
            <h3 className={cn("text-xl font-semibold mb-1", isDark && "text-white")}>
              Get Your Free Quote
            </h3>
            <p className={cn("text-sm text-gray-600", isDark && "text-gray-400")}>
              No obligation, fast response
            </p>
          </div>
        )}

        <iframe
          src="https://api.leadconnectorhq.com/widget/form/h0LmM7vPoAtpk0FueCSH"
          style={{ width: "100%", height: "600px", border: "none" }}
          id="inline-h0LmM7vPoAtpk0FueCSH"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Marketing Form - Claim Offer"
          data-height="600"
          data-layout-iframe-id="inline-h0LmM7vPoAtpk0FueCSH"
          data-form-id="h0LmM7vPoAtpk0FueCSH"
          title="Marketing Form - Claim Offer"
        />
      </motion.div>
    </div>
  );
}

export default QuoteForm;
