import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Star, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Options | Website Redesign Proposal",
  robots: { index: false, follow: false },
};

const tiers = [
  {
    name: "Foundation",
    price: "$12,000 - $15,000",
    priceNote: "AUD (ex. GST)",
    description: "Getting a professional online presence that reflects your quality.",
    timeline: "4-5 weeks",
    features: [
      "Complete website redesign (up to 6 pages)",
      "Mobile-responsive design",
      "Contact forms & lead capture",
      "Basic SEO optimisation",
      "Performance optimisation (Lighthouse 90+)",
      "Google Analytics 4 setup",
      "30 days post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth Engine",
    price: "$18,000 - $25,000",
    priceNote: "AUD (ex. GST)",
    description: "Competing with premium players like Goliath Solar for Adelaide market share.",
    timeline: "6-8 weeks",
    features: [
      "Everything in Foundation, plus:",
      "Project portfolio with filtering",
      "Google Reviews integration",
      "Custom animations & interactions",
      "Advanced SEO (keyword research, local)",
      "Google My Business optimisation",
      "Schema markup for rich results",
      "Blog setup (if desired)",
      "60 days post-launch support",
    ],
    highlighted: true,
    badge: "RECOMMENDED",
  },
  {
    name: "Market Leader",
    price: "$30,000 - $40,000",
    priceNote: "AUD (ex. GST)",
    description: "Becoming the dominant digital presence in Adelaide electrical/solar.",
    timeline: "8-12 weeks",
    features: [
      "Everything in Growth Engine, plus:",
      "Custom quote calculator tool",
      "Online booking/scheduling system",
      "Customer portal",
      "Comprehensive content creation",
      "Professional photography coordination",
      "Email marketing setup",
      "90 days post-launch support",
      "Quarterly performance reviews (first year)",
    ],
    highlighted: false,
  },
];

const retainer = {
  name: "Optional Retainer",
  price: "$1,500 - $2,500/month",
  priceNote: "AUD (ex. GST)",
  features: [
    "Monthly content updates",
    "Blog post writing (1-2 per month)",
    "SEO monitoring & optimisation",
    "Security updates & maintenance",
    "Priority support",
    "Monthly analytics reports",
  ],
};

export default function InvestmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Investment Options
            </h1>
            <p className="text-xl text-gray-300">
              Quality web design is an investment in your business growth. These
              options are designed to match different goals and budgets. Each
              includes unlimited revisions – we don&apos;t stop until you&apos;re thrilled.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-primary-500 text-white ring-4 ring-primary-200"
                    : "bg-gray-50"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full">
                      <Star className="h-3 w-3 fill-white" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold mb-2 ${
                    tier.highlighted ? "text-white" : "text-charcoal"
                  }`}
                >
                  {tier.name}
                </h3>

                <div className="mb-4">
                  <span
                    className={`text-3xl font-bold ${
                      tier.highlighted ? "text-white" : "text-primary-500"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm ml-2 ${
                      tier.highlighted ? "text-primary-100" : "text-gray-500"
                    }`}
                  >
                    {tier.priceNote}
                  </span>
                </div>

                <p
                  className={`mb-6 ${
                    tier.highlighted ? "text-primary-100" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>

                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 ${
                    tier.highlighted
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Timeline: {tier.timeline}
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-white" : "text-primary-500"
                        }`}
                      />
                      <span
                        className={
                          tier.highlighted ? "text-white/90" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Retainer */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">{retainer.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary-500">
                    {retainer.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    {retainer.priceNote}
                  </span>
                </div>
                <p className="text-gray-600">
                  Ongoing support to keep your site performing at its best.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {retainer.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 mx-auto text-primary-500 mb-6" />
            <h2 className="mb-6">ROI Analysis</h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white rounded-xl">
                <p className="text-sm text-gray-500 mb-1">
                  Average solar installation
                </p>
                <p className="text-3xl font-bold text-charcoal">$7,000</p>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <p className="text-sm text-gray-500 mb-1">
                  Average commercial project
                </p>
                <p className="text-3xl font-bold text-charcoal">$15,000</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-2xl mb-8">
              <p className="text-gray-600 mb-4">
                If this website helps you win just 3 additional solar projects per
                year:
              </p>
              <p className="text-4xl font-bold text-primary-500 mb-2">
                3 × $7,000 = $21,000
              </p>
              <p className="text-sm text-gray-500">additional revenue</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl">
                <p className="text-sm text-gray-500 mb-1">
                  Website investment (Growth Engine)
                </p>
                <p className="text-2xl font-bold text-charcoal">~$20,000</p>
              </div>
              <div className="p-6 bg-primary-500 rounded-xl">
                <p className="text-sm text-primary-100 mb-1">Return</p>
                <p className="text-2xl font-bold text-white">
                  Paid for itself in Year 1
                </p>
              </div>
            </div>

            <p className="mt-8 text-lg text-gray-700">
              <strong>Break-even: 2-3 projects</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn More About Us?
          </h2>
          <p className="text-gray-400 mb-8">
            Find out who built this demo and why.
          </p>
          <Link
            href="/pitch/about-fms"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
          >
            About Fuel My Social
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
