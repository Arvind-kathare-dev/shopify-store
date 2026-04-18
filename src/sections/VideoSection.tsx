// sections/VideoSection.tsx
"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[25px]"
          >
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
              See it in action
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
              Watch how Storemo turns
              <br />
              your store into a revenue
              <br />
              machine
            </h2>

            <p className="text-gray-500 mt-4 max-w-md text-sm leading-relaxed">
              See how a real Shopify store went from zero mobile app
              to 25% revenue uplift in 30 days.
            </p>

          
            <Button variant="primary" className="w-fit">
              Get Started Free
            </Button>
          </motion.div>

          {/* RIGHT VIDEO CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#4C3B78] rounded-[28px] w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] flex items-center justify-center shadow-lg">

              {/* Play Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <Play size={20} className="text-purple-600 ml-1" />
              </motion.button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}