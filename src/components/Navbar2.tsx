"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FormModal } from "./model/FormModal";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar2() {
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
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-border/60 bg-white shadow-soft backdrop-blur-md"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="#"
              className="text-lg font-bold tracking-tight text-foreground md:text-xl"
            >
              Shopify<span className="text-primary">Store</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-6 md:flex lg:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-normal text-muted-foreground transition-colors hover:text-secondary md:text-base"
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center rounded-full border border-secondary px-5 py-2 text-sm font-semibold text-secondary transition-all hover:opacity-80 "
              >
                Get Started Free
              </button>
            </nav>

            {/* Mobile Toggle */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-border bg-white transition-all duration-300 md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setModalOpen(true);
                setIsOpen(false);
              }}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-secondary px-5 py-2.5 text-sm font-semibold text-secondary"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so fixed navbar doesn't overlap content */}
      <div className="h-16 md:h-20" aria-hidden="true" />

      {modalOpen && <FormModal onClose={() => setModalOpen(false)} />}
    </>
  );
}