export interface SolutionModule {
  title: string;
  bullets: string[];
}

export interface CaseStudy {
  slug: string;
  sector: string;
  sectorKey: 'real-estate' | 'automotive' | 'banking-wealth' | 'healthcare';
  clientType: string;
  businessContext: string;
  keyProblems: string[];
  solution: {
    overview: string;
    modules: SolutionModule[];
  };
  results: string[];
  integrations: string[];
  oneLineSummary: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'real-estate-voice-crm',
    sector: 'Real Estate',
    sectorKey: 'real-estate',
    clientType: 'Large residential real estate developer with multiple ongoing projects',
    businessContext: 'Developer runs performance marketing and portal listings, generating hundreds of leads per day across multiple projects and locations. The sales team struggled to respond quickly and qualify leads consistently, leading to missed opportunities and incomplete funnel visibility.',
    keyProblems: [
      'Slow lead response time from portals and ads, averaging ~20 minutes',
      'Sales team manually calling every lead with inconsistent qualification',
      'Site-visit bookings not standardized; stored in Excel, WhatsApp, or personal phones',
      'CRM data incomplete, preventing management from seeing a clean lead → visit → booking funnel',
      'No reliable funnel data for CXO decisions on budgets and pricing'
    ],
    solution: {
      overview: 'Ark implemented an AI Voice CRM system that auto-calls new leads within seconds, qualifies them through structured conversations, books site visits, and maintains complete CRM integration for full funnel visibility.',
      modules: [
        {
          title: 'AI Voice CRM & Calling',
          bullets: [
            'Auto-calls new leads within seconds of enquiry',
            'Runs structured qualification script covering budget, location preference, move-in timeline, and project interest',
            'Books site visits into a shared calendar and triggers automated reminders',
            'Logs call outcomes with AI-generated summaries and lead scores (hot/warm/cold)'
          ]
        },
        {
          title: 'CRM Integration',
          bullets: [
            'Creates and updates leads, stages, and follow-up tasks automatically',
            'Logs all call outcomes with short AI-generated summaries',
            'Assigns lead scores based on qualification responses',
            'Maintains data consistency across all touchpoints'
          ]
        },
        {
          title: 'WhatsApp Follow-ups',
          bullets: [
            'Sends brochures, location pins, and site-visit confirmations automatically',
            'Handles reschedules and cancellations via templates and quick replies',
            'Maintains conversation history for sales team context'
          ]
        },
        {
          title: 'Funnel Visibility Dashboard',
          bullets: [
            'Real-time dashboard for lead source performance',
            'Visit conversion and booking conversion by project and channel',
            'Cost-per-lead and cost-per-booking metrics',
            'Revenue attribution by marketing source'
          ]
        }
      ]
    },
    results: [
      'Lead response time cut from ~20 minutes to under 60 seconds',
      'Site-visit booking rate from digital leads increased by 30-40%',
      '50-60% reduction in manual dialing and status updates',
      'Reliable funnel data enabling CXO decisions on budgets and pricing',
      'Higher conversion rates due to immediate, consistent lead engagement'
    ],
    integrations: [
      'Lead sources: Real estate portals (99acres, MagicBricks, Housing.com), website forms, performance ads (Google, Facebook)',
      'CRM systems: Salesforce, Zoho CRM, HubSpot, or custom CRM',
      'Telephony platforms: Exotel, Knowlarity, Twilio',
      'WhatsApp Business API for automated follow-ups'
    ],
    oneLineSummary: 'AI voice agent that calls, qualifies, and books site visits within 60 seconds of lead capture'
  },
  {
    slug: 'auto-dealer-ai-calls',
    sector: 'Automotive',
    sectorKey: 'automotive',
    clientType: 'Multi-brand car dealer group handling vehicle sales and workshop service',
    businessContext: 'Multiple showrooms and workshops handling high call volumes for enquiries, test drives, and service bookings. Peak hours, weekends, and campaign periods resulted in missed calls and lost opportunities, while manual service reminders consumed significant staff time.',
    keyProblems: [
      'Missed calls during campaigns, weekends, and peak hours',
      'Low conversion from enquiry to test drive bookings',
      'Manual, repetitive calling for service reminders and insurance renewals',
      'Incomplete or outdated DMS/CRM records',
      'Inconsistent customer experience across showrooms'
    ],
    solution: {
      overview: 'Ark deployed an AI Calling Assistant that handles both inbound and outbound calls for sales enquiries, test drive scheduling, and service lifecycle management, with full integration to the dealer\'s DMS and CRM systems.',
      modules: [
        {
          title: 'Sales Call Automation',
          bullets: [
            'AI agent answers or returns calls for model, price, availability, and financing questions',
            'Schedules test drives (home or showroom) directly into the calendar',
            'Captures customer preferences and budget information',
            'Routes complex queries to appropriate sales staff with full context'
          ]
        },
        {
          title: 'Service Lifecycle Automation',
          bullets: [
            'Outbound reminders for periodic service based on DMS data',
            'Extended warranty and insurance renewal notifications',
            'Post-service feedback collection and NPS-style follow-up',
            'Appointment scheduling for workshop services'
          ]
        },
        {
          title: 'Omni-channel Experience',
          bullets: [
            'WhatsApp confirmations with maps, appointment details, and offers',
            'SMS reminders for upcoming appointments',
            'Email summaries of conversations and bookings',
            'Consistent experience across voice, text, and chat channels'
          ]
        },
        {
          title: 'DMS/CRM Sync',
          bullets: [
            'All interactions logged against the customer in DMS/CRM',
            'Updated statuses: enquiry, test drive booked, delivered, service due/complete',
            'Service history tracking for better customer retention',
            'OEM reporting compliance maintained automatically'
          ]
        }
      ]
    },
    results: [
      '30-40% reduction in missed calls during busy periods',
      'Higher test-drive booking rates and improved conversion',
      'Better workshop utilization through automated scheduling',
      'Improved service retention and repeat revenue',
      'Cleaner DMS/CRM data for OEM reporting and incentives',
      'More consistent customer experience across all touchpoints'
    ],
    integrations: [
      'Dealer Management Systems (DMS): AutoVista, Autosoft, SAP DMS',
      'CRM platforms (if separate from DMS)',
      'Telephony platforms for voice calls',
      'WhatsApp Business API and SMS gateways',
      'OEM reporting systems'
    ],
    oneLineSummary: 'AI assistant that handles sales enquiries, books test drives, and automates service lifecycle calls'
  },
  {
    slug: 'wealth-forms-and-portfolio-ai',
    sector: 'Banking & Wealth',
    sectorKey: 'banking-wealth',
    clientType: 'Mutual fund or wealth management firm serving retail and HNI investors',
    businessContext: 'High volume of investor onboarding, KYC compliance, and transaction forms. Large SIP book requiring active management, and relationship managers spending excessive time on portfolio reviews and communication, limiting their capacity for client acquisition.',
    keyProblems: [
      'Manual, error-prone KYC and MF transaction form filling',
      'Slow onboarding and SIP activation processes',
      'Generic newsletters and mass emails with low engagement rates',
      'RMs spending hours preparing portfolio reviews and investment ideas',
      'High NIGO (Not In Good Order) rates causing delays and rework'
    ],
    solution: {
      overview: 'Ark built a comprehensive automation suite covering document processing, portfolio intelligence, and personalized investor engagement, enabling faster onboarding, better portfolio management, and higher engagement rates.',
      modules: [
        {
          title: 'Document & Form Automation',
          bullets: [
            'Uses OCR/IDP to read scanned forms and document photos',
            'Auto-populates KYC, MF transaction, and SIP forms',
            'Flags missing or inconsistent fields for review',
            'Validates data against regulatory requirements',
            'Reduces NIGO cases significantly'
          ]
        },
        {
          title: 'Portfolio Intelligence Engine',
          bullets: [
            'Builds comprehensive investor risk profiles (assets, liabilities, horizon, behavior)',
            'Suggests rebalancing opportunities with clear rationales',
            'Identifies SIP top-up and product cross-sell opportunities',
            'Monitors portfolio performance against benchmarks',
            'Generates automated portfolio review reports'
          ]
        },
        {
          title: 'Investor Copilots & Engagement',
          bullets: [
            'AI chatbots on web/app/WhatsApp for portfolio queries',
            'Instant access to statements and transaction history',
            '"What-if" simulations for investment planning',
            'Self-service for common queries reducing RM workload',
            'Natural language processing for complex financial questions'
          ]
        },
        {
          title: 'Hyper-Personalized Communication',
          bullets: [
            'Newsletters tailored to individual holdings and risk profile',
            'Market updates relevant to investor\'s portfolio',
            'Timely alerts for rebalancing or tax-saving opportunities',
            'Higher open and click-through rates vs. generic campaigns'
          ]
        }
      ]
    },
    results: [
      'Significant reduction in onboarding time (3-5 days to <24 hours)',
      'Dramatic decrease in NIGO (Not In Good Order) cases',
      'Higher newsletter open rates (2-3x improvement) and click-through rates',
      'More SIP top-ups and upsell opportunities identified',
      'RM time freed for high-value client interactions and acquisition',
      'Better portfolio performance through timely rebalancing suggestions'
    ],
    integrations: [
      'Core transaction systems and Registrar & Transfer Agents (CAMS, KFin)',
      'CRM and RM workstation tools',
      'Document storage systems for forms and KYC images',
      'Email marketing platforms and WhatsApp Business API',
      'Portfolio management systems and market data feeds'
    ],
    oneLineSummary: 'Automates KYC forms, generates portfolio insights, and delivers hyper-personalized investor engagement'
  },
  {
    slug: 'healthcare-prescription-assistant',
    sector: 'Healthcare',
    sectorKey: 'healthcare',
    clientType: 'Multi-specialty hospital or clinic network with high OPD load',
    businessContext: 'Doctors seeing many patients per day are overloaded with EMR documentation and prescription writing. The administrative burden reduces time available for patient care and leads to incomplete records that limit downstream analytics and care coordination.',
    keyProblems: [
      'Doctors spending excessive time typing or writing prescriptions and notes',
      'Risk of missing critical fields or unclear handwriting causing medication errors',
      'EMR/EHR data often incomplete, limiting downstream analytics and care quality',
      'Reduced patient face time due to documentation burden',
      'Inconsistent prescription formats across doctors and departments'
    ],
    solution: {
      overview: 'Ark developed an AI Prescription Assistant that acts as a digital scribe, taking doctor input through various methods and auto-generating complete, standardized prescriptions with full EMR integration.',
      modules: [
        {
          title: 'AI Prescription Assistant',
          bullets: [
            'Takes doctor input via dictation, quick forms, or existing notes',
            'Auto-fills key prescription fields: diagnosis, medication, dosage, frequency, duration',
            'Standardizes terminology and formatting across all prescriptions',
            'Supports multiple input methods for doctor convenience',
            'Learns from doctor preferences over time'
          ]
        },
        {
          title: 'Digital Prescription & EMR Sync',
          bullets: [
            'Generates clean, printable, or shareable digital prescriptions',
            'Writes structured data back to EMR/EHR for long-term records',
            'Maintains complete prescription history for each patient',
            'Enables better analytics and population health management',
            'Supports e-prescription delivery to patients and pharmacies'
          ]
        },
        {
          title: 'Safety & Completeness Checks',
          bullets: [
            'Flags missing mandatory fields before prescription is finalized',
            'Simple drug interaction warnings (configurable)',
            'Allergy checking against patient history',
            'Dosage verification against standard protocols',
            'Follow-up reminders automatically generated'
          ]
        }
      ]
    },
    results: [
      'Reduced documentation time per consultation (5-10 minutes saved per patient)',
      'Higher EMR data completeness and consistency (90%+ complete records)',
      'Smoother workflow for pharmacy and nursing staff',
      'Fewer prescription-related errors and clarification requests',
      'More time available for patient care and examination',
      'Better data for clinical analytics and quality monitoring'
    ],
    integrations: [
      'EMR/EHR platforms: Practo Ray, HealthEngine, Epic, Cerner, custom systems',
      'Master drug databases for medication lookup and validation',
      'Hospital Information Systems (HIS)',
      'Print systems and patient portals',
      'SMS/WhatsApp for prescription delivery'
    ],
    oneLineSummary: 'AI scribe that auto-generates complete, standardized prescriptions from doctor dictation'
  },
  {
    slug: 'healthcare-radiology-intelligence',
    sector: 'Healthcare',
    sectorKey: 'healthcare',
    clientType: 'Hospital or diagnostic chain with CT/MRI/USG/X-ray services',
    businessContext: 'Thousands of radiology reports stored in PACS/RIS as unstructured text, making it nearly impossible to analyze patterns, measure performance, or optimize operations. Management lacks visibility into turnaround times, modality utilization, and opportunities for efficiency improvements.',
    keyProblems: [
      'Reports stored as unstructured free-text, difficult to analyze at scale',
      'Poor visibility into TAT (turnaround time) and modality utilization',
      'Management lacks data to optimize staffing, slots, and equipment usage',
      'No systematic way to identify patterns or quality issues',
      'Revenue leakage due to suboptimal scheduling and capacity planning'
    ],
    solution: {
      overview: 'Ark implemented an NLP-powered intelligence layer that extracts structured data from radiology reports and provides operational dashboards for performance monitoring, efficiency optimization, and quality management.',
      modules: [
        {
          title: 'NLP Layer on Radiology Reports',
          bullets: [
            'Parses reports from PACS/RIS and extracts structured data',
            'Identifies findings, impressions, severity indicators, and affected organs/systems',
            'Normalizes terminology and classifications',
            'Tags reports by modality, body part, and clinical indication',
            'Creates searchable, analyzable database from free-text reports'
          ]
        },
        {
          title: 'Operational Dashboards',
          bullets: [
            'TAT tracking by modality, radiologist, and location',
            'Modality utilization and peak time analysis',
            'Referral trends and referring physician patterns',
            'Revenue per modality and per radiologist',
            'Real-time queue monitoring and workload distribution'
          ]
        },
        {
          title: 'Efficiency & Quality Insights',
          bullets: [
            'Staffing optimization suggestions to reduce TAT and cost per scan',
            'Equipment utilization analysis for capacity planning',
            'Protocol standardization support across radiologists',
            'Quality monitoring and peer comparison metrics',
            'Identification of complex cases requiring senior review'
          ]
        }
      ]
    },
    results: [
      'Improved TAT through data-driven staffing and scheduling',
      'Better utilization of machines and radiology staff (15-20% improvement)',
      'Data-backed decisions for cost optimization and capacity planning',
      'More consistent reporting through protocol standardization',
      'Better decision support for clinicians through structured findings',
      'Revenue optimization through improved throughput and scheduling'
    ],
    integrations: [
      'PACS/RIS systems: GE Centricity, Philips IntelliSpace, Agfa IMPAX, custom systems',
      'Hospital Information System (HIS) for patient demographics and orders',
      'BI and analytics platforms for dashboard delivery',
      'Modality worklists and scheduling systems',
      'Radiology workflow management tools'
    ],
    oneLineSummary: 'NLP extracts insights from radiology reports to optimize TAT, utilization, and quality'
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesBySector(sectorKey: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.sectorKey === sectorKey);
}

