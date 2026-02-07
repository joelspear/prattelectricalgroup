"use client";

import { cn } from "@/lib/utils";

interface QuoteFormProps {
  className?: string;
  variant?: "default" | "compact" | "dark";
  showTitle?: boolean;
  preselectedService?: string;
  preselectedCustomerType?: "residential" | "commercial";
}

export function QuoteForm({ className }: QuoteFormProps) {
  return (
    <div className={cn("relative w-full", className)}>
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
    </div>
  );
}

export default QuoteForm;
