"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "border" | "whiteBorder";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
     whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
        
        // Sizes
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",

        // Variants
        variant === "primary" &&
          "bg-gradient-to-r from-[#8E6CEF] to-[#46396A] text-white hover:opacity-90 shadow-md",

           variant === "secondary" &&
          "bg-secondary text-white hover:opacity-90 shadow-md",

        variant === "outline" &&
          "border border-[#CFC9E3] text-[#46396A] bg-white hover:bg-[#F5F3F9]",

        variant === "ghost" &&
          "bg-[#F5F3F9] text-[#46396A] hover:bg-[#E9E5F4]",

            variant === "border" &&
          "bg-transparent text-secondary border border-secondary hover:opacity-80",

            variant === "whiteBorder" &&
          "bg-transparent text-white border border-white hover:opacity-80",

        // States
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",

        className
      )}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </motion.button>
  );
}