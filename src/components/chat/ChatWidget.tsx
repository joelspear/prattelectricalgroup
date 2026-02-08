"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export function ChatWidget() {
  const pathname = usePathname();

  // Hide chat widget on ads landing pages and thank-you pages
  if (pathname.startsWith("/ads")) {
    return null;
  }

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="698810e12ad2f7d213eba44e"
      strategy="afterInteractive"
    />
  );
}
