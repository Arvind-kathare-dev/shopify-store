"use client";

import Button from "@/components/Button";
import { FormModal } from "@/components/model/FormModal";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section id="demo" className="bg-white scroll-mt-20 py-16 px-4  md:px-12 md:py-28">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 max-w-xl text-center lg:text-left"
          >
            <p className="text-sm tracking-widest uppercase font-normal text-neutral">
              See it in action
            </p>

            <h2 className="text-2xl md:text-[32px] font-bold leading-tight text-gray-900">
              Watch how Storemo turns your store into a revenue machine
            </h2>

            <p className="text-base sm:text-lg text-neutral leading-relaxed">
              See how a real Shopify store went from zero mobile app to 25% revenue uplift in 30 days.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button variant="secondary" className="w-full sm:w-fit px-8 py-4" onClick={() => setOpen(true)}>
                Get Started Free
              </Button>
            </div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full group"
          >
            <div className="bg-[#4C3B78] rounded-3xl w-full aspect-video flex items-center justify-center shadow-xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />

              {/* PLAY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 hover:shadow-purple-400/20 transition-shadow"
              >
                <Play size={24} className="text-purple-600 fill-purple-600 ml-1" />
              </motion.button>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 font-medium">
                Demo Video
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <AnimatePresence>
        {open && <FormModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}