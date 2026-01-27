"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceAreas } from "@/data/siteData";

interface ServiceAreasProps {
  className?: string;
}

export function ServiceAreas({ className }: ServiceAreasProps) {
  return (
    <section className={cn("section bg-gray-50", className)}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-primary-500 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Service Areas</span>
            </div>
            <h2 className="mb-4">Proudly Serving Adelaide</h2>
            <p className="text-gray-600 mb-8">
              Based in Christies Beach, we service the entire Adelaide
              metropolitan area. From the city to the southern suburbs, our team
              is ready to help with all your electrical and solar needs.
            </p>

            {/* Service areas list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{area}</span>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500">
              + All Adelaide metropolitan suburbs
            </p>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
              {/* Static map image placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 mx-auto text-primary-500 mb-4" />
                  <p className="text-charcoal font-semibold">
                    Adelaide Metropolitan Area
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Christies Beach, SA 5165
                  </p>
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">Based in</p>
                  <p className="text-sm text-gray-600">Christies Beach</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;
