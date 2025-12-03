'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import IndustryCard from '@/components/IndustryCard';

const sectors = [
  {
    name: 'Real Estate',
    icon: 'building',
    color: 'ARK-blue',
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
    name: 'Manufacturing & Distribution',
    icon: 'factory',
    color: 'ARK-teal',
    problems: [
      'Manual order processing from emails and spreadsheets',
      'Slow quote generation with inconsistent pricing',
      'High ERP data entry burden and errors'
    ],
    solution: 'AI captures orders from emails, PDFs, and calls, auto-enters them into ERP. Instant quote generation with real-time pricing. Voice AI takes orders over the phone hands-free.',
    outcomes: [
      'Order processing time reduced by 70%',
      'Quote generation in seconds vs. hours',
      'Automated ERP sync with 95%+ accuracy'
    ]
  },
  {
    name: 'Banking & Wealth',
    icon: 'dollar',
    color: 'ARK-orange',
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
    icon: 'medical',
    color: 'ARK-purple',
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
  },
  {
    name: 'Automotive',
    icon: 'car',
    color: 'ARK-cyan',
    problems: [
      'Missed calls during peak hours and campaigns',
      'Low conversion from enquiry to test drive',
      'Manual service reminders consuming staff time'
    ],
    solution: 'AI assistant handles sales enquiries and books test drives automatically. Automates service lifecycle calls for reminders, warranty renewals, and feedback collection.',
    outcomes: [
      '30-40% reduction in missed calls',
      'Higher test-drive booking rates',
      'Improved service retention and workshop utilization'
    ]
  }
];

export default function SectorHighlights() {
  return (
    <section id="capabilities" className="py-8 bg-bg-secondary relative overflow-hidden">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-ARK-blue/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-ARK-purple/5 via-transparent to-transparent"></div>
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
      <div className="-space-y-8 md:-space-y-10 relative z-10">
        {sectors.map((sector, index) => (
          <ContainerScroll
            key={index}
            titleComponent={
              <div className="mb-16 md:mb-14">
                <h3 className="text-3xl md:text-4xl font-semibold text-text-primary">
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
