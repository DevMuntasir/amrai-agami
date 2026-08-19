import { Metadata } from "next";
import { HeroSliderThree } from "@/components/sections/HeroSliderThree";
import { CausesSection } from "@/components/sections/CausesSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { SponsorSlider } from "@/components/sections/SponsorSlider";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import {
  getCauses,
  getEvents,
  getFaqs,
  getGlobalSectionContent,
  getTestimonials,
} from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Home Three - Humanitarian Action",
  description: "Join hands to support underprivileged families with nutrition, shelter, and schooling.",
};

export default async function HomeThreePage() {
  const [globalContent, causes, events, faqs, testimonials] = await Promise.all([
    getGlobalSectionContent(),
    getCauses(),
    getEvents(),
    getFaqs(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSliderThree content={globalContent.homeThreeHero} />
      <SponsorSlider logos={globalContent.sponsorSection.logos} />
      <CausesSection
        limit={3}
        items={causes}
        title={globalContent.causesSection.title}
        subtitle={globalContent.causesSection.badge}
        viewAllLabel={globalContent.causesSection.viewAllLabel}
      />
      <CounterSection items={globalContent.counterSection.items} />
      <EventsSection
        limit={3}
        items={events}
        title={globalContent.eventsSection.title}
        subtitle={globalContent.eventsSection.badge}
        viewAllLabel={globalContent.eventsSection.viewAllLabel}
      />
      <VolunteerSection content={globalContent.volunteerSection} />

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              {globalContent.faqSectionHeader.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              {globalContent.faqSectionHeader.title}
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <TestimonialSlider
        items={testimonials}
        badge={globalContent.testimonialSection.badge}
        title={globalContent.testimonialSection.title}
      />
    </>
  );
}
