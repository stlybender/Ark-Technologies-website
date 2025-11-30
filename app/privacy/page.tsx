import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ark Technologies',
  description: 'Learn how Ark Technologies collects, uses, and protects your personal information. Our commitment to data privacy and security.',
  openGraph: {
    title: 'Privacy Policy | Ark Technologies',
    description: 'Learn how Ark Technologies protects your personal information and maintains data privacy.',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-ark-blue-pale via-white to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            Privacy Policy
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
            
            <h2 className="text-3xl font-bold text-text-primary mt-8 mb-4">Introduction</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              At Ark Technologies ("Ark," "we," "us," or "our"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-text-primary mt-8 mb-3">Personal Information</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              <li>Request a demo or contact us</li>
              <li>Subscribe to our newsletter</li>
              <li>Register for an account</li>
              <li>Use our services</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mb-6">
              This information may include your name, email address, company name, phone number, and any other information you choose to provide.
            </p>

            <h3 className="text-2xl font-semibold text-text-primary mt-8 mb-3">Automatically Collected Information</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about your browsing actions and patterns.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process your demo requests and transactions</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Data Security</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Data Retention</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Your Rights</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Third-Party Services</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">International Data Transfers</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. We will take appropriate measures to ensure that your personal information receives an adequate level of protection.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Children's Privacy</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-text-primary mt-12 mb-4">Contact Us</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Email: <a href="mailto:privacy@arktechnologies.ai" className="text-ark-blue hover:underline">privacy@arktechnologies.ai</a>
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Or visit our <a href="/contact" className="text-ark-blue hover:underline">contact page</a>.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

