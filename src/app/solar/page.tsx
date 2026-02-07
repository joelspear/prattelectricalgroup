"use client";

import { Zap, DollarSign, Leaf, Battery, Shield, Sun } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import {
  ServiceHero,
  ServiceList,
  FAQ,
  Testimonials,
  CTASection,
  ProjectGallery,
} from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { services } from "@/data/siteData";
import { solarFAQs } from "@/data/faqs";
import { projects } from "@/data/projects";

const solarProjects = projects.filter((p) => p.category === "solar");

export default function SolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Solar & Battery Installation"
          subtitle="Cut your electricity bills with South Australia's trusted solar experts. SAA accredited installation with quality panels and inverters backed by solid warranties."
          iconName="Sun"
          backgroundImage="https://res.cloudinary.com/dhzl5ccct/image/upload/f_auto,q_auto,w_1600/Pratt_Electrical21_lena3p.jpg"
          features={[
            "SAA Accredited Installers",
            "Premium Panel Brands",
            "Battery Storage Systems",
            "Government Rebate Assistance",
            "Long-Term Warranties",
            "Local SA Team",
          ]}
        />

        {/* Why Solar in South Australia */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4">Why South Australia is Perfect for Solar</h2>
              <p className="text-lg text-gray-600">
                South Australia has the highest electricity prices in the country
                and some of the best sunshine. The combination makes solar one of
                the smartest investments you can make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <DollarSign className="h-7 w-7 text-primary-600" />
                </div>
                <h4 className="font-semibold mb-2">Highest Power Prices</h4>
                <p className="text-sm text-gray-600">
                  SA has Australia&apos;s highest electricity rates, making solar
                  savings even more significant.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <Sun className="h-7 w-7 text-primary-600" />
                </div>
                <h4 className="font-semibold mb-2">Abundant Sunshine</h4>
                <p className="text-sm text-gray-600">
                  South Australia averages over 2,500 hours of sunshine per year – ideal
                  for solar generation.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <Zap className="h-7 w-7 text-primary-600" />
                </div>
                <h4 className="font-semibold mb-2">3-5 Year Payback</h4>
                <p className="text-sm text-gray-600">
                  Most systems pay for themselves in 3-5 years, then provide free
                  power for 20+ years.
                </p>
              </div>

              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-100 mb-4">
                  <Leaf className="h-7 w-7 text-primary-600" />
                </div>
                <h4 className="font-semibold mb-2">Government Rebates</h4>
                <p className="text-sm text-gray-600">
                  Government rebates can save you up to $20,000 on your solar
                  system. We handle all the paperwork.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <ServiceList
          title="Solar Services"
          subtitle="From residential rooftops to commercial installations, we provide complete solar solutions."
          services={services.solar.services}
          columns={2}
          className="bg-gray-50"
        />

        {/* SAA Accreditation Section */}
        <section className="section bg-primary-500">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 text-primary-100 mb-4">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">
                    SAA Accredited
                  </span>
                </div>
                <h2 className="text-white mb-4">
                  Standards Australia Accredited Installer
                </h2>
                <p className="text-primary-100 text-lg mb-6">
                  Our SAA accreditation means we meet the highest standards for
                  solar installation in Australia. It&apos;s your guarantee of quality
                  workmanship and eligibility for government rebates.
                </p>
                <ul className="space-y-3 text-primary-100">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Required for STC rebate eligibility
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Ongoing training and compliance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Quality installation standards
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Proper system design and sizing
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="bg-white rounded-xl p-6 inline-block mb-4">
                  <Shield className="h-16 w-16 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  SAA Accredited Installer
                </h3>
                <p className="text-primary-100">
                  Pratt Electrical Group is a proud member and accredited installer
                  under Standards Australia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solar Benefits Cards */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Benefits of Going Solar</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solar isn&apos;t just good for the environment – it&apos;s one of the best
                financial decisions you can make.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "Reduced Power Bills",
                  description:
                    "Generate your own electricity and dramatically reduce your reliance on the grid. Many customers save 50-80% on their bills.",
                },
                {
                  icon: Zap,
                  title: "Government Rebates",
                  description:
                    "Government rebates can save you up to $20,000. We handle all the paperwork for you.",
                },
                {
                  icon: Sun,
                  title: "Increased Property Value",
                  description:
                    "Solar systems add value to your property. Studies show homes with solar sell faster and for higher prices.",
                },
                {
                  icon: Leaf,
                  title: "Environmental Impact",
                  description:
                    "A typical solar system prevents tonnes of CO2 emissions per year – a real difference for the environment.",
                },
                {
                  icon: Battery,
                  title: "Energy Independence",
                  description:
                    "Add battery storage to use your solar power at night and during blackouts. True energy independence.",
                },
                {
                  icon: Shield,
                  title: "Long-Term Warranties",
                  description:
                    "Quality panels and inverters come with long-term performance warranties. Serious peace of mind.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="card p-6 hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 mb-4">
                    <benefit.icon className="h-6 w-6 text-primary-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Solar Installations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recent solar and battery installations across South Australia.
              </p>
            </div>
            <ProjectGallery
              projects={solarProjects}
              showFilters={false}
              className="!py-0"
            />
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={solarFAQs}
          title="Solar Installation FAQs"
          subtitle="Common questions about solar panels and battery storage in South Australia."
          className="bg-white"
        />

        {/* Testimonials */}
        <Testimonials variant="grid" limit={3} />

        {/* Quote Form Section */}
        <section className="section bg-charcoal">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-white mb-4">Get Your Solar Quote</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Discover how much you could save with solar. We&apos;ll analyse your
                  electricity bills and design a system optimised for your home.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Free solar assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Custom system design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Clear ROI breakdown
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    All rebates included
                  </li>
                </ul>
              </div>
              <QuoteForm variant="default" preselectedService="solar" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Ready to Go Solar?"
          subtitle="Join thousands of South Australian homeowners saving money with solar."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
