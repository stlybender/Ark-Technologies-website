'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CaseStudySection from '@/components/CaseStudySection';
import ScrollReveal from '@/components/animation/ScrollReveal';
import { caseStudies } from '@/lib/caseStudies';

export default function CaseStudiesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Handle scroll-to-anchor on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }

    // Track active section on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    caseStudies.forEach((cs) => {
      const element = document.getElementById(cs.slug);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Structured Data for BreadcrumbList
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://arktechnologies.ai',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: 'https://arktechnologies.ai/case-studies',
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-gradient-to-br from-white via-bg-secondary to-white"
        aria-labelledby="case-studies-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 
              id="case-studies-heading"
              className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6"
            >
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Real outcomes from Ark deployments across Real Estate, Automotive, Banking & Wealth, and Healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Sector Navigation Pills */}
      <nav 
        className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-border-light"
        aria-label="Case study sectors navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
          <ScrollReveal>
            <div 
              className="flex items-center gap-3 overflow-x-auto scrollbar-hide"
              role="tablist"
              aria-label="Select case study by sector"
            >
              {caseStudies.map((cs) => {
                const isActive = activeSection === cs.slug;
                const sectorColorMap = {
                  'real-estate': 'border-ark-blue text-ark-blue bg-ark-blue-pale',
                  'automotive': 'border-ark-cyan text-ark-cyan-dark bg-ark-cyan-pale',
                  'banking-wealth': 'border-ark-orange text-ark-orange-dark bg-ark-orange-pale',
                  'healthcare': 'border-ark-purple text-ark-purple-dark bg-ark-purple-pale'
                };
                const activeClass = sectorColorMap[cs.sectorKey];
                
                return (
                  <button
                    key={cs.slug}
                    onClick={() => scrollToSection(cs.slug)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={cs.slug}
                    className={`
                      px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap
                      transition-all duration-200 border-2
                      ${isActive 
                        ? activeClass
                        : 'border-border-light text-text-secondary hover:border-border-medium hover:text-text-primary'
                      }
                    `}
                  >
                    {cs.sector}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </nav>

      {/* Case Study Sections */}
      {caseStudies.map((caseStudy) => (
        <CaseStudySection key={caseStudy.slug} caseStudy={caseStudy} />
      ))}

      {/* Final CTA */}
      <section 
        className="py-20 bg-gradient-to-br from-ark-blue to-ark-cyan"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <ScrollReveal>
            <h2 
              id="cta-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to see Ark in action?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a demo to see how Ark can transform your operations
            </p>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-ark-blue hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              aria-label="Book a demo with Ark"
            >
              Book a Demo
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}

