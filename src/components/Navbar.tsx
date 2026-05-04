"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FormModal } from "./model/FormModal";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground md:text-xl transition-transform hover:scale-105"
            >
              Shopify<span className="text-secondary">Store</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex lg:gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
                >
                  {link.name}
                </Link>
              ))}

              <Button
                variant="border"
                size="sm"
                onClick={() => setModalOpen(true)}
              >
                Get Started Free
              </Button>
            </nav>

            {/* Mobile Toggle */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md text-foreground md:hidden hover:bg-muted transition-colors relative z-50"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full bg-current"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full bg-current"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full bg-current"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border bg-white md:hidden"
            >
              <div className="space-y-2 px-4 py-6 sm:px-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 px-4">
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={() => {
                      setModalOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Get Started Free
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      <AnimatePresence>
        {modalOpen && <FormModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}