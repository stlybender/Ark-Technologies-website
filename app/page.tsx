import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectorHighlights from '@/components/SectorHighlights';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ARK Enterprise AI – Operations-First AI for Real Estate, Manufacturing, Banking, Healthcare',
  description: 'Enterprise AI that moves at the speed of your operations. Automate workflows, clean data, and accelerate decisions across Real Estate, Manufacturing & Distribution, Banking, Healthcare, and Automotive.',
  openGraph: {
    title: 'ARK Enterprise AI – Operations-First AI',
    description: 'Enterprise AI that moves at the speed of your operations. Automate workflows across Real Estate, Manufacturing & Distribution, Banking, Healthcare, and Automotive.',
    type: 'website',
    url: 'https://arktechnologies.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARK Enterprise AI – Operations-First AI',
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
            name: 'ARK Technologies',
            description: 'Enterprise AI for operations-first industries',
            url: 'https://ARKtechnologies.ai',
            logo: 'https://ARKtechnologies.ai/ARK-logo.svg',
            sameAs: [
              'https://linkedin.com/company/ARK-technologies',
              'https://twitter.com/ARKtechnologies',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Sales',
              email: 'contact@ARKtechnologies.ltd',
              url: 'https://ARKtechnologies.ai/contact',
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
