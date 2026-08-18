import React from "react";
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="testimonial__item bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-1 text-amber-400 mb-6">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={
                i < testimonial.rating
                  ? "fa-solid fa-star text-sm"
                  : "fa-regular fa-star text-sm text-gray-300"
              }
            ></i>
          ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
        />
        <div>
          <h5 className="font-bold text-gray-900 text-sm">{testimonial.name}</h5>
          <p className="text-xs text-amber-600 font-medium">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};
