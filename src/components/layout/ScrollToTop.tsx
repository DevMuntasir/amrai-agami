"use client";

import React, { useState, useEffect } from "react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xl flex items-center justify-center text-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};
