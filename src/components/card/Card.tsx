"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type CardProps = {
  value: string | number;
  title: string;
  desc: string;
  index?: number;
  bgGradient?: string;
  borderClass?: string;
  className?: string;
  variants?: any;
};

export const Card = ({
  value,
  title,
  desc,
  index = 0,
  className,
  variants,
}: CardProps) => {
  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={clsx(
        "rounded-[24px] lg:rounded-[32px] p-8 md:p-10",
        "bg-white border border-gray-100",
        "shadow-soft transition-all duration-300 hover:border-secondary/30 hover:shadow-md group",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        {/* VALUE */}
        <h3 className="font-bold text-3xl md:text-[48px] text-secondary leading-none tracking-tight group-hover:scale-105 transition-transform origin-left">
          {value}
        </h3>

        <div className="flex flex-col gap-3">
          {/* TITLE */}
          <p className="font-medium text-lg md:text-[24px] leading-tight text-black tracking-tight">
            {title}
          </p>

          {/* DESC */}
          <p className="font-normal text-sm md:text-base leading-relaxed text-[#858585]">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};