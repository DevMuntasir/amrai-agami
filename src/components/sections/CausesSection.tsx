"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cause } from "@/types";
import { CauseCard } from "@/components/ui/CauseCard";
import causesData from "@/data/causes.json";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface CausesSectionProps {
  showFilter?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
  viewAllLabel?: string;
  items?: Cause[];
}

export const CausesSection: React.FC<CausesSectionProps> = ({
  showFilter = true,
  limit,
  title = defaultGlobalSectionContent.causesSection.title,
  subtitle = defaultGlobalSectionContent.causesSection.badge,
  viewAllLabel = defaultGlobalSectionContent.causesSection.viewAllLabel,
  items,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Education", "Medical", "Food"];
  const sourceItems = items || (causesData as Cause[]);

  const filteredCauses = sourceItems.filter((cause) => {
    if (selectedCategory === "All") return true;
    return cause.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const displayedCauses = limit ? filteredCauses.slice(0, limit) : filteredCauses;

  return (
    <section className="py-20 md:py-28 bg-gray-50/70">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {title}
            </h2>
          </div>

          {showFilter ? (
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-amber-400 shadow"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-amber-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          ) : (
            <Link
              href="/causes"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-600 uppercase tracking-wider"
            >
              <span>{viewAllLabel}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          )}
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCauses.map((cause) => (
            <CauseCard key={cause.id} cause={cause as Cause} />
          ))}
        </div>
      </div>
    </section>
  );
};
