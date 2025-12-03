import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Integrations – Connect Ark to Your Systems | Ark Technologies',
  description: 'Ark integrates seamlessly with your existing CRM, ERP, EMR/EHR, PACS/RIS, and other enterprise systems. No rip-and-replace required.',
  openGraph: {
    title: 'Integrations – Connect Ark to Your Systems',
    description: 'Ark integrates seamlessly with your existing enterprise systems. No rip-and-replace required.',
    type: 'website',
  },
};

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      name: 'Real Estate & CRM',
      color: 'ARK-blue',
      integrations: [
        { name: 'Salesforce', description: 'Sync leads, contacts, and opportunities automatically' },
        { name: 'HubSpot', description: 'Automate lead enrichment and qualification workflows' },
        { name: 'Zoho CRM', description: 'Real-time data sync and workflow automation' },
        { name: 'PropertyBase', description: 'Real estate-specific CRM integration' },
        { name: '99acres', description: 'Lead capture and auto-response from property portals' },
        { name: 'MagicBricks', description: 'Automated lead follow-up and qualification' },
      ],
    },
    {
      name: 'Banking & Wealth',
      color: 'ARK-orange',
      integrations: [
        { name: 'BSE Star MF', description: 'Automated SIP registration and MF transactions' },
        { name: 'NSE MF', description: 'Portfolio data sync and compliance automation' },
        { name: 'CAMS', description: 'KYC document processing and validation' },
        { name: 'Karvy', description: 'Client onboarding automation' },
        { name: 'RTA Systems', description: 'Investor data sync and reporting' },
        { name: 'Core Banking', description: 'Account opening and KYC automation' },
      ],
    },
    {
      name: 'Healthcare',
      color: 'ARK-purple',
      integrations: [
        { name: 'Epic EMR', description: 'Patient data extraction and structured documentation' },
        { name: 'Cerner', description: 'Clinical workflow automation' },
        { name: 'Meditech', description: 'EMR/EHR data integration' },
        { name: 'PACS/RIS', description: 'Radiology report extraction and analytics' },
        { name: 'HL7 FHIR', description: 'Standard healthcare data exchange' },
        { name: 'Practice Management', description: 'Appointment scheduling and patient communication' },
      ],
    },
    {
      name: 'Automotive',
      color: 'ARK-cyan',
      integrations: [
        { name: 'DMS Systems', description: 'Dealer management system integration' },
        { name: 'CarDekho', description: 'Lead capture from automotive portals' },
        { name: 'CarWale', description: 'Automated lead response and test drive booking' },
        { name: 'Service CRM', description: 'Service appointment scheduling and reminders' },
        { name: 'Inventory Management', description: 'Real-time vehicle availability sync' },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ARK-blue-pale via-white to-ARK-cyan-pale">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Integrations', href: '/integrations' }
          ]} />
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              Integrations
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ark works with your existing systems. Connect to your CRM, ERP, EMR/EHR, and industry-specific platforms without ripping out your tech stack.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-ARK-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Fast Setup</h3>
              <p className="text-text-secondary">Deploy in days, not months. Pre-built connectors for major platforms.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ARK-cyan rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Secure & Compliant</h3>
              <p className="text-text-secondary">Enterprise-grade security with SOC 2, HIPAA, and GDPR compliance.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ARK-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Real-Time Sync</h3>
              <p className="text-text-secondary">Bi-directional data sync keeps your systems up to date automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-4 text-center">
            Connect to Your Industry's Tools
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Pre-built integrations for the platforms you already use, plus custom connectors for your unique systems.
          </p>

          <div className="space-y-12">
            {integrationCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-border-light">
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-8 bg-${category.color} rounded-full mr-4`}></div>
                  <h3 className="text-2xl font-bold text-text-primary">{category.name}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.integrations.map((integration, integrationIdx) => (
                    <div key={integrationIdx} className="border border-border-light rounded-lg p-4 hover:border-ARK-blue hover:shadow-md transition-all">
                      <h4 className="font-semibold text-text-primary mb-1">{integration.name}</h4>
                      <p className="text-sm text-text-secondary">{integration.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <div className="bg-gradient-to-br from-ARK-blue to-ARK-cyan rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We build custom connectors for your proprietary systems, legacy databases, and industry-specific platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="bg-white text-ARK-blue hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Talk to Our Team
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                See Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* API & Developer Tools */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">
            API & Developer Tools
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            For teams that want full control, we provide a comprehensive REST API and SDKs.
          </p>

          <div className="bg-white rounded-xl p-8 border border-border-light">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">REST API</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ARK-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Comprehensive API documentation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ARK-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Webhooks for real-time events</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ARK-blue mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Rate limiting and monitoring</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4">SDKs & Libraries</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ARK-cyan mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Python, Node.js, and Java SDKs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ARK-cyan mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sample code and tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-ARK-cyan mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Developer community and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Book a demo to see how Ark integrates with your systems.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-ARK-blue hover:bg-ARK-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            Book a Demo
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

