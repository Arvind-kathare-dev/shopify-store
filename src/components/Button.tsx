"use client";

import React from "react";
import clsx from "clsx";
import { motion, HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "border" | "whiteBorder";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
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
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-primary-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/40",
    secondary: "bg-secondary text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/40",
    outline: "border-2 border-border text-gray-900 bg-white hover:bg-gray-50",
    ghost: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    border: "bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-white",
    whiteBorder: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4.5 text-base",
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98, y: 0 } : {}}
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 active:scale-95",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed grayscale",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  );
}