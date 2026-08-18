"use client";

import React from "react";
import Link from "next/link";
import { CharityEvent } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface EventCardProps {
  event: CharityEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col group">
      {/* Thumbnail with Date Badge */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-[#F00101] text-white text-xs font-black px-3.5 py-2 rounded-2xl shadow-lg flex flex-col items-center leading-tight">
          <span>{event.date.split(" ")[0]}</span>
          <span className="text-[10px] font-bold uppercase">{event.date.split(" ")[1]}</span>
        </div>
        <div className="absolute bottom-4 right-4 bg-[#002A8C]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-md">
          {event.cost}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1.5">
              <i className="fa-regular fa-clock text-[#F00101]"></i> {event.time}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#002A8C] transition">
            <Link href={`/events/${event.slug}`}>{event.title}</Link>
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed mb-4">
            {event.shortDescription}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
            <i className="fa-solid fa-location-dot text-[#002A8C]"></i>
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/events/${event.slug}`}
          className="w-full py-3 rounded-xl bg-blue-50 hover:bg-[#002A8C] text-[#002A8C] hover:text-white font-bold text-xs text-center transition flex items-center justify-center gap-2"
        >
          <span>{t("join_event")}</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </Link>
      </div>
    </div>
  );
};
