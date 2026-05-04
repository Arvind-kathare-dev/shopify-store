"use client";

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

export default function NumbersAdvanced() {
  return (
    <section className="relative bg-white py-20 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 space-y-3 md:space-y-4"
        >
          <p className="text-[10px] md:text-[12px] font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-[#858585]">
            THE MOBILE OPPORTUNITY
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-black tracking-tight">
            The Numbers don't Lie — Mobile Wins
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-[#F3F0FF] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.12)] hover:border-purple-100 transition-all duration-300 flex flex-col group"
            >
              <h3 className="text-[48px] md:text-[56px] font-bold text-[#8B5CF6] leading-none mb-6 group-hover:scale-105 origin-left transition-transform duration-300">
                {item.value}
              </h3>
              <h4 className="text-black text-[18px] md:text-[20px] font-semibold leading-tight mb-4">
                {item.title}
              </h4>
              <p className="text-[#858585] text-[13px] md:text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}