"use client";

import React, { useState } from "react";
import { PageBanner } from "@/components/layout/PageBanner";

export default function ContactUsPage() {
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

  return (
    <>
      <PageBanner
        title="Contact Our Team"
        subtitle="Have a question or want to collaborate? We would love to hear from you."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                We Are Always Ready To Help You
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our support and logistics teams operate across multiple timezones to assist donors, volunteers, and media partners.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Main Headquarters</h4>
                    <p className="text-xs text-gray-600">4517 Washington Ave, Manchester, Kentucky 39495</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Email Inquiry</h4>
                    <p className="text-xs text-gray-600">
                      <a href="mailto:support@amraiagami.org" className="hover:text-amber-600">
                        support@amraiagami.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Phone Line</h4>
                    <p className="text-xs text-gray-600">
                      <a href="tel:+13055873407" className="hover:text-amber-600">
                        +1 (305) 587-3407
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Thank you for reaching out. We will get back to you shortly at {form.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Leave A Message</h3>
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
                    Send Message
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
