import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectorHighlights from '@/components/SectorHighlights';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ark Enterprise AI – Operations-First AI for Real Estate, Banking, Healthcare',
  description: 'Enterprise AI that moves at the speed of your operations. Automate workflows, clean data, and accelerate decisions across Real Estate, Banking, Healthcare, and Automotive.',
  openGraph: {
    title: 'Ark Enterprise AI – Operations-First AI',
    description: 'Enterprise AI that moves at the speed of your operations. Automate workflows across Real Estate, Banking, Healthcare, and Automotive.',
    type: 'website',
    url: 'https://arktechnologies.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ark Enterprise AI – Operations-First AI',
    description: 'Enterprise AI that moves at the speed of your operations.',
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data - Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ark Technologies',
            description: 'Enterprise AI for operations-first industries',
            url: 'https://arktechnologies.ai',
            logo: 'https://arktechnologies.ai/ark-logo.svg',
            sameAs: [
              'https://linkedin.com/company/ark-technologies',
              'https://twitter.com/arktechnologies',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              email: 'hello@arktechnologies.ai',
              url: 'https://arktechnologies.ai/contact',
            },
          }),
        }}
      />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <SectorHighlights />
        <CaseStudies />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
