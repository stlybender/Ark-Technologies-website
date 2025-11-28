'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-ark-blue-pale to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-ark-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-ark-blue rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center pt-32 pb-20">
        {/* Headline */}
        <h1 
          className={`text-5xl md:text-7xl font-bold text-text-primary leading-tight mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Enterprise AI that moves at{' '}
          <span className="bg-gradient-to-r from-ark-blue to-ark-cyan bg-clip-text text-transparent">
            the speed of your operations
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Ark automates workflows, cleans data, and accelerates decisions across Real Estate, Banking, Healthcare, and Automotive—without ripping out your existing systems.
        </p>

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="bg-ark-blue hover:bg-ark-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
            Book a Demo
          </button>
          <button className="border-2 border-ark-cyan text-ark-cyan hover:bg-ark-cyan-pale px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
            See How It Works
          </button>
        </div>

        {/* Trust Badges */}
        <div 
          className={`mt-16 text-sm text-text-tertiary transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Trusted by enterprises in regulated industries
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ark-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

