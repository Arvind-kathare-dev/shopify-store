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

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "50%" : "-50%",
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = testimonials.slice(index, index + visibleCount);

  const handleNext = () => {
    if (index + visibleCount < testimonials.length) {
      setDirection(1);
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background-subtle overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left space-y-4"
          >
            <p className="text-sm font-normal tracking-[0.2em] uppercase text-neutral">
              What merchants say
            </p>
            <h2 className="text-[20px] md:text-[32px] font-bold text-black leading-tight">
              Real Results from Real Stores
            </h2>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, type: "spring" }}
                    className="w-6 h-6 flex items-center justify-center rounded-md shadow-sm"
                    style={{
                      background: i <= 4 
                        ? "#7962BC" 
                        : "linear-gradient(90deg, #7962BC 50%, #D9D9D9 50%)"
                    }}
                  >
                    <Star size={13} className="text-white fill-white" />
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[13px] font-normal">
                <span className="text-black">Trustpilot</span>
                <span className="text-neutral">Rated 4.5/5.0</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              disabled={index === 0}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-gray-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group border border-gray-100"
            >
              <ChevronLeft size={20} className="text-gray-600 group-hover:text-secondary transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              disabled={index + visibleCount >= testimonials.length}
              className="w-12 h-12 rounded-full bg-secondary text-white shadow-soft flex items-center justify-center hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed border border-secondary/20"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative min-h-[380px] md:min-h-[320px] w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleCards.map((testimonial, i) => (
                <div
                  key={testimonial.name + i}
                  className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-50 flex flex-col justify-between hover:shadow-lg hover:border-secondary/20 transition-all group h-full"
                >
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={18}
                          className={idx < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                        />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-black font-normal leading-relaxed italic group-hover:text-gray-900 transition-colors">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-50">
                    <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden bg-gray-100 ring-2 ring-secondary/10 group-hover:ring-secondary/30 transition-all">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[15px] font-medium text-black">{testimonial.name}</p>
                      <p className="text-[10px] font-normal text-[#858585] tracking-wider">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}