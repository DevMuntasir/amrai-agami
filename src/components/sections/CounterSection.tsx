"use client";

import React from "react";
import { CounterItem } from "@/types";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface CounterSectionProps {
  items?: CounterItem[];
}

export const CounterSection: React.FC<CounterSectionProps> = ({ items }) => {
  const counters = items || defaultGlobalSectionContent.counterSection.items;

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/30">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-1">
                {item.number}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
