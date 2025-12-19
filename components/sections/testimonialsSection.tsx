"use client";

import React, { useState } from "react";
import { Section, SectionHeader } from "../ui/section";
import { Star } from "lucide-react";

/* =======================
   Testimonials Data
======================= */
const testimonials = [
  {
    quote:
      "Great work !! nice and quick development !! Mhmd just delivered the work and I didn't have a single comment on the creation, it's JUST PERFECT ! appreciate your effort Mhmd and hopefully we work together again !!",
    name: "Fange Ge",
    role: "Upwork Client",
  },
  {
    quote:
      "Great work !! I was in need for experienced for high quality task & Mohammed just exceeded all expectations !! His experience and knowledge is just in another level !! I really like that we worked together in this project and I HIGHLY recommend him for anyone looking for Quality Work over here !!! He is one of the best on this platform !",
    name: "Ap Plungan",
    role: "Upwork Client",
  },
  {
    quote:
      "Mhmd is AMAZING !! it was so great working with him, he is so professional and creative and delivered the work in so nice and neat way !!! Thanks for all the help and looking forward to work with you again in the soon future Mhmd !!!",
    name: "Sam Jhon",
    role: "Upwork Client",
  },
  {
    quote: "He accepted and delivered the job overnight. Perfect.",
    name: "Enrico Villa",
    role: "Upwork Client",
  },
  {
    quote:
      "I have to admit, I did not give him the time he needed to finish this project fully and HE STILL DID! Highly recommend this wonderful gentleman.",
    name: "Fares Alaboud",
    role: "Upwork Client",
  },
  {
    quote:
      "It was SUPER NICE working with Mhmd, I really appreciate his skills and his inside-out knowledge of his field!",
    name: "Ahmed Ibrahim",
    role: "Upwork Client",
  },
];

/* =======================
   Component
======================= */
export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // duplicate slides for infinite effect
  const slides = [...testimonials, ...testimonials];
  const total = testimonials.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const arrowGradient =
    "bg-[linear-gradient(135deg,_#667eea_0%,_#764ba2_100%)]";

  return (
    <Section id="testimonials">
      <SectionHeader
        tag="Testimonials"
        title="What Clients Say About My Work"
      />

      <div className="relative w-full py-12">
        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            style={{ "--slide": current } as React.CSSProperties}
            className="
              flex
              transform
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              translate-x-[calc(var(--slide)*-100%)]
              lg:translate-x-[calc(var(--slide)*-50%)]
            "
          >
            {slides.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4"
              >
                <div
                  className="
                    h-full
                    rounded-3xl
                    bg-white/85
                    backdrop-blur-xl
                    border border-gray-200/70
                    p-8
                    text-center
                    flex flex-col justify-between
                    shadow-sm
                    transition-all duration-500
                    hover:shadow-xl
                    hover:ring-1 hover:ring-blue-200/40
                  "
                >
                  <p className="text-gray-700 leading-relaxed mb-6">
                    “{testimonial.quote}”
                  </p>

                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 w-5 h-5 mx-0.5"
                      />
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className={`
            absolute left-[-15px] top-1/2 -translate-y-1/2
            z-10 w-14 h-14 rounded-full
            flex items-center justify-center
            text-white text-3xl
            shadow-lg transition-all duration-300
            hover:scale-110
            ${arrowGradient}
          `}
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className={`
            absolute right-[-15px] top-1/2 -translate-y-1/2
            z-10 w-14 h-14 rounded-full
            flex items-center justify-center
            text-white text-3xl
            shadow-lg transition-all duration-300
            hover:scale-110
            ${arrowGradient}
          `}
        >
          ›
        </button>
      </div>
    </Section>
  );
};
