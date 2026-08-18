"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const SponsorSlider: React.FC = () => {
  const sponsors = [
    "/assets/images/sponsor/one.png",
    "/assets/images/sponsor/two.png",
    "/assets/images/sponsor/three.png",
    "/assets/images/sponsor/four.png",
    "/assets/images/sponsor/five.png",
    "/assets/images/sponsor/six.png",
  ];

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
          {sponsors.map((src, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300 flex items-center justify-center p-4">
                <img
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
