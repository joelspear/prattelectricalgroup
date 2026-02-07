"use client";

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
}: QuoteFormProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative w-full",
        !isDark && "rounded-xl overflow-hidden shadow-lg bg-white",
        isDark && "rounded-xl overflow-hidden",
        className
      )}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/h0LmM7vPoAtpk0FueCSH"
        style={{ width: "100%", height: "831px", border: "none", borderRadius: "4px" }}
        id="inline-h0LmM7vPoAtpk0FueCSH"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Marketing Form - Claim Offer"
        data-height="831"
        data-layout-iframe-id="inline-h0LmM7vPoAtpk0FueCSH"
        data-form-id="h0LmM7vPoAtpk0FueCSH"
        title="Marketing Form - Claim Offer"
      />
    </div>
  );
}

export default QuoteForm;
