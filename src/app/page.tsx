import { Metadata } from "next";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { AboutSection } from "@/components/sections/AboutSection";
import { CausesSection } from "@/components/sections/CausesSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { BlogSection } from "@/components/sections/BlogSection";
import { SponsorSlider } from "@/components/sections/SponsorSlider";
import {
  getCauses,
  getEvents,
  getGlobalSectionContent,
  getPosts,
  getTestimonials,
} from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Amrai Agami | Nonprofit NGO Fundraising & Charity Donation",
  description:
    "Join Amrai Agami (আমরাই আগামী) in delivering hope, education, clean water, and medical care to underprivileged communities worldwide.",
};

export default async function HomePage() {
  const [globalContent, causes, events, testimonials, posts] = await Promise.all([
    getGlobalSectionContent(),
    getCauses(),
    getEvents(),
    getTestimonials(),
    getPosts(),
  ]);

  return (
    <>
      <HeroSlider slides={globalContent.heroSlides} />
      <SponsorSlider logos={globalContent.sponsorSection.logos} />
      <AboutSection content={globalContent.aboutSection} />
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
