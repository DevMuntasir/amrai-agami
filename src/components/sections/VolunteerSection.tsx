import React from "react";
import Link from "next/link";

export const VolunteerSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85')` }}
      ></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs md:text-sm font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 mb-4 inline-block">
              Become a Volunteer
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Join Our Community of Change Makers Around The Globe
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
              Whether you are a healthcare professional, educator, logistics specialist, or simply have a kind heart, your time and passion can save lives and restore dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/become-volunteer"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl shadow-xl transition"
              >
                Register As Volunteer
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition backdrop-blur-md"
              >
                Our Global Impact
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4">Why Volunteer With Us?</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-1"></i>
                  <span>Direct on-the-ground impact with marginalized families.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-1"></i>
                  <span>Flexible schedules: remote, local, or international missions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-1"></i>
                  <span>Certified leadership and humanitarian credentials provided.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
