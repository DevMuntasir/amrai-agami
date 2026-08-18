import { Metadata } from "next";
import { PageBanner } from "@/components/layout/PageBanner";
import { EventCard } from "@/components/ui/EventCard";
import { getEvents } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Events - Upcoming Charity Fundraisers & Galas",
  description:
    "Discover upcoming charity walks, awareness drives, and benefit galas hosted by Amrai Agami.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <PageBanner
        title="Charity Events & Galas"
        subtitle="Be a part of transformative gatherings, benefit galas, and community action drives."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
