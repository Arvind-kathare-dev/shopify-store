// app/components/Navbar.tsx
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
    <nav className='w-full'>
      <div className="w-full">
        <div className="flex w-full justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-base text-gray-900 font-bold">
                ShopifyStore
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-900 hover:text-gray-600 font-normal transition-colors duration-200 text-xs"
              >
                {link.name}
              </Link>
            ))}

            <Button variant='border' onClick={() => setOpen(true)}>
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-secondary focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all bg-white duration-300 ease-in-out ${isOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible z-10'
            } overflow-hidden`}
        >
          <div className="py-4 space-y-3 border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-secondary font-medium transition-colors duration-200 py-2 text-base"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className='w-full p-4 mt-4'>
                <Button variant='border' className='w-full' onClick={() => setOpen(true)}>
              Get Started Free
            </Button>
            </div>
            
          </div>
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