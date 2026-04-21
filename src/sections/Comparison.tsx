"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowDown } from "lucide-react";

const features = [
  "True Native App",
  "Built-in CRO Features",
  "Personalization Engine",
  "Time to Launch",
  "No Developer Needed",
];

export default function Comparison() {
  return (
    <section className="py-8 lg:py-20 px-4  lg:px-12">
      <div className="w-full max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
            HOW WE COMPARE
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Shopifystore vs{" "}
            <span className="text-[#7B61FF]">everything else</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="w-full flex flex-col items-center xl:flex-row gap-6 lg:items-start">

          {/* LEFT SIDE */}
          <div className="w-full flex flex-col gap-6 mt-auto">

            {/* CTA */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex gap-2 items-center mx-6">
                <div className="w-6 h-6 flex items-center justify-center rounded-full border border-[#7B61FF] text-[#7B61FF]">
                  <ArrowDown size={14} />
                </div>
                <div className="flex flex-col">
                  <span className=" text-[10px] font-medium text-secondary">Get Started</span>
                  <h3 className="font-base font-semibold">Features Details</h3>
                </div>
              </div>


            </div>

            {/* FEATURE CARD */}
            <div className="rounded-[25px] w-full bg-primary-card-gradient text-white px-6 md:pr-[87px] md:pl-[40px] py-10">

              <div className="flex flex-col gap-6  md:gap-[37px] text-[14px]">
                {features.map((f, i) => (
                  <p key={i} className="font-semibold text-base leading-none tracking-normal">{f}</p>
                ))}
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full   flex-col flex gap-3 sm:flex-row xl:flex-row md:gap-[15px]">
            {/* COLUMNS */}
            {[
              {
                title: "WEBVIEW BUILDERS",
                items: [
                  <Check className=" mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                  <Check className="mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                  <Check className="mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                  <span className="text-sm text-gray-500 text-center">2–4 weeks</span>,
                  <Check className="mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                ],
              },
              {
                title: "CUSTOM DEV",
                items: [
                  <Check className="mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                  <X className="mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                  <span className="text-sm text-gray-500 text-center">Custom build</span>,
                  <span className="text-sm text-gray-500 text-center">3–6 months</span>,
                  <X className="mx-auto p-1 bg-customGray-100 rounded-full text-white" size={18} />,
                ],
              },
              {
                title: "SHOPIFYSTORE",
                highlight: true,
                items: [
                  <Check className="mx-auto p-1 bg-secondary-100 rounded-full text-white" size={18} />,
                  <div className="text-sm text-secondary-100 flex items-center justify-center gap-2 ">
                    <Check className=" p-1 bg-secondary-100 rounded-full text-white" size={18} />
                    <span>14 features</span>
                  </div>,
                  <div className="text-sm text-secondary-100 flex items-center justify-center gap-2 ">
                    <Check className=" p-1 bg-secondary-100 rounded-full text-white" size={18} />
                    <span>Included</span>
                  </div>,
                  <span className="text-sm text-secondary-100 text-center">7–14 days</span>,
                  <Check className="mx-auto p-1 bg-secondary-100 rounded-full text-white" size={18} />,
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                className={`
                w-full
                lg:w-[295px]
                rounded-[25px]
                border border-secondary-light
                p-4
                md:px-8 md:py-10
                h-fit
                flex flex-col
                justify-start
                gap-8
                text-center
                ${col.highlight
                    ? "bg-white border-secondary-light shadow-[0_10px_30px_rgba(123,97,255,0.08)]"
                    : "bg-white"
                  }
              `}
              >
                <h3
                  className={`font-semibold text-[16px] leading-none tracking-normal text-center uppercase ${col.highlight ? "text-secondary-100" : "text-neutral"
                    }`}
                >
                  {col.title}
                </h3>

                <div className="flex flex-col justify-between flex-1 gap-8">
                  {col.items.map((item, idx) => (
                    <div key={idx} className="text-customGray-200">{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}