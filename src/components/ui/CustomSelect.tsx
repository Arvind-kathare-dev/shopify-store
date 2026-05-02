"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="w-full relative" ref={containerRef}>
      {/* Label */}
      <label className="block text-[13px] font-bold text-gray-700 mb-2 tracking-wide">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {/* Select Button */}
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "w-full rounded-xl px-4 py-3.5 text-sm text-left flex items-center justify-between",
            "bg-[#F5F3F9] text-gray-800 transition-all duration-200 border-2",
            isOpen ? "border-secondary bg-white ring-4 ring-secondary/5" : "border-transparent",
            disabled && "opacity-50 cursor-not-allowed",
            error && "border-red-400 bg-red-50",
            className
          )}
        >
          <span className={clsx("truncate", !selectedOption && "text-gray-400")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            size={18}
            className={clsx("text-gray-400 transition-transform duration-200", isOpen && "rotate-180 text-secondary")}
          />
        </button>

        {/* Dropdown Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute z-[100] left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-h-[240px] overflow-y-auto"
            >
              <div className="p-1">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={clsx(
                      "w-full text-left px-4 py-3 text-sm rounded-xl transition-colors",
                      value === opt.value
                        ? "bg-secondary/10 text-secondary font-bold"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error Message */}
      {error && <p className="mt-1.5 text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}