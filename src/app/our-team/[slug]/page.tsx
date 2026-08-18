import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/layout/PageBanner";
import { getTeam, getTeamMemberBySlug } from "@/sanity/lib/fetch";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const team = await getTeam();
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);

  if (!member) return { title: "Team Member Not Found" };

  return {
    title: `${member.name} - ${member.designation} | Amrai Agami`,
    description: member.bio,
    openGraph: {
      title: member.name,
      description: member.bio,
      images: [{ url: member.image }],
    },
  };
}

export default async function TeamDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const member = await getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <>
      <PageBanner
        title={member.name}
        subtitle={member.designation}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team", href: "/our-team" },
          { label: member.name },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-[#F00101] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-2 inline-block">
                {member.designation}
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{member.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

              <div className="space-y-3 pt-6 border-t border-gray-100 text-xs text-gray-700">
                {member.email && (
                  <p className="flex items-center gap-2">
                    <i className="fa-regular fa-envelope text-[#F00101]"></i>
                    <a href={`mailto:${member.email}`} className="hover:text-[#002A8C] font-semibold">
                      {member.email}
                    </a>
                  </p>
                )}
                {member.phone && (
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-phone text-[#002A8C]"></i>
                    <a href={`tel:${member.phone}`} className="hover:text-[#002A8C] font-semibold">
                      {member.phone}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
