// sections/Testimonials.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah F.",
    role: "CMO, Lumina Beauty",
    image: "/images/dp1.png",
    text: `"Our mobile revenue jumped 22% in the first month. The abandoned cart push notifications alone paid for the entire subscription 3x over."`,
    rating: 5,
  },
  {
    name: "Amit S.",
    role: "Founder, Thread & Co",
    image: "/images/dp2.png",
    text: `"We saw a huge jump in conversions within weeks. Our mobile app converts almost 3x better than our website."`,
    rating: 4,
  },
  {
    name: "Priya K.",
    role: "Director, Maison Home",
    image: "/images/dp3.png",
    text: `"We saw a huge jump in conversions within weeks. Our mobile app converts almost 3x better than our website. Push notifications bring back so many lost sales."`,
    rating: 5,
  },
  {
    name: "Rohan M.",
    role: "Ecom Founder",
    image: "/images/dp1.png",
    text: `"We saw a huge jump in conversions within weeks. Our mobile app converts almost 3x better than our website. Push notifications bring back so many lost sales."`,
    rating: 5,
  },
  {
    name: "Neha T.",
    role: "Brand Owner",
    image: "/images/dp2.png",
    text: `"Our mobile experience feels premium now. Customers love it."`,
    rating: 4,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

useEffect(() => {
  const update = () => {
    if (window.innerWidth < 768) setVisibleCount(1);
    else if (window.innerWidth < 1024) setVisibleCount(2);
    else setVisibleCount(3);
  };

  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

  

  const visibleCards = testimonials.slice(index, index + visibleCount);

  const handleNext = () => {
    if (index + visibleCount < testimonials.length) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="lg:py-[75px] lg:px-[90px] px-4 py-10 bg-background-subtle">
      <div className="w-full mx-auto ">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12">
          <div>
            <p className="font-normal text-neutral text-sm leading-none tracking-[0.1em] uppercase">
              What merchants say
            </p>

            <h2 className="text-[32px]  font-bold text-gray-900">
              Real Results from Real Stores
            </h2>

            <div className="flex items-center gap-3 mt-3">

      {/* Stars */}
      <div className="flex items-center gap-[6px]">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-6 h-6 flex items-center justify-center bg-secondary rounded-md"
          >
            <Star size={14} className="text-white fill-white" />
          </div>
        ))}

        {/* Half Star */}
        <div className="relative w-6 h-6 rounded-md bg-gray-200 overflow-hidden ">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-secondary flex items-center justify-center">
            <Star size={14} className="text-white fill-white" />
          </div>
          <div className="flex items-center justify-center h-full">
            <Star size={14} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-900 font-medium">Trustpilot</span>
        <span className="text-gray-400">Rated 4.5/5.0</span>
      </div>
    </div>
          </div>

          {/* Arrows */}
          <div className="w-full md:w-fit flex justify-end  gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={handlePrev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center 
                         hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleNext}
              disabled={index + visibleCount >= testimonials.length}
              className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center 
                         hover:opacity-80 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleCards.map((t, i) => (
                <motion.div
                  key={t.name + index + i}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[22px] px-[26px] py-[34px] shadow-sm hover:shadow-md transition"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <span
                        key={idx}
                        className={`text-[20px] ${
                          idx < t.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm font-normal leading-[22px] mb-6">
                    {t.text}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <Image src={t.image} alt="dp" width={36} height={36} className="w-9 h-9 rounded-full object-cover bg-gray-200" />
                    <div>
                      <p className="text-[15px] font-medium">
                        {t.name}
                      </p>
                      <p className="text-[10px] text-neutral">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}