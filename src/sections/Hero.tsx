"use client";

import Button from "@/components/Button";
import { FormModal } from "@/components/model/FormModal";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stats = [
  "7-14 Days To Launch",
  "12.4K Push Notifications/Day",
  "↑22% Revenue Uplift",
  "60-Day Money-back Guarantee",
  "↑32% AOV Increase",
  "iOS & Android Native Apps",
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

const floating = (delay: number = 0) => ({
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay
    }
  }
});

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 pt-6 text-center overflow-hidden">
          {/* Headline */}
          <div className="flex flex-col items-center gap-2 lg:gap-[21px]">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="flex items-center flex-col gap-1"
            >
              <div>
                <h1 className="text-2xl md:text-[40px] font-bold text-gray-900 w-auto leading-tight max-w-2xl">
                  Your Shopify Store deserves
                </h1>
                <h2 className="text-2xl md:text-[40px] font-bold text-neutral-muted leading-tight">
                  a High-Converting Mobile App
                </h2>
              </div>

              {/* Subheading */}
              <p className="text-neutral text-xs sm:text-[15px] w-auto max-w-[647px] p-2 sm:p-0 leading-relaxed">
                We build native mobile apps with built-in CRO that turn your mobile traffic into revenue — push notifications, personalization, and 14 conversion features included.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-4"
            >
              <Button variant="secondary" onClick={() => setOpen(true)} rightIcon={<ArrowRight size={20} />}>
                Get Started Free
              </Button>
              <Link href="#demo">
                <Button variant="outline" rightIcon={<Image src={"/icons/video.svg"} alt="icon" width={20} height={20} />}>
                  Watch Demo
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Phone Mockup Area */}
          <div className="relative w-full max-w-3xl flex justify-center items-end">
            {/* Left Floating Card - 7-14 days */}
            <motion.div
              variants={floating(0)}
              animate="animate"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-[32px] bottom-[140px] z-10 bg-white rounded-2xl shadow-lg pt-[16px] pb-[16px] pl-[17px] pr-[59px] md:flex hidden items-center gap-3 border border-gray-100"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-yellow-light flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900 text-sm leading-none">7-14 days</div>
                <div className="text-gray-400 text-xs mt-0.5">to launch</div>
              </div>
            </motion.div>

            {/* Right Floating Card - CRO features */}
            <motion.div
              variants={floating(1)}
              animate="animate"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -right-[96px] top-[160px] z-10 bg-primary-gradient rounded-[20px] shadow-lg px-3 py-2 md:flex hidden items-center gap-3"
            >
              <div className="w-[70px] h-[70px] rounded-xl flex items-center justify-center">
                <div className="z-10 overflow-hidden">
                  <Image src="/icons/icon1.svg" alt="icon" width={60} height={60} />
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-2xl leading-none">14</div>
                <div className="text-purple-200 text-xs mt-0.5">CRO features</div>
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-0 mx-auto w-[437.6px] md:p-0 px-6"
            >
              <Image src="/images/mobileImg.png" alt="img" width={450} height={500} priority />
            </motion.div>

            {/* Star rating card */}
            <motion.div
              variants={floating(2)}
              animate="animate"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute right-[48px] bottom-[64px] z-10 bg-white rounded-xl shadow-lg pl-[17px] pr-[49px] py-4 md:flex hidden items-center gap-[11px] border border-gray-100"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-yellow-light flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <div className="text-left">
                <div className="font-extrabold text-gray-900 text-base">4.85</div>
                <div className="text-gray-400 text-[12px]">62 reviews</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <div className="bg-primary py-5 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              },
              opacity: { duration: 1 }
            }}
          >
            {/* Duplicate content for seamless loop */}
            {[...stats, ...stats].map((stat, i) => (
              <span
                key={i}
                className="text-white text-sm px-4 flex-shrink-0 font-medium tracking-wide"
              >
                {stat}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {open && <FormModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}