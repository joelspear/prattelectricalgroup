import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  FileText,
  Image,
  Star,
  Zap,
  Smartphone,
  AlertCircle,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What We Built | Website Redesign Proposal",
  robots: { index: false, follow: false },
};

const features = [
  {
    icon: TrendingUp,
    title: "Your Growth Story, Front and Center",
    what: '"Adelaide\'s Fastest-Growing Electrical Team" is now your headline, not buried in paragraph text.',
    why: "This differentiates you from established players. Growing rapidly during COVID through reputation alone is a powerful story.",
    problemSolved: "Visitors couldn't find what makes you special.",
  },
  {
    icon: FileText,
    title: "Fixed Content Errors",
    what: "Residential page now has residential content (not commercial copy).",
    why: 'Current site has identical content on different pages, including wrong service references like "office fit-outs".',
    problemSolved: "Visitors no longer see commercial content when looking for home electrical services.",
  },
  {
    icon: Image,
    title: "Proper Project Portfolio",
    what: "Gallery of completed work, filterable by category (Residential, Commercial, Solar).",
    why: "Visual proof beats written claims. Shows quality of work.",
    problemSolved: "No evidence of your work quality on current site.",
  },
  {
    icon: Star,
    title: "Google Reviews Integration",
    what: "Actual Google reviews displayed on homepage with star ratings.",
    why: "Social proof from real customers builds trust instantly.",
    problemSolved: "Only one testimonial visible on current site.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    what: "Sub-second load times, 90+ Lighthouse scores on all metrics.",
    why: "Fast sites rank higher in Google and convert better. Users expect speed.",
    problemSolved: "Wix bloat causing slow load times (~35/100 mobile).",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    what: "Perfect experience on phones with tap-to-call, accessible forms, full-screen menu.",
    why: "60%+ of your visitors are on mobile. This is where leads come from.",
    problemSolved: "Navigation breaks on mobile, hero images don't display properly.",
  },
  {
    icon: AlertCircle,
    title: "24/7 Emergency Prominence",
    what: "Emergency service highlighted throughout with tap-to-call buttons.",
    why: "Emergency jobs are high-value and time-sensitive. Make it easy.",
    problemSolved: "24/7 service was buried in body copy.",
  },
  {
    icon: Search,
    title: "Local SEO Foundation",
    what: "Adelaide-specific content, proper meta tags, schema markup, suburb pages.",
    why: 'Rank higher for "electrician Adelaide" and local searches.',
    problemSolved: "Generic content not optimised for local search.",
  },
];

export default function NewFeaturesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What We Built
            </h1>
            <p className="text-xl text-gray-300">
              Every feature in this demo was designed to solve a specific problem
              identified in our audit. Here&apos;s the detailed breakdown.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="grid lg:grid-cols-3 gap-8 pb-12 border-b border-gray-100 last:border-0 last:pb-0"
              >
                {/* Feature number and icon */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-bold text-gray-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>

                {/* What & Why */}
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-600 mb-2">
                        What
                      </h4>
                      <p className="text-gray-600">{feature.what}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600 mb-2">Why</h4>
                      <p className="text-gray-600">{feature.why}</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-1">
                      Problem Solved
                    </h4>
                    <p className="text-green-600 text-sm">
                      {feature.problemSolved}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Technical Specifications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Framework",
                value: "Next.js 14",
                detail: "React-based, server-rendered",
              },
              {
                label: "Styling",
                value: "Tailwind CSS",
                detail: "Utility-first, fully customised",
              },
              {
                label: "Animation",
                value: "Framer Motion",
                detail: "Smooth, accessible animations",
              },
              {
                label: "Hosting",
                value: "Cloudflare Pages",
                detail: "Global CDN, fast everywhere",
              },
            ].map((spec) => (
              <div key={spec.label} className="p-6 bg-white rounded-xl shadow-sm">
                <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                <p className="text-xl font-bold text-charcoal mb-1">
                  {spec.value}
                </p>
                <p className="text-sm text-gray-600">{spec.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold mb-4">Performance Targets</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Lighthouse Performance</span>
                  <span className="font-semibold text-primary-500">90+</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Lighthouse Accessibility</span>
                  <span className="font-semibold text-primary-500">95+</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Lighthouse SEO</span>
                  <span className="font-semibold text-primary-500">95+</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Page Load Time</span>
                  <span className="font-semibold text-primary-500">&lt; 2s</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold mb-4">Pages Included</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Homepage with hero, trust bar, services</li>
                <li>• Residential service page</li>
                <li>• Commercial service page</li>
                <li>• Solar & Battery page</li>
                <li>• About page with team</li>
                <li>• Filterable project gallery</li>
                <li>• Contact page with forms</li>
                <li>• Privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Discuss Investment?
          </h2>
          <p className="text-primary-100 mb-8">
            Transparent pricing tiers designed to match different goals and
            budgets.
          </p>
          <Link
            href="/pitch/investment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Investment Options
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
