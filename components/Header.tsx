'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/ark-logo.png" 
              alt="ARK Technologies" 
              width={48} 
              height={48}
              priority
            />
            <span className="text-2xl font-bold text-text-primary">ARK</span>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-text-secondary hover:text-ARK-blue transition-colors">
              Home
            </a>
            <a href="/about" className="text-text-secondary hover:text-ARK-blue transition-colors">
              About
            </a>
            <a href="/how-we-work" className="text-text-secondary hover:text-ARK-blue transition-colors">
              Our Process
            </a>
            <a href="/case-studies" className="text-text-secondary hover:text-ARK-blue transition-colors">
              Case Studies
            </a>
            <a href="/contact" className="text-text-secondary hover:text-ARK-blue transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu and CTA Container */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-text-primary hover:text-ARK-blue transition-colors focus:outline-none focus:ring-2 focus:ring-ARK-blue focus:ring-offset-2 rounded"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* CTA Button */}
            <a href="/contact" className="bg-ARK-blue hover:bg-ARK-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal="true"
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={closeMobileMenu}
              className="p-2 text-text-primary hover:text-ARK-blue transition-colors focus:outline-none focus:ring-2 focus:ring-ARK-blue rounded"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col px-6 space-y-6">
            <a
              href="/"
              onClick={closeMobileMenu}
              className="text-lg font-medium text-text-primary hover:text-ARK-blue transition-colors py-2 border-b border-border-light"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={closeMobileMenu}
              className="text-lg font-medium text-text-primary hover:text-ARK-blue transition-colors py-2 border-b border-border-light"
            >
              About
            </a>
            <a
              href="/how-we-work"
              onClick={closeMobileMenu}
              className="text-lg font-medium text-text-primary hover:text-ARK-blue transition-colors py-2 border-b border-border-light"
            >
              Our Process
            </a>
            <a
              href="/case-studies"
              onClick={closeMobileMenu}
              className="text-lg font-medium text-text-primary hover:text-ARK-blue transition-colors py-2 border-b border-border-light"
            >
              Case Studies
            </a>
            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="text-lg font-medium text-text-primary hover:text-ARK-blue transition-colors py-2 border-b border-border-light"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile CTA in Drawer */}
          <div className="mt-auto p-6">
            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="block w-full text-center bg-ARK-blue hover:bg-ARK-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

