"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";

const RevenueUpside = () => {
  const [revenue, setRevenue] = useState(25214);
  const [mobileTraffic, setMobileTraffic] = useState(65);
  const [conversionRate, setConversionRate] = useState(1.2);

  // Derived values
  const [results, setResults] = useState({
    estimatedMonthly: 0,
    currentMobile: 0,
    nativeApp: 0,
    pushRecovery: 0,
    twelveMonthUpside: 0,
  });

  useEffect(() => {
    // Improved formula incorporating all sliders
    // Assuming 'revenue' is total monthly revenue
    // currentMobile is the portion of revenue coming from mobile, influenced by CR
    const currentMobile = Math.round(revenue * (mobileTraffic / 100) * (conversionRate / 2.5));

    // Native app uplift is usually higher when current conversion is low
    const upliftFactor = 3.0 + (Math.max(0, 5 - conversionRate) * 0.2);
    const nativeApp = Math.round(currentMobile * upliftFactor);

    // Push recovery is a percentage of total revenue recovered
    const pushRecovery = Math.round(revenue * 0.02 * (mobileTraffic / 100));

    const estimatedMonthly = Math.round(nativeApp - currentMobile + pushRecovery);
    const twelveMonthUpside = estimatedMonthly * 12;

    setResults({
      estimatedMonthly,
      currentMobile,
      nativeApp,
      pushRecovery,
      twelveMonthUpside,
    });
  }, [revenue, mobileTraffic, conversionRate]);

  const formatCurrency = (val: number) => {
    return `$${val.toLocaleString()}k`;
  };

  return (
    <section
      className="w-full py-12 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(242, 237, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 51.44%, rgba(228, 219, 255, 0.5) 100%)"
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 items-center lg:items-start">

          {/* Left Side: Sliders */}
          <div className="flex-1 w-full p-3 md:p-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#858585] uppercase tracking-[0.2em] text-[10px] md:text-xs font-normal mb-3 md:mb-5 block">
                See it in action
              </span>
              <h2 className="text-2xl md:text-[32px] font-bold text-black leading-[1.1] mb-2">
                See your exact revenue upside
              </h2>
              <p className="text-[#858585] text-sm md:text-base mb-14 max-w-md leading-relaxed">
                Move the sliders to match your store. We'll show you the real numbers before you commit to anything.
              </p>

              {/* Sliders Container */}
              <div className=" flex flex-col gap-10 mt-10 py-4 md:gap-16 md:mt-20 md:py-8">
                {/* Slider 1: Monthly Store Revenue */}
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between items-center">
                    <label className="text-base md:text-xl font-medium text-black">Monthly Store Revenue</label>
                    <span className="text-base md:text-[22px] font-bold text-black">{formatCurrency(revenue)}</span>
                  </div>
                  <div className="relative group px-1">
                    <input
                      type="range"
                      min="5000"
                      max="100000"
                      step="100"
                      value={revenue}
                      onChange={(e) => setRevenue(parseInt(e.target.value))}
                      className="w-full h-2 md:h-2.5 bg-[#F1EDFF] rounded-full appearance-none cursor-pointer"
                    />

                  </div>
                </div>

                {/* Slider 2: % of Traffic from Mobile */}
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between items-center">
                    <label className="text-base md:text-xl font-medium text-black">% of Traffic from Mobile</label>
                    <span className="text-base md:text-[22px] font-bold text-black">{mobileTraffic}%</span>
                  </div>
                  <div className="relative group px-1">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="1"
                      value={mobileTraffic}
                      onChange={(e) => setMobileTraffic(parseInt(e.target.value))}
                      className="w-full h-2 md:h-2.5 bg-[#F1EDFF] rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Slider 3: Current Mobile Conversion Rate */}
                <div className="space-y-6 md:space-y-8">
                  <div className="flex justify-between items-center">
                    <label className="text-base md:text-xl font-medium text-black">Current Mobile Conversion Rate</label>
                    <span className="text-base md:text-[22px] font-bold text-black">{conversionRate}%</span>
                  </div>
                  <div className="relative group px-1">
                    <input
                      type="range"
                      min="0.1"
                      max="10"
                      step="0.1"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                      className="w-full h-2 md:h-2.5 bg-[#F1EDFF] rounded-full appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Result Card */}
          <div className="flex-1 w-full max-w-[670px] flex justify-center lg:justify-end mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="bg-white rounded-[32px] md:rounded-[48px] p-6 md:p-12 w-full shadow-[0_20px_60px_-15px_rgba(142,108,239,0.08)] border border-[#F1EEFF] relative overflow-hidden"
            >
              <div className="relative z-10">
                <p className="text-[#858585] text-sm md:text-[18px] mb-4 font-normal">
                  Estimated additional monthly revenue
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <motion.span
                    key={results.estimatedMonthly}
                    initial={{ opacity: 0.5, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7962BC] tracking-tight"
                  >
                    {formatCurrency(results.estimatedMonthly)}
                  </motion.span>
                </div>
                <p className="text-[#858585] text-xs md:text-base mb-10 md:mb-14 mt-2">
                  per month with Shopi Seed
                </p>

                <div className="space-y-5 md:space-y-6 mb-10 md:mb-14 pt-8 md:pt-10 border-t border-[#F1EEFF]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#858585] text-sm md:text-base font-normal">Current mobile revenue</span>
                    <motion.span
                      key={results.currentMobile}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      className="text-[#858585] text-sm md:text-base font-semibold"
                    >
                      {formatCurrency(results.currentMobile)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#858585] text-sm md:text-base font-normal">With native app (3x uplift)</span>
                    <motion.span
                      key={results.nativeApp}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      className="text-secondary text-sm md:text-base font-semibold"
                    >
                      {formatCurrency(results.nativeApp)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center pb-8 md:pb-10 border-b border-[#F1EEFF]">
                    <span className="text-[#858585] text-sm md:text-base font-normal">Push notification recovery (est.)</span>
                    <motion.span
                      key={results.pushRecovery}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      className="text-secondary text-sm md:text-base font-semibold"
                    >
                      +{formatCurrency(results.pushRecovery)}
                    </motion.span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-10 md:mb-14">
                  <span className="text-[#858585] text-base md:text-lg font-semibold">12-month upside</span>
                  <motion.span
                    key={results.twelveMonthUpside}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-secondary text-base md:text-xl font-semibold"
                  >
                    {formatCurrency(results.twelveMonthUpside)}
                  </motion.span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 md:py-5 bg-secondary text-white rounded-full font-semibold text-sm md:text-base flex items-center justify-center gap-2 md:gap-3 shadow-[0_10px_30px_-10px_rgba(142,108,239,0.4)] transition-all"
                >
                  Claim My Free Strategy Call
                  <MoveRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RevenueUpside;
