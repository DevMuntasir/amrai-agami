"use client";

import React, { useState } from "react";
import { FaqItem } from "@/types";
import faqsData from "@/data/faqs.json";

interface FaqAccordionProps {
  items?: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sourceItems = items || (faqsData as FaqItem[]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {sourceItems.map((faq: FaqItem, index: number) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-gray-900 text-sm md:text-base hover:text-amber-600 transition"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-transform ${
                  isOpen
                    ? "bg-amber-500 text-slate-950 rotate-180"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 md:px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
