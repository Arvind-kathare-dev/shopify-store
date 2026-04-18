"use client";

import React from "react";
import clsx from "clsx";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function CustomInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
  error,
  className,
}: CustomInputProps) {
  return (
    <div className="w-full">
      
      {/* Label */}
      <label className="block text-[13px] font-medium text-[#2F274A] mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-purple-500 ml-0.5">*</span>}
      </label>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={clsx(
          "w-full rounded-xl px-4 py-3 text-sm",
          "bg-[#F5F3F9] text-gray-800 placeholder-[#9B92B5]",
          "border border-transparent",
          "focus:outline-none focus:ring-2 focus:ring-[#8E6CEF] focus:bg-white",
          "transition-all duration-200",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          error && "ring-2 ring-red-400 bg-red-50",
          className
        )}
      />

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}