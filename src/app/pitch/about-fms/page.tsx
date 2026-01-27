import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Users } from "lucide-react";
import { fuelMySocial } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Fuel My Social | Website Redesign Proposal",
  robots: { index: false, follow: false },
};

export default function AboutFMSPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Build Websites That Win Business
            </h1>
            <p className="text-xl text-gray-300">
              At Fuel My Social, we believe your website should be your
              hardest-working salesperson. Most agencies build pretty sites that
              don&apos;t convert. We build sites that look premium AND drive results.
            </p>
          </div>
        </div>
      </section>

      {/* About Joel */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Meet {fuelMySocial.contact.name}</h2>
              <div className="prose prose-lg">
                <p>
                  Joel Spear founded Fuel My Social in Adelaide to help local
                  businesses compete digitally. He&apos;s seen too many great companies
                  held back by weak websites.
                </p>
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600">
                  &quot;Pratt Electrical is a perfect example. James has built
                  something impressive through pure quality and reputation. But
                  when I looked at the website, I saw the gap – the site doesn&apos;t
                  reflect the actual business. That&apos;s what we fix.&quot;
                </blockquote>
                <p>
                  Based in Adelaide, working with businesses across South
                  Australia.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary-500" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">
                  {fuelMySocial.contact.name}
                </h3>
                <p className="text-primary-500 font-medium mb-6">
                  Founder, Fuel My Social
                </p>
                <div className="space-y-3">
                  <a
                    href={`mailto:${fuelMySocial.contact.email}`}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {fuelMySocial.contact.email}
                  </a>
                  <a
                    href={`tel:${fuelMySocial.contact.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-primary-500 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {fuelMySocial.contact.phone}
                  </a>
                  <p className="flex items-center justify-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    Adelaide, South Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Connection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">The Connection</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-lg text-gray-600 mb-6">
                Fuel My Social originally built Pratt Electrical&apos;s Wix website in
                2022. That site served its purpose at the time, but as Pratt has
                grown, the website hasn&apos;t kept pace.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This demo represents the next evolution – a custom-built,
                high-performance site that matches where Pratt Electrical is
                today, not where they were three years ago.
              </p>
              <div className="flex items-center justify-center gap-8 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-300">2022</p>
                  <p className="text-sm text-gray-500">Original Wix Site</p>
                </div>
                <ArrowRight className="h-8 w-8 text-primary-500" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-500">2026</p>
                  <p className="text-sm text-gray-500">Premium Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Research First",
                description:
                  "We start with a comprehensive audit – understanding your business, competitors, and customers before writing a line of code.",
              },
              {
                step: "02",
                title: "Build for Conversion",
                description:
                  "Every design decision is made with conversion in mind. Pretty is good. Pretty that converts is better.",
              },
              {
                step: "03",
                title: "Performance Obsessed",
                description:
                  "We don't ship slow websites. Period. 90+ Lighthouse scores are the minimum, not the goal.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-gray-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="section bg-primary-500">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-8">What We Deliver</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Custom Next.js websites",
                "Mobile-first responsive design",
                "Conversion-optimised layouts",
                "Fast loading performance",
                "SEO foundation built-in",
                "Ongoing support available",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-gray-400 mb-8">See how easy it is to get started.</p>
          <Link
            href="/pitch/next-steps"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
          >
            Next Steps
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
