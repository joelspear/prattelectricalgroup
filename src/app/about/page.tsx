import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  Hero,
  WhyChooseUs,
  Testimonials,
  CTASection,
} from "@/components/sections";
import { contactInfo, credentials } from "@/data/siteData";
import Image from "next/image";
import { Shield, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Pratt Electrical | South Australia Electrical & Solar Company",
  description:
    "Meet the Pratt Electrical team. South Australia's fastest-growing electrical and solar company. Founded 2020. SAA accredited. Licensed electricians.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero
          headline="South Australia's Fastest-Growing Electrical Team"
          subheadline="Founded in 2020, built on reputation. Quality workmanship and genuine customer care have driven our rapid growth."
          variant="about"
          showTrustBadges={false}
        />

        {/* Our Story */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-center mb-8">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="lead text-xl text-charcoal font-medium mb-6">
                  Pratt Electrical Group was founded in 2020 with a simple goal:
                  deliver exceptional electrical and solar services that speak for
                  themselves.
                </p>
                <p>
                  While many companies rely on aggressive marketing, we focused on
                  quality workmanship and genuine customer care. We believed that
                  if we did great work and treated people right, the business would
                  grow naturally.
                </p>
                <p>
                  We were right. In just five years – including launching during a
                  global pandemic – we&apos;ve built relationships with South Australia&apos;s
                  largest electrical groups and suppliers, and served hundreds of
                  residential and commercial customers across the state.
                </p>
                <p>
                  We&apos;re not the biggest electrical company in South Australia – but we&apos;re
                  one of the fastest-growing. And that growth is proof that quality
                  still wins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-gray-50">
          <div className="container-custom">
            <h2 className="text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Quality Workmanship",
                  description:
                    "We get it right the first time. Every job is completed to the highest standards, no shortcuts.",
                },
                {
                  icon: Users,
                  title: "Customer Care",
                  description:
                    "We treat your home like our own. Clear communication, respect for your property, and genuine care.",
                },
                {
                  icon: Clock,
                  title: "Reliability",
                  description:
                    "We show up when we say we will. Punctuality and keeping promises are non-negotiable.",
                },
                {
                  icon: Shield,
                  title: "Transparency",
                  description:
                    "No hidden costs, no surprises. We provide clear quotes and explain everything upfront.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-50 mb-4">
                    <value.icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-center mb-12">Meet the Team</h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                {/* Team member card */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dhzl5ccct/image/upload/James_Pratt_Headshot_paaoqy.jpg"
                      alt="James Pratt - Founder & Lead Electrician"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{contactInfo.owner}</h3>
                  <p className="text-primary-500 font-medium mb-4">
                    Founder & Lead Electrician
                  </p>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    James founded Pratt Electrical Group with a vision of building
                    an electrical company that puts quality and customer care
                    first. With years of experience in both residential and
                    commercial electrical work, James leads a growing team of
                    skilled electricians serving South Australia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="section bg-charcoal">
          <div className="container-custom">
            <h2 className="text-center text-white mb-12">
              Credentials & Certifications
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "SAA Accredited",
                  description: "Standards Australia accredited solar installer",
                  active: credentials.saaAccredited,
                },
                {
                  title: "Licensed Electricians",
                  description: "All team members fully licensed in SA",
                  active: credentials.licensedElectricians,
                },
                {
                  title: "Fully Insured",
                  description: "Comprehensive public liability coverage",
                  active: credentials.fullyInsured,
                },
                {
                  title: "Background Checked",
                  description: "All staff police-checked for your safety",
                  active: credentials.backgroundChecked,
                },
              ].map((cred) => (
                <div
                  key={cred.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 mb-4">
                    <Shield className="h-6 w-6 text-primary-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{cred.title}</h4>
                  <p className="text-gray-400 text-sm">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials variant="slider" />

        {/* CTA */}
        <CTASection
          title="Ready to Work With Us?"
          subtitle="Get your free quote today. Experience the Pratt Electrical difference."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
