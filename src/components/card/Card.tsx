"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type CardProps = {
  value: string | number;
  title: string;
  desc: string;
  index?: number;

  // 🔑 Customization props
  bgGradient?: string;
  borderClass?: string;
  className?: string;

  // animation
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
        "rounded-[30px] pt-[39px] pb-[33] pl-[32px] pr-[60px] bg-white shadow shadow-gradient-gray",
        className
      )}
    >
        <div className="flex flex-col gap-[15px]">
 {/* VALUE */}
      <h3 className="font-bold text-[48px] text-secondary leading-none tracking-normal">
        {value}
      </h3>

<div className="flex flex-col gap-[7px]">
 {/* TITLE */}
      <p className="font-medium text-xl leading-none tracking-normal">
        {title}
      </p>

      {/* DESC */}
      <p className="font-normal text-sm leading-5 tracking-normal text-neutral">
        {desc}
      </p>
</div>
     
        </div>
     
    </motion.div>
  );
};