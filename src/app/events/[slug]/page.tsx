import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { getEvents, getEventBySlug } from "@/sanity/lib/fetch";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} - Amrai Agami Events`,
    description: event.shortDescription,
    openGraph: {
      title: event.title,
      description: event.shortDescription,
      images: [{ url: event.image }],
    },
  };
}

export default async function EventDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.shortDescription,
    image: event.image,
    startDate: event.date,
    location: {
      "@type": "Place",
      name: event.location,
    },
    organizer: {
      "@type": "Organization",
      name: "Amrai Agami",
      url: "https://amraiagami.org",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={event.title}
        subtitle={`${event.date} | ${event.location}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden shadow-xl mb-8 border border-gray-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>

              {/* Event Metadata Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 mb-8 text-center">
                <div className="p-3">
                  <i className="fa-regular fa-calendar text-[#F00101] text-xl mb-2"></i>
                  <span className="block text-xs text-gray-500 font-bold">Date</span>
                  <span className="text-sm font-bold text-gray-900">{event.date}</span>
                </div>
                <div className="p-3 border-y sm:border-y-0 sm:border-x border-gray-200">
                  <i className="fa-regular fa-clock text-[#002A8C] text-xl mb-2"></i>
                  <span className="block text-xs text-gray-500 font-bold">Time</span>
                  <span className="text-sm font-bold text-gray-900">{event.time}</span>
                </div>
                <div className="p-3">
                  <i className="fa-solid fa-ticket text-[#F00101] text-xl mb-2"></i>
                  <span className="block text-xs text-gray-500 font-bold">Registration</span>
                  <span className="text-sm font-bold text-gray-900">{event.cost}</span>
                </div>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
                <h2 className="text-2xl font-bold text-[#002A8C] mb-4">Event Overview</h2>
                <p className="text-base mb-4">{event.shortDescription}</p>
                <p className="text-base mb-6">{event.fullDescription}</p>
              </div>

              {/* Registration Prompt */}
              <div className="p-8 bg-[#00153d] text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Want to Attend or Sponsor?</h3>
                  <p className="text-gray-300 text-xs">
                    Limited seats available for registered delegates and volunteers.
                  </p>
                </div>
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-[#F00101] hover:bg-[#d00000] text-white font-bold text-xs rounded-xl shadow transition flex-shrink-0"
                >
                  Register / Inquire Now
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <h4 className="text-base font-bold text-gray-900 mb-4">Event Organizer</h4>
                <p className="text-sm font-bold text-gray-900 mb-1">{event.organizer.name}</p>
                <p className="text-xs text-gray-600 mb-2">
                  <i className="fa-solid fa-phone text-[#F00101] mr-2"></i>
                  {event.organizer.phone}
                </p>
                <p className="text-xs text-gray-600">
                  <i className="fa-regular fa-envelope text-[#002A8C] mr-2"></i>
                  {event.organizer.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
