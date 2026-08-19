"use client";

import React, { useState } from "react";
import { PageBanner } from "@/components/layout/PageBanner";
import { PageBannerContent, VolunteerFormSectionContent } from "@/types";

type BecomeVolunteerPageClientProps = {
  banner: PageBannerContent;
  content: VolunteerFormSectionContent;
};

export function BecomeVolunteerPageClient({
  banner,
  content,
}: BecomeVolunteerPageClientProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    location: "",
    skills: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const successMessage = content.successMessage
    .replace("{{name}}", form.name)
    .replace("{{email}}", form.email);

  return (
    <>
      <PageBanner
        title={banner.title}
        subtitle={banner.subtitle}
        backgroundImage={banner.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Become Volunteer" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {submitted ? (
            <div className="text-center py-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 max-w-xl mx-auto">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                <i className="fa-solid fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.successTitle}</h3>
              <p className="text-gray-600 mb-6 text-sm">{successMessage}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm transition"
              >
                {content.resetButtonLabel}
              </button>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full mb-2 inline-block">
                  {content.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                  {content.title}
                </h2>
                <p className="text-gray-600 text-sm">{content.description}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-2">Occupation / Field</label>
                    <input
                      type="text"
                      placeholder="e.g. Doctor, Teacher, Student"
                      value={form.occupation}
                      onChange={(e) => setForm({ ...form, occupation: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-2">Skills & Experience</label>
                  <input
                    type="text"
                    placeholder="e.g. Medical Care, First Aid, Teaching, Logistics, Photography"
                    value={form.skills}
                    onChange={(e) => setForm({ ...form, skills: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-2">Why do you want to join? *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us a little bit about your passion and availability..."
                    value={form.motivation}
                    onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl text-base shadow-md transition"
                >
                  {content.submitButtonLabel}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
