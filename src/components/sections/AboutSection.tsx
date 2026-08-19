import React from "react";
import Link from "next/link";
import { AboutSectionContent } from "@/types";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface AboutSectionProps {
  content?: AboutSectionContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const section = content || defaultGlobalSectionContent.aboutSection;

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={section.primaryImage}
                alt="About Amrai Agami"
                className="w-full h-auto object-cover"
              />
            </div>
            {section.secondaryImage ? (
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={section.secondaryImage}
                  alt="Community Care"
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : null}
            <div className="absolute -top-6 -left-6 bg-[#002A8C] text-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border-2 border-white">
              <p className="text-3xl font-extrabold leading-none text-[#F00101]">{section.experienceYears}</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-1 text-white">
                {section.experienceLabel}
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <span className="text-xs md:text-sm font-extrabold text-[#F00101] uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full border border-red-100 mb-4 inline-block">
              {section.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002A8C] leading-tight mb-6">
              {section.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {section.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {section.featureCards.map((card, index) => {
                const isRed = card.accent === "red";
                return (
                  <div
                    key={`${card.title}-${index}`}
                    className={`flex items-start gap-3 p-4 rounded-2xl border ${
                      isRed ? "bg-red-50/60 border-red-100" : "bg-blue-50/60 border-blue-100"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl text-white flex items-center justify-center flex-shrink-0 text-lg shadow-sm ${
                        isRed ? "bg-[#F00101]" : "bg-[#002A8C]"
                      }`}
                    >
                      <i className={card.icon}></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{card.title}</h4>
                      <p className="text-xs text-gray-500">{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-6">
              <Link
                href={section.ctaHref}
                className="px-6 py-3.5 bg-[#002A8C] hover:bg-[#001a57] text-white font-bold text-xs rounded-xl shadow-md transition"
              >
                {section.ctaLabel} <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#F00101] flex items-center justify-center text-xl font-bold border border-red-100">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-500 font-medium">{section.phoneLabel}</span>
                  <a href={`tel:${section.phoneNumber.replace(/\s+/g, "")}`} className="text-sm font-bold text-[#002A8C] hover:text-[#F00101]">
                    {section.phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
