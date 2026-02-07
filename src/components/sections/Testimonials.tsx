"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/siteData";

interface TestimonialsProps {
  className?: string;
  variant?: "slider" | "grid";
  limit?: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-5 w-5",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
}

export function Testimonials({
  className,
  variant = "slider",
  limit,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = limit
    ? testimonials.slice(0, limit)
    : testimonials;

  const next = () => {
    setCurrentIndex((prev) =>
      prev === displayTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
  };

  if (variant === "grid") {
    return (
      <section className={cn("section bg-white", className)}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what South Australian
              homeowners and businesses say about working with us.
            </p>
            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gray-50 rounded-full">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                4.9 stars from Google Reviews
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-100" />
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-600 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                    {testimonial.service && ` • ${testimonial.service}`}
                  </p>
                  {testimonial.source && (
                    <p className="text-xs text-gray-400 mt-1">
                      via {testimonial.source}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Slider variant
  return (
    <section className={cn("section bg-white", className)}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">What Our Customers Say</h2>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gray-50 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              4.9 stars from Google Reviews
            </span>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-charcoal" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-charcoal" />
          </button>

          {/* Testimonial card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="card p-8 md:p-12 text-center"
              >
                <Quote className="h-12 w-12 mx-auto text-primary-500/20 mb-6" />
                <StarRating rating={displayTestimonials[currentIndex].rating} />
                <p className="mt-6 text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                  &quot;{displayTestimonials[currentIndex].text}&quot;
                </p>
                <div className="mt-8">
                  <p className="font-semibold text-lg text-charcoal">
                    {displayTestimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500">
                    {displayTestimonials[currentIndex].location}
                    {displayTestimonials[currentIndex].service &&
                      ` • ${displayTestimonials[currentIndex].service}`}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
