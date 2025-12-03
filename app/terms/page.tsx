import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Ark Technologies',
  description: 'Read the terms and conditions for using Ark Technologies services. Legal terms, user agreements, and service policies.',
  openGraph: {
    title: 'Terms of Service | Ark Technologies',
    description: 'Read the terms and conditions for using Ark Technologies services.',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-ARK-blue-pale via-white to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-text-secondary">
            Last updated: November 29, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Agreement to Terms</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              By accessing or using Ark Technologies' ("Ark," "we," "us," or "our") website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Use of Services</h2>
            
            <h3 className="text-2xl font-semibold text-text-primary mt-8 mb-3">Eligibility</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              You must be at least 18 years old and have the legal capacity to enter into these Terms. By using our services, you represent and warrant that you meet these requirements.
            </p>

            <h3 className="text-2xl font-semibold text-text-primary mt-8 mb-3">Account Registration</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Acceptable Use</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              <li>Use our services for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
              <li>Collect or harvest any information from our services without permission</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Use our services to send spam or unsolicited communications</li>
            </ul>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Intellectual Property</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Our services and all content, features, and functionality are owned by Ark Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services without our express written permission.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Customer Data</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              You retain all rights to any data you submit to our services ("Customer Data"). You grant us a limited license to use, process, and store Customer Data solely to provide our services to you. We will maintain the confidentiality and security of your Customer Data in accordance with our Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Service Level and Availability</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              While we strive to provide reliable services, we do not guarantee that our services will be uninterrupted, error-free, or completely secure. We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Fees and Payment</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Fees for our services will be specified in your service agreement. You agree to pay all applicable fees and charges. We reserve the right to change our fees with advance notice. Failure to pay may result in suspension or termination of services.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Termination</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use the services will immediately cease. You may also terminate your account at any time by contacting us.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Disclaimers</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Limitation of Liability</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARK TECHNOLOGIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Indemnification</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              You agree to indemnify and hold harmless Ark Technologies and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of your use of our services or violation of these Terms.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Governing Law</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Ark Technologies is registered, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Dispute Resolution</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Any disputes arising out of or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association, except where prohibited by law.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Changes to Terms</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Email: <a href="mailto:contact@arktechnologies.ltd" className="text-ARK-blue hover:underline">contact@arktechnologies.ltd</a>
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Or visit our <a href="/contact" className="text-ARK-blue hover:underline">contact page</a>.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

