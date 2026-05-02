"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

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

export default function FeaturesAdvanced() {
  return (
    <section id="features" className="bg-white scroll-mt-20 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <p className="text-xs tracking-widest uppercase text-neutral">
            Engineered for revenue
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold">
            Everything You Need{" "}
            <span className="text-secondary">to Sell more on Mobile</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral">
            Deep Shopify integration with a native experience your customers
            will actually buy from
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* LEFT */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gradient-card2 md:h-fit rounded-2xl px-[32px] pt-[53px] flex flex-col gap-8 justify-between"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-title">True Native Mobile App</h3>
              <p className="text-caption">
                Blazing-fast Flutter-powered app published to App Store & Google Play under your brand. No webview, no compromise — ever.
              </p>
            </div>

            <div className="relative w-full h-[300px]">
              <Image
                src="/images/f-img5.png"
                alt="img"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* CENTER */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* TOP */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#4C3B78] relative min-h-[274px] text-white rounded-2xl px-[32px] py-[54px] flex flex-col sm:flex-row justify-between gap-4 overflow-hidden"
            >
              <div className="max-w-[318px] flex flex-col gap-10 md:gap-[45px] z-10">
                <div>
                  <h3 className="text-title text-white">Smart Push Notifications</h3>
                  <p className="text-caption">
                    Abandoned cart recovery, back-in-stock alerts, flash sale blasts, and personalized nudges — all automated.
                  </p>
                </div>


                <div className="">
                  <p className="text-2xl sm:text-3xl font-bold">12.4K</p>
                  <p className="text-xs text-purple-200">Notifications delivered daily</p>
                </div>
              </div>

              <div className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-[327px] h-[200px] md:h-[245px]">
                <Image
                  src="/images/f-img1.png"
                  alt="push"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 327px"
                />
              </div>
            </motion.div>

            {/* BOTTOM GRID */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* AI */}
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-background rounded-2xl pl-[32px] pr-[28px] pt-[30px] flex flex-col justify-between gap-[26px]"
              >
                <div>
                  <h3 className="text-title">
                    AI Personalization Engine
                  </h3>
                  <p className="text-caption">
                    Dynamic home screens, personalized collections, and AI-powered product recommendations based on each user's behavior — out of the box.
                  </p>
                </div>

                <div className="w-full justify-center flex items-center pb-4 relative h-[155px]">
                  <Image
                    src="/images/f-img6.png"
                    alt="ai"
                    fill
                    unoptimized
                    className="object-contain" // Ensures original aspect ratio is maintained
                  />
                </div>

              </motion.div>

              {/* SHOPIFY */}
              <motion.div
                custom={3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-background-card rounded-2xl pr-[39px] pl-[33px] pb-[3px] pt-[25px] flex flex-col gap-4"
              >
                <div>
                  <h3 className="text-title">
                    Real-time Shopify Sync + No-code Config
                  </h3>
                  <p className="text-caption">
                    Products, prices, and inventory sync automatically. Customize layout, colors, and features from your dashboard — no developers needed, ever.
                  </p>
                </div>


                <div className="w-full justify-center flex items-center pb-4 relative h-[155px]">
                  <Image
                    src="/images/f-img3.png"
                    alt="shopify"
                    fill
                    unoptimized
                    className="object-contain" // Ensures original aspect ratio is maintained
                  />
                </div>

              </motion.div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* COUNT */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-background-card rounded-[20px] flex flex-col gap-[26px] py-[27px] px-[26px]"
            >
              <div className="w-[55px] h-[55px] p-2 rounded-xl bg-gray-50 flex justify-center items-center">
                <Image src={"/icons/icon2.svg"} alt="icon" width={30} height={30} />
              </div>
              <div className="flex flex-col gap-[5px]">
                <p className="text-lg font-medium">Features</p>
                <p className="text-[40px] font-bold">14</p>
              </div>

            </motion.div>

            {/* CRO */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#EDEAF6] rounded-2xl p-5 flex flex-col gap-4"
            >
              <div className="w-full justify-center flex items-center">
                <Image
                  src="/images/image5.svg"
                  alt="cro"
                  width={198}
                  height={167}
                />
              </div>

              <div>
                <h3 className="text-title">Built-in CRO Suite</h3>
                <p className="text-caption">
                  Sticky add-to-cart, urgency timers, social proof, smart upsells — all pre-built.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
