import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  ServiceHero,
  ServiceList,
  WhyChooseUs,
  FAQ,
  Testimonials,
  CTASection,
  ProjectGallery,
} from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { services } from "@/data/siteData";
import { residentialFAQs } from "@/data/faqs";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Residential Electrician Adelaide | Home Electrical Services",
  description:
    "Expert residential electrical services in Adelaide. New builds, renovations, switchboard upgrades, lighting, safety switches. Licensed electricians. Free quotes.",
};

const residentialProjects = projects.filter((p) => p.category === "residential");


export default function ResidentialPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Residential Electrical Services"
          subtitle="From small repairs to complete rewires – quality electrical work for Adelaide homes. Licensed, insured, and committed to your satisfaction."
          iconName="Home"
          features={[
            "Switchboard Upgrades",
            "Lighting Installation",
            "Safety Switches & RCDs",
            "EV Charger Installation",
            "New Builds & Renovations",
            "Smoke Alarm Compliance",
          ]}
        />

        {/* Services List */}
        <ServiceList
          title="Home Electrical Services"
          subtitle="Whatever your home needs, our experienced team can help. All work completed to Australian Standards."
          services={services.residential.services}
          columns={3}
        />

        {/* Why Choose Us - Residential focused */}
        <WhyChooseUs variant="dark" />

        {/* Project Gallery */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Recent Residential Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See examples of our work in homes across Adelaide.
              </p>
            </div>
            <ProjectGallery
              projects={residentialProjects}
              showFilters={false}
              className="!py-0"
            />
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={residentialFAQs}
          title="Residential Electrical FAQs"
          subtitle="Common questions about home electrical services in Adelaide."
          className="bg-gray-50"
        />

        {/* Testimonials */}
        <Testimonials variant="grid" limit={3} />

        {/* Quote Form Section */}
        <section className="section bg-charcoal">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-white mb-4">Get Your Free Quote</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Tell us about your project and we&apos;ll get back to you within 2
                  business hours with a no-obligation quote.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Free, no-obligation quotes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Response within 2 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Upfront, transparent pricing
                  </li>
                </ul>
              </div>
              <QuoteForm variant="default" preselectedService="residential" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Need a Residential Electrician?"
          subtitle="From simple repairs to major renovations, we're here to help."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
