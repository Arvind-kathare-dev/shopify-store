// sections/FAQAdvanced.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to launch my app?",
    a: "Most stores go live within 7–14 days. We handle everything from design customization to App Store & Google Play submission.",
  },
  {
    q: "Do I need a developer to maintain the app?",
    a: "No. Our platform is no-code. You can manage everything easily without technical knowledge.",
  },
  {
    q: "What makes Storemo different from other app builders?",
    a: "We focus on CRO, personalization, and real revenue growth—not just building apps.",
  },
  {
    q: "Will it work with my existing Shopify theme and apps?",
    a: "Yes, it integrates seamlessly with your Shopify store and existing setup.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes, we offer a 60-day money-back guarantee.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section id="faq" className=" p-4 md:px-[109px] md:pt-[90px] md:pb-[65px] scroll-mt-20  bg-white">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-[51px]">

        {/* HEADER */}
        <div className="text-center flex flex-col gap-[7px]">
          <p className="tfont-normal text-neutral text-sm leading-none tracking-[0.1em] uppercase">
            FAQ
          </p>

          <h2 className="font-bold text-2xl leading-none tracking-normal">
            Got <span className="text-secondary">questions?</span>
          </h2>

          <p className="font-normal text-base leading-none tracking-normal text-center text-neutral">
            Everything you need to know about launching your Shopify mobile app.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`rounded-xl border transition ${
                  isOpen
                    ? "border-secondary bg-white"
                    : "border-transparent bg-background-faq"
                }`}
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {item.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-5"
                    >
                      <p className="text-sm text-gray-500 pb-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}