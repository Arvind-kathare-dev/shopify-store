"use client";

import Button from "@/components/Button";
import { FormModal } from "@/components/model/FormModal";
import { AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import React, { useState } from "react";

export default function HeroSection() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className=" font-sans mt-[103px]">
                {/* Hero Section */}
                <section className="flex flex-col items-center gap-8  p-4 text-center overflow-hidden">
                    {/* Headline */}
                    <div className="flex flex-col items-center gap-[21px]">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
                            Your Shopify Store deserves
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-muted leading-tight">
                            a High-Converting Mobile App
                        </h2>

                        {/* Subheading */}
                        <p className="text-neutral text-base max-w-lg ">
                            We build native mobile apps with built-in CRO that turn your mobile
                            traffic into revenue — push notifications, personalization, and 14
                            conversion features included.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">

                            <Button variant="primary" onClick={() => setOpen(true)}>
                                Get Started Free
                            </Button>
                            <Button variant="outline" rightIcon={<Play size={15} />}>
                                Watch Demo
                            </Button>
                        </div>
                    </div>


                    {/* Phone Mockup Area */}
                    <div className="relative w-full max-w-3xl flex justify-center items-end">
                        {/* Left Floating Card - 7-14 days */}
                        <div className="absolute left-4 md:left-40 bottom-32 z-10 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-900 text-sm leading-none">7-14 days</div>
                                <div className="text-gray-400 text-xs mt-0.5">to launch</div>
                            </div>
                        </div>

                        {/* Right Floating Card - CRO features */}
                        <div className="absolute right-4 md:right-8 top-20 z-10 bg-purple-600 rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-purple-500 flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-white text-2xl leading-none">14</div>
                                <div className="text-purple-200 text-xs mt-0.5">CRO features</div>
                            </div>
                        </div>

                        {/* Phone Mockup */}
                        <div className="relative z-0 mx-auto w-56 md:w-64">
                            {/* Phone frame */}
                            <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                                <div className="bg-white rounded-[2rem] overflow-hidden">
                                    {/* Status bar */}
                                    <div className="bg-white flex items-center justify-between px-5 pt-3 pb-1">
                                        <span className="text-xs font-semibold text-gray-900">9:41</span>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-3 h-3 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                            </svg>
                                            <div className="w-3.5 h-2 border border-gray-700 rounded-sm relative">
                                                <div className="absolute inset-0.5 right-1 bg-gray-700 rounded-sm" />
                                                <div className="absolute -right-0.5 top-0.5 w-0.5 h-1 bg-gray-700 rounded-r-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* App content */}
                                    <div className="px-4 pb-4 bg-white">
                                        {/* Welcome header */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">AS</span>
                                                </div>
                                                <div>
                                                    <div className="text-gray-400 text-[9px]">Hello, Welcome 👋</div>
                                                    <div className="text-gray-900 text-[11px] font-semibold">Aliana Stevano</div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Search bar */}
                                        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 mb-3">
                                            <svg className="w-3 h-3 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <span className="text-gray-400 text-[9px] flex-1">Search anything...</span>
                                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                            </svg>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex gap-1.5 mb-3 overflow-x-hidden">
                                            {["Trending: White sneakers", "Recently viewed", "Top rated hoodies"].map((tag, i) => (
                                                <span key={i} className="whitespace-nowrap text-[8px] text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Flash sale banner */}
                                        <div className="rounded-xl overflow-hidden relative bg-gradient-to-r from-purple-500 to-purple-400">
                                            <div className="absolute top-1 left-2">
                                                <div className="bg-yellow-400 text-yellow-900 text-[6px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                                                    Flash Sale · Ends in 5:41
                                                </div>
                                            </div>
                                            <div className="pt-5 pl-3 pb-3 flex justify-between items-end">
                                                <div>
                                                    <div className="text-white text-[9px] font-medium opacity-90">Happy Weekend</div>
                                                    <div className="text-white text-lg font-extrabold leading-none">20% OFF</div>
                                                    <div className="text-purple-200 text-[8px]">*on All Products</div>
                                                </div>
                                                <div className="w-20 h-16 relative">
                                                    {/* Simplified person illustration */}
                                                    <div className="absolute bottom-0 right-0 w-14 h-16 bg-gradient-to-t from-purple-600 to-transparent rounded-t-full opacity-40" />
                                                    <div className="absolute bottom-1 right-2 w-10 h-12 bg-amber-200 rounded-t-full" />
                                                    <div className="absolute bottom-4 right-3 w-6 h-6 bg-amber-300 rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Star rating card */}
                        <div className="absolute right-12 md:right-[172px] bottom-20 z-10 bg-white rounded-xl shadow-lg pl-[17px] pr-[49px] py-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div>
                                <div className="font-bold text-gray-900 text-sm leading-none">4.85</div>
                                <div className="text-gray-400 text-[9px]">62 reviews</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <div className="bg-primary px-[47px] py-[26px] ">
                    <div className="w-full mx-auto">
                        <div className="flex flex-wrap items-center justify-between gap-y-2">
                            {[
                                "7-14 Days To Launch",
                                "12.4K Push Notifications/Day",
                                "↑22% Revenue Uplift",
                                "60-Day Money-back Guarantee",
                                "↑32% AOV Increase",
                                "iOS & Android Native Apps",
                            ].map((stat, i) => (
                                <span key={i} className="text-white text-xs font-medium whitespace-nowrap px-2">
                                    {stat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {open && <FormModal onClose={() => setOpen(false)} />}
            </AnimatePresence>
        </>

    );
}