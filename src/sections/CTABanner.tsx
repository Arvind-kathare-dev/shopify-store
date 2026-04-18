"use client";

import Button from "@/components/Button";
import React from "react";

export default function CTABanner() {
    return (
        <section className="w-full  bg-white">
            {/* Outer rounded banner */}
            <div
                className="relative w-full overflow-hidden rounded-[62px] bg-primary-gradient"
                style={{
                    minHeight: "220px",
                }}
            >
                {/* Big watermark "Shopify" text */}
                <div
                    className="absolute inset-0 flex items-center px-4 py-6  pointer-events-none select-none"
                    aria-hidden
                >
                    <span
                        className="
    text-[clamp(80px,14vw,240px)]
    font-bold
    text-[#ffffff0d]
    select-none pl-8
  "
                    >
                        Shopify
                    </span>
                </div>

                {/* Content grid */}
                <div className="relative z-10 flex items-center justify-between h-full px-10 py-10 md:px-16">
                    {/* Left content */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2
                                className="text-white text-[32px] font-bold "
                            >
                                Ready to turn mobile traffic into revenue?
                            </h2>

                            <p className="text-white text-base ">
                                Join growing Shopify brands using Storemo to sell more on mobile —
                                no developers, no risk.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {/* Buttons */}
                            <div className="flex items-center gap-3">


                                <Button variant="primary">
                                    Get Started Free
                                </Button>

                                <Button variant="outline">
                                    Watch Demo
                                </Button>
                            </div>

                            {/* Trust badges */}
                            <p className="text-purple-200 text-xs">
                                60-day money-back guarantee · No credit card required · Launch in 14 days
                            </p>
                        </div>


                    </div>

                    {/* Right: Phone mockup held in hand */}
                    <div
                        className="hidden md:flex flex-shrink-0 items-end justify-center relative"
                        style={{ width: "clamp(200px, 28vw, 360px)", height: "220px" }}
                    >
                        {/* Hand silhouette */}
                        <div
                            className="absolute bottom-0 right-0"
                            style={{ width: "100%", height: "100%", zIndex: 1 }}
                        >
                            {/* Phone frame */}
                            <div
                                className="absolute"
                                style={{
                                    bottom: "-10px",
                                    right: "20px",
                                    width: "140px",
                                    zIndex: 2,
                                }}
                            >
                                {/* Phone shell */}
                                <div
                                    className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800"
                                    style={{ background: "#1a1a2e" }}
                                >
                                    {/* Screen */}
                                    <div className="bg-white" style={{ minHeight: "220px" }}>
                                        {/* Status bar */}
                                        <div className="flex justify-between items-center px-3 pt-2 pb-1 bg-white">
                                            <span className="text-[7px] font-bold text-gray-900">9:41</span>
                                            <div className="w-3 h-1.5 border border-gray-700 rounded-sm">
                                                <div className="w-1.5 h-full bg-gray-700 rounded-sm" />
                                            </div>
                                        </div>

                                        {/* Header */}
                                        <div className="px-3 pb-1 flex items-center justify-between">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                                                    <span className="text-white text-[6px] font-bold">AS</span>
                                                </div>
                                                <div>
                                                    <div className="text-[5px] text-gray-400">Hello 👋</div>
                                                    <div className="text-[7px] font-semibold text-gray-900">Aliana Stevano</div>
                                                </div>
                                            </div>
                                            <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Search bar */}
                                        <div className="mx-3 bg-gray-100 rounded-full px-2 py-1 mb-2 flex items-center gap-1">
                                            <svg className="w-2 h-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <span className="text-[6px] text-gray-400">Search anything...</span>
                                        </div>

                                        {/* Flash sale */}
                                        <div className="mx-3 rounded-xl overflow-hidden bg-gradient-to-r from-purple-500 to-purple-400 mb-2 p-2">
                                            <div className="bg-yellow-400 text-yellow-900 text-[5px] font-bold px-1.5 py-0.5 rounded-full uppercase inline-block mb-1">
                                                Flash Sale
                                            </div>
                                            <div className="text-white text-xs font-extrabold">20% OFF</div>
                                            <div className="text-purple-100 text-[5px]">*on All Products</div>
                                        </div>

                                        {/* Categories */}
                                        <div className="px-3 mb-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[6px] font-semibold text-gray-800">Popular Categories</span>
                                                <span className="text-[5px] text-purple-500">View all</span>
                                            </div>
                                            <div className="grid grid-cols-4 gap-1">
                                                {["Tops", "Bottoms", "Shoes", "Bags"].map((cat) => (
                                                    <div key={cat} className="flex flex-col items-center">
                                                        <div className="w-6 h-6 rounded-md bg-gray-200" />
                                                        <span className="text-[4.5px] text-gray-500 mt-0.5">{cat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Trending */}
                                        <div className="px-3 mb-2">
                                            <span className="text-[6px] font-semibold text-gray-800 block mb-1">Trending Now</span>
                                            <div className="grid grid-cols-2 gap-1">
                                                {[1, 2].map(i => (
                                                    <div key={i}>
                                                        <div className="bg-gray-200 h-10 rounded-lg w-full" />
                                                        <div className="text-[4.5px] font-medium text-gray-700 mt-0.5">Men's Harrington</div>
                                                        <div className="text-[5px] font-bold text-gray-900">₹2,499</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Bottom nav */}
                                        <div className="flex justify-around px-3 py-2 border-t border-gray-100">
                                            {["🏠", "🔍", "❤️", "👤"].map((icon, i) => (
                                                <span key={i} className="text-[10px]">{icon}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hand shape using SVG */}
                            <svg
                                className="absolute bottom-0 right-0"
                                style={{ width: "100%", height: "100%", zIndex: 1 }}
                                viewBox="0 0 360 220"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Palm / hand holding the phone from bottom-right */}
                                <ellipse cx="270" cy="195" rx="80" ry="32" fill="#c68642" opacity="0.85" />
                                <ellipse cx="260" cy="190" rx="70" ry="26" fill="#d4956a" opacity="0.7" />
                                {/* Fingers */}
                                <rect x="195" y="160" width="22" height="55" rx="11" fill="#c68642" />
                                <rect x="222" y="150" width="22" height="65" rx="11" fill="#c68642" />
                                <rect x="249" y="148" width="22" height="67" rx="11" fill="#c68642" />
                                <rect x="276" y="152" width="20" height="60" rx="10" fill="#c68642" />
                                {/* Thumb */}
                                <ellipse cx="190" cy="185" rx="14" ry="26" fill="#c68642" transform="rotate(-20 190 185)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}