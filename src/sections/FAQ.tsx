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

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section id="faq" className="scroll-mt-[48px] py-8 md:px-[109px] md:pt-[120px] md:pb-[65px] bg-white">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col gap-[51px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="text-center flex flex-col gap-[7px]"
        >
          <p className="font-normal text-neutral text-sm leading-none tracking-[0.1em] uppercase">
            FAQ
          </p>

          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            Got <span className="text-secondary">questions?</span>
          </h2>

          <p className="font-normal text-base text-neutral">
            Everything you need to know about launching your Shopify mobile app.
          </p>
        </motion.div>

        {/* ACCORDION */}
        <div className="space-y-4 max-w-4xl mx-auto w-full">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className={`rounded-xl border transition ${isOpen
                  ? "border-secondary bg-white shadow-sm"
                  : "border-transparent bg-background-faq hover:bg-gray-100/50"
                  }`}
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className={`text-sm md:text-base font-medium transition-colors ${isOpen ? "text-secondary" : "text-gray-900"}`}>
                    {item.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={18} className={isOpen ? "text-secondary" : "text-gray-500"} />
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-5"
                    >
                      <p className="text-sm md:text-base text-gray-500 pb-4">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}