import { Header, Footer } from "@/components/layout";
import {
  Hero,
  TrustBar,
  AboutSection,
  ServiceCards,
  WhyChooseUs,
  Testimonials,
  CTASection,
  ServiceAreas,
  ProjectGallery,
} from "@/components/sections";
import { QuoteForm } from "@/components/forms";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Quote Form */}
        <Hero
          headline="Adelaide's Trusted Electrical & Solar Experts"
          subheadline="Quality solar installations and electrical workmanship since 2020. SAA accredited, free quotes."
          variant="home"
        >
          {/* Quote Form on right side for desktop */}
          <div className="hidden lg:block">
            <QuoteForm variant="dark" />
          </div>
        </Hero>

        {/* Mobile Quote Form (below hero) */}
        <div className="lg:hidden py-8 px-4 bg-charcoal">
          <div className="max-w-md mx-auto">
            <QuoteForm variant="dark" />
          </div>
        </div>

        {/* Trust Bar with Stats */}
        <TrustBar />

        {/* About Section */}
        <AboutSection />

        {/* Services Overview */}
        <ServiceCards />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Project Showcase */}
        <ProjectGallery projects={projects} limit={6} showFilters={false} />

        {/* Testimonials */}
        <Testimonials variant="slider" />

        {/* Service Areas */}
        <ServiceAreas />

        {/* Final CTA */}
        <CTASection
          title="Ready to Get Started?"
          subtitle="Get your free quote today. No obligation, fast response guaranteed."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
