'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { AnimatePresence } from 'framer-motion';
import { FormModal } from './model/FormModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        {/* ✅ Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="text-lg md:text-xl font-bold text-gray-900">
              ShopifyStore
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm md:text-base text-gray-700 hover:text-black transition"
                >
                  {link.name}
                </Link>
              ))}

              <Button variant="border" onClick={() => setOpen(true)}>
                Get Started Free
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white border-t`}
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 text-base font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Button
              variant="border"
              className="w-full"
              onClick={() => {
                setOpen(true);
                setIsOpen(false);
              }}
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && <FormModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;