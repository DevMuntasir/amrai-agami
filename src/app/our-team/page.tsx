import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { TeamCard } from "@/components/ui/TeamCard";
import { getPageContent, getTeam } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Our Team - Dedicated Humanitarian Leaders",
  description:
    "Meet the passionate leaders, field directors, and volunteer coordinators driving Amrai Agami's global mission.",
};

export default async function OurTeamPage() {
  const [team, pageContent] = await Promise.all([getTeam(), getPageContent("our-team")]);

  return (
    <>
      <PageBanner
        title={pageContent?.banner?.title || "Meet Our Dedicated Team"}
        subtitle={pageContent?.banner?.subtitle}
        backgroundImage={pageContent?.banner?.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
