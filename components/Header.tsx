'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              alt="Ark Technologies" 
              width={48} 
              height={48}
              priority
            />
            <span className="text-2xl font-bold text-text-primary">Ark</span>
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-text-secondary hover:text-ark-blue transition-colors">
              Home
            </a>
            <a href="/about" className="text-text-secondary hover:text-ark-blue transition-colors">
              About
            </a>
            <a href="/how-we-work" className="text-text-secondary hover:text-ark-blue transition-colors">
              Our Process
            </a>
            <a href="/case-studies" className="text-text-secondary hover:text-ark-blue transition-colors">
              Case Studies
            </a>
            <a href="/contact" className="text-text-secondary hover:text-ark-blue transition-colors">
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <a href="/contact" className="bg-ark-blue hover:bg-ark-blue-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}

