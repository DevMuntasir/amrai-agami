import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { CauseCard } from "@/components/ui/CauseCard";
import { getCauses, getPageContent } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Our Causes - Support Humanitarian Relief Campaigns",
  description:
    "Explore active charity campaigns supporting education, healthcare, emergency food aid, and clean water wells.",
};

export default async function CausesPage() {
  const [causes, pageContent] = await Promise.all([getCauses(), getPageContent("causes")]);

  return (
    <>
      <PageBanner
        title={pageContent?.banner?.title || "Our Urgent Causes"}
        subtitle={pageContent?.banner?.subtitle}
        backgroundImage={pageContent?.banner?.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Causes" },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
