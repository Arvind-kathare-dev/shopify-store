"use client";

import { Card } from "@/components/card/Card";
import { motion } from "framer-motion";

const stats = [
  {
    value: "23%",
    title: "Only 23% of Shopify stores have a mobile app",
    desc: "Your competitors who go mobile first are capturing revenue you're leaving on the table. First-mover advantage is real.",
  },
  {
    value: "3×",
    title: "Better conversion rate vs. mobile web",
    desc: "Native apps load faster, feel better, and convert dramatically better. Browsers can't compete with a real app experience.",
  },
  {
    value: "25%",
    title: "Typical revenue uplift in the first 30 days",
    desc: "Push notifications, CRO features, and app-exclusive retention mechanics work together to compound your mobile revenue.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function NumbersAdvanced() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-16 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 max-w-2xl"
        >
          <p className="text-sm font-normal tracking-[0.2em] uppercase text-[#858585]">
            The Mobile Opportunity
          </p>

          <h2 className="text-2xl md:text-[32px] font-bold text-black leading-tight">
            The Numbers don't Lie — Mobile Wins
          </h2>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((item, i) => (
            <Card
              key={i}
              index={i}
              value={item.value}
              title={item.title}
              desc={item.desc}
              variants={fadeUp}
              className="bg-gray-50/50 border-gray-100 text-gray-900"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}