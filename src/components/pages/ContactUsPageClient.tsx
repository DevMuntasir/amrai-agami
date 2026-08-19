"use client";

import React, { useState } from "react";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactSectionContent, PageBannerContent } from "@/types";

type ContactUsPageClientProps = {
  banner: PageBannerContent;
  content: ContactSectionContent;
};

export function ContactUsPageClient({ banner, content }: ContactUsPageClientProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const successMessage = content.successMessage.replace("{{email}}", form.email);

  return (
    <>
      <PageBanner
        title={banner.title}
        subtitle={banner.subtitle}
        backgroundImage={banner.backgroundImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full inline-block">
                {content.infoBadge}
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                {content.infoTitle}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {content.infoDescription}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{content.addressTitle}</h4>
                    <p className="text-xs text-gray-600">{content.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{content.emailTitle}</h4>
                    <p className="text-xs text-gray-600">
                      <a href={`mailto:${content.email}`} className="hover:text-amber-600">
                        {content.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{content.phoneTitle}</h4>
                    <p className="text-xs text-gray-600">
                      <a href={`tel:${content.phone.replace(/\s+/g, "")}`} className="hover:text-amber-600">
                        {content.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.successTitle}</h3>
                  <p className="text-gray-600 text-sm mb-6">{successMessage}</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
                  >
                    {content.resetButtonLabel}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.formTitle}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Subject *"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />

                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm shadow transition"
                  >
                    {content.submitButtonLabel}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
