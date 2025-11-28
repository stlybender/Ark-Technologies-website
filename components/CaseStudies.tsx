'use client';

import { useEffect, useRef, useState } from 'react';

const caseStudies = [
  {
    sector: 'Real Estate',
    tagColor: 'bg-ark-blue-pale text-ark-blue',
    title: 'Lead response time cut to under 60 seconds',
    client: 'Large residential real estate developer',
    impact: 'Automated calling, qualification, and site-visit booking from digital leads. Real-time CRM sync and funnel visibility for sales leadership.',
    link: '/case-studies#real-estate-voice-crm'
  },
  {
    sector: 'Automotive',
    tagColor: 'bg-ark-cyan-pale text-ark-cyan',
    title: 'Fewer missed calls during peak load',
    client: 'Multi-brand car dealer group',
    impact: 'AI assistant handles inbound queries, schedules test drives and service appointments, and automates reminders—all integrated with dealer DMS/CRM.',
    link: '/case-studies#auto-dealer-ai-calls'
  },
  {
    sector: 'Banking & Wealth',
    tagColor: 'bg-ark-orange-pale text-ark-orange',
    title: 'Faster onboarding, lower NIGO rates',
    client: 'Mutual fund / wealth management firm',
    impact: 'Document automation (IDP/OCR) pre-fills KYC and SIP forms. Portfolio intelligence and AI chatbots drive engagement and upsell opportunities.',
    link: '/case-studies#wealth-forms-and-portfolio-ai'
  },
  {
    sector: 'Healthcare – OPD',
    tagColor: 'bg-ark-purple-pale text-ark-purple',
    title: 'Reduced documentation time per patient',
    client: 'Multi-speciality hospital / clinic network',
    impact: 'AI-powered prescription assistant captures details and writes structured data into EMR/EHR. Better data quality, smoother pharmacy workflows.',
    link: '/case-studies#healthcare-prescription-assistant'
  },
  {
    sector: 'Healthcare – Radiology',
    tagColor: 'bg-ark-purple-pale text-ark-purple-dark',
    title: 'Improved radiology TAT and utilization',
    client: 'Hospital or diagnostic chain',
    impact: 'NLP layer extracts structured data from PACS/RIS reports. Operational dashboards surface TAT, modality utilization, and cost-optimization insights.',
    link: '/case-studies#healthcare-radiology-intelligence'
  }
];

export default function CaseStudies() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="case-studies" ref={sectionRef} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Built on real outcomes, not promises
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            See how enterprises across Real Estate, Banking, Healthcare, and Automotive use Ark to move faster.
          </p>
          <a 
            href="/case-studies"
            className="inline-flex items-center text-ark-blue hover:text-ark-cyan font-semibold text-lg group"
          >
            View all case studies
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Case Study Cards - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 lg:overflow-visible lg:mx-0 lg:px-0">
          <div className="flex lg:grid lg:grid-cols-3 gap-6 lg:gap-8 min-w-max lg:min-w-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-border-light rounded-2xl p-8 hover:border-ark-cyan hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-80 lg:w-auto flex-shrink-0 lg:flex-shrink ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Sector Tag */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${study.tagColor} mb-4`}>
                  {study.sector}
                </span>

                {/* Metric Headline */}
                <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">
                  {study.title}
                </h3>

                {/* Client Type */}
                <p className="text-sm text-text-tertiary mb-4">{study.client}</p>

                {/* Impact Statement */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {study.impact}
                </p>

                {/* CTA */}
                <a 
                  href={study.link}
                  className="inline-flex items-center text-ark-blue hover:text-ark-cyan font-semibold text-sm group"
                >
                  View full story
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
