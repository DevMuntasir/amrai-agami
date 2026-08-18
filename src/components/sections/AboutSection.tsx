"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="About Amrai Agami"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&w=600&q=80"
                alt="Community Care"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#002A8C] text-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border-2 border-white">
              <p className="text-3xl font-extrabold leading-none text-[#F00101]">{t("about_exp_years")}</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-1 text-white">
                {t("about_exp_text")}
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <span className="text-xs md:text-sm font-extrabold text-[#F00101] uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full border border-red-100 mb-4 inline-block">
              {t("about_badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#002A8C] leading-tight mb-6">
              {t("about_title")}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {t("about_desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-blue-50/60 rounded-2xl border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-[#002A8C] text-white flex items-center justify-center flex-shrink-0 text-lg shadow-sm">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{t("about_edu_title")}</h4>
                  <p className="text-xs text-gray-500">{t("about_edu_desc")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-red-50/60 rounded-2xl border border-red-100">
                <div className="w-10 h-10 rounded-xl bg-[#F00101] text-white flex items-center justify-center flex-shrink-0 text-lg shadow-sm">
                  <i className="fa-solid fa-hand-holding-droplet"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{t("about_water_title")}</h4>
                  <p className="text-xs text-gray-500">{t("about_water_desc")}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/about-us"
                className="px-6 py-3.5 bg-[#002A8C] hover:bg-[#001a57] text-white font-bold text-xs rounded-xl shadow-md transition"
              >
                {t("about_learn_more")} <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#F00101] flex items-center justify-center text-xl font-bold border border-red-100">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-500 font-medium">{t("have_questions")}</span>
                  <a href="tel:+8801874303208" className="text-sm font-bold text-[#002A8C] hover:text-[#F00101]">
                    +880 1874303208
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
