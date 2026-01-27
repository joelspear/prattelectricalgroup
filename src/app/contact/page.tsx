import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Hero } from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { contactInfo, socialLinks } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Pratt Electrical | Get a Free Quote",
  description:
    "Contact Pratt Electrical for a free quote. Call 0406 494 941 or submit our online form. 24/7 emergency service available.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero
          headline="Get in Touch"
          subheadline="Free quotes, fast responses, no obligation. We're here to help with all your electrical and solar needs."
          variant="about"
          showTrustBadges={false}
        />

        {/* Contact Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="mb-8">Contact Information</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href={contactInfo.phoneTel}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                      <Phone className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone</p>
                      <p className="text-xl font-semibold text-charcoal">
                        {contactInfo.phoneFormatted}
                      </p>
                      <p className="text-sm text-primary-600 mt-1">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                      <Mail className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <p className="text-lg font-semibold text-charcoal">
                        {contactInfo.email}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        We respond within 24 hours
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href={socialLinks.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-colors">
                      <MapPin className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>
                      <p className="text-lg font-semibold text-charcoal">
                        {contactInfo.address.suburb}, {contactInfo.address.state}{" "}
                        {contactInfo.address.postcode}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Servicing all Adelaide metro
                      </p>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Hours</p>
                      <p className="text-lg font-semibold text-charcoal">
                        Mon-Fri: 7am - 5pm
                      </p>
                      <p className="text-sm text-primary-600 mt-1">
                        24/7 Emergency calls accepted
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50">
                    <div className="text-center p-8">
                      <MapPin className="h-12 w-12 mx-auto text-primary-500 mb-4" />
                      <p className="text-charcoal font-semibold">
                        {contactInfo.address.suburb}, SA
                      </p>
                      <a
                        href={socialLinks.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-500 hover:underline mt-2 inline-block"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <h2 className="mb-8">Request a Quote</h2>
                <QuoteForm variant="default" showTitle={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-12 bg-secondary-500">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/20 rounded-full">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Electrical Emergency?
                  </h3>
                  <p className="text-secondary-100">
                    We aim to respond within 1 hour for Adelaide metro emergencies
                  </p>
                </div>
              </div>
              <a
                href={contactInfo.phoneTel}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now: {contactInfo.phoneFormatted}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
