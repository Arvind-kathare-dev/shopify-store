"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  Clock,
  MousePointer2,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Home,
  Flame,
  Gift,
  Star,
  CreditCard,
  Search,
  Palette,
  LineChart
} from "lucide-react";

const tools = [
  {
    title: "Abandoned Cart Push Notifications",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: BellRing,
  },
  {
    title: "Urgency & Countdown Timers",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Clock,
  },
  {
    title: "Sticky Add-to-Cart Bar",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: MousePointer2,
  },
  {
    title: "AI Product Recommendations",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Sparkles,
  },
  {
    title: "Social Proof Popups",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: MessageSquare,
  },
  {
    title: "Smart Upsell & Cross-Sell",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: TrendingUp,
  },
  {
    title: "Personalised Home Screen",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Home,
  },
  {
    title: "Back-in-Stock Alerts",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Flame,
  },
  {
    title: "App-Exclusive Offers",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Gift,
  },
  {
    title: "In-App Review Requests",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Star,
  },
  {
    title: "One-Tap Checkout",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: CreditCard,
  },
  {
    title: "Smart Search & Filters",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Search,
  },
  {
    title: "No-Code Customisation Dashboard",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: Palette,
  },
  {
    title: "Analytics & Conversion Dashboard",
    desc: "Tell us about your store, goals, and current traffic. We map out your custom mobile growth plan.",
    icon: LineChart,
  },
];

export default function ToolsGrid() {
  return (
    <section className="relative bg-white py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-[28px] md:text-[36px] font-bold text-black tracking-tight">
            Every tool you need to sell more on mobile
          </h2>
          <p className="text-[#858585] text-sm md:text-base font-normal">
            Included in every plan. No add-ons. No hidden fees.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-[#F3F0FF] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.12)] hover:border-purple-100 transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#F3EFFF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#8B5CF6]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="text-black text-[15px] font-semibold leading-tight group-hover:text-[#8B5CF6] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[#858585] text-[13px] leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
