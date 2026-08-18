"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { SearchModal } from "@/components/ui/SearchModal";

interface HeaderProps {
  variant?: "primary" | "secondary" | "tertiary";
}

export const Header: React.FC<HeaderProps> = ({ variant = "primary" }) => {
  const pathname = usePathname();
  const { totalCount } = useCart();
  const { language, setLanguage, t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Topbar in Deep Brand Navy */}
      <div className="topbar hidden lg:block bg-[#001a57] text-gray-200 text-xs py-2.5 border-b border-[#002A8C]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Contact info */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:support@amraiagami.org"
                className="hover:text-[#ff6b6b] transition flex items-center gap-2"
              >
                <i className="fa-regular fa-envelope text-[#F00101]"></i>
                support@amraiagami.org
              </a>
              <a
                href="tel:+13055873407"
                className="hover:text-[#ff6b6b] transition flex items-center gap-2"
              >
                <i className="fa-solid fa-phone text-[#F00101]"></i>
                +880 1874303208
              </a>
            </div>

            {/* Middle volunteer prompt */}
            <div className="hidden xl:block text-center text-gray-300">
              <span className="flex items-center gap-1.5 justify-center">
                <i className="fa-solid fa-hand-holding-heart text-[#F00101]"></i>
                {t("volunteer_callout")}
              </span>
            </div>

            {/* Language & Social */}
            <div className="flex items-center gap-5">
              {/* Language Switcher */}
              <div className="flex items-center bg-[#002A8C] rounded-lg p-0.5 border border-blue-900/50">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${language === "en"
                    ? "bg-[#F00101] text-white shadow"
                    : "text-blue-100 hover:text-white"
                    }`}
                >
                  <span>🇬🇧</span> English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("bn")}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${language === "bn"
                    ? "bg-[#F00101] text-white shadow"
                    : "text-blue-100 hover:text-white"
                    }`}
                >
                  <span>🇧🇩</span> বাংলা
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-[#F00101] transition"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="hover:text-[#F00101] transition"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#F00101] transition"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`header w-full z-40 transition-all duration-300 ${isSticky
          ? "fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-md py-3"
          : "relative bg-white  shadow-sm"
          }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo from logo.svg */}
            <Link href="/" className="navbar-logo flex items-center gap-2 ">
              <img
                src="/logo.svg"
                alt="Amrai Agami Logo"
                className="h-16 md:h-20 w-auto object-contain transition transform hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-7 text-sm font-bold text-[#002A8C]">
              {/* Home Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/"
                  className={`flex items-center gap-1.5 transition ${pathname === "/" || pathname === "/home-2" || pathname === "/home-3"
                    ? "text-[#F00101] font-extrabold"
                    : "hover:text-[#F00101]"
                    }`}
                >
                  {t("nav_home")} <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </Link>
                {/* <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all">
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_home_one")}
                  </Link>
                  <Link
                    href="/home-2"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_home_two")}
                  </Link>
                  <Link
                    href="/home-3"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_home_three")}
                  </Link>
                </div> */}
              </div>

              {/* About Us */}
              <Link
                href="/about-us"
                className={`py-2 transition ${pathname === "/about-us"
                  ? "text-[#F00101] font-extrabold"
                  : "hover:text-[#F00101]"
                  }`}
              >
                {t("nav_about")}
              </Link>

              {/* Causes Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/causes"
                  className={`flex items-center gap-1.5 transition ${pathname.startsWith("/causes")
                    ? "text-[#F00101] font-extrabold"
                    : "hover:text-[#F00101]"
                    }`}
                >
                  {t("nav_causes")} <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <Link
                    href="/causes"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_our_causes")}
                  </Link>
                  <Link
                    href="/causes/education-for-poor-children"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_cause_details")}
                  </Link>
                </div>
              </div>

              {/* Events Dropdown */}
              <div className="relative group py-2">
                <Link
                  href="/events"
                  className={`flex items-center gap-1.5 transition ${pathname.startsWith("/events")
                    ? "text-[#F00101] font-extrabold"
                    : "hover:text-[#F00101]"
                    }`}
                >
                  {t("nav_events")} <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <Link
                    href="/events"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_events_list")}
                  </Link>
                  <Link
                    href="/events/annual-charity-fundraising-gala-2026"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_event_details")}
                  </Link>
                </div>
              </div>

              {/* Pages Dropdown */}
              {/* <div className="relative group py-2">
                <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#F00101] transition">
                  {t("nav_pages")} <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </span>
                <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <Link
                    href="/our-team"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_team")}
                  </Link>
                  <Link
                    href="/become-volunteer"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_volunteer")}
                  </Link>
                  <Link
                    href="/donate-us"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_donate")}
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_faq")}
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_privacy")}
                  </Link>
                  <Link
                    href="/terms-conditions"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_terms")}
                  </Link>
                </div>
              </div> */}

              {/* Shop */}
              {/* <div className="relative group py-2">
                <Link
                  href="/shop"
                  className={`flex items-center gap-1.5 transition ${pathname.startsWith("/shop") || pathname === "/cart" || pathname === "/checkout"
                    ? "text-[#F00101] font-extrabold"
                    : "hover:text-[#F00101]"
                    }`}
                >
                  {t("nav_shop")} <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <Link
                    href="/shop"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_our_shop")}
                  </Link>
                  <Link
                    href="/cart"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_cart")}
                  </Link>
                  <Link
                    href="/checkout"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_checkout")}
                  </Link>
                </div>
              </div> */}

              {/* Blog */}
              <div className="relative group py-2">
                <Link
                  href="/blog"
                  className={`flex items-center gap-1.5 transition ${pathname.startsWith("/blog")
                    ? "text-[#F00101] font-extrabold"
                    : "hover:text-[#F00101]"
                    }`}
                >
                  {t("nav_blog")} <i className="fa-solid fa-chevron-down text-[10px]"></i>
                </Link>
                <div className="absolute top-full left-0 hidden group-hover:block w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_blog_grid")}
                  </Link>
                  <Link
                    href="/blog/how-small-donations-create-huge-impact"
                    className="block px-4 py-2 hover:bg-red-50 hover:text-[#F00101] text-xs font-semibold"
                  >
                    {t("nav_blog_details")}
                  </Link>
                </div>
              </div>

              {/* Contact */}
              <Link
                href="/contact-us"
                className={`py-2 transition ${pathname === "/contact-us"
                  ? "text-[#F00101] font-extrabold"
                  : "hover:text-[#F00101]"
                  }`}
              >
                {t("nav_contact")}
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-4">
              {/* Search Icon */}
              {/* <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="w-10 h-10 rounded-full bg-blue-50 hover:bg-[#002A8C] hover:text-white text-[#002A8C] flex items-center justify-center transition"
              >
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
              </button> */}

              {/* Cart Icon */}
              {/* <Link
                href="/cart"
                aria-label="View Cart"
                className="relative w-10 h-10 rounded-full bg-blue-50 hover:bg-[#002A8C] hover:text-white text-[#002A8C] flex items-center justify-center transition"
              >
                <i className="fa-solid fa-basket-shopping text-sm"></i>
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#F00101] text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                    {totalCount}
                  </span>
                )}
              </Link> */}

              {/* Donate CTA (Brand Red) */}
              <Link
                href="/donate-us"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#F00101] hover:bg-[#d30101] text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-heart"></i>
                <span>{t("donate_now")}</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="xl:hidden w-10 h-10 rounded-xl bg-blue-50 text-[#002A8C] flex items-center justify-center text-lg focus:outline-none"
              >
                <i className={mobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 mt-3 max-h-[80vh] overflow-y-auto">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100 mb-2">
              <span className="text-xs font-bold text-gray-700">Language / ভাষা:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-md text-xs font-bold ${language === "en" ? "bg-[#F00101] text-white" : "bg-gray-100 text-gray-600"
                    }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("bn")}
                  className={`px-3 py-1 rounded-md text-xs font-bold ${language === "bn" ? "bg-[#F00101] text-white" : "bg-gray-100 text-gray-600"
                    }`}
                >
                  বাংলা
                </button>
              </div>
            </div>

            <ul className="flex flex-col gap-3 text-sm font-semibold text-[#002A8C]">
              <li>
                <div
                  onClick={() => toggleSubmenu("home")}
                  className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer"
                >
                  <span>{t("nav_home")}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition ${activeSubmenu === "home" ? "rotate-180 text-[#F00101]" : ""
                      }`}
                  ></i>
                </div>
                {activeSubmenu === "home" && (
                  <div className="pl-4 py-2 flex flex-col gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg mt-1">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_home_one")}
                    </Link>
                    <Link href="/home-2" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_home_two")}
                    </Link>
                    <Link href="/home-3" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_home_three")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 border-b border-gray-100"
                >
                  {t("nav_about")}
                </Link>
              </li>
              <li>
                <div
                  onClick={() => toggleSubmenu("causes")}
                  className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer"
                >
                  <span>{t("nav_causes")}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition ${activeSubmenu === "causes" ? "rotate-180 text-[#F00101]" : ""
                      }`}
                  ></i>
                </div>
                {activeSubmenu === "causes" && (
                  <div className="pl-4 py-2 flex flex-col gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg mt-1">
                    <Link href="/causes" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_our_causes")}
                    </Link>
                    <Link
                      href="/causes/education-for-poor-children"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav_cause_details")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <div
                  onClick={() => toggleSubmenu("events")}
                  className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer"
                >
                  <span>{t("nav_events")}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition ${activeSubmenu === "events" ? "rotate-180 text-[#F00101]" : ""
                      }`}
                  ></i>
                </div>
                {activeSubmenu === "events" && (
                  <div className="pl-4 py-2 flex flex-col gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg mt-1">
                    <Link href="/events" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_events_list")}
                    </Link>
                    <Link
                      href="/events/annual-charity-fundraising-gala-2026"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav_event_details")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <div
                  onClick={() => toggleSubmenu("pages")}
                  className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer"
                >
                  <span>{t("nav_pages")}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition ${activeSubmenu === "pages" ? "rotate-180 text-[#F00101]" : ""
                      }`}
                  ></i>
                </div>
                {activeSubmenu === "pages" && (
                  <div className="pl-4 py-2 flex flex-col gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg mt-1">
                    <Link href="/our-team" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_team")}
                    </Link>
                    <Link href="/become-volunteer" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_volunteer")}
                    </Link>
                    <Link href="/donate-us" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_donate")}
                    </Link>
                    <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_faq")}
                    </Link>
                    <Link href="/privacy-policy" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_privacy")}
                    </Link>
                    <Link href="/terms-conditions" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_terms")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <div
                  onClick={() => toggleSubmenu("shop")}
                  className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer"
                >
                  <span>{t("nav_shop")}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition ${activeSubmenu === "shop" ? "rotate-180 text-[#F00101]" : ""
                      }`}
                  ></i>
                </div>
                {activeSubmenu === "shop" && (
                  <div className="pl-4 py-2 flex flex-col gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg mt-1">
                    <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_our_shop")}
                    </Link>
                    <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_cart")}
                    </Link>
                    <Link href="/checkout" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_checkout")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <div
                  onClick={() => toggleSubmenu("blog")}
                  className="flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer"
                >
                  <span>{t("nav_blog")}</span>
                  <i
                    className={`fa-solid fa-chevron-down text-xs transition ${activeSubmenu === "blog" ? "rotate-180 text-[#F00101]" : ""
                      }`}
                  ></i>
                </div>
                {activeSubmenu === "blog" && (
                  <div className="pl-4 py-2 flex flex-col gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg mt-1">
                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                      {t("nav_blog_grid")}
                    </Link>
                    <Link
                      href="/blog/how-small-donations-create-huge-impact"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t("nav_blog_details")}
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 border-b border-gray-100"
                >
                  {t("nav_contact")}
                </Link>
              </li>
              <li className="pt-3">
                <Link
                  href="/donate-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 bg-[#F00101] text-white font-bold text-center block rounded-xl shadow"
                >
                  {t("donate_now")}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};
