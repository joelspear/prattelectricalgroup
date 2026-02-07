"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Shield, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

const features = [
  {
    icon: Zap,
    title: "Quality Workmanship",
    description:
      "Every job completed to Australian standards with attention to detail.",
  },
  {
    icon: Shield,
    title: "SAA Accredited",
    description:
      "Standards Australia accredited installers for solar and battery systems.",
  },
  {
    icon: Users,
    title: "Local Team",
    description:
      "South Australian electricians who understand local homes.",
  },
  {
    icon: Award,
    title: "5-Star Service",
    description:
      "Consistently rated 5 stars by our customers across South Australia.",
  },
];

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={cn("section bg-white", className)}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4 block">
              Why South Australia Chooses Us
            </span>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Powered by Experience,{" "}
              <span className="text-primary-500">Driven by Service</span>
            </h2>

            {/* Intro paragraphs */}
            <p className="text-lg text-gray-700 mb-4">
              Pratt Electrical Group was founded with a simple mission: deliver
              exceptional electrical services with honest, transparent pricing.
              From day one, we&apos;ve treated every home and business like our own.
            </p>
            <p className="text-gray-600 mb-8">
              Whether it&apos;s a small repair or a complete solar installation, our
              team brings the same dedication to every project. We don&apos;t just
              install electrical systems – we build lasting relationships with
              our customers across South Australia.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dhzl5ccct/image/upload/Pratt_Electrical15"
                alt="Solar panel installation in South Australia"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              {/* Image Caption */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm text-gray-700 font-medium">
                  Solar installation in South Australia
                </p>
              </div>
            </div>

            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 right-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary-500" />
              </div>
              <div>
                <p className="font-bold text-charcoal">SAA Accredited</p>
                <p className="text-sm text-gray-500">Solar Installer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
