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

export const metadata: Metadata = {
  title: "Amrai Agami | Nonprofit NGO Fundraising & Charity Donation",
  description:
    "Join Amrai Agami (আমরাই আগামী) in delivering hope, education, clean water, and medical care to underprivileged communities worldwide.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <SponsorSlider />
      <AboutSection />
      <CausesSection limit={3} />
      <CounterSection />
      <EventsSection limit={3} />
      <VolunteerSection />
      <TestimonialSlider />
      <BlogSection limit={3} />
    </>
  );
}
