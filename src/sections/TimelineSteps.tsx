"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Palette, ShieldCheck, Rocket } from "lucide-react";
import Image from "next/image";

const STEPS = [
  {
    day: "Day 1",
    title: "Free Strategy Call",
    description: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: <Image src="/icons/file.svg" alt="1" width={40} height={40} />,
  },
  {
    day: "Days 2-8",
    title: "Design & Build",
    description: "Our team designs your branded app, configures all 14 CRO features, and connects it to your Shopify store.",
    icon: <Image src="/icons/designTheme.svg" alt="1" width={45} height={45} />,

  },
  {
    day: "Days 9-11",
    title: "Review & Approve",
    description: "You review the app on your phone. We refine until you're 100% happy — unlimited revisions included.",
    icon: <Image src="/icons/review-rating.svg" alt="1" width={45} height={45} />,

  },
  {
    day: "Days 12-14",
    title: "Go Live",
    description: "We submit to App Store & Google Play, handle all approvals, and launch your first push notification campaign.",
    icon: <Image src="/icons/rocket.svg" alt="1" width={45} height={45} />,

  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function TimelineSteps() {
  return (
    <section className="py-20 md:py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-16 space-y-2"
        >
          <h2 className="text-2xl md:text-[32px] font-bold text-black tracking-tight leading-tight">
            From zero to live app in 14 days
          </h2>
          <p className="text-[#858585] text-sm md:text-base font-normal">
            We handle everything. You stay focused on your business.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              {/* Icon & Pill Container */}
              <div className="relative mb-8 pt-6">
                {/* Day Pill - Overlapping */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-white text-secondary text-[11px] md:text-[14px] font-normal px-6 py-2 rounded-full border border-[#F1EDFF] uppercase tracking-wider shadow-md whitespace-nowrap">
                    {step.day}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#F1EDFF] flex items-center justify-center relative z-0">
                  {step.icon}
                </div>
              </div>

              {/* Text */}
              <div className="space-y-4">
                <h3 className="text-sm md:text-[20px] font-medium text-black leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#858585] font-normal text-xs md:text-sm leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
