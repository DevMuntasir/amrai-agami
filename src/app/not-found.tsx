import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="py-28 md:py-40 bg-gray-50 flex items-center justify-center text-center px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-black text-amber-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
          The page you are searching for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl shadow-md transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact-us"
            className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl shadow transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
