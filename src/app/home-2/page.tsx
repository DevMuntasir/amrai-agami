import { Metadata } from "next";
import { HeroSliderTwo } from "@/components/sections/HeroSliderTwo";
import { CausesSection } from "@/components/sections/CausesSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { BlogSection } from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "Home Two - Community NGO Aid",
  description: "Discover impactful causes, community drives, and volunteer initiatives.",
};

export default function HomeTwoPage() {
  return (
    <>
      <HeroSliderTwo />
      <CausesSection limit={6} title="Featured Community Campaigns" />
      <CounterSection />
      <AboutSection />
      <EventsSection limit={3} />
      <VolunteerSection />
      <TestimonialSlider />
      <BlogSection limit={3} />
    </>
  );
}
