"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-semibold text-gray-900 text-base mb-2">
              Shopifystore
            </h3>

            <p className="text-sm text-gray-500 max-w-[220px] leading-relaxed">
              We build native mobile apps with built-in CRO
            </p>
          </motion.div>

          {/* LINKS 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-gray-500 space-y-3"
          >
            <p className="hover:text-gray-900 cursor-pointer transition">
              Privacy Policy
            </p>
            <p className="hover:text-gray-900 cursor-pointer transition">
              Terms & Conditions
            </p>
          </motion.div>

          {/* LINKS 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm text-gray-500 space-y-3"
          >
            <p className="hover:text-gray-900 cursor-pointer transition">
              Help
            </p>
            <p className="hover:text-gray-900 cursor-pointer transition">
              Blog
            </p>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-gray-600 mb-2">
              Enter your Email*
            </p>

            <div className="flex items-center bg-gray-100 rounded-full pl-4 pr-2 py-1.5">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-gray-400"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-500 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded-full transition whitespace-nowrap"
              >
                Join Community →
              </motion.button>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4"
        >
          <p className="text-center md:text-left">
            © 2026 Shopifystore. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <Phone size={14} className="text-purple-500" />
            <span>+1 555 321 325</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}