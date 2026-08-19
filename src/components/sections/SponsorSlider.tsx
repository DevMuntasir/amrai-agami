"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SponsorLogo } from "@/types";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface SponsorSliderProps {
  logos?: SponsorLogo[];
}

export const SponsorSlider: React.FC<SponsorSliderProps> = ({ logos }) => {
  const sponsors = logos || defaultGlobalSectionContent.sponsorSection.logos;

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="items-center"
        >
          {sponsors.map((logo, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
                {logo.url ? (
                  <a href={logo.url} target="_blank" rel="noreferrer">
                    <img
                      src={logo.image}
                      alt={logo.alt || `Sponsor ${index + 1}`}
                      className="max-h-12 w-auto object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={logo.image}
                    alt={logo.alt || `Sponsor ${index + 1}`}
                    className="max-h-12 w-auto object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
