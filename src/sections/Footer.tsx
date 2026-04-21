"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
          
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-2 xl:col-span-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Shopifystore
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              We build native mobile apps with built-in CRO
            </p>
          </motion.div>

          {/* LINKS 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex flex-col gap-4 xl:col-span-2"
          >
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </motion.div>

          {/* LINKS 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex flex-col gap-4 xl:col-span-2"
          >
            <a
              href="#"
              className="text-sm  text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Help
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Blog
            </a>
          </motion.div>

          {/* EMAIL SUBSCRIPTION - FULLY RESPONSIVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col gap-3 sm:col-span-4 lg:col-span-4 max-w-[310px]"
          >
            <label className="text-sm text-gray-600 font-medium">
              Enter your Email<span className="text-red-500">*</span>
            </label>

            {/* Desktop/Tablet: Inline layout */}
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="bg-transparent outline-none text-sm flex-1 min-w-0 placeholder:text-gray-400 px-4 py-3"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2 text-white text-sm font-medium px-4 lg:px-5 py-3 rounded-full transition-colors duration-200 whitespace-nowrap flex-shrink-0"
              >
                <span className="hidden md:inline">Join Community</span>
                <span className="md:hidden">Join</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile: Stacked layout */}
            <div className="flex sm:hidden flex-col gap-2">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="bg-gray-100 outline-none text-sm w-full placeholder:text-gray-400 px-4 py-3 rounded-full"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2 text-white text-sm font-medium px-4 py-3 rounded-full transition-colors duration-200 w-full"
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-10 lg:mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © 2026 Shopifystore. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            <span>+1 555 321 325</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}