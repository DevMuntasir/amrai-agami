"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Testimonial } from "@/types";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import testimonialsData from "@/data/testimonials.json";
import { defaultGlobalSectionContent } from "@/sanity/lib/defaultContent";

interface TestimonialSliderProps {
  items?: Testimonial[];
  badge?: string;
  title?: string;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  items,
  badge = defaultGlobalSectionContent.testimonialSection.badge,
  title = defaultGlobalSectionContent.testimonialSection.title,
}) => {
  const sourceItems = items || (testimonialsData as Testimonial[]);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100 mb-3 inline-block">
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {sourceItems.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <TestimonialCard testimonial={item as Testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
