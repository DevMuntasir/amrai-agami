import React from "react";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=85",
  breadcrumbs = [{ label: "Home", href: "/" }],
}) => {
  return (
    <section className="relative py-20 md:py-28 bg-slate-900 overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
        )}
        <nav aria-label="Breadcrumb" className="inline-flex items-center justify-center">
          <ol className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-gray-200 border border-white/10">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-amber-500">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-amber-400 transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-400 font-bold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};
