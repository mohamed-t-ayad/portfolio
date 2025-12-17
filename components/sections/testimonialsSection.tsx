"use client";
import React, { useState } from 'react';
import { Section, SectionHeader } from '../ui/section';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Great work !! nice and quick development !! Mhmd just delivered the work and I didn't have a single comment on the creation, it's JUST PERFECT ! appreciate your effort Mhmd and hopefully we work together again !!",
    name: "Fange Ge",
    role: "Upwork Client",
  },
  {
    quote: "Great work !! I was in need for experienced for high quality task & Mohammed just exceeded all expectations !! His experience and knowledge is just in another level !! I really like that we worked together in this project and I HIGHLY recommend him for anyone looking for Quality Work over here !!! He is one of the best on this platform !",
    name: "Ap Plungan",
    role: "Upwork Client",
  },
  {
    quote: "Mhmd is AMAZING !! it was so great working with him, he is so professional and creative and delivered the work in so nice and neat way !!! Thanks for all the help and looking forward to work with you again in the soon future Mhmd !!!",
    name: "Sam Jhon",
    role: "Upwork Client",
  },
  {
    quote: "He accepted and delivered the job overnight.perfect",
    name: "Enrico Villa",
    role: "Upwork Client",
  },
  {
    quote: "I have to admit, I did not give him the time he needed to finish this project fully and HE STILL DID! Highly recommend this wonderful gentleman.",
    name: "Fares Alaboud",
    role: "Upwork Client",
  },
  {
    quote: "It was SUPER NICE working with Mhmd, I really appreciate his skills and his inside-out knowledge of his field ! and he delivered the work in most neat and nice way so the future developers can still have a great understand and ability to enhance !! will come back to work with him again in the near future !!",
    name: "Ahmed Ibrahim",
    role: "Upwork Client",
  },
  {
    quote: "Great Work !! the front-end done perfectly and in very short time !! I am really glad to work with Mohamed and how experienced and skilled he is !! For sure working with him again in the near future !!",
    name: "Ahmed Ibrahim",
    role: "Upwork Client",
  },
];

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  return (
    <Section id="testimonials" className='bg-[#fffcfc]'>
      <SectionHeader tag="Testimonials" title="What Clients Say About My Work" />

      <div className="relative w-full py-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 25}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-none w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white p-8 rounded-3xl text-center h-full flex flex-col justify-between
                                hover:bg-blue-50 hover:shadow-md hover:-translate-y-2 transition-all duration-300">
                  <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5 mx-0.5" />
                    ))}
                  </div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </Section>
  );
};
