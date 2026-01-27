import { Metadata } from "next";
import { Shield, Clock, Award, Star, Phone, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { GoHighLevelForm } from "@/components/forms/GoHighLevelForm";
import { contactInfo, testimonials } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Get Your Free Electrical Quote | Pratt Electrical Group Adelaide",
  description:
    "Request a free quote from Adelaide's trusted electrical and solar experts. CEC accredited, 24/7 emergency service, quality workmanship guaranteed.",
  robots: { index: true, follow: true },
};

const benefits = [
  {
    icon: Shield,
    title: "CEC Accredited",
    description: "Certified solar installers",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Always here when you need us",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Workmanship you can trust",
  },
];

export default function LandingPage() {
  // Get two featured testimonials
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Simple Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container-custom flex items-center justify-between">
          <Logo theme="light" className="h-10" />
          <a
            href={contactInfo.phoneTel}
            className="flex items-center gap-2 text-charcoal font-semibold hover:text-primary-500 transition-colors"
          >
            <Phone className="h-5 w-5 text-primary-500" />
            <span className="hidden sm:inline">{contactInfo.phoneFormatted}</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-charcoal via-gray-800 to-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="text-white">
              <div className="flex flex-wrap gap-3 mb-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm"
                  >
                    <benefit.icon className="h-4 w-4 text-primary-400" />
                    <span>{benefit.title}</span>
                  </div>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Adelaide&apos;s Trusted Electrical & Solar Experts
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get a free, no-obligation quote for your electrical or solar
                project. Our licensed electricians deliver quality workmanship
                with 24/7 emergency service.
              </p>

              {/* Trust Points */}
              <ul className="space-y-3 mb-8">
                {[
                  "Licensed & fully insured electricians",
                  "CEC accredited solar installers",
                  "Free quotes with no obligation",
                  "Response within 2 business hours",
                  "Serving all Adelaide metro areas",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Social Proof */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-300">
                  4.9 stars from Adelaide customers
                </span>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <GoHighLevelForm
                // Replace these with actual Go High Level credentials
                ghlFormId="YOUR_GHL_FORM_ID"
                ghlLocationId="YOUR_GHL_LOCATION_ID"
                // Optional: Add webhook URL for direct GHL integration
                // webhookUrl="https://services.leadconnectorhq.com/hooks/..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Residential Electrical",
                items: [
                  "Switchboard upgrades",
                  "Lighting installation",
                  "Safety switches",
                  "Rewiring",
                ],
              },
              {
                title: "Commercial Electrical",
                items: [
                  "Office fit-outs",
                  "LED upgrades",
                  "Data cabling",
                  "Maintenance",
                ],
              },
              {
                title: "Solar & Battery",
                items: [
                  "Solar installation",
                  "Battery storage",
                  "System upgrades",
                  "Rebate assistance",
                ],
              },
            ].map((service) => (
              <div key={service.title} className="p-6 bg-white rounded-xl">
                <h3 className="font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Fill out the form above or call us directly for immediate assistance.
          </p>
          <a
            href={contactInfo.phoneTel}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            <Phone className="h-5 w-5" />
            Call {contactInfo.phoneFormatted}
          </a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-charcoal text-center">
        <div className="container-custom">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {contactInfo.businessName}. All rights
            reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {contactInfo.address.full}
          </p>
        </div>
      </footer>
    </div>
  );
}
