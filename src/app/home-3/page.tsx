import { Metadata } from "next";
import { HeroSliderThree } from "@/components/sections/HeroSliderThree";
import { CausesSection } from "@/components/sections/CausesSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { SponsorSlider } from "@/components/sections/SponsorSlider";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "Home Three - Humanitarian Action",
  description: "Join hands to support underprivileged families with nutrition, shelter, and schooling.",
};

export default function HomeThreePage() {
  return (
    <>
      <HeroSliderThree />
      <SponsorSlider />
      <CausesSection limit={3} />
      <CounterSection />
      <EventsSection limit={3} />
      <VolunteerSection />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Answers To Common Inquiries
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <TestimonialSlider />
    </>
  );
}
