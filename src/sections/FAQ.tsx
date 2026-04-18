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
    <section className="py-24 bg-[#F7F7FB]">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            FAQ
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Got <span className="text-purple-500">questions?</span>
          </h2>

          <p className="text-gray-500 text-sm mt-3">
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
                    ? "border-purple-400 bg-white"
                    : "border-transparent bg-gray-100"
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