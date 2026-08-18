"use client";

import React from "react";
import Link from "next/link";

export const HeroSliderThree: React.FC = () => {
  return (
    <section className="relative py-28 md:py-44 bg-slate-950 text-white text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <span className="inline-block text-amber-400 font-extrabold uppercase tracking-widest text-xs md:text-sm mb-4 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          Non-profit Humanitarian Action
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Be The Reason Someone <span className="text-amber-400">Smiles Today</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          From supplying clean water wells to providing life-saving surgical care and building schools, your kindness builds a better tomorrow.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/donate-us"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl shadow-xl transition"
          >
            Start Donating Today
          </Link>
          <Link
            href="/become-volunteer"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition backdrop-blur-md"
          >
            Join As Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};
