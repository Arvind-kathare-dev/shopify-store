"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, BarChart3, ClipboardList, PenTool, Rocket, TrendingUp } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const CaseStudy = () => {
  const timelineData = [
    {
      day: "WEEK 0 — THE PROBLEM",
      title: "73% mobile traffic. 0.9% conversion rate. Huge gap.",
      description: "Thread & Co was getting 50,000 monthly visitors, 73% on mobile — but their Shopify mobile web was converting at just 0.9%. Slow load times, poor checkout UX, and zero post-visit retention. Revenue was ₹10L/month but mobile should have been delivering ₹13L+.",
      iconSrc: "/icons/problem.svg",
    },
    {
      day: "DAYS 1-9 — BUILD",
      title: "Branded Flutter app, 14 CRO features, connected to live Shopify store.",
      description: "Shopi Seed designed a branded app matching Thread & Co's visual identity. All 14 CRO features were configured: abandoned cart pushes, urgency timers, AI recommendations, social proof, and one-tap checkout with Razorpay.",
      iconSrc: "/icons/build.svg",
    },
    {
      day: "DAY 11 — LAUNCH",
      title: "App Store + Google Play. First push notification sent day 1.",
      description: "The app went live in both stores on Day 11. An app-exclusive 15% launch discount push notification was sent to the first 400 installers. 38% redeemed. The first ₹40K in app-exclusive revenue came in within 48 hours of launch.",
      iconSrc: "/icons/launch.svg",
    },
    {
      day: "DAY 30 — RESULTS",
      title: "+28% total revenue. Conversion rate tripled.",
      description: "Mobile conversion jumped from 0.9% to 2.7%. The abandoned cart recovery sequence recovered 41% of carts that would have been lost. Push notification open rate: 34% (vs 2% for email). Total additional revenue in Month 1: ₹2.8L.",
      iconSrc: "/icons/result.svg",
    },
  ];

  const statCards = [
    { label: "Mobile Conversion Rate", value: "0.9% → 2.7%" },
    { label: "Carts Recovered", value: "41%" },
    { label: "Push Notification Open Rate", value: "34%" },
    { label: "Extra Revenue in 30 Days", value: "$2,140k" },
  ];

  return (
    <section className="w-full py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">

        {/* Main Case Study Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_30px_100px_-20px_rgba(142,108,239,0.12)] border border-[#F1EEFF]"
        >
          {/* Top Purple Header */}
          <div
            className="flex flex-col lg:flex-row gap-10 items-center justify-between p-6 md:p-10 lg:p-14"
            style={{ background: "linear-gradient(278.48deg, #8F7DC2 0%, #7259BA 100%)" }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-[1.5] text-white max-w-[650px] text-center lg:text-left"
            >
              <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold opacity-70 mb-4 block">Full Case Study</span>
              <h2 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] font-bold leading-[1.2] mb-6">
                How Thread & Co went from zero mobile app to ₹2.8L extra revenue in 30 days
              </h2>
              <p className="text-sm md:text-base lg:text-lg opacity-90 leading-relaxed font-normal max-w-[550px] mx-auto lg:mx-0">
                A D2C fashion brand with 73% mobile traffic and a 0.9% conversion rate. Here&apos;s exactly what happened when they went native.
              </p>
            </motion.div>

            <div className="flex-1 flex flex-col gap-4 w-full max-w-[465px]">
              {[
                { val: "+28%", label: "Total Revenue in Month 1" },
                { val: "2.7%", label: "New Mobile Conversion Rate" },
                { val: "$2,140k", label: "Additional Monthly Revenue" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                  className="bg-white/10 backdrop-blur-md flex flex-col gap-2 rounded-2xl p-5 md:p-6 border border-white/20 cursor-default"
                >
                  <span className="text-3xl md:text-4xl lg:text-[48px] font-bold block text-white leading-none">{stat.val}</span>
                  <span className="text-xs md:text-sm lg:text-base text-white/90 font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom White Timeline Section */}
          <div className="p-6 md:p-12 lg:p-16">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-[1440px] mx-auto relative"
            >
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex gap-5 md:gap-10 pb-12 md:pb-16 last:pb-0"
                >
                  {/* Vertical Dotted Line Segment */}
                  {index !== timelineData.length - 1 && (
                    <motion.div 
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                      style={{ originY: 0 }}
                      className="absolute left-8 md:left-[45px] top-8 md:top-[45px] bottom-0 w-px border-l-2 border-dotted border-[#7259BA] z-0 opacity-40" 
                    />
                  )}

                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-16 h-16 md:w-[90px] md:h-[90px] rounded-full bg-[#F5F2FF] flex items-center justify-center border-4 border-white shadow-sm relative z-10"
                  >
                    <Image
                      src={item.iconSrc}
                      alt="step icon"
                      width={34}
                      height={34}
                      className="w-6 h-6 md:w-[34px] md:h-[34px] object-contain"
                    />
                  </motion.div>
                  <div className="pt-1 md:pt-3 relative z-10">
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                      className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] mb-2 block"
                    >
                      {item.day}
                    </motion.span>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + 0.3 }}
                      className="text-lg sm:text-xl md:text-[24px] font-bold text-[#1A1A1A] mb-2 md:mb-3 leading-snug"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + 0.4 }}
                      className="text-sm md:text-[16px] text-[#666] leading-relaxed max-w-auto font-normal"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Summary Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-24">
              {statCards.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-[#F9F8FF] p-6 md:p-8 rounded-[24px] text-center border border-[#F1EEFF]"
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold text-secondary block mb-2">{stat.value}</span>
                  <span className="text-[10px] md:text-base text-[#858585] font-normal  tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Yellow Onboarding Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-12 bg-[#FFF9E6] border border-[#FFE8A3] rounded-[32px] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
            <motion.div 
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(230,168,0,0.1)] flex-shrink-0"
            >
              <AlertTriangle className="w-8 h-8 text-[#E6A800]" />
            </motion.div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-[#856404] mb-2">
                We onboard a maximum of 4 stores per month
              </h4>
              <p className="text-[#856404]/70 text-[13px] md:text-[15px] max-w-xl leading-relaxed font-medium">
                To ensure every client gets full attention during build and launch, we cap new onboardings. May 2026 has 2 spots remaining.
              </p>
            </div>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-[#BF931D] text-white px-10 py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 shadow-[0_15px_35px_-10px_rgba(191,147,29,0.4)] whitespace-nowrap transition-all"
          >
            Reserve My Spot
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudy;
