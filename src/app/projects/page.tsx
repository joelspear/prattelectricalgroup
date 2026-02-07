import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Hero, ProjectGallery, CTASection } from "@/components/sections";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Projects | Electrical & Solar Gallery",
  description:
    "View our completed electrical and solar projects across South Australia. Residential, commercial, and solar installations.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Hero
          headline="Our Projects"
          subheadline="Browse our portfolio of completed electrical and solar projects across South Australia. Quality workmanship you can see."
          variant="about"
          showTrustBadges={false}
        />

        {/* Project Gallery */}
        <ProjectGallery projects={projects} showFilters={true} />

        {/* CTA */}
        <CTASection
          title="Have a Project in Mind?"
          subtitle="Get your free quote today and let's discuss how we can help."
          variant="primary"
        />
      </main>
      <Footer />
    </>
  );
}
