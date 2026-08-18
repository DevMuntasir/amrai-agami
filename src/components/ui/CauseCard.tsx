"use client";

import React from "react";
import Link from "next/link";
import { Cause } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

interface CauseCardProps {
  cause: Cause;
}

export const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-[#002A8C] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
          {cause.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#002A8C] transition">
            <Link href={`/causes/${cause.slug}`}>{cause.title}</Link>
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed mb-6">
            {cause.shortDescription}
          </p>
        </div>

        <div>
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between text-xs font-bold mb-1.5">
              <span className="text-[#002A8C]">{cause.progress}% Raised</span>
              <span className="text-gray-500">{cause.donorsCount} Donors</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#002A8C] to-[#F00101] rounded-full transition-all duration-700"
                style={{ width: `${cause.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Goals and Raised */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
            <div>
              <span className="text-gray-400 block text-[10px]">{t("raised")}</span>
              <span className="font-extrabold text-[#002A8C]">${cause.raised.toLocaleString()}</span>
            </div>
            <div className="text-right">
              <span className="text-gray-400 block text-[10px]">{t("goal")}</span>
              <span className="font-extrabold text-[#F00101]">${cause.goal.toLocaleString()}</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Link
              href={`/causes/${cause.slug}`}
              className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-[#002A8C] text-[#002A8C] hover:text-white font-bold text-xs text-center transition"
            >
              {t("details")}
            </Link>
            <Link
              href={`/donate-us?cause=${cause.slug}`}
              className="py-2.5 px-3 rounded-xl bg-[#F00101] hover:bg-[#d00000] text-white font-bold text-xs text-center transition shadow-sm"
            >
              {t("donate_now")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
