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
import { commercialFAQs } from "@/data/faqs";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Commercial Electrician Adelaide | Business Electrical Services",
  description:
    "Commercial electrical services for Adelaide businesses. Office fit-outs, LED upgrades, data cabling, security systems. Licensed, insured. 24/7 emergency.",
};

const commercialProjects = projects.filter((p) => p.category === "commercial");

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <ServiceHero
          title="Commercial Electrical Services"
          subtitle="Powering Adelaide businesses with reliable electrical solutions. From office fit-outs to industrial installations, we deliver on time and on budget."
          iconName="Building2"
          backgroundImage="https://res.cloudinary.com/dhzl5ccct/image/upload/Pratt_Electrical15"
          features={[
            "Office & Retail Fit-Outs",
            "LED Lighting Upgrades",
            "Data & Network Cabling",
            "Security Systems",
            "Maintenance Contracts",
            "24/7 Emergency Response",
          ]}
        />

        {/* Services List */}
        <ServiceList
          title="Commercial Electrical Services"
          subtitle="Comprehensive electrical solutions for businesses of all sizes across Adelaide."
          services={services.commercial.services}
          columns={3}
        />

        {/* Capability Statement */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Built for Business</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 2020, Pratt Electrical Group has built strong relationships
                with Adelaide&apos;s largest electrical groups and suppliers. Our rapid
                growth is proof of our commitment to quality commercial work,
                delivered on schedule with minimal disruption to your operations.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">Emergency Response</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    5+
                  </div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-500 mb-2">
                    100%
                  </div>
                  <p className="text-gray-600">Insured & Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs variant="dark" />

        {/* Project Gallery */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Commercial Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From small offices to large commercial developments across Adelaide.
              </p>
            </div>
            <ProjectGallery
              projects={commercialProjects}
              showFilters={false}
              className="!py-0"
            />
          </div>
        </section>

        {/* FAQ */}
        <FAQ
          items={commercialFAQs}
          title="Commercial Electrical FAQs"
          subtitle="Common questions about business electrical services."
          className="bg-gray-50"
        />

        {/* Testimonials */}
        <Testimonials variant="grid" limit={3} />

        {/* Quote Form Section */}
        <section className="section bg-charcoal">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-white mb-4">Discuss Your Project</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Whether you&apos;re planning an office fit-out, need ongoing
                  maintenance, or have an urgent electrical issue, we&apos;re here to
                  help.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Free site assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    After-hours work available
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    Ongoing maintenance contracts
                  </li>
                </ul>
              </div>
              <QuoteForm variant="default" preselectedService="commercial" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Ready to Power Your Business?"
          subtitle="Contact us today for a free consultation and quote."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
