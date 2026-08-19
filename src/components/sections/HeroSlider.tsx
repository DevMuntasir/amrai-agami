"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VideoModal } from "@/components/ui/VideoModal";
import { HomeHeroSlide } from "@/types";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface HeroSliderProps {
  slides?: HomeHeroSlide[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides = defaultGlobalSectionContent.heroSlides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const openVideo = (url: string) => {
    setCurrentVideoUrl(url);
    setVideoOpen(true);
  };

  return (
    <>
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={currentVideoUrl}
      />

      <section className="relative min-h-[580px] md:min-h-[700px] flex items-center bg-[#00153d] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
          style={{ backgroundImage: `url(${slides[activeSlide].backgroundImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00153d]/95 via-[#002A8C]/80 to-transparent"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Subtitle Badge */}
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#F00101]/20 border border-[#F00101]/40 text-[#ff6b6b] text-xs md:text-sm font-extrabold uppercase tracking-widest mb-6">
              <i className="fa-solid fa-hands-holding-child mr-2 text-[#F00101]"></i>
              {slides[activeSlide].subtitle}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight text-white">
              {slides[activeSlide].title}
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-8 leading-relaxed font-normal">
              {slides[activeSlide].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={slides[activeSlide].primaryButtonHref || "/donate-us"}
                className="px-8 py-4 bg-[#F00101] hover:bg-[#d00000] text-white font-bold rounded-2xl shadow-xl transition transform hover:-translate-y-0.5 text-sm"
              >
                {slides[activeSlide].primaryButtonLabel || "Donate Now"}
              </Link>
              <button
                onClick={() => openVideo(slides[activeSlide].videoUrl || "")}
                className="flex items-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition backdrop-blur-md text-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#F00101] text-white flex items-center justify-center text-xs">
                  <i className="fa-solid fa-play"></i>
                </div>
                <span>{slides[activeSlide].secondaryButtonLabel || "Watch Video"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === idx ? "bg-[#F00101] w-8" : "bg-white/50 hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};
