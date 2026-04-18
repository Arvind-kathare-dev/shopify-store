// sections/NumbersAdvanced.tsx
"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "23%",
    title: "Only 23% of Shopify stores have a mobile app",
    desc: "Your competitors who go mobile first are capturing revenue you're leaving on the table.",
  },
  {
    value: "3×",
    title: "Better conversion rate vs. mobile web",
    desc: "Native apps load faster, feel better, and convert dramatically better.",
  },
  {
    value: "25%",
    title: "Typical revenue uplift in the first 30 days",
    desc: "Push notifications, CRO features, and app-exclusive retention mechanics work together.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function NumbersAdvanced() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F7F7FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            The Mobile Opportunity
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            The Numbers don’t Lie — Mobile Wins
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white border border-[#E7E3F3] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            >
              {/* VALUE */}
              <h3 className="text-3xl font-bold text-purple-500 mb-4">
                {item.value}
              </h3>

              {/* TITLE */}
              <p className="text-sm font-medium text-gray-900 leading-snug mb-2">
                {item.title}
              </p>

              {/* DESC */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}