// sections/FeaturesAdvanced.tsx
"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function FeaturesAdvanced() {
  return (
    <section className="py-24 bg-[#F7F7FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            Engineered for revenue
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Everything You Need{" "}
            <span className="text-purple-500">
              to Sell more on Mobile
            </span>
          </h2>

          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Deep Shopify integration with a native experience your
            customers will actually buy from
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* LEFT BIG CARD */}
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#EDEAF6] rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-semibold mb-2">
                True Native Mobile App
              </h3>
              <p className="text-sm text-gray-500">
                Blazing-fast Flutter-powered app published to App Store & Google Play.
              </p>
            </div>

            {/* Dummy phone UI */}
            <div className="mt-6 bg-white rounded-xl p-3 shadow-sm">
              <div className="h-40 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                App Preview
              </div>
            </div>
          </motion.div>

          {/* CENTER LARGE CARD */}
          <motion.div
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 bg-[#4C3B78] text-white rounded-2xl p-6 relative overflow-hidden"
          >
            <h3 className="font-semibold mb-2">
              Smart Push Notifications
            </h3>

            <p className="text-sm text-purple-200">
              Abandoned cart recovery, flash sales, and personalized nudges.
            </p>

            <div className="mt-6">
              <p className="text-3xl font-bold">12.4K</p>
              <p className="text-sm text-purple-200">
                Notifications delivered daily
              </p>
            </div>

            {/* Floating cards */}
            <div className="absolute right-6 top-6 w-28 h-36 bg-white/20 rounded-lg" />
            <div className="absolute right-20 bottom-6 w-32 h-20 bg-white/20 rounded-lg" />
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* FEATURES COUNT */}
            <motion.div
              custom={2}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#EDEAF6] rounded-2xl p-6"
            >
              <p className="text-sm text-gray-500">Features</p>
              <p className="text-3xl font-bold text-gray-900">14</p>
            </motion.div>

            {/* CRO CARD */}
            <motion.div
              custom={3}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#EDEAF6] rounded-2xl p-6"
            >
              <div className="h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-xs text-gray-400">
                Product UI
              </div>

              <h3 className="font-semibold mb-1">
                Built-in CRO Suite
              </h3>

              <p className="text-sm text-gray-500">
                Sticky add-to-cart, urgency timers, upsells.
              </p>
            </motion.div>
          </div>

          {/* BOTTOM LEFT */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#EDEAF6] rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-2">
              AI Personalization Engine
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Dynamic home screens, recommendations based on behavior.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 bg-gray-100 rounded-lg" />
              <div className="h-20 bg-gray-100 rounded-lg" />
            </div>
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 bg-[#EDEAF6] rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-2">
              Real-time Shopify Sync + No-code Config
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Products, inventory, and orders sync automatically.
            </p>

            <div className="h-24 bg-gray-100 rounded-lg" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}