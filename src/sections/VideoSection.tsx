"use client";

import Button from "@/components/Button";
import { FormModal } from "@/components/model/FormModal";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
   const [open, setOpen] = useState(false);
  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 max-w-xl text-center lg:text-left"
        >
          <p className="text-xs tracking-widest uppercase text-neutral">
            See it in action
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            Watch how Storemo turns
            <br className="hidden sm:block" />
            your store into a revenue
            <br className="hidden sm:block" />
            machine
          </h2>

          <p className="text-sm sm:text-base text-neutral leading-relaxed">
            See how a real Shopify store went from zero mobile app
            to 25% revenue uplift in 30 days.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button variant="secondary" className="w-full sm:w-fit" onClick={() => setOpen(true)}>
              Get Started Free
            </Button>
          </div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div className="bg-[#4C3B78] rounded-2xl sm:rounded-3xl w-full aspect-video flex items-center justify-center shadow-lg">

            {/* PLAY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <Play size={18} className="text-purple-600 ml-1" />
            </motion.button>

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