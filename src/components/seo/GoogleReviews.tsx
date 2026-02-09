"use client";

import Script from "next/script";

interface GoogleReviewsProps {
  showHeading?: boolean;
  className?: string;
}

export function GoogleReviews({
  showHeading = true,
  className = "",
}: GoogleReviewsProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {showHeading && (
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
        )}
        <div
          id="featurable-ca9339a3-6f4b-4f4a-8766-ce423bcc9b46"
          data-featurable-async
        />
        <Script
          src="https://featurable.com/assets/bundle.js"
          strategy="lazyOnload"
        />
      </div>
    </section>
  );
}

export default GoogleReviews;
