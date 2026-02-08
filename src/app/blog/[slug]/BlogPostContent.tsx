"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  ArrowRight,
  Phone,
  ChevronDown,
} from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Breadcrumbs, FAQSchema } from "@/components/seo";
import { contactInfo } from "@/data/siteData";
import { getTelLink } from "@/lib/utils";
import type { BlogPost } from "@/data/blogPosts";

const SITE_URL = "https://www.prattelectricalgroup.com";
const LOGO_URL =
  "https://res.cloudinary.com/dhzl5ccct/image/upload/v1770464871/Pratt_Electrical_Group_Logo_dzfg0y.png";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Organization",
      name: "Pratt Electrical Group",
    },
    publisher: {
      "@type": "Organization",
      name: "Pratt Electrical Group",
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    datePublished: post.date,
    image: post.featuredImage,
    url: `${SITE_URL}/blog/${post.slug}`,
  };

  // Convert markdown-style content to HTML-like sections
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(" ").trim();
        if (text) {
          elements.push(
            <p key={`p-${elements.length}`} className="text-gray-600 text-lg leading-relaxed mb-6">
              {text}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="space-y-2 mb-6 ml-4">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-600 text-lg flex items-start gap-2">
                <span className="text-primary-500 mt-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-2xl font-bold text-charcoal mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-xl font-bold text-charcoal mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        flushParagraph();
        flushList();
        elements.push(
          <p key={`b-${elements.length}`} className="text-gray-800 font-semibold text-lg mb-3">
            {trimmed.replace(/\*\*/g, "")}
          </p>
        );
      } else if (trimmed.startsWith("- ")) {
        flushParagraph();
        inList = true;
        listItems.push(trimmed.replace(/^- \*\*(.+?)\*\*(.*)/, "$1$2").replace("- ", ""));
      } else if (trimmed === "") {
        if (inList) {
          flushList();
        }
        flushParagraph();
      } else {
        if (inList) {
          flushList();
        }
        currentParagraph.push(trimmed);
      }
    });

    flushList();
    flushParagraph();

    return elements;
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {post.faqs.length > 0 && <FAQSchema faqs={post.faqs} />}

      <Header />
      <main>
        <div className="container-custom py-3">
          <Breadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>

        {/* Featured Image */}
        <section className="relative bg-charcoal">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[2/1] relative rounded-b-2xl overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">
                {post.title}
              </h1>

              {/* Content */}
              <div className="prose-content">{renderContent(post.content)}</div>

              {/* FAQ Section */}
              {post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-charcoal mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="bg-gray-50 rounded-xl px-6">
                    {post.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          onClick={() =>
                            setOpenFAQ(openFAQ === index ? null : index)
                          }
                          className="w-full flex items-center justify-between py-5 text-left"
                          aria-expanded={openFAQ === index}
                        >
                          <span className="font-semibold text-charcoal pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                              openFAQ === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openFAQ === index && (
                          <p className="pb-5 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Links */}
              {post.relatedLinks.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-charcoal mb-4">
                    Related
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {post.relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                      >
                        {link.text}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 bg-charcoal rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-3">
                  Need Expert Advice?
                </h2>
                <p className="text-gray-300 mb-6">
                  Our team is ready to help with your electrical or solar
                  project. Get a free, no-obligation quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={getTelLink(contactInfo.phone)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call {contactInfo.phone}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
