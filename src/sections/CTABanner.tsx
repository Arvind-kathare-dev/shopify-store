"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { FormModal } from "@/components/model/FormModal";
import { useState } from "react";
import Link from "next/link";

export default function CTABanner() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full scroll-mt-20 px-4 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl lg:rounded-[48px] bg-primary-gradient"
        >
          {/* Watermark Background */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start pointer-events-none select-none overflow-hidden rounded-3xl lg:rounded-[48px]">
            <span className="text-[clamp(80px,25vw,300px)] font-black text-white/[0.03] leading-none -ml-4 md:ml-12">
              Shopify
            </span>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 md:py-20 gap-10">
            
            {/* LEFT CONTENT */}
            <div className="max-w-xl text-center md:text-left flex flex-col items-center md:items-start gap-6">
              <div className="space-y-4">
                <h2 className="text-white text-[28px] md:text-[34px] font-bold leading-tight">
                  Ready to turn mobile traffic <br className="hidden md:block" /> into revenue?
                </h2>
                <p className="text-white/80 text-sm md:text-base max-w-lg">
                  Join growing Shopify brands using Storemo to sell more on mobile — no developers, no risk.
                </p>
              </div>

              {/* Buttons Group */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  onClick={() => setOpen(true)}
                  className="w-full sm:w-auto"
                >
                  Get Started Free
                </Button>
                <Link href="#demo" className="w-full sm:w-auto">
                  <Button variant="whiteBorder" className="w-full sm:w-auto">
                    Watch Demo
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <p className="text-white/60 text-xs mt-1">
                60-day money-back guarantee · No credit card required · Launch in 14 days
              </p>
            </div>

            {/* RIGHT IMAGE - Restored to original position */}
            <div className="absolute -top-[108px] right-0 w-full lg:w-[380px] justify-center lg:justify-end lg:flex hidden pointer-events-none">
              <Image
                src="/images/bannerImg2.png"
                alt="Mobile preview"
                width={350}
                height={280}
                className="object-contain translate-y-6 lg:translate-y-10"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && <FormModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}