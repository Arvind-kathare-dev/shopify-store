"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowDown } from "lucide-react";

const COMPARISON_FEATURES = [
  "True Native App",
  "Built-in CRO Features",
  "Personalization Engine",
  "Time to Launch",
  "No Developer Needed",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
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

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Comparison() {
  return (
    <section className="py-16  md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400">
            HOW WE COMPARE
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Shopifystore vs <span className="text-[#8E6CEF]">everything else</span>
          </h2>
        </motion.div>

        {/* Comparison Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] md:rounded-[60px] p-6 md:p-12  border-solid border"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, rgba(202, 190, 236, 0.35) 100%) padding-box, linear-gradient(180deg, rgba(160, 140, 217, 0.4) 0%, #FFFFFF 100%) border-box",
            borderColor: "transparent"
          }}
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >

            {/* Features Detail Card */}
            <motion.div
              variants={columnVariants}
              className="bg-primary-card-gradient rounded-[32px] rounded-tr-[100px] p-8 md:p-10 text-white flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 ">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                  <ArrowDown size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Get Started</span>
                  <span className="text-lg font-bold">Features Details</span>
                </div>

              </div>
              <hr className="w-24 mt-3 mb-12 border border-white/30" />


              <div className="flex flex-col gap-10">
                {COMPARISON_FEATURES.map((feature, i) => (
                  <p key={i} className="font-semibold text-sm md:text-base whitespace-nowrap">
                    {feature}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* WEBVIEW BUILDERS */}
            <motion.div
              variants={columnVariants}
              className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center gap-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm md:text-base font-semibold  uppercase text-neutral">WEBVIEW BUILDERS</h3>

              <div className="flex flex-col gap-10 items-center w-full">
                <div className="h-6 flex items-center justify-center"><Check className="text-white bg-[#63C194]  rounded-full p-1" size={20} strokeWidth={3} /></div>
                <div className="h-6 flex items-center justify-center"><Check className="text-white bg-[#63C194]  rounded-full p-1" size={20} strokeWidth={3} /></div>
                <div className="h-6 flex items-center justify-center"><Check className="text-white bg-[#63C194]  rounded-full p-1" size={20} strokeWidth={3} /></div>
                <div className="h-6 flex items-center justify-center"><span className="text-gray-400 font-medium text-sm">2-4 weeks</span></div>
                <div className="h-6 flex items-center justify-center"><Check className="text-white bg-[#63C194]  rounded-full p-1" size={20} strokeWidth={3} /></div>
              </div>
            </motion.div>

            {/* CUSTOM DEV */}
            <motion.div
              variants={columnVariants}
              className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center gap-12 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm md:text-base font-semibold uppercase text-neutral">CUSTOM DEV</h3>

              <div className="flex flex-col gap-10 items-center w-full text-center">
                <div className="h-6 flex items-center justify-center"><Check className="text-white bg-[#63C194]  rounded-full p-1" size={20} strokeWidth={3} /></div>
                <div className="h-6 flex items-center justify-center"><X className="text-white bg-[#FF6E70] rounded-full p-1" size={20} strokeWidth={3} /></div>
                <div className="h-6 flex items-center justify-center"><span className="text-gray-400 font-medium text-sm">Custom build</span></div>
                <div className="h-6 flex items-center justify-center"><span className="text-gray-400 font-medium text-sm">3-6 months</span></div>
                <div className="h-6 flex items-center justify-center"><X className="text-white bg-[#FF6E70] rounded-full p-1" size={20} strokeWidth={3} /></div>
              </div>
            </motion.div>

            {/* SHOPIFYSTORE */}
            <motion.div
              variants={columnVariants}
              className="bg-white rounded-[32px] p-8 md:p-10 flex flex-col items-center gap-12 shadow-md border-2 border-[#8E6CEF]/10 relative hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8E6CEF] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Recommended</div>
              <h3 className="text-sm md:text-base font-semibold uppercase text-[#7962BC]">SHOPIFYSTORE</h3>

              <div className="flex flex-col gap-10 items-center w-full text-center">
                <div className="h-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#7962BC] flex items-center justify-center">
                    <Check className="text-white" size={14} strokeWidth={4} />
                  </div>
                </div>
                <div className="h-6 flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7962BC] flex items-center justify-center">
                    <Check className="text-white" size={12} strokeWidth={4} />
                  </div>
                  <span className="text-[#7962BC] font-bold text-sm">14 features</span>
                </div>
                <div className="h-6 flex items-center justify-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#7962BC] flex items-center justify-center">
                    <Check className="text-white" size={12} strokeWidth={4} />
                  </div>
                  <span className="text-[#7962BC] font-bold text-sm">Included</span>
                </div>
                <div className="h-6 flex items-center justify-center">
                  <span className="text-[#7962BC] font-bold text-sm">7-14 days</span>
                </div>
                <div className="h-6 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#7962BC] flex items-center justify-center">
                    <Check className="text-white" size={14} strokeWidth={4} />
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}