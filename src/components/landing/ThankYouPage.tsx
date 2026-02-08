"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Phone,
  Zap,
  TrendingUp,
  BadgeDollarSign,
  Battery,
  ShieldCheck,
  Coins,
  Sun,
  Car,
  Building2,
  Award,
  Clock,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { LandingPageData } from "@/data/landingPages";

const LOGO_LIGHT =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/v1770464871/Pratt_Electrical_Group_Logo_copy_tr41ry.png";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  BadgeDollarSign: <BadgeDollarSign className="h-6 w-6" />,
  Battery: <Battery className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Coins: <Coins className="h-6 w-6" />,
  Sun: <Sun className="h-6 w-6" />,
  Car: <Car className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
  Building2: <Building2 className="h-6 w-6" />,
  Clock: <Clock className="h-6 w-6" />,
  MapPin: <MapPin className="h-6 w-6" />,
};

function ThankYouContent({ data }: { data: LandingPageData }) {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  return (
    <>
      {/* Nav bar */}
      <div className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" aria-label="Pratt Electrical Group">
            <Image
              src={LOGO_LIGHT}
              alt="Pratt Electrical Group"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>
          <a
            href="tel:+61474320534"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-400 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">0474 320 534</span>
            <span className="sm:hidden">Call Us</span>
          </a>
        </div>
      </div>

      {/* Thank You Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="h-20 w-20 mx-auto mb-6 text-white/90" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              {name ? `Thank You, ${name}!` : "Thank You!"}
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-6 leading-relaxed">
              We&apos;ve received your enquiry. Someone from our team will be in
              touch shortly.
            </p>
            <p className="text-primary-200">
              Want to chat sooner? Call us on{" "}
              <a
                href="tel:+61474320534"
                className="font-semibold text-white hover:underline"
              >
                0474 320 534
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits — confirm their decision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {data.thankYou.heading}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {data.thankYou.subheading}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.thankYou.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="text-center p-6 md:p-8 bg-gray-50 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 text-primary-500 mb-4">
                  {iconMap[benefit.icon] || <Zap className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want to Get Started Even Faster?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Book a free 10-minute discovery call and we&apos;ll walk you through
            everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://api.leadconnectorhq.com/widget/bookings/10min-discovery-call"
              size="lg"
              external
            >
              <Phone className="h-5 w-5" />
              Book a 10-Min Chat
            </Button>
            <Button
              href="tel:+61474320534"
              variant="outline"
              size="lg"
              external
            >
              <Phone className="h-5 w-5" />
              Call 0474 320 534
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export function ThankYouPageTemplate({ data }: { data: LandingPageData }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500" />
        </div>
      }
    >
      <ThankYouContent data={data} />
    </Suspense>
  );
}

export default ThankYouPageTemplate;
