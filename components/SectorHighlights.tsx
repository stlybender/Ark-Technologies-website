'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import IndustryCard from '@/components/IndustryCard';

const sectors = [
  {
    name: 'Real Estate',
    icon: '🏢',
    color: 'ark-blue',
    bgColor: 'ark-blue-pale',
    problems: [
      'Slow lead response from portals/ads',
      'Manual calling + inconsistent qualification',
      'Poor visibility into lead → site visit → booking funnel'
    ],
    solution: 'AI Voice CRM auto-calls new leads within seconds, qualifies by budget and timeline, books site visits, and syncs directly to your CRM.',
    outcomes: [
      'Lead response time: under 60 seconds',
      'Higher site-visit booking rates from digital leads',
      'Real-time funnel data for sales leadership'
    ]
  },
  {
    name: 'Banking & Wealth',
    icon: '💰',
    color: 'ark-orange',
    bgColor: 'ark-orange-pale',
    problems: [
      'Manual KYC and MF form filling',
      'Slow SIP registration',
      'Generic investor newsletters'
    ],
    solution: 'Document automation (IDP/OCR) pre-fills KYC and SIP forms. Portfolio intelligence generates rebalancing suggestions. AI chatbots handle investor queries.',
    outcomes: [
      'Faster onboarding, lower NIGO rates',
      'More relevant investor communication',
      'Increased SIP/upsell opportunities'
    ]
  },
  {
    name: 'Healthcare',
    icon: '🏥',
    color: 'ark-purple',
    bgColor: 'ark-purple-pale',
    problems: [
      'Doctors overburdened with EMR/EHR documentation',
      'Radiology reports stored as free text',
      'Limited operational visibility into TAT'
    ],
    solution: 'AI prescription assistant captures details and writes structured data into EMR/EHR. NLP layer extracts findings from radiology reports.',
    outcomes: [
      'Reduced documentation time per patient',
      'Improved radiology TAT and utilization',
      'Better EMR data quality'
    ]
  }
];

export default function SectorHighlights() {
  return (
    <section className="py-8 bg-bg-secondary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-ark-blue/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-ark-purple/5 via-transparent to-transparent"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-ark-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-ark-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-ark-purple/5 rounded-full blur-3xl"></div>
        
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(15, 76, 129, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Built for the operations that run your business
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-2">
            Specific problems. Measurable outcomes. Real results across sectors.
          </p>
          <p className="text-text-tertiary text-lg">
            Scroll to explore solutions by industry
          </p>
        </div>
      </div>

      {/* Stacked Industry Cards with Scroll Animation */}
      <div className="-space-y-16 md:-space-y-20 relative z-10">
        {sectors.map((sector, index) => (
          <ContainerScroll
            key={index}
            titleComponent={
              <div className="mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                  {sector.name}
                </h3>
              </div>
            }
          >
            <IndustryCard sector={sector} />
          </ContainerScroll>
        ))}
      </div>
    </section>
  );
}
