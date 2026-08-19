import { Metadata } from "next";
import { HeroSliderTwo } from "@/components/sections/HeroSliderTwo";
import { CausesSection } from "@/components/sections/CausesSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { BlogSection } from "@/components/sections/BlogSection";
import {
  getCauses,
  getEvents,
  getGlobalSectionContent,
  getPosts,
  getTestimonials,
} from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Home Two - Community NGO Aid",
  description: "Discover impactful causes, community drives, and volunteer initiatives.",
};

export default async function HomeTwoPage() {
  const [globalContent, causes, events, testimonials, posts] = await Promise.all([
    getGlobalSectionContent(),
    getCauses(),
    getEvents(),
    getTestimonials(),
    getPosts(),
  ]);

  return (
    <>
      <HeroSliderTwo content={globalContent.homeTwoHero} />
      <CausesSection
        limit={6}
        items={causes}
        title="Featured Community Campaigns"
        subtitle={globalContent.causesSection.badge}
        viewAllLabel={globalContent.causesSection.viewAllLabel}
      />
      <CounterSection items={globalContent.counterSection.items} />
      <AboutSection content={globalContent.aboutSection} />
      <EventsSection
        limit={3}
        items={events}
        title={globalContent.eventsSection.title}
        subtitle={globalContent.eventsSection.badge}
        viewAllLabel={globalContent.eventsSection.viewAllLabel}
      />
      <VolunteerSection content={globalContent.volunteerSection} />
      <TestimonialSlider
        items={testimonials}
        badge={globalContent.testimonialSection.badge}
        title={globalContent.testimonialSection.title}
      />
      <BlogSection
        limit={3}
        items={posts}
        title={globalContent.blogSection.title}
        subtitle={globalContent.blogSection.badge}
        viewAllLabel={globalContent.blogSection.viewAllLabel}
      />
    </>
  );
}
