import { Metadata } from "next";
import Link from "next/link";
import { Calendar, FileText, MessageCircle, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { fuelMySocial } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Next Steps | Website Redesign Proposal",
  robots: { index: false, follow: false },
};

export default function NextStepsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Like What You See? Let&apos;s Talk.
            </h1>
            <p className="text-xl text-gray-300">
              This demo site is yours to explore regardless of whether we work
              together. Consider it a free audit and a vision of what&apos;s possible.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="p-8 bg-primary-50 rounded-2xl border-2 border-primary-200">
              <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Option 1: Schedule a Discovery Call
              </h3>
              <p className="text-gray-600 mb-6">
                30-minute call to discuss:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-500" />
                  Your business goals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-500" />
                  Timeline and budget
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-500" />
                  Questions you have
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary-500" />
                  Whether we&apos;re a good fit
                </li>
              </ul>
              <a
                href={`mailto:${fuelMySocial.contact.email}?subject=Discovery Call Request - Pratt Electrical`}
                className="btn-primary w-full justify-center"
              >
                Book Discovery Call
              </a>
            </div>

            {/* Option 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Option 2: Request a Detailed Proposal
              </h3>
              <p className="text-gray-600 mb-6">We&apos;ll prepare:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gray-400" />
                  Custom pricing for your needs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gray-400" />
                  Detailed project scope
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-gray-400" />
                  Timeline and milestones
                </li>
              </ul>
              <a
                href={`mailto:${fuelMySocial.contact.email}?subject=Proposal Request - Pratt Electrical`}
                className="btn-outline w-full justify-center"
              >
                Request Proposal
              </a>
            </div>

            {/* Option 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Option 3: Just Ask Questions
              </h3>
              <p className="text-gray-600 mb-6">
                No commitment needed. Reach out anytime:
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${fuelMySocial.contact.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  {fuelMySocial.contact.email}
                </a>
                <a
                  href={`tel:${fuelMySocial.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {fuelMySocial.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">What Happens Next</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  description: "We discuss your needs (30 mins)",
                },
                {
                  step: "2",
                  title: "Proposal",
                  description: "We send detailed pricing and scope (2-3 days)",
                },
                {
                  step: "3",
                  title: "Contract",
                  description: "We make it official",
                },
                {
                  step: "4",
                  title: "Kickoff",
                  description: "Project starts",
                },
                {
                  step: "5",
                  title: "Launch",
                  description: "You go live with a site you're proud of",
                },
              ].map((item, index) => (
                <div key={item.step} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 4 && (
                    <div className="hidden sm:block">
                      <ArrowRight className="h-5 w-5 text-gray-300 mt-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="section bg-charcoal">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              James, you&apos;ve built something impressive with Pratt Electrical. You
              deserve a website that reflects that.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Whether you hire us or someone else, don&apos;t let an outdated website
              hold you back. It&apos;s too easy to fix and too costly to ignore.
            </p>
            <p className="text-gray-400 mb-8">
              If you have questions, I&apos;m just a phone call away.
            </p>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl">
              <p className="text-xl font-bold text-white mb-2">
                {fuelMySocial.contact.name}
              </p>
              <p className="text-primary-400 mb-4">{fuelMySocial.name}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${fuelMySocial.contact.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {fuelMySocial.contact.email}
                </a>
                <span className="hidden sm:inline text-gray-600">|</span>
                <a
                  href={`tel:${fuelMySocial.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {fuelMySocial.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-primary-500">
        <div className="container-custom text-center">
          <p className="text-primary-100 mb-4">
            Haven&apos;t explored the demo yet?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore the Demo Site
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
