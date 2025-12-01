import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contact Us – Book a Demo | Ark Enterprise AI',
  description: 'Get in touch with Ark to see how enterprise AI can transform your operations. Book a demo to learn about our solutions for Real Estate, Banking, Healthcare, and Automotive industries.',
  openGraph: {
    title: 'Contact Us – Book a Demo | Ark Enterprise AI',
    description: 'Get in touch with Ark to see how enterprise AI can transform your operations across Real Estate, Banking, Healthcare, and Automotive.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ark-blue-pale via-white to-ark-cyan-pale">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Contact', href: '/contact' }
          ]} />
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              Let's Transform Your Operations
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Book a demo to see how Ark can help you automate workflows, clean data, and accelerate decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Why Ark?
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-ark-blue rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Fast Implementation</h3>
                    <p className="text-text-secondary">Deploy in weeks, not months, without ripping out existing systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-ark-cyan rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Enterprise-Ready</h3>
                    <p className="text-text-secondary">Built for regulated industries with security and compliance at the core.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-ark-orange rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">Measurable Results</h3>
                    <p className="text-text-secondary">Real outcomes across Real Estate, Banking, Healthcare, and Automotive.</p>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary rounded-xl p-8 border border-border-light">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Industries We Serve
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ark-blue rounded-full mr-3"></span>
                    <a href="/case-studies#real-estate" className="text-text-secondary hover:text-ark-blue transition-colors">
                      Real Estate
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ark-cyan rounded-full mr-3"></span>
                    <a href="/case-studies#automotive" className="text-text-secondary hover:text-ark-cyan transition-colors">
                      Automotive
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ark-orange rounded-full mr-3"></span>
                    <a href="/case-studies#banking-wealth" className="text-text-secondary hover:text-ark-orange transition-colors">
                      Banking & Wealth
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-ark-purple rounded-full mr-3"></span>
                    <a href="/case-studies#healthcare" className="text-text-secondary hover:text-ark-purple transition-colors">
                      Healthcare
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-text-secondary">
                  <span className="font-semibold text-text-primary">Prefer email?</span>
                  <br />
                  Reach us at{' '}
                  <a href="mailto:contact@arktechnologies.ltd" className="text-ark-blue hover:underline">
                    contact@arktechnologies.ltd
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-border-light sticky top-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
