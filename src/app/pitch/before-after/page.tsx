import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, X, Check, Smartphone, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Before vs After | Website Redesign Proposal",
  robots: { index: false, follow: false },
};

const comparisons = [
  {
    category: "Homepage",
    items: [
      { before: "Blurry hero image", after: "Professional, high-quality imagery" },
      { before: "Generic Wix template", after: "Custom-built, unique design" },
      { before: "One testimonial visible", after: "Google reviews integrated" },
      { before: "Buried CEC badge", after: "Trust signals front and center" },
      { before: "No clear value proposition", after: "Compelling headline + story" },
      { before: "Basic contact form", after: "Conversion-optimised quote form" },
    ],
  },
  {
    category: "Mobile Experience",
    items: [
      { before: "Navigation overflows into 'More'", after: "Clean, accessible mobile menu" },
      { before: "Slow load time (~35 Lighthouse)", after: "Sub-second load (90+ Lighthouse)" },
      { before: "Hero images don't resize well", after: "Fully responsive imagery" },
      { before: "Form fields too small", after: "Touch-friendly, accessible forms" },
      { before: "Clunky scrolling experience", after: "Smooth, native-feel navigation" },
    ],
  },
  {
    category: "Content Quality",
    items: [
      { before: "Residential page = copy of Commercial", after: "Unique, tailored content per page" },
      { before: "URL is /copy-of-commercial", after: "Clean URL structure (/residential)" },
      { before: "Generic 'quality workmanship' copy", after: "Specific differentiators" },
      { before: "Growth story buried in paragraph", after: "Story is the headline" },
      { before: "No project portfolio", after: "Filterable project gallery" },
    ],
  },
];

export default function BeforeAfterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Before vs After
            </h1>
            <p className="text-xl text-gray-300">
              A detailed comparison of the current Wix site versus this demo.
              Every issue identified in our audit has been addressed.
            </p>
          </div>
        </div>
      </section>

      {/* Score Comparison */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 bg-red-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-red-700 mb-4">
                Current Site
              </h3>
              <div className="text-6xl font-bold text-red-500 mb-2">4.8/10</div>
              <p className="text-red-600 mb-6">Overall Audit Score</p>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Design: 5/10</li>
                <li>• Mobile: 4/10</li>
                <li>• Speed: 3/10</li>
                <li>• Content: 5/10</li>
                <li>• Trust: 5/10</li>
              </ul>
            </div>

            {/* After */}
            <div className="p-8 bg-primary-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-primary-700 mb-4">
                Demo Site
              </h3>
              <div className="text-6xl font-bold text-primary-500 mb-2">9.0+/10</div>
              <p className="text-primary-600 mb-6">Target Score</p>
              <ul className="space-y-2 text-sm text-primary-700">
                <li>• Design: 9/10</li>
                <li>• Mobile: 9/10</li>
                <li>• Speed: 9/10</li>
                <li>• Content: 9/10</li>
                <li>• Trust: 9/10</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparisons */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {comparisons.map((comparison) => (
            <div key={comparison.category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-8">{comparison.category}</h2>
              <div className="space-y-4">
                {comparison.items.map((item, index) => (
                  <div
                    key={index}
                    className="grid md:grid-cols-2 gap-4 bg-white rounded-xl overflow-hidden"
                  >
                    {/* Before */}
                    <div className="p-4 flex items-center gap-3 bg-red-50 border-l-4 border-red-400">
                      <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-red-700">{item.before}</span>
                    </div>
                    {/* After */}
                    <div className="p-4 flex items-center gap-3 bg-green-50 border-l-4 border-green-400">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-green-700">{item.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Issues */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Critical Issues Fixed</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Issue 1 */}
            <div className="p-6 border border-red-200 rounded-xl">
              <div className="flex items-center gap-2 text-red-600 font-semibold mb-4">
                <X className="h-5 w-5" />
                BEFORE: Content Duplication
              </div>
              <p className="text-gray-600 mb-4">
                The Residential page URL was literally{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                  /copy-of-commercial
                </code>{" "}
                and contained commercial content including &quot;relocating your
                office space&quot; and &quot;fitting out a shop.&quot;
              </p>
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700 italic">
                  &quot;If you&apos;re relocating your office space, fitting out a
                  shop...&quot; - On the RESIDENTIAL page
                </p>
              </div>
            </div>

            {/* Fix 1 */}
            <div className="p-6 border border-green-200 rounded-xl">
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
                <Check className="h-5 w-5" />
                AFTER: Unique Content
              </div>
              <p className="text-gray-600 mb-4">
                Each service page now has unique, relevant content tailored to
                that audience. Proper URL structure, service-specific FAQs, and
                targeted messaging.
              </p>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 italic">
                  Clean URLs: /residential, /commercial, /solar with unique content
                  for each.
                </p>
              </div>
            </div>

            {/* Issue 2 */}
            <div className="p-6 border border-red-200 rounded-xl">
              <div className="flex items-center gap-2 text-red-600 font-semibold mb-4">
                <Gauge className="h-5 w-5" />
                BEFORE: Poor Performance
              </div>
              <p className="text-gray-600 mb-4">
                Wix platform causing estimated ~35/100 mobile Lighthouse score.
                Heavy JavaScript, unoptimised images, poor Core Web Vitals.
              </p>
              <div className="p-4 bg-red-50 rounded-lg text-center">
                <span className="text-4xl font-bold text-red-500">~35</span>
                <p className="text-sm text-red-600">Mobile Lighthouse</p>
              </div>
            </div>

            {/* Fix 2 */}
            <div className="p-6 border border-green-200 rounded-xl">
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
                <Gauge className="h-5 w-5" />
                AFTER: Optimised Performance
              </div>
              <p className="text-gray-600 mb-4">
                Next.js with automatic code splitting, optimised images,
                minimal JavaScript. Targeting 90+ Lighthouse on all metrics.
              </p>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <span className="text-4xl font-bold text-green-500">90+</span>
                <p className="text-sm text-green-600">Mobile Lighthouse</p>
              </div>
            </div>

            {/* Issue 3 */}
            <div className="p-6 border border-red-200 rounded-xl">
              <div className="flex items-center gap-2 text-red-600 font-semibold mb-4">
                <Smartphone className="h-5 w-5" />
                BEFORE: Broken Mobile Nav
              </div>
              <p className="text-gray-600 mb-4">
                Menu items overflow into &quot;More&quot; dropdown on mobile, hiding
                important pages. Form fields too small for touch.
              </p>
            </div>

            {/* Fix 3 */}
            <div className="p-6 border border-green-200 rounded-xl">
              <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
                <Smartphone className="h-5 w-5" />
                AFTER: Mobile-First Design
              </div>
              <p className="text-gray-600 mb-4">
                Full-screen mobile menu, tap-friendly buttons, sticky phone
                number for easy calling. Built mobile-first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See Why Design Quality Matters
          </h2>
          <p className="text-primary-100 mb-8">
            Research shows that 75% of people judge credibility based on website
            design.
          </p>
          <Link
            href="/pitch/why-design-matters"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Why Design Matters
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
