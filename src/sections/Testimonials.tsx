// sections/Testimonials.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "",
    text: `"Our mobile revenue jumped 22% in the first month. The abandoned cart push notifications alone paid for the entire subscription 3x over."`,
    rating: 5,
  },
  {
    name: "Amit S.",
    role: "Founder, Thread & Co",
    image: "",
    text: `"We saw a huge jump in conversions within weeks. Our mobile app converts almost 3x better than our website."`,
    rating: 4,
  },
  {
    name: "Priya K.",
    role: "Director, Maison Home",
    image: "",
    text: `"Built-in CRO features actually work. Smart upsells increased our AOV by 18%."`,
    rating: 5,
  },
  {
    name: "Rohan M.",
    role: "Ecom Founder",
    image: "",
    text: `"Push notifications alone recovered so many lost carts. ROI is insane."`,
    rating: 5,
  },
  {
    name: "Neha T.",
    role: "Brand Owner",
    image: "",
    text: `"Our mobile experience feels premium now. Customers love it."`,
    rating: 4,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // 👉 responsive visible count
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();

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
    <section className="py-20 bg-[#F7F7FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
              What merchants say
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Real Results from Real Stores
            </h2>

            {/* Trustpilot */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-purple-500 rounded-sm"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                Trustpilot{" "}
                <span className="text-gray-400">Rated 4.5/5.0</span>
              </span>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
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
              className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center 
                         hover:bg-purple-600 transition disabled:opacity-40 disabled:cursor-not-allowed"
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
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <span
                        key={idx}
                        className={`text-sm ${
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
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {t.text}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-200" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-400">{t.role}</p>
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