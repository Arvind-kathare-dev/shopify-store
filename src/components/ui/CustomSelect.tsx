"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error,
  className,
}: CustomSelectProps) {
  return (
    <div className="w-full">
      
      {/* Label */}
      <label className="block text-[13px] font-medium text-[#2F274A] mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-purple-500 ml-0.5">*</span>}
      </label>

      {/* Select Wrapper */}
      <div className="relative">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={clsx(
            "w-full appearance-none rounded-xl px-4 py-3 text-sm pr-10",
            "bg-[#F5F3F9] text-gray-800",
            "border border-transparent",
            "focus:outline-none focus:ring-2 focus:ring-[#8E6CEF] focus:bg-white",
            "transition-all duration-200",
            "disabled:opacity-60 disabled:cursor-not-allowed",
            !value && "text-[#9B92B5]",
            error && "ring-2 ring-red-400 bg-red-50",
            className
          )}
        >
          {/* Placeholder */}
          <option value="" disabled hidden>
            {placeholder}
          </option>

          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-gray-800">
              {opt.label}
            </option>
          ))}
        </select>

        {/* Icon */}
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B92B5] pointer-events-none"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}