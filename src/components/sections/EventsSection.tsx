import React from "react";
import Link from "next/link";
import { EventItem } from "@/types";
import { EventCard } from "@/components/ui/EventCard";
import eventsData from "@/data/events.json";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface EventsSectionProps {
  limit?: number;
  title?: string;
  subtitle?: string;
  viewAllLabel?: string;
  items?: EventItem[];
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  limit,
  title = defaultGlobalSectionContent.eventsSection.title,
  subtitle = defaultGlobalSectionContent.eventsSection.badge,
  viewAllLabel = defaultGlobalSectionContent.eventsSection.viewAllLabel,
  items,
}) => {
  const sourceItems = items || (eventsData as EventItem[]);
  const displayedEvents = limit ? sourceItems.slice(0, limit) : sourceItems;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-600 uppercase tracking-wider"
          >
            <span>{viewAllLabel}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event) => (
            <EventCard key={event.id} event={event as EventItem} />
          ))}
        </div>
      </div>
    </section>
  );
};
