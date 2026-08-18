"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="footer bg-[#00153d] text-gray-300 pt-16 pb-8 border-t border-[#002A8C]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: About & Info */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white/90 p-2.5 rounded-xl">
              <img
                src="/logo.svg"
                alt="Amrai Agami Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t("footer_about")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#002A8C] hover:bg-[#F00101] text-white flex items-center justify-center text-sm transition"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#002A8C] hover:bg-[#F00101] text-white flex items-center justify-center text-sm transition"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#002A8C] hover:bg-[#F00101] text-white flex items-center justify-center text-sm transition"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#002A8C] hover:bg-[#F00101] text-white flex items-center justify-center text-sm transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#F00101] after:mt-2">
              {t("quick_links")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/about-us" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link href="/causes" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> {t("nav_causes")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> {t("nav_events")}
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> {t("nav_team")}
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> {t("nav_contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Causes */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#F00101] after:mt-2">
              {t("our_causes")}
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/causes/education-for-poor-children" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> Child Education Aid
                </Link>
              </li>
              <li>
                <Link href="/causes/clean-water-initiative" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> Clean Water Wells
                </Link>
              </li>
              <li>
                <Link href="/causes/emergency-food-aid" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> Emergency Food Relief
                </Link>
              </li>
              <li>
                <Link href="/causes/healthcare-mobile-clinics" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> Rural Medical Clinics
                </Link>
              </li>
              <li>
                <Link href="/become-volunteer" className="hover:text-red-300 transition flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-xs text-[#F00101]"></i> {t("nav_volunteer")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative inline-block after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#F00101] after:mt-2">
              {t("newsletter")}
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              {t("newsletter_desc")}
            </p>
            {subscribed ? (
              <div className="p-3 bg-red-500/20 border border-red-500/40 text-red-300 text-xs rounded-xl">
                <i className="fa-solid fa-circle-check mr-1.5"></i> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email / ইমেইল লিখুন"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#002A8C]/40 border border-blue-800 rounded-xl focus:outline-none focus:border-[#F00101] text-sm text-gray-200"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#F00101] hover:bg-[#d00000] text-white font-bold rounded-xl text-sm transition shadow-md"
                >
                  {t("subscribe_now")}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Amrai Agami. {t("rights_reserved")}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">
              {t("nav_privacy")}
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition">
              {t("nav_terms")}
            </Link>
            <Link href="/faq" className="hover:text-white transition">
              {t("nav_faq")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
