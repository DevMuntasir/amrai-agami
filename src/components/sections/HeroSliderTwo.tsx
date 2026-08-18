"use client";

import React from "react";
import Link from "next/link";

export const HeroSliderTwo: React.FC = () => {
  return (
    <section className="relative py-24 md:py-36 bg-[#00153d] text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=85')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#00153d] via-[#002A8C]/80 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block text-[#ff6b6b] font-extrabold uppercase tracking-widest text-xs md:text-sm mb-4 bg-[#F00101]/10 px-4 py-1.5 rounded-full border border-[#F00101]/20">
              Transforming Lives Worldwide
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Give A Little. <br />
              <span className="text-[#F00101]">Change A Lot.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
              We connect compassionate donors with grassroots initiatives across 30+ nations to solve urgent crises in food security, healthcare, and education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate-us"
                className="px-8 py-4 bg-[#F00101] hover:bg-[#d00000] text-white font-bold rounded-2xl shadow-xl transition"
              >
                Donate To Emergency Relief
              </Link>
              <Link
                href="/causes"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition backdrop-blur-md"
              >
                Discover Causes
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="Charity Children"
                className="rounded-3xl shadow-2xl border-4 border-white/10 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
