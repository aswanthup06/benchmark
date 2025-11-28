"use client";

import React, { useState } from "react";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import StarIcon from "@/components/Icons/StarIcon";
import QuoteIcon from "@/components/Icons/QuoteIcon";


const testimonials = [
  {
    name: "Arjun Kumar",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop",
    text:
      "Check out our Weekends getaway Packages – ideal for anyone looking to have a quick holiday. Service was excellent and the trip was well organised. Check out our Weekends getaway Packages – ideal for anyone looking to have a quick holiday. Service was excellent and the trip was well organised.",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1964&auto=format&fit=crop",
    text:
      "Benchmark Holidays made our honeymoon unforgettable. Everything from hotel to transport was perfectly handled with care and attention.Check out our Weekends getaway Packages – ideal for anyone looking to have a quick holiday. Service was excellent and the trip was well organised.",
    rating: 4,
  },
  {
    name: "Rahul Menon",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1964&auto=format&fit=crop",
    text:
      "Very professional team. The packages were well planned and affordable. Will definitely recommend for family trips and corporate tours.Check out our Weekends getaway Packages – ideal for anyone looking to have a quick holiday. Service was excellent and the trip was well organised.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1964&auto=format&fit=crop",
    text:
      "Smooth process from booking till the end of journey. Excellent customer service and prompt response throughout the trip.Check out our Weekends getaway Packages – ideal for anyone looking to have a quick holiday. Service was excellent and the trip was well organised.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const data = testimonials[current];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-28 mb-14 md:mb-24 lg:mb-32">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 bg-[#FDF2ED] p-12 rounded-3xl">

        {/* LEFT */}
        <div>
          <h4>Guest Experiences</h4>
          <h2 className="font-bold text-2xl">What our Customers Say</h2>
          <h2 className="font-bold text-2xl mb-8">About us</h2>

          <button  style={{ fontWeight:350 }} className="h-12 px-8 text-white bg-[#FFC107] hover:bg-amber-500  text-sm duration-500 rounded-md">
            Read More
          </button>
        </div>

     
        <div className="mt-8 md:mt-0">
          <QuoteIcon className="w-10 h-10 text-black" />

          <p className="text-base font-semibold line-clamp-3">
            {data.text}
          </p>

          <div className="flex flex-wrap gap-4 justify-between mt-6">
            <div className="flex gap-4 items-center">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={data.image}
                alt={data.name}
              />

              <div>
                <h2 className="text-lg font-bold">{data.name}</h2>
                <div className="flex gap-1">
                  {[...Array(data.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="h-12 w-12 bg-[#FFC107] hover:bg-amber-500 rounded-md flex items-center justify-center transition"
              >
                <ArrowIcon className="w-6 h-6 text-white -scale-x-100" />
              </button>

              <button
                onClick={nextTestimonial}
                className="h-12 w-12 bg-[#FFC107] hover:bg-amber-500 rounded-md flex items-center justify-center transition"
              >
                <ArrowIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
