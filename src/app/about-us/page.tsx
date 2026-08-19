import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { SponsorSlider } from "@/components/sections/SponsorSlider";
import { TeamCard } from "@/components/ui/TeamCard";
import {
  getGlobalSectionContent,
  getPageContent,
  getTeam,
  getTestimonials,
} from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Vision",
  description:
    "Learn about Amrai Agami's history, transparent operations, global humanitarian missions, and leadership team.",
};

export default async function AboutUsPage() {
  const [pageContent, globalContent, team, testimonials] = await Promise.all([
    getPageContent("about-us"),
    getGlobalSectionContent(),
    getTeam(),
    getTestimonials(),
  ]);

  return (
    <>
      <PageBanner
        title={pageContent?.banner?.title || "About Our Organization"}
        subtitle={pageContent?.banner?.subtitle}
        backgroundImage={pageContent?.banner?.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <AboutSection content={globalContent.aboutSection} />
      <CounterSection items={globalContent.counterSection.items} />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              {pageContent?.teamSection?.badge || "Expert Leadership"}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {pageContent?.teamSection?.title || "Meet The Dedicated Team Behind Amrai Agami"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <VolunteerSection content={globalContent.volunteerSection} />
      <TestimonialSlider
        items={testimonials}
        badge={globalContent.testimonialSection.badge}
        title={globalContent.testimonialSection.title}
      />
      <SponsorSlider logos={globalContent.sponsorSection.logos} />
    </>
  );
}
