'use client';

import { CaseStudy } from '@/lib/caseStudies';
import ScrollReveal from './animation/ScrollReveal';

interface CaseStudySectionProps {
  caseStudy: CaseStudy;
}

const sectorStyles = {
  'real-estate': {
    bg: 'bg-ark-blue-pale',
    badge: 'bg-ark-blue-pale text-ark-blue border border-ark-blue/20',
    accent: 'text-ark-blue',
    border: 'border-ark-blue/10'
  },
  'automotive': {
    bg: 'bg-ark-cyan-pale',
    badge: 'bg-ark-cyan-pale text-ark-cyan-dark border border-ark-cyan/20',
    accent: 'text-ark-cyan-dark',
    border: 'border-ark-cyan/10'
  },
  'banking-wealth': {
    bg: 'bg-ark-orange-pale',
    badge: 'bg-ark-orange-pale text-ark-orange-dark border border-ark-orange/20',
    accent: 'text-ark-orange-dark',
    border: 'border-ark-orange/10'
  },
  'healthcare': {
    bg: 'bg-ark-purple-pale',
    badge: 'bg-ark-purple-pale text-ark-purple-dark border border-ark-purple/20',
    accent: 'text-ark-purple-dark',
    border: 'border-ark-purple/10'
  }
};

export default function CaseStudySection({ caseStudy }: CaseStudySectionProps) {
  const styles = sectorStyles[caseStudy.sectorKey];

  return (
    <article 
      id={caseStudy.slug}
      className={`relative py-20 md:py-32 ${styles.bg} scroll-mt-20`}
      aria-labelledby={`${caseStudy.slug}-title`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column - Sticky on desktop */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <div 
                  className={`inline-block px-4 py-2 rounded-lg ${styles.badge} text-sm font-semibold mb-4`}
                  aria-label={`Sector: ${caseStudy.sector}`}
                >
                  {caseStudy.sector}
                </div>
                <h2 
                  id={`${caseStudy.slug}-title`}
                  className={`text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight`}
                >
                  {caseStudy.oneLineSummary}
                </h2>
                <div className="space-y-3 text-text-secondary">
                  <p>
                    <span className="font-semibold text-text-primary">Client: </span>
                    {caseStudy.clientType}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column - Scrollable content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Business Context */}
            <ScrollReveal delay={100}>
              <div>
                <h3 className={`text-xl font-semibold ${styles.accent} mb-4`}>
                  Business Context
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {caseStudy.businessContext}
                </p>
              </div>
            </ScrollReveal>

            {/* Key Problems */}
            <ScrollReveal delay={150}>
              <div>
                <h3 className={`text-xl font-semibold ${styles.accent} mb-4`}>
                  Key Problems
                </h3>
                <ul className="space-y-3">
                  {caseStudy.keyProblems.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full ${styles.accent.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></span>
                      <span className="text-text-secondary leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Ark Solution */}
            <ScrollReveal delay={200}>
              <div className={`bg-white rounded-xl p-8 border ${styles.border}`}>
                <h3 className={`text-2xl font-bold text-text-primary mb-4`}>
                  Ark Solution
                </h3>
                <p className="text-text-secondary leading-relaxed text-lg mb-8">
                  {caseStudy.solution.overview}
                </p>
                
                <div className="space-y-8">
                  {caseStudy.solution.modules.map((module, index) => (
                    <div key={index}>
                      <h4 className={`text-lg font-semibold ${styles.accent} mb-3`}>
                        {module.title}
                      </h4>
                      <ul className="space-y-2">
                        {module.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start">
                            <svg className={`w-5 h-5 ${styles.accent} mt-0.5 mr-3 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-text-secondary leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay={250}>
              <div>
                <h3 className={`text-xl font-semibold ${styles.accent} mb-4`}>
                  Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className={`bg-white rounded-lg p-5 border ${styles.border}`}>
                      <div className="flex items-start">
                        <svg 
                          className={`w-6 h-6 ${styles.accent} mr-3 flex-shrink-0 mt-0.5`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <p className="text-text-secondary leading-relaxed text-sm">
                          {result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Integrations */}
            <ScrollReveal delay={300}>
              <div className="bg-white/50 rounded-lg p-6 border border-text-tertiary/20">
                <h3 className={`text-lg font-semibold text-text-primary mb-3`}>
                  Data Sources & Integrations
                </h3>
                <ul className="space-y-2">
                  {caseStudy.integrations.map((integration, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-text-tertiary mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-text-secondary text-sm leading-relaxed">{integration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </article>
  );
}

