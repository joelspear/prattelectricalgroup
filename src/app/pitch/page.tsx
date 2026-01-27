import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Star, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Redesign Proposal | Pratt Electrical Group",
  description:
    "See what's possible when your website matches your workmanship. A premium Next.js website for Pratt Electrical Group.",
  robots: { index: false, follow: false },
};

export default function PitchLandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-charcoal via-gray-800 to-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What If Your Website Was As Good As Your Workmanship?
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pratt Electrical Group has built a remarkable reputation in just
              five years. You&apos;ve grown through quality work and word-of-mouth,
              serving hundreds of Adelaide customers and partnering with the
              industry&apos;s largest suppliers.
            </p>
            <p className="text-lg text-gray-400 mb-10">
              But when potential customers search for &apos;electrician Adelaide,&apos;
              your website scores <span className="text-secondary-400 font-semibold">4.8/10</span> compared
              to competitors at <span className="text-primary-400 font-semibold">7-8/10</span>.
              That gap doesn&apos;t reflect your actual quality – and it&apos;s costing you
              leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pitch/before-after"
                className="btn-primary text-lg px-8 py-4"
              >
                See the Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/"
                className="btn-outline border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-4"
              >
                Explore Demo Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">4.8</div>
              <div className="text-sm text-gray-600">Current Site Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">9.0+</div>
              <div className="text-sm text-gray-600">Demo Site Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-500 mb-2">90+</div>
              <div className="text-sm text-gray-600">Lighthouse Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">&lt;2s</div>
              <div className="text-sm text-gray-600">Page Load Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">
            This Demo Shows What&apos;s Possible
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Your Story, Front & Center",
                description:
                  "The rapid growth narrative that's currently buried is now the headline.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "90+ Lighthouse scores vs the current ~35 on mobile. Pages load instantly.",
              },
              {
                icon: Star,
                title: "Trust Signals",
                description:
                  "Google reviews, CEC badges, and testimonials prominently displayed.",
              },
              {
                icon: Smartphone,
                title: "Mobile Perfect",
                description:
                  "60%+ of traffic is mobile. This site delivers a flawless experience.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-500" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Explore the Proposal</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            This demo site is yours to explore regardless of whether we work
            together. Consider it a free audit and a vision of what&apos;s possible.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: "/pitch/before-after",
                title: "Before vs After",
                description:
                  "See the side-by-side comparison of the old site vs this demo.",
                number: "01",
              },
              {
                href: "/pitch/why-design-matters",
                title: "Why Design Matters",
                description:
                  "Research and data on how website quality affects lead generation.",
                number: "02",
              },
              {
                href: "/pitch/new-features",
                title: "What We Built",
                description:
                  "Detailed breakdown of every feature and improvement.",
                number: "03",
              },
              {
                href: "/pitch/investment",
                title: "Investment Options",
                description:
                  "Transparent pricing tiers and ROI analysis.",
                number: "04",
              },
              {
                href: "/pitch/about-fms",
                title: "About Fuel My Social",
                description:
                  "Who we are and why we built this demo.",
                number: "05",
              },
              {
                href: "/pitch/next-steps",
                title: "Next Steps",
                description:
                  "How to move forward if you like what you see.",
                number: "06",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <div className="text-4xl font-bold text-gray-200 group-hover:text-primary-200 mb-4 transition-colors">
                  {card.number}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
                <div className="mt-4 text-primary-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See the Full Demo?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Explore the complete website we&apos;ve built. See how your services,
            projects, and brand story come to life.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Demo Site
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
