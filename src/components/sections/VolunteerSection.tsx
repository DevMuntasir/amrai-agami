import React from "react";
import Link from "next/link";
import { VolunteerSectionContent } from "@/types";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface VolunteerSectionProps {
  content?: VolunteerSectionContent;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ content }) => {
  const section = content || defaultGlobalSectionContent.volunteerSection;

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${section.backgroundImage}')` }}
      ></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs md:text-sm font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 mb-4 inline-block">
              {section.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              {section.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              {section.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={section.primaryButtonHref}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl shadow-xl transition"
              >
                {section.primaryButtonLabel}
              </Link>
              <Link
                href={section.secondaryButtonHref}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition backdrop-blur-md"
              >
                {section.secondaryButtonLabel}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">{section.reasonsTitle}</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                {section.reasons.map((reason, index) => (
                  <li key={`${reason}-${index}`} className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-amber-400 mt-1"></i>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
