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
      <section id="demo" className="bg-white scroll-mt-20 py-16 px-4  md:px-12 md:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
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
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full group"
          >
            <div className="bg-[#4C3B78] rounded-3xl w-full aspect-video flex items-center justify-center shadow-xl relative overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />

              {/* Animated background rings */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[80%] h-[80%] border border-white/20 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[60%] h-[60%] border border-white/10 rounded-full"
              />

              {/* PLAY BUTTON */}
              <motion.button
                whileHover={{ scale: 1.15, boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 transition-all duration-300"
              >
                <Play size={24} className="text-purple-600 fill-purple-600 ml-1 transition-transform group-hover:scale-110" />
              </motion.button>

              {/* Decorative elements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/80 font-medium border border-white/10"
              >
                Demo Video
              </motion.div>
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