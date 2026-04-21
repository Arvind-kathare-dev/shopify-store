// sections/NumbersAdvanced.tsx
"use client";

import { Card } from "@/components/card/Card";
import { motion } from "framer-motion";

const stats = [
  {
    value: "23%",
    title: "Only 23% of Shopify stores have a mobile app",
    desc: "Your competitors who go mobile first are capturing revenue you're leaving on the table.",
    
  },
  {
    value: "3×",
    title: "Better conversion rate vs. mobile web",
    desc: "Native apps load faster, feel better, and convert dramatically better.",
  },
  {
    value: "25%",
    title: "Typical revenue uplift in the first 30 days",
    desc: "Push notifications, CRO features, and app-exclusive retention mechanics work together.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function NumbersAdvanced() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F7F7FB]">
      <div className="w-full flex flex-col gap-[45px] mx-auto px-6 lg:px-16">

        {/* HEADER */}
        <div className="flex flex-col gap-[11px]">
          <p className="font-normal text-neutral text-sm leading-none tracking-[0.1em] uppercase">
            The Mobile Opportunity
          </p>

          <h2 className=" font-bold text-2xl leading-none tracking-normal">
            The Numbers don’t Lie — Mobile Wins
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {stats?.map((item, i) => (
            <Card
              key={i}
              value={item.value}
              title={item.title}
              desc={item.desc}
            />
          ))}

        </div>
      </div>
    </section>
  );
}