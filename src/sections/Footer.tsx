"use client";

import Link from "next/link";

const socials = [
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
        0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5.5A4.5 4.5 
        0 1112 17a4.5 4.5 0 010-9.5zm5.25-.75a1.25 1.25 
        0 11-2.5 0 1.25 1.25 0 012.5 0zM12 
        9a3 3 0 100 6 3 3 0 000-6z"/>
      </svg>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.08V12h2.42V9.8c0-2.39 
        1.43-3.71 3.62-3.71 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 
        0-1.57.74-1.57 1.5V12h2.67l-.43 
        2.88h-2.24v6.99A10 10 0 0022 12z"/>
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 
        6S0 4.88 0 3.5 1.12 1 2.5 
        1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 
        0H12v2.3h.06c.62-1.17 2.14-2.4 
        4.41-2.4 4.72 0 5.6 3.1 
        5.6 7.13V24h-5v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 
        0-2.88 1.95-2.88 3.97V24h-5V8z"/>
      </svg>
    ),
  },
  {
    href: "#",
    label: "X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2H21l-6.56 7.5L22 
        22h-6.828l-5.35-7.01L3.5 
        22H1l7.02-8.02L2 
        2h6.9l4.85 6.37L18.244 2z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#050A14] to-[#02060F] text-white">

      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* LEFT - BRAND */}
          <div className="space-y-4 max-w-[320px]">
            <h2 className="text-[28px] font-bold text-secondary">
             Shopifystore
            </h2>

            <p className="text-[14px] leading-[24px] text-[#A3AED0]">
              Build faster, launch smarter, and create a better
              experience with a product designed for modern growth.
            </p>
          </div>

          {/* CENTER - LINKS */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-semibold relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-secondary" />
            </h3>

            <ul className="space-y-3 text-[14px] text-[#A3AED0]">
              <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
              <li><Link href="#demo" className="hover:text-white transition">Demo</Link></li>
              <li><Link href="#form" className="hover:text-white transition">Get Started for Free</Link></li>
              <li><Link href="#faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* RIGHT - CONTACT */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-semibold relative inline-block">
              Get in Touch
              <span className="absolute left-0 -bottom-1 w-8 h-[2px] bg-secondary" />
            </h3>

            <div className="space-y-3 text-[14px] text-[#A3AED0]">
              <p>Ahmedabad, Gujarat, India</p>
              <p>hello@shopifystore.com</p>
              <p>+91 99999 99999</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 pt-2">
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#1F2A44] flex items-center justify-center 
                             text-[#A3AED0] hover:text-white hover:border-secondary 
                             hover:bg-[#0F172A] transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-[#1F2A44]" />

        {/* BOTTOM */}
        <div className="mt-6 text-center text-[13px] text-[#6B7280]">
          © 2026 Shopifystore. All rights reserved.
        </div>

      </div>
    </footer>
  );
}