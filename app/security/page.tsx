import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Security & Compliance | Ark Technologies',
  description: 'Learn about Ark\'s enterprise-grade security, compliance certifications, and data protection measures. SOC 2, HIPAA, GDPR compliant.',
  openGraph: {
    title: 'Security & Compliance | Ark Technologies',
    description: 'Enterprise-grade security and compliance. SOC 2, HIPAA, and GDPR compliant.',
    type: 'website',
  },
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ark-blue-pale via-white to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Security', href: '/security' }
          ]} />
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-6">
              Security & Compliance
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade security built for regulated industries. Your data is protected at every layer.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-ark-blue-pale rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-10 h-10 text-ark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary">SOC 2 Type II</h3>
              <p className="text-sm text-text-secondary">Certified</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-ark-purple-pale rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-10 h-10 text-ark-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary">HIPAA</h3>
              <p className="text-sm text-text-secondary">Compliant</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-ark-orange-pale rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-10 h-10 text-ark-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary">GDPR</h3>
              <p className="text-sm text-text-secondary">Compliant</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-ark-cyan-pale rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-10 h-10 text-ark-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-text-primary">ISO 27001</h3>
              <p className="text-sm text-text-secondary">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
            Security at Every Layer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-blue rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Data Encryption</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                All data is encrypted at rest (AES-256) and in transit (TLS 1.3). End-to-end encryption for sensitive data fields.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-blue mt-2 mr-2 flex-shrink-0"></span>
                  <span>Encrypted databases and file storage</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-blue mt-2 mr-2 flex-shrink-0"></span>
                  <span>Key management with AWS KMS</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-blue mt-2 mr-2 flex-shrink-0"></span>
                  <span>Regular key rotation policies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-cyan rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Access Controls</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Role-based access control (RBAC), multi-factor authentication, and single sign-on (SSO) support.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-cyan mt-2 mr-2 flex-shrink-0"></span>
                  <span>Granular permission management</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-cyan mt-2 mr-2 flex-shrink-0"></span>
                  <span>SSO via SAML 2.0 and OAuth 2.0</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-cyan mt-2 mr-2 flex-shrink-0"></span>
                  <span>Mandatory MFA for sensitive operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-orange rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Monitoring & Auditing</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Continuous monitoring, comprehensive audit logs, and real-time security alerts.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-orange mt-2 mr-2 flex-shrink-0"></span>
                  <span>Detailed audit trail for all actions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-orange mt-2 mr-2 flex-shrink-0"></span>
                  <span>Real-time anomaly detection</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-orange mt-2 mr-2 flex-shrink-0"></span>
                  <span>Regular security assessments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-border-light">
              <div className="w-12 h-12 bg-ark-purple rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">Infrastructure Security</h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA.
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-purple mt-2 mr-2 flex-shrink-0"></span>
                  <span>AWS and Azure certified infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-purple mt-2 mr-2 flex-shrink-0"></span>
                  <span>DDoS protection and WAF</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-ark-purple mt-2 mr-2 flex-shrink-0"></span>
                  <span>Regular penetration testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">
            Data Privacy & Compliance
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            We're committed to protecting your data and maintaining compliance with global privacy regulations.
          </p>

          <div className="space-y-6">
            <div className="border border-border-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Data Residency</h3>
              <p className="text-text-secondary leading-relaxed">
                Your data stays in your preferred geographic region. We support data residency requirements for GDPR, HIPAA, and other regulations.
              </p>
            </div>

            <div className="border border-border-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Data Ownership</h3>
              <p className="text-text-secondary leading-relaxed">
                You own your data, always. We never use customer data to train models or for any purpose outside of providing our services to you.
              </p>
            </div>

            <div className="border border-border-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Data Portability</h3>
              <p className="text-text-secondary leading-relaxed">
                Export your data anytime in standard formats. No vendor lock-in. You can migrate away from Ark at any time with full data portability.
              </p>
            </div>

            <div className="border border-border-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Right to be Forgotten</h3>
              <p className="text-text-secondary leading-relaxed">
                Complete data deletion on request. We provide tools to comply with GDPR, CCPA, and other right-to-deletion requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">
            Incident Response
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12">
            We maintain a comprehensive incident response plan with defined SLAs and communication protocols.
          </p>

          <div className="bg-white rounded-xl p-8 border border-border-light">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-ark-blue mb-2">24/7</div>
                <p className="text-text-secondary">Security Monitoring</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-ark-cyan mb-2">&lt; 1hr</div>
                <p className="text-text-secondary">Incident Response Time</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-ark-orange mb-2">99.9%</div>
                <p className="text-text-secondary">Uptime SLA</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border-light">
              <p className="text-text-secondary text-center">
                Report a security issue:{' '}
                <a href="mailto:security@arktechnologies.ai" className="text-ark-blue hover:underline font-semibold">
                  security@arktechnologies.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Questions About Security?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Our security team is happy to answer your questions and provide additional documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-ark-blue hover:bg-ark-blue-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              Contact Security Team
            </a>
            <a 
              href="/privacy" 
              className="border-2 border-ark-blue text-ark-blue hover:bg-ark-blue-pale px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Privacy Policy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

