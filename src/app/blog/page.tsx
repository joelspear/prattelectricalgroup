import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Breadcrumbs } from "@/components/seo";
import { CTASection } from "@/components/sections";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Electrical & Solar Tips | Pratt Electrical Group Adelaide",
  description:
    "Expert advice on electrical services, solar installation, battery storage and more from Adelaide's trusted electricians. Tips, guides and industry news.",
  openGraph: {
    title: "Blog | Electrical & Solar Tips | Pratt Electrical Group Adelaide",
    description:
      "Expert advice on electrical services, solar installation, battery storage and more from Adelaide's trusted electricians.",
    url: "https://www.prattelectricalgroup.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Electrical & Solar Tips | Pratt Electrical Group Adelaide",
    description:
      "Expert advice on electrical services, solar installation, battery storage and more from Adelaide's trusted electricians.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container-custom py-3">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        </div>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Electrical &amp; Solar Tips
              </h1>
              <p className="text-lg text-primary-100">
                Expert advice, guides, and industry news from the Pratt
                Electrical Group team. Helping Adelaide homeowners make informed
                decisions about their electrical and solar needs.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary-500 font-medium">
                      Read more
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Have a Question?"
          subtitle="Our team is happy to answer any electrical or solar questions. Get in touch for expert advice."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
