"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { AnimatePresence } from "framer-motion";
import { FormModal } from "@/components/model/FormModal";
import { useState } from "react";

export default function CTABanner() {
   const [open, setOpen] = useState(false);
  return (
    <>
     <section className="w-full bg-white py-10 px-4 md:px-10">
      <div className="relative  rounded-[48px] bg-primary-gradient">

        {/* Watermark */}
        <span className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 text-[clamp(120px,18vw,260px)] font-bold text-white/5 pointer-events-none select-none">
          Shopify
        </span>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-white text-[28px] md:text-[34px] font-bold leading-tight">
              Ready to turn mobile traffic into revenue?
            </h2>

            <p className="text-white/80 mt-3 text-sm md:text-base">
              Join growing Shopify brands using Storemo to sell more on mobile —
              no developers, no risk.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 mt-6">
              <Button variant="outline" onClick={() => setOpen(true)}>
                Get Started Free
              </Button>

              <Button variant="whiteBorder">
                Watch Demo
              </Button>
            </div>

            {/* Trust Text */}
            <p className="text-white/60 text-xs mt-3">
              60-day money-back guarantee · No credit card required · Launch in 14 days
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute -top-[108px] right-0 w-full md:w-[380px]  justify-center md:justify-end md:flex hidden">
            <Image
              src="/images/bannerImg.png"
              alt="Mobile preview"
              width={350}
              height={280}
              className="object-contain drop-shadow-2xl translate-y-6 md:translate-y-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
     <AnimatePresence>
                {open && <FormModal onClose={() => setOpen(false)} />}
            </AnimatePresence>
    </>
   
  );
}