import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { CounterSection } from "@/components/sections/CounterSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { SponsorSlider } from "@/components/sections/SponsorSlider";
import teamData from "@/data/team.json";
import { TeamCard } from "@/components/ui/TeamCard";
import { TeamMember } from "@/types";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Vision",
  description:
    "Learn about Amrai Agami's history, transparent operations, global humanitarian missions, and leadership team.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Our Organization"
        subtitle="Dedicated to lifting underprivileged communities through transparent giving and sustainable development."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <AboutSection />
      <CounterSection />

      {/* Leadership Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              Expert Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Meet The Dedicated Team Behind Amrai Agami
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member as TeamMember} />
            ))}
          </div>
        </div>
      </section>

      <VolunteerSection />
      <TestimonialSlider />
      <SponsorSlider />
    </>
  );
}
