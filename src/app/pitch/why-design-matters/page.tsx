import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, DollarSign, TrendingDown, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Design Matters | Website Redesign Proposal",
  robots: { index: false, follow: false },
};

const stats = [
  {
    stat: "75%",
    description: "of people judge a company's credibility based on website design",
    source: "Stanford Web Credibility Research",
    url: "https://credibility.stanford.edu/guidelines/",
  },
  {
    stat: "88%",
    description: "of online consumers are less likely to return after a bad experience",
    source: "SWEOR",
    url: "https://www.sweor.com/firstimpressions",
  },
  {
    stat: "60%",
    description: "of website traffic comes from mobile devices",
    source: "Statista",
    url: "https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/",
  },
];

export default function WhyDesignMattersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Design Quality Matters
            </h1>
            <p className="text-xl text-gray-300">
              Your website is often the first impression potential customers have
              of your business. Here&apos;s the research that shows why getting it
              right is critical.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">The Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((item) => (
              <div key={item.stat} className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="text-5xl font-bold text-primary-500 mb-4">
                  {item.stat}
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary-500 hover:underline"
                >
                  {item.source}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8">What This Means for Pratt Electrical</h2>
            <div className="prose prose-lg">
              <p>
                When an Adelaide homeowner searches for an electrician, they&apos;ll
                check 2-3 websites before calling. If your site is slow, looks
                dated, or has obvious errors (like commercial content on the
                residential page), you&apos;ve lost that lead – even if your actual
                work is excellent.
              </p>
              <p>
                Your competitors Goliath Solar and MLEC have invested in
                professional websites with hundreds of reviews visible, team
                photos, and clear differentiators. When a customer compares their
                sites to yours, the decision is made before you get a call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Status Quo */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">The Cost of Status Quo</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-gray-50 rounded-2xl text-center">
                <DollarSign className="h-12 w-12 mx-auto text-secondary-500 mb-4" />
                <div className="text-4xl font-bold text-charcoal mb-2">$2,000</div>
                <p className="text-gray-600">Average residential electrical job</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl text-center">
                <DollarSign className="h-12 w-12 mx-auto text-secondary-500 mb-4" />
                <div className="text-4xl font-bold text-charcoal mb-2">$7,000</div>
                <p className="text-gray-600">Average solar installation</p>
              </div>
            </div>

            <div className="p-8 bg-red-50 rounded-2xl">
              <div className="flex items-start gap-4">
                <TrendingDown className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">
                    Lost Revenue Calculation
                  </h3>
                  <p className="text-red-600 mb-4">
                    If your current website causes you to lose just 2 solar jobs
                    per year to competitors with better sites:
                  </p>
                  <div className="text-3xl font-bold text-red-700">
                    2 × $7,000 = $14,000 lost annually
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="section bg-primary-500">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl font-bold text-white mb-6">
              The Investment Pays for Itself
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              This website investment pays for itself if it wins you 2-3
              additional solar projects. Even better: just 1 commercial project
              ($15,000) + 1 solar ($7,000) = $22,000 in additional revenue.
            </p>
            <div className="p-6 bg-white/10 rounded-xl inline-block">
              <p className="text-primary-100 text-sm mb-2">Break-even point:</p>
              <p className="text-3xl font-bold">2-3 Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Competitive Context</h2>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4">Company</th>
                    <th className="text-center py-4 px-4">Digital Quality</th>
                    <th className="text-center py-4 px-4">Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-4 px-4 font-medium">
                      Pratt Electrical (Current)
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        4.8/10
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-600">
                      Lower-left quadrant
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">Goliath Solar</td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        8.5/10
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-600">
                      Premium leader
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">MLEC Solar</td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        8/10
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-gray-600">
                      Premium competitor
                    </td>
                  </tr>
                  <tr className="bg-primary-50">
                    <td className="py-4 px-4 font-medium text-primary-700">
                      Pratt Electrical (This Demo)
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        8.5+/10
                      </span>
                    </td>
                    <td className="text-center py-4 px-4 text-primary-600">
                      Competing with leaders
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-600 mt-8">
              By moving digital presence from 4.8/10 to 8.5+/10, Pratt can compete
              directly with the premium players.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See What We Built
          </h2>
          <p className="text-gray-400 mb-8">
            Detailed breakdown of every feature and improvement in this demo.
          </p>
          <Link
            href="/pitch/new-features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
          >
            What We Built
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
